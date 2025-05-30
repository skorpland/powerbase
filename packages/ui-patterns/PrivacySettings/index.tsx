'use client'

import { handleResetTelemetry, LOCAL_STORAGE_KEYS } from 'common'
import Link from 'next/link'
import { PropsWithChildren, useEffect, useState } from 'react'
import { Modal, Toggle } from 'ui'
import { useConsentValue } from '../shared/consent'

export const PrivacySettings = ({
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  const [isOpen, setIsOpen] = useState(false)
  const { hasAccepted, handleConsent } = useConsentValue(LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT)
  const [telemetryValue, setTelemetryValue] = useState(hasAccepted)

  // Every time the modal opens, sync state with localStorage
  useEffect(() => {
    setTelemetryValue(localStorage?.getItem(LOCAL_STORAGE_KEYS.TELEMETRY_CONSENT) === 'true')
  }, [isOpen])

  const handleConfirmPreferences = () => {
    handleConsent && handleConsent(telemetryValue ? 'true' : 'false')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTelemetryValue(hasAccepted)
    setIsOpen(false)
  }

  const handleOptOutTelemetry = async () => {
    // remove telemetry data from cookies
    document.cookie = `${LOCAL_STORAGE_KEYS.TELEMETRY_DATA}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    handleResetTelemetry(process.env.NEXT_PUBLIC_API_URL!)
  }

  return (
    <>
      <button {...props} onClick={() => setIsOpen(true)}>
        {children}
      </button>

      <Modal
        closable
        visible={isOpen}
        alignFooter="right"
        onCancel={handleCancel}
        onConfirm={handleConfirmPreferences}
        header="Privacy Settings"
        onInteractOutside={(e) => {
          // Only hide menu when clicking outside, not focusing outside
          // Prevents Firefox dropdown issue that immediately closes menu after opening
          if (e.type === 'dismissableLayer.pointerDownOutside') {
            setIsOpen(!isOpen)
          }
        }}
        className="max-w-[calc(100vw-4rem)]"
        size="medium"
      >
        <div className="pt-6 pb-3 space-y-4">
          <Modal.Content>
            <Toggle
              checked={true}
              disabled
              onChange={() => null}
              label="Strictly necessary cookies"
              descriptionText={
                <>
                  These cookies are necessary for Powerbase to function.{' '}
                  <Link
                    href="https://powerbase.club/privacy#8-cookies-and-similar-technologies-used-on-our-european-services"
                    className="underline"
                  >
                    Learn more
                  </Link>
                </>
              }
            />
          </Modal.Content>
          <Modal.Separator />
          <Modal.Content>
            <Toggle
              checked={telemetryValue}
              onChange={() => {
                if (telemetryValue) {
                  // [Joshen] Will be toggle off, so trigger reset event
                  handleOptOutTelemetry()
                }
                setTelemetryValue((prev) => !prev)
              }}
              label="Telemetry"
              descriptionText={
                <>
                  By opting in to sending telemetry data, Powerbase can improve the overall user
                  experience.{' '}
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline"
                    href="https://powerbase.club/privacy#8-cookies-and-similar-technologies-used-on-our-european-services"
                  >
                    Learn more
                  </a>
                </>
              }
            />
          </Modal.Content>
        </div>
      </Modal>
    </>
  )
}
