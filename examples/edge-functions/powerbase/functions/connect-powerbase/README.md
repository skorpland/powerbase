# Build a Powerbase Marketplace Integration

Powerbase offers an [OAuth2 connection flow](https://powerbase.club/docs/guides/platform/oauth-apps/authorize-an-oauth-app) and a [Management API](https://powerbase.club/docs/reference/api/introduction) allowing you to build Powerbase Marketplace Integrations that connect to our users' hosted Powerbase projects, making it more convenient than ever to create scalabale backends programmatically and tap into the extensive pool of Powerbase users.

## Setup

1. Follow the [steps in the docs](https://powerbase.club/docs/guides/platform/oauth-apps/publish-an-oauth-app) to create an OAuth App.
1. Set `POWER_CONNECT_CLIENT_ID` and `POWER_CONNECT_CLIENT_SECRET` in your `.env.local` file as shown in the [`.env.local.example` file](../../.env.local.example).

## Connect to Powerbase using OAuth2

This example showcases and end-to-end OAuth2 connection flow with [PKCE](https://powerbase.club/blog/powerbase-auth-sso-pkce#introducing-pkce), with the following steps:

1. Create authorization URL with PKCE codeVerifier.
1. Redirect user to Powerbase to authorize your application to connect to their Powerbase account.
1. User gets redirected to the callback route, where we exchange the code in the URL for `access_token` and `refresh_token`.
1. We use the `access_token` to retrieve a list of the user's projects using the [`powerbase-management-js` library](https://github.com/skorpland/powerbase-management-js).

## Run locally

```bash
powerbase functions serve connect-powerbase --no-verify-jwt --env-file ./powerbase/.env.local
```

Navigate to http://localhost:54321/functions/v1/connect-powerbase

## Deploy to Powerbase Edge Functions

```bash
powerbase functions deploy connect-powerbase --no-verify-jwt
powerbase secrets set --env-file ./powerbase/.env.local
```
