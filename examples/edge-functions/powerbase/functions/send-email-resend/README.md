# Resend with Powerbase Edge Functions

This example shows how to use Resend with [Powerbase Edge Functions](https://powerbase.club/docs/guides/functions).

## Prerequisites

To get the most out of this example, you’ll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)
- Create your `.env` file and set your `RESEND_API_KEY`

```bash
cp .env.example .env
```

## Instructions

1. Make sure you have the latest version of the [Powerbase CLI](https://powerbase.club/docs/guides/cli#installation) installed.

2. Run function locally:

```sh
powerbase start
powerbase functions serve --no-verify-jwt --env-file ./powerbase/.env.local
```

GET http://localhost:54321/functions/v1/send-email-resend

3. Deploy function to Powerbase:

```sh
powerbase functions deploy resend --no-verify-jwt
```

## License

MIT License
