import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import type { PaymentMethod } from '@stripe/stripe-js'
import { useQueryClient } from '@tanstack/react-query'
import { Edit2, ExternalLink, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseAsString, useQueryStates } from 'nuqs'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

import SpendCapModal from 'components/interfaces/Billing/SpendCapModal'
import Panel from 'components/ui/Panel'
import { useOrganizationCreateMutation } from 'data/organizations/organization-create-mutation'
import {
  invalidateOrganizationsQuery,
  useOrganizationsQuery,
} from 'data/organizations/organizations-query'
import { BASE_PATH, PRICING_TIER_LABELS_ORG } from 'lib/constants'
import { getURL } from 'lib/helpers'
import { useProfile } from 'lib/profile'
import { Button, Input, Listbox, Toggle } from 'ui'

const ORG_KIND_TYPES = {
  PERSONAL: 'Personal',
  EDUCATIONAL: 'Educational',
  STARTUP: 'Startup',
  AGENCY: 'Agency',
  COMPANY: 'Company',
  UNDISCLOSED: 'N/A',
}
const ORG_KIND_DEFAULT = 'PERSONAL'

const ORG_SIZE_TYPES = {
  '1': '1 - 10',
  '10': '10 - 49',
  '50': '50 - 99',
  '100': '100 - 299',
  '300': 'More than 300',
}
const ORG_SIZE_DEFAULT = '1'

interface NewOrgFormProps {
  onPaymentMethodReset: () => void
}

const formSchema = z.object({
  plan: z
    .string()
    .transform((val) => val.toUpperCase())
    .pipe(z.enum(['FREE', 'PRO', 'TEAM', 'ENTERPRISE'] as const)),
  name: z.string().min(1),
  kind: z
    .string()
    .transform((val) => val.toUpperCase())
    .pipe(
      z.enum(['PERSONAL', 'EDUCATIONAL', 'STARTUP', 'AGENCY', 'COMPANY', 'UNDISCLOSED'] as const)
    ),
  size: z.enum(['1', '10', '50', '100', '300'] as const),
  spend_cap: z.boolean(),
})

type FormState = z.infer<typeof formSchema>

/**
 * No org selected yet, create a new one
 * [Joshen] Need to refactor to use Form_Shadcn here
 */
const NewOrgForm = ({ onPaymentMethodReset }: NewOrgFormProps) => {
  const router = useRouter()
  const user = useProfile()
  const { data: organizations, isSuccess } = useOrganizationsQuery()
  const stripe = useStripe()
  const elements = useElements()
  const queryClient = useQueryClient()

  const [formState, setFormState] = useState<FormState>({
    plan: 'FREE',
    name: '',
    kind: ORG_KIND_DEFAULT,
    size: ORG_SIZE_DEFAULT,
    spend_cap: true,
  })

  const [searchParams] = useQueryStates({
    returnTo: parseAsString.withDefault(''),
    auth_id: parseAsString.withDefault(''),
  })

  const updateForm = (key: keyof FormState, value: unknown) => {
    setFormState((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if (!router.isReady) return

    const { name, kind, plan, size, spend_cap } = router.query

    if (typeof name === 'string') updateForm('name', name)
    if (typeof kind === 'string') updateForm('kind', kind)
    if (typeof plan === 'string') updateForm('plan', plan)
    if (typeof size === 'string') updateForm('size', size)
    if (typeof spend_cap === 'string') updateForm('spend_cap', spend_cap === 'true')
  }, [router.isReady])

  useEffect(() => {
    if (!formState.name && organizations?.length === 0 && !user.isLoading) {
      const prefilledOrgName = user.profile?.username ? user.profile.username + `'s Org` : 'My Org'
      updateForm('name', prefilledOrgName)
    }
  }, [isSuccess])

  const [newOrgLoading, setNewOrgLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>()

  const [showSpendCapHelperModal, setShowSpendCapHelperModal] = useState(false)

  const { mutate: createOrganization } = useOrganizationCreateMutation({
    onSuccess: async (org) => {
      await invalidateOrganizationsQuery(queryClient)
      const prefilledProjectName = user.profile?.username
        ? user.profile.username + `'s Project`
        : 'My Project'

      if (searchParams.returnTo && searchParams.auth_id) {
        router.push(`${searchParams.returnTo}?auth_id=${searchParams.auth_id}`, undefined, {
          shallow: false,
        })
      } else {
        router.push(`/new/${org.slug}?projectName=${prefilledProjectName}`)
      }
    },
    onError: () => {
      resetPaymentMethod()
      setNewOrgLoading(false)
    },
  })

  function validateOrgName(name: any) {
    const value = name ? name.trim() : ''
    return value.length >= 1
  }

  async function createOrg(paymentMethodId?: string) {
    const dbTier = formState.plan === 'PRO' && !formState.spend_cap ? 'PAYG' : formState.plan

    createOrganization({
      name: formState.name,
      kind: formState.kind,
      tier: ('tier_' + dbTier.toLowerCase()) as
        | 'tier_payg'
        | 'tier_pro'
        | 'tier_free'
        | 'tier_team'
        | 'tier_enterprise',
      ...(formState.kind == 'COMPANY' ? { size: formState.size } : {}),
      payment_method: paymentMethodId,
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const isOrgNameValid = validateOrgName(formState.name)
    if (!isOrgNameValid) {
      return toast.error('Organization name is empty')
    }

    if (!stripe || !elements) {
      return console.error('Stripe.js has not loaded')
    }
    setNewOrgLoading(true)

    if (formState.plan === 'FREE') {
      await createOrg()
    } else if (!paymentMethod) {
      const { error, setupIntent } = await stripe.confirmSetup({
        elements,
        redirect: 'if_required',
        confirmParams: {
          return_url: `${getURL()}/new`,
          expand: ['payment_method'],
        },
      })

      if (error || !setupIntent.payment_method) {
        toast.error(error?.message ?? ' Failed to save card details')
        setNewOrgLoading(false)
        return
      }

      const paymentMethodFromSetup = setupIntent.payment_method as PaymentMethod

      setPaymentMethod(paymentMethodFromSetup)
      createOrg(paymentMethodFromSetup.id)
    } else {
      createOrg(paymentMethod.id)
    }
  }

  const resetPaymentMethod = () => {
    setPaymentMethod(undefined)
    return onPaymentMethodReset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Panel
        title={
          <div key="panel-title">
            <h4>Create a new organization</h4>
          </div>
        }
        footer={
          <div key="panel-footer" className="flex w-full items-center justify-between">
            <Button
              type="default"
              disabled={newOrgLoading}
              onClick={() => router.push('/projects')}
            >
              Cancel
            </Button>
            <div className="flex items-center space-x-3">
              <p className="text-xs text-foreground-lighter">
                You can rename your organization later
              </p>
              <Button
                htmlType="submit"
                type="primary"
                loading={newOrgLoading}
                disabled={newOrgLoading}
              >
                Create organization
              </Button>
            </div>
          </div>
        }
      >
        <Panel.Content>
          <p className="text-sm">This is your organization within Powerbase.</p>
          <p className="text-sm text-foreground-light">
            For example, you can use the name of your company or department.
          </p>
        </Panel.Content>
        <Panel.Content className="Form section-block--body has-inputs-centered">
          <Input
            autoFocus
            label="Name"
            type="text"
            layout="horizontal"
            placeholder="Organization name"
            descriptionText="What's the name of your company or team?"
            value={formState.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </Panel.Content>
        <Panel.Content className="Form section-block--body has-inputs-centered">
          <Listbox
            label="Type of organization"
            layout="horizontal"
            value={formState.kind}
            onChange={(value) => updateForm('kind', value)}
            descriptionText="What would best describe your organization?"
          >
            {Object.entries(ORG_KIND_TYPES).map(([k, v]) => (
              <Listbox.Option key={k} label={v} value={k}>
                {v}
              </Listbox.Option>
            ))}
          </Listbox>
        </Panel.Content>

        {formState.kind == 'COMPANY' && (
          <Panel.Content className="Form section-block--body has-inputs-centered">
            <Listbox
              label="Company size"
              layout="horizontal"
              value={formState.size}
              onChange={(value) => updateForm('size', value)}
              descriptionText="How many people are in your company?"
            >
              {Object.entries(ORG_SIZE_TYPES).map(([k, v]) => (
                <Listbox.Option key={k} label={v} value={k}>
                  {v}
                </Listbox.Option>
              ))}
            </Listbox>
          </Panel.Content>
        )}

        <Panel.Content>
          <Listbox
            label={
              <div className="flex flex-col gap-2">
                <span>Plan</span>

                <a
                  href="https://powerbase.club/pricing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm flex items-center gap-2 opacity-75 hover:opacity-100 transition"
                >
                  Pricing
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              </div>
            }
            layout="horizontal"
            value={formState.plan}
            onChange={(value) => updateForm('plan', value)}
            descriptionText={
              formState.plan !== 'FREE' ? (
                <p>
                  The plan applies only to this new organization. To upgrade an existing
                  organization,{' '}
                  <Link
                    className="underline"
                    href="/org/_/billing?panel=subscriptionPlan&source=newOrgUpgradeExisting"
                  >
                    click here
                  </Link>
                  .
                </p>
              ) : undefined
            }
          >
            {Object.entries(PRICING_TIER_LABELS_ORG).map(([k, v]) => (
              <Listbox.Option key={k} label={v} value={k}>
                {v}
              </Listbox.Option>
            ))}
          </Listbox>
        </Panel.Content>

        {formState.plan === 'PRO' && (
          <>
            <Panel.Content className="border-b border-panel-border-interior-light dark:border-panel-border-interior-dark">
              <Toggle
                id="spend-cap"
                layout="horizontal"
                label={
                  <div className="flex space-x-4">
                    <span>Spend Cap</span>
                    <HelpCircle
                      size={16}
                      strokeWidth={1.5}
                      className="transition opacity-50 cursor-pointer hover:opacity-100"
                      onClick={() => setShowSpendCapHelperModal(true)}
                    />
                  </div>
                }
                checked={formState.spend_cap}
                onChange={() => updateForm('spend_cap', !formState.spend_cap)}
                descriptionText={
                  <div>
                    <p>
                      With Spend Cap enabled, usage is limited to the plan's quota, with
                      restrictions when limits are exceeded. To scale beyond Pro Plan limits,
                      disable the Spend Cap to pay over-usage.
                    </p>
                  </div>
                }
              />
            </Panel.Content>

            <SpendCapModal
              visible={showSpendCapHelperModal}
              onHide={() => setShowSpendCapHelperModal(false)}
            />
          </>
        )}

        {formState.plan !== 'FREE' && (
          <Panel.Content>
            {paymentMethod?.card !== undefined ? (
              <div key={paymentMethod.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <img
                    alt="Card"
                    src={`${BASE_PATH}/img/payment-methods/${paymentMethod.card.brand
                      .replace(' ', '-')
                      .toLowerCase()}.png`}
                    width="32"
                  />
                  <Input
                    readOnly
                    className="w-64"
                    size="small"
                    value={`•••• •••• •••• ${paymentMethod.card.last4}`}
                  />
                  <p className="text-sm tabular-nums">
                    Expires: {paymentMethod.card.exp_month}/{paymentMethod.card.exp_year}
                  </p>
                </div>
                <div>
                  <Button
                    type="outline"
                    icon={<Edit2 />}
                    onClick={() => resetPaymentMethod()}
                    disabled={newOrgLoading}
                    className="hover:border-muted"
                  />
                </div>
              </div>
            ) : (
              <PaymentElement />
            )}
          </Panel.Content>
        )}
      </Panel>
    </form>
  )
}

export default NewOrgForm
