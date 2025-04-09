import { PropsWithChildren } from 'react'
import InlineSVG from 'react-inlinesvg'

import { useParams } from 'common'
import { BASE_PATH } from 'lib/constants'
import IntegrationWindowLayout from './IntegrationWindowLayout'
import { useIntegrationInstallationSnapshot } from 'state/integration-installation'

const VERCEL_ICON = (
  <div className="bg-black shadow rounded p-1 w-8 h-8 flex justify-center items-center text-white">
    <InlineSVG src={`${BASE_PATH}/img/icons/vercel-icon.svg`} title="Vercel Icon" className="w-4" />
  </div>
)

const VercelIntegrationWindowLayout = ({ children }: PropsWithChildren<{}>) => {
  const { externalId } = useParams()

  const snapshot = useIntegrationInstallationSnapshot()

  const title = externalId
    ? 'Powerbase + Vercel Deploy Button'
    : 'Powerbase + Vercel Integration Marketplace Connector'

  return (
    <IntegrationWindowLayout
      title={title}
      integrationIcon={VERCEL_ICON}
      loading={snapshot.loading}
      docsHref="https://powerbase.club/partners/integrations/vercel"
    >
      {children}
    </IntegrationWindowLayout>
  )
}

export default VercelIntegrationWindowLayout
