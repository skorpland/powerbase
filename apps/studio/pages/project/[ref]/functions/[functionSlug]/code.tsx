import { common } from '@std/path/posix/common'
import { dirname } from '@std/path/posix/dirname'
import { relative } from '@std/path/posix/relative'

import { AlertCircle, CornerDownLeft, Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { PermissionAction } from '@skorpland/shared-types/out/constants'
import LogoLoader from '@ui/components/LogoLoader'
import { useParams } from 'common'
import { DeployEdgeFunctionWarningModal } from 'components/interfaces/EdgeFunctions/DeployEdgeFunctionWarningModal'
import DefaultLayout from 'components/layouts/DefaultLayout'
import EdgeFunctionDetailsLayout from 'components/layouts/EdgeFunctionsLayout/EdgeFunctionDetailsLayout'
import { ButtonTooltip } from 'components/ui/ButtonTooltip'
import FileExplorerAndEditor from 'components/ui/FileExplorerAndEditor/FileExplorerAndEditor'
import { useEdgeFunctionBodyQuery } from 'data/edge-functions/edge-function-body-query'
import { useEdgeFunctionQuery } from 'data/edge-functions/edge-function-query'
import { useEdgeFunctionDeployMutation } from 'data/edge-functions/edge-functions-deploy-mutation'
import { useSendEventMutation } from 'data/telemetry/send-event-mutation'
import { useCheckPermissions } from 'hooks/misc/useCheckPermissions'
import { useOrgOptedIntoAi } from 'hooks/misc/useOrgOptedIntoAi'
import { useSelectedOrganization } from 'hooks/misc/useSelectedOrganization'
import { useSelectedProject } from 'hooks/misc/useSelectedProject'
import { useFlag } from 'hooks/ui/useFlag'
import { BASE_PATH, IS_PLATFORM } from 'lib/constants'

const CodePage = () => {
  const router = useRouter()
  const { ref, functionSlug } = useParams()
  const project = useSelectedProject()
  const isOptedInToAI = useOrgOptedIntoAi()
  const includeSchemaMetadata = isOptedInToAI || !IS_PLATFORM
  const edgeFunctionCreate = useFlag('edgeFunctionCreate')
  const { mutate: sendEvent } = useSendEventMutation()
  const org = useSelectedOrganization()
  const [showDeployWarning, setShowDeployWarning] = useState(false)

  const canDeployFunction = useCheckPermissions(PermissionAction.FUNCTIONS_WRITE, '*')

  const { data: selectedFunction } = useEdgeFunctionQuery({ projectRef: ref, slug: functionSlug })
  const {
    data: functionFiles,
    isLoading: isLoadingFiles,
    isError: isErrorLoadingFiles,
    isSuccess: isSuccessLoadingFiles,
    error: filesError,
  } = useEdgeFunctionBodyQuery(
    { projectRef: ref, slug: functionSlug },
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    }
  )

  const [files, setFiles] = useState<
    { id: number; name: string; content: string; selected?: boolean }[]
  >([])

  const { mutate: deployFunction, isLoading: isDeploying } = useEdgeFunctionDeployMutation({
    onSuccess: () => {
      toast.success('Successfully updated edge function')
      setShowDeployWarning(false)
    },
  })

  const onUpdate = async () => {
    if (isDeploying || !ref || !functionSlug || !selectedFunction || files.length === 0) return

    try {
      const newEntrypointPath = selectedFunction.entrypoint_path?.split('/').pop()
      const newImportMapPath = selectedFunction.import_map_path?.split('/').pop()

      const fallbackEntrypointPath = () => {
        const jsFiles = files.filter(({ name }) => name.endsWith('.js') || name.endsWith('.ts'))
        if (jsFiles.length === 1) return jsFiles[0].name
        if (jsFiles.length) {
          const regex = /^.*?(index|main).*$/i
          const matchingFile = jsFiles.find(({ name }) => regex.test(name))
          return matchingFile ? matchingFile.name : jsFiles[0].name
        }
        return 'index.ts'
      }

      const fallbackImportMapPath = () => {
        const regex = /^.*?(deno|import_map).json*$/i
        return files.find(({ name }) => regex.test(name))?.name
      }

      deployFunction({
        projectRef: ref,
        slug: selectedFunction.slug,
        metadata: {
          name: selectedFunction.name,
          verify_jwt: selectedFunction.verify_jwt,
          entrypoint_path: files.some(({ name }) => name === newEntrypointPath)
            ? (newEntrypointPath as string)
            : fallbackEntrypointPath(),
          import_map_path: files.some(({ name }) => name === newImportMapPath)
            ? newImportMapPath
            : fallbackImportMapPath(),
        },
        files: files.map(({ name, content }) => ({ name, content })),
      })
    } catch (error) {
      toast.error(
        `Failed to update function: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  function getBasePath(entrypoint: string | undefined): string {
    if (!entrypoint) return '/'
    try {
      return dirname(new URL(entrypoint).pathname)
    } catch (e) {
      console.error('Failed to parse entrypoint', entrypoint)
      return '/'
    }
  }

  const handleDeployClick = () => {
    if (files.length === 0 || isLoadingFiles) return
    setShowDeployWarning(true)
    sendEvent({
      action: 'edge_function_deploy_updates_button_clicked',
      groups: { project: ref ?? 'Unknown', organization: org?.slug ?? 'Unknown' },
    })
  }

  const handleDeployConfirm = () => {
    sendEvent({
      action: 'edge_function_deploy_updates_confirm_clicked',
      groups: { project: ref ?? 'Unknown', organization: org?.slug ?? 'Unknown' },
    })
    onUpdate()
  }

  useEffect(() => {
    if (edgeFunctionCreate !== undefined && !edgeFunctionCreate) {
      router.push(`/project/${ref}/functions`)
    }
  }, [edgeFunctionCreate])

  useEffect(() => {
    if (selectedFunction?.entrypoint_path && functionFiles) {
      const base_path = getBasePath(selectedFunction.entrypoint_path)
      const filesWithRelPath = functionFiles
        .filter((file: { name: string; content: string }) => !!file.content.length)
        .map((file: { name: string; content: string }) => {
          try {
            const common_path = common([base_path, file.name])
            if (common_path === '' || common_path === '/tmp/') return file
            file.name = relative(base_path, file.name)
            return file
          } catch (e) {
            console.error(e)
            return file
          }
        })

      setFiles((prev) =>
        filesWithRelPath.map((file, index) => {
          const prevState = prev.find((x) => x.name === file.name)
          return {
            id: index + 1,
            name: file.name,
            content: file.content,
            selected: prevState?.selected ?? index === 0,
          }
        })
      )
    }
  }, [functionFiles])

  return (
    <div className="flex flex-col h-full">
      {isLoadingFiles && (
        <div className="flex flex-col items-center justify-center h-full bg-surface-200">
          <LogoLoader />
        </div>
      )}

      {isErrorLoadingFiles && (
        <div className="flex flex-col items-center justify-center h-full bg-surface-200">
          <div className="flex flex-col items-center text-center gap-2 max-w-md">
            <AlertCircle size={24} strokeWidth={1.5} className="text-amber-900" />
            <h3 className="text-md mt-4">Failed to load function code</h3>
            <p className="text-sm text-foreground-light">
              {filesError?.message ||
                'There was an error loading the function code. The format may be invalid or the function may be corrupted.'}
            </p>
          </div>
        </div>
      )}

      {isSuccessLoadingFiles && (
        <>
          <FileExplorerAndEditor
            files={files}
            onFilesChange={setFiles}
            aiEndpoint={`${BASE_PATH}/api/ai/edge-function/complete`}
            aiMetadata={{
              projectRef: project?.ref,
              connectionString: project?.connectionString,
              includeSchemaMetadata,
            }}
          />
          <div className="flex items-center bg-background-muted justify-end p-4 border-t bg-surface-100 shrink-0">
            <ButtonTooltip
              loading={isDeploying}
              size="medium"
              disabled={!canDeployFunction || files.length === 0 || isLoadingFiles}
              onClick={handleDeployClick}
              iconRight={
                isDeploying ? (
                  <Loader2 className="animate-spin" size={10} strokeWidth={1.5} />
                ) : (
                  <div className="flex items-center space-x-1">
                    <CornerDownLeft size={10} strokeWidth={1.5} />
                  </div>
                )
              }
              tooltip={{
                content: {
                  side: 'top',
                  text: !canDeployFunction
                    ? 'You need additional permissions to update edge functions'
                    : undefined,
                },
              }}
            >
              Deploy updates
            </ButtonTooltip>
          </div>
        </>
      )}

      <DeployEdgeFunctionWarningModal
        visible={showDeployWarning}
        onCancel={() => setShowDeployWarning(false)}
        onConfirm={handleDeployConfirm}
      />
    </div>
  )
}

CodePage.getLayout = (page: React.ReactNode) => (
  <DefaultLayout>
    <EdgeFunctionDetailsLayout>{page}</EdgeFunctionDetailsLayout>
  </DefaultLayout>
)

export default CodePage
