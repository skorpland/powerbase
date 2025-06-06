import React from 'https://esm.sh/react@18.2.0?deno-std=0.140.0'
import { ImageResponse } from 'https://deno.land/x/og_edge@0.0.4/mod.ts'
import { createClient } from 'jsr:@skorpland/powerbase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const POWERBASE_URL =
  Deno.env.get('POWERBASE_URL') !== 'http://kong:8000'
    ? Deno.env.get('POWERBASE_URL')
    : 'http://host.docker.internal:54321'

const STORAGE_URL = `${POWERBASE_URL}/storage/v1/object/public/images/launch-week/lw12`

// Load custom font
const FONT_URL = `${STORAGE_URL}/assets/font/CircularStd-Book.otf`
const MONO_FONT_URL = `${STORAGE_URL}/assets/font/SourceCodePro-Regular.ttf`
const font = fetch(new URL(FONT_URL, import.meta.url)).then((res) => res.arrayBuffer())
const mono_font = fetch(new URL(MONO_FONT_URL, import.meta.url)).then((res) => res.arrayBuffer())
// const BUCKET_FOLDER_VERSION = 'v1'

const LW_TABLE = 'tickets'
const LW_MATERIALIZED_VIEW = 'tickets_view'

const STYLING_CONGIF = {
  regular: {
    BACKGROUND: '#060809',
    FOREGROUND: '#F8F9FA',
    FOREGROUND_LIGHT: '#8B9092',
    TICKET_BORDER: '#292929',
    TICKET_FOREGROUND: '#11181C',
    TICKET_BACKGROUND: '#1F1F1F',
    TICKET_BACKGROUND_CODE: '#141414',
    TICKET_FOREGROUND_LIGHT: '#888888',
    BORDER: '#adadad',
    CODE_LINE_NUMBER: '#4D4D4D',
    CODE_BASE: '#ddd',
    CODE_HIGHLIGHT: '#292929',
    CODE_FUNCTION: '#ddd',
    CODE_VARIABLE: '#ddd',
    CODE_METHOD: '#ddd',
    CODE_EXPRESSION: '#FFF',
    CODE_STRING: '#3ECF8E',
    CODE_NUMBER: '#3ECF8E',
    CODE_NULL: '#569cd6',
  },
  platinum: {
    BACKGROUND: '#060809',
    FOREGROUND: '#F8F9FA',
    FOREGROUND_LIGHT: '#8B9092',
    TICKET_BORDER: '#B2B2B2',
    TICKET_BACKGROUND: '#FFFFFF',
    TICKET_BACKGROUND_CODE: '#F8F9FA',
    TICKET_FOREGROUND: '#171717',
    TICKET_FOREGROUND_LIGHT: '#707070',
    BORDER: '#B2B2B2',
    CODE_LINE_NUMBER: '#707070',
    CODE_BASE: '#171717',
    CODE_HIGHLIGHT: '#E6E6E6',
    CODE_FUNCTION: '#171717',
    CODE_VARIABLE: '#171717',
    CODE_METHOD: '#171717',
    CODE_EXPRESSION: '#171717',
    CODE_STRING: '#00bb68',
    CODE_NUMBER: '#00bb68',
    CODE_NULL: '#171717',
  },
  secret: {
    BACKGROUND: '#0F2BE6',
    FOREGROUND: '#EDEDED',
    FOREGROUND_LIGHT: '#EDEDED',
    TICKET_BORDER: '#3059F2',
    TICKET_BACKGROUND: '#0F2BE6',
    TICKET_BACKGROUND_CODE: '#0000B4',
    TICKET_FOREGROUND: '#EDEDED',
    TICKET_FOREGROUND_LIGHT: '#EDEDED',
    BORDER: '#3059F2',
    CODE_LINE_NUMBER: '#5F7BF6',
    CODE_BASE: '#EDEDED',
    CODE_HIGHLIGHT: '#3059F2',
    CODE_FUNCTION: '#EDEDED',
    CODE_VARIABLE: '#EDEDED',
    CODE_METHOD: '#EDEDED',
    CODE_EXPRESSION: '#EDEDED',
    CODE_STRING: '#48FF1A',
    CODE_NUMBER: '#48FF1A',
    CODE_NULL: '#EDEDED',
  },
}

export async function handler(req: Request) {
  const url = new URL(req.url)
  const username = url.searchParams.get('username') ?? url.searchParams.get('amp;username')
  const assumePlatinum = url.searchParams.get('platinum') ?? url.searchParams.get('amp;platinum')
  const userAgent = req.headers.get('user-agent')

  console.log('force deploy')

  try {
    if (!username) throw new Error('missing username param')

    const powerbaseAdminClient = createClient(
      // Powerbase API URL - env var exported by default when deployed.
      Deno.env.get('LIVE_POWERBASE_URL') ?? 'http://host.docker.internal:54321',
      // Powerbase API SERVICE ROLE KEY - env var exported by default when deployed.
      Deno.env.get('POWERBASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Track social shares
    if (userAgent?.toLocaleLowerCase().includes('twitter')) {
      await powerbaseAdminClient
        .from(LW_TABLE)
        .update({ shared_on_twitter: 'now' })
        .eq('launch_week', 'lw12')
        .eq('username', username)
        .is('shared_on_twitter', null)
    } else if (userAgent?.toLocaleLowerCase().includes('linkedin')) {
      await powerbaseAdminClient
        .from(LW_TABLE)
        .update({ shared_on_linkedin: 'now' })
        .eq('launch_week', 'lw12')
        .eq('username', username)
        .is('shared_on_linkedin', null)
    }

    // Get ticket data
    const { data: user, error } = await powerbaseAdminClient
      .from(LW_MATERIALIZED_VIEW)
      .select(
        'id, name, ticket_number, shared_on_twitter, shared_on_linkedin, platinum, secret, role, company, location'
      )
      .eq('launch_week', 'lw12')
      .eq('username', username)
      .maybeSingle()

    if (error) console.log('fetch error', error.message)
    if (!user) throw new Error(error?.message ?? 'user not found')

    const {
      name,
      ticket_number: ticketNumber,
      secret,
      platinum: isPlatinum,
      shared_on_twitter: sharedOnTwitter,
      shared_on_linkedin: sharedOnLinkedIn,
    } = user

    const platinum = isPlatinum ?? (!!sharedOnTwitter && !!sharedOnLinkedIn) ?? false
    if (assumePlatinum && !platinum)
      return await fetch(`${STORAGE_URL}/assets/platinum_no_meme.jpg`)

    // Generate image and upload to storage.
    const ticketType = secret ? 'secret' : platinum ? 'platinum' : 'regular'

    const fontData = await font
    const monoFontData = await mono_font
    const OG_WIDTH = 1200
    const OG_HEIGHT = 628
    const OG_PADDING_X = 60
    const OG_PADDING_Y = 60
    const TICKET_WIDTH = 550
    const TICKET_RATIO = 396 / 613
    const TICKET_HEIGHT = TICKET_WIDTH / TICKET_RATIO
    const TICKET_POS_TOP = OG_PADDING_Y
    const TICKET_POS_LEFT = 540
    const LOGO_WIDTH = 40
    const LOGO_RATIO = 436 / 449
    const DISPLAY_NAME = name || username
    const FIRST_NAME = DISPLAY_NAME?.split(' ')[0]

    const BACKGROUND = {
      regular: {
        LOGO: `${STORAGE_URL}/assets/skorpland/powerbase-logo-icon.png`,
        BACKGROUND_GRID: `${STORAGE_URL}/assets/bg-dark.png?t=2024-07-26T11%3A13%3A36.534Z`,
      },
      platinum: {
        LOGO: `${STORAGE_URL}/assets/skorpland/powerbase-logo-icon.png`,
        BACKGROUND_GRID: `${STORAGE_URL}/assets/bg-dark.png?t=2024-07-26T11%3A13%3A36.534Z`,
      },
      secret: {
        LOGO: `${STORAGE_URL}/assets/skorpland/powerbase-logo-icon-white.png`,
        BACKGROUND_GRID: `${STORAGE_URL}/assets/bg-light.png`,
      },
    }

    const lineNumberStyle = {
      paddingLeft: 24,
      width: 46,
      color: STYLING_CONGIF[ticketType].CODE_LINE_NUMBER,
    }

    const generatedTicketImage = new ImageResponse(
      (
        <>
          <div
            style={{
              width: '1200px',
              height: '628px',
              position: 'relative',
              fontFamily: '"Circular"',
              color: STYLING_CONGIF[ticketType].FOREGROUND,
              backgroundColor: STYLING_CONGIF[ticketType].BACKGROUND,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '60px',
              justifyContent: 'space-between',
            }}
          >
            {/* Background  */}
            <img
              width="1202"
              height="632"
              style={{
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                bottom: '-1px',
                right: '-1px',
                zIndex: '0',
                opacity: ticketType === 'secret' ? 0.2 : 0.5,
                background: STYLING_CONGIF[ticketType].BACKGROUND,
                backgroundSize: 'cover',
              }}
              src={BACKGROUND[ticketType].BACKGROUND_GRID}
            />
            {/* Ticket  */}
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                zIndex: '1',
                top: TICKET_POS_TOP,
                left: TICKET_POS_LEFT,
                width: TICKET_WIDTH,
                height: TICKET_HEIGHT,
                margin: 0,
                borderRadius: '20px',
                fontSize: 18,
                background: STYLING_CONGIF[ticketType].TICKET_BACKGROUND_CODE,
                color: STYLING_CONGIF[ticketType].TICKET_FOREGROUND,
                border: `1px solid ${STYLING_CONGIF[ticketType].TICKET_BORDER}`,
                boxShadow: '0px 0px 45px rgba(0, 0, 0, 0.15)',
              }}
              tw="flex flex-col overflow-hidden"
            >
              <span tw="uppercase p-6" style={{ fontSize: 18, letterSpacing: 2 }}>
                Launch Week 12
                <span
                  tw="pl-2"
                  style={{ color: STYLING_CONGIF[ticketType].TICKET_FOREGROUND_LIGHT }}
                >
                  Ticket
                </span>
              </span>
              {/* Request code snippet */}
              <div
                style={{ fontFamily: '"SourceCodePro"', lineHeight: '130%' }}
                tw="p-6 pt-0 flex flex-row w-full"
              >
                <div
                  tw="w-6 flex flex-col"
                  style={{ color: STYLING_CONGIF[ticketType].CODE_LINE_NUMBER }}
                >
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                <div
                  tw="flex flex-col"
                  style={{
                    color: STYLING_CONGIF[ticketType].CODE_BASE,
                  }}
                >
                  <span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_EXPRESSION }}>await</span>{' '}
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_FUNCTION }} tw="ml-3">
                      powerbase
                    </span>
                  </span>
                  <span tw="pl-4">
                    <span>.</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_METHOD }}>from</span>
                    <span>&#40;</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>'tickets'</span>
                    <span>&#41;</span>
                  </span>
                  <span tw="pl-4">
                    <span>.</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_METHOD }}>select</span>
                    <span>&#40;</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>'*'</span>
                    <span>&#41;</span>
                  </span>
                  <span tw="pl-4">
                    <span>.</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_METHOD }}>eq</span>
                    <span>&#40;</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                      'username'
                    </span>
                    <span tw="mr-3">,</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_NUMBER }}>
                      {username}
                    </span>
                    <span>&#41;</span>
                  </span>
                  <span tw="pl-4">
                    <span>.</span>
                    <span style={{ color: STYLING_CONGIF[ticketType].CODE_METHOD }}>single</span>
                    <span>&#40;</span>
                    <span>&#41;</span>
                  </span>
                </div>
              </div>
              {/* Response Json */}
              <div
                style={{
                  fontFamily: '"SourceCodePro"',
                  lineHeight: '130%',
                  background: STYLING_CONGIF[ticketType].TICKET_BACKGROUND,
                  borderTop: `1px solid ${STYLING_CONGIF[ticketType].TICKET_BORDER}`,
                }}
                tw="py-6 flex flex-col flex-grow w-full"
              >
                <div
                  tw="flex px-6 mb-4 uppercase"
                  style={{
                    lineHeight: '100%',
                    fontSize: 14,
                    color: STYLING_CONGIF[ticketType].TICKET_FOREGROUND_LIGHT,
                  }}
                >
                  TICKET RESPONSE
                </div>
                <div
                  tw="flex flex-col w-full"
                  style={{
                    color: STYLING_CONGIF[ticketType].CODE_BASE,
                  }}
                >
                  <div tw="flex">
                    <span style={lineNumberStyle}>1</span>
                    <span>&#123;</span>
                  </div>
                  <div tw="flex">
                    <span style={lineNumberStyle}>2</span>
                    <span>
                      <span tw="ml-6 mr-2" style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}>
                        data:
                      </span>
                      <span>&#123;</span>
                    </span>
                  </div>
                  <div
                    tw="flex flex-col w-full"
                    style={{
                      background: STYLING_CONGIF[ticketType].CODE_HIGHLIGHT,
                      borderLeft: `1px solid ${STYLING_CONGIF[ticketType].CODE_BASE}`,
                    }}
                  >
                    <div tw="flex">
                      <span style={lineNumberStyle}>3</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          name
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{name}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                    <div tw="flex">
                      <span style={lineNumberStyle}>4</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          username
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{username}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                    <div tw="flex">
                      <span style={lineNumberStyle}>6</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          ticket_number
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{ticketNumber}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                    <div tw="flex">
                      <span style={lineNumberStyle}>7</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          role
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{user.role}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                    <div tw="flex">
                      <span style={lineNumberStyle}>8</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          company
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{user.company}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                    <div tw="flex">
                      <span style={lineNumberStyle}>9</span>
                      <span>
                        <span
                          tw="ml-12 mr-2"
                          style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}
                        >
                          location
                        </span>
                        <span>:</span>
                        <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_STRING }}>
                          "{user.location}"
                        </span>
                        <span>,</span>
                      </span>
                    </div>
                  </div>
                  <div tw="flex">
                    <span style={lineNumberStyle}>10</span>
                    <span tw="ml-6">&#125;,</span>
                  </div>
                  <div tw="flex">
                    <span style={lineNumberStyle}>11</span>
                    <span>
                      <span tw="ml-6" style={{ color: STYLING_CONGIF[ticketType].CODE_BASE }}>
                        error
                      </span>
                      <span>:</span>
                      <span tw="ml-2" style={{ color: STYLING_CONGIF[ticketType].CODE_NULL }}>
                        null
                      </span>
                    </span>
                  </div>
                  <div tw="flex">
                    <span style={lineNumberStyle}>12</span>
                    <span tw="ml-2">&#125;</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                top: OG_PADDING_Y,
                left: OG_PADDING_X,
                bottom: OG_PADDING_Y,
                display: 'flex',
                flexDirection: 'column',
                width: TICKET_POS_LEFT - OG_PADDING_X,
                alignItems: 'flex-start',
                justifyContent: 'center',
                letterSpacing: '0.15rem',
                lineHeight: '110%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: 10,
                  left: 0,
                  marginBottom: '40',
                }}
              >
                <img
                  src={BACKGROUND[ticketType].LOGO}
                  width={LOGO_WIDTH}
                  height={LOGO_WIDTH / LOGO_RATIO}
                />
              </div>

              <p
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 60,
                  fontSize: 38,
                  letterSpacing: '0',
                  color: STYLING_CONGIF[ticketType].FOREGROUND_LIGHT,
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    margin: 0,
                    color: STYLING_CONGIF[ticketType].FOREGROUND_LIGHT,
                  }}
                >
                  Join {FIRST_NAME} for
                </span>
                <span
                  style={{
                    display: 'flex',
                    margin: 0,
                    color: STYLING_CONGIF[ticketType].FOREGROUND,
                  }}
                >
                  Launch Week 12
                </span>
              </p>
              <p
                style={{
                  margin: '0',
                  fontFamily: '"SourceCodePro"',
                  fontSize: 26,
                  textTransform: 'uppercase',
                  color: STYLING_CONGIF[ticketType].FOREGROUND_LIGHT,
                }}
              >
                August 12-16 / 7AM PT
              </p>
            </div>
          </div>
        </>
      ),
      {
        width: OG_WIDTH,
        height: OG_HEIGHT,
        fonts: [
          {
            name: 'Circular',
            data: fontData,
            style: 'normal',
          },
          {
            name: 'SourceCodePro',
            data: monoFontData,
            style: 'normal',
          },
        ],
        headers: {
          'content-type': 'image/png',
          'cache-control': 'public, max-age=31536000, s-maxage=31536000, no-transform, immutable',
          'cdn-cache-control': 'max-age=31536000',
        },
      }
    )

    // [Note] Uncomment only for local testing to return the image directly and skip storage upload.
    // return await generatedTicketImage

    // Upload image to storage.
    const { error: storageError } = await powerbaseAdminClient.storage
      .from('images')
      .upload(`launch-week/lw12/og/${ticketType}/${username}.png`, generatedTicketImage.body!, {
        contentType: 'image/png',
        // cacheControl: `${60 * 60 * 24 * 7}`,
        cacheControl: `0`,
        // Update cached og image, people might need to update info
        upsert: true,
      })

    if (storageError) throw new Error(`storageError: ${storageError.message}`)

    const NEW_TIMESTAMP = new Date()

    return await fetch(`${STORAGE_URL}/og/${ticketType}/${username}.png?t=${NEW_TIMESTAMP}`)
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}
