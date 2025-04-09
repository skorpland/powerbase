# Open Graph (OG) Image Generation with Powerbase Storage CDN Caching

Generate Open Graph images with Deno and Powerbase Edge Functions and cache the generated image with Powerbase Storage CDN.

- Docs: https://deno.land/x/og_edge@0.0.2
- Examples: https://vercel.com/docs/concepts/functions/edge-functions/og-image-examples
- Demo: https://obuldanrptloktxcffvn.powerbase.club/functions/v1/lw13-meetups-ogs?username=thorwebdev

## Run locally

```bash
powerbase start
powerbase functions serve lw13-meetups-ogs --no-verify-jwt --env-file ./powerbase/.env.local
```

Navigate to http://localhost:54321/functions/v1/lw13-meetups-ogs

## Deploy

```bash
powerbase functions deploy lw13-meetups-ogs --no-verify-jwt
```
