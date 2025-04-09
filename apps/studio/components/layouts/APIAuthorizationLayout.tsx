import { BASE_PATH } from 'lib/constants'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/legacy/image'
import type { PropsWithChildren } from 'react'
import { Separator } from 'ui'

export interface APIAuthorizationLayoutProps {}

const APIAuthorizationLayout = ({ children }: PropsWithChildren<APIAuthorizationLayoutProps>) => {
  const { resolvedTheme } = useTheme()
  return (
    <>
      <Head>
        <title>Authorize API access | Powerbase</title>
      </Head>
      <main className="flex-grow flex flex-col w-full h-full overflow-y-auto">
        <div>
          <div className="mx-auto px-4 sm:px-6">
            <div className="max-w-xl flex justify-between items-center mx-auto py-4">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div>
                  <span className="sr-only">Powerbase</span>
                  <Image
                    src={
                      resolvedTheme?.includes('dark')
                        ? `${BASE_PATH}/img/powerbase-dark.svg`
                        : `${BASE_PATH}/img/powerbase-light.svg`
                    }
                    alt="Powerbase Logo"
                    height={20}
                    width={105}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col justify-center flex-grow mx-auto w-[90vw] max-w-[600px] space-y-4">
          {children}
        </div>
      </main>
    </>
  )
}

export default APIAuthorizationLayout
