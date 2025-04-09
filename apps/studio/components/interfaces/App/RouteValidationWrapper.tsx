import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import { toast } from 'sonner'

import { useIsLoggedIn, useParams } from 'common'
import { useOrganizationsQuery } from 'data/organizations/organizations-query'
import { useProjectsQuery } from 'data/projects/projects-query'
import useLatest from 'hooks/misc/useLatest'
import { useLocalStorageQuery } from 'hooks/misc/useLocalStorage'
import { DEFAULT_HOME, IS_PLATFORM, LOCAL_STORAGE_KEYS } from 'lib/constants'
import { useAppStateSnapshot } from 'state/app-state'

// Ideally these could all be within a _middleware when we use Next 12
const RouteValidationWrapper = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const { ref, slug, id } = useParams()

  const isLoggedIn = useIsLoggedIn()
  const snap = useAppStateSnapshot()

  const [dashboardHistory, _, { isSuccess: isSuccessStorage }] = useLocalStorageQuery(
    LOCAL_STORAGE_KEYS.DASHBOARD_HISTORY(ref ?? ''),
    { editor: undefined, sql: undefined }
  )

  /**
   * Array of urls/routes that should be ignored
   */
  const excemptUrls: string[] = [
    // project creation route, allows the page to self determine it's own route, it will redirect to the first org
    // or prompt the user to create an organaization
    // this is used by database.dev, usually as /new/new-project
    '/new/[slug]',
    '/join',
  ]

  /**
   * Map through all the urls that are excluded
   * from route validation check
   *
   * @returns a boolean
   */
  function isExceptUrl() {
    return excemptUrls.includes(router?.pathname)
  }

  const { data: organizations, isSuccess: orgsInitialized } = useOrganizationsQuery({
    enabled: isLoggedIn,
  })
  const organizationsRef = useLatest(organizations)

  useEffect(() => {
    // check if current route is excempted from route validation check
    if (isExceptUrl() || !isLoggedIn) return

    if (orgsInitialized && slug) {
      // Check validity of organization that user is trying to access
      const organizations = organizationsRef.current ?? []
      const isValidOrg = organizations.some((org) => org.slug === slug)

      if (!isValidOrg) {
        toast.error('This organization does not exist')
        router.push(DEFAULT_HOME)
        return
      }
    }
  }, [orgsInitialized])

  const { data: projects, isSuccess: projectsInitialized } = useProjectsQuery({
    enabled: isLoggedIn,
  })
  const projectsRef = useLatest(projects)

  useEffect(() => {
    // check if current route is excempted from route validation check
    if (isExceptUrl() || !isLoggedIn) return

    if (projectsInitialized && ref) {
      // Check validity of project that the user is trying to access
      const projects = projectsRef.current ?? []
      const isValidProject = projects.some((project) => project.ref === ref)
      const isValidBranch = IS_PLATFORM
        ? projects.some((project) => project.preview_branch_refs.includes(ref))
        : true

      if (!isValidProject && !isValidBranch) {
        toast.error('This project does not exist')
        router.push(DEFAULT_HOME)
        return
      }
    }
  }, [projectsInitialized])

  useEffect(() => {
    if (ref !== undefined && id !== undefined) {
      if (router.pathname.endsWith('/sql/[id]') && id !== 'new') {
        snap.setDashboardHistory(ref, 'sql', id)
      }
      if (router.pathname.endsWith('/editor/[id]')) {
        snap.setDashboardHistory(ref, 'editor', id)
      }
    }
  }, [ref, id])

  useEffect(() => {
    // Load dashboard history into app state
    if (isSuccessStorage && ref) {
      snap.setDashboardHistory(ref, 'editor', dashboardHistory.editor)
      snap.setDashboardHistory(ref, 'sql', dashboardHistory.sql)
    }
  }, [isSuccessStorage, ref])

  return <>{children}</>
}

export default RouteValidationWrapper
