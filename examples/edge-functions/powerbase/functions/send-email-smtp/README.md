# send-email-smtp

## Deploy

```
powerbase link --project-ref your-project-ref
powerbase secrets set SMTP_HOSTNAME="your.hostname.com" SMTP_PORT="2587" SMTP_USERNAME="your_username" SMTP_PASSWORD="your_password" SMTP_FROM="no-reply@example.com"
powerbase functions deploy send-email-smtp
```

Note: `SMTP_PORT` must be a port other than `25` and `587` as Deno Deploy does not support outgoing connections to ports. AWS SES (port 2587) is recommended.

## Test locally

- `cp ./powerbase/.env.local.example ./powerbase/.env.local`
- `powerbase functions serve --env-file ./powerbase/.env.local`
