# stripe-webhooks

Also check out our full Stripe Payments examples for [React Native (Expo)](https://github.com/skorpland/expo-stripe-payments-with-powerbase-functions) and [Flutter](https://github.com/skorpland/flutter-stripe-payments-with-powerbase-functions).

## Setup env vars

- `cp powerbase/.env.local.example powerbase/.env.local`

## Test locally

- Terminal 1:
  - `powerbase functions serve --no-verify-jwt --env-file ./powerbase/.env.local`
- Terminal 2:
  - `stripe listen --forward-to localhost:54321/functions/v1/`
- Terminal 3 (optional):
  - `stripe trigger payment_intent.succeeded`

## Deploy

- `powerbase functions deploy --no-verify-jwt stripe-webhooks`
- `powerbase secrets set --env-file ./powerbase/.env.local`
