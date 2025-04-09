# Cloudflare Turnstile

Turnstile is Cloudflare's CAPTCHA alternative: https://developers.cloudflare.com/turnstile/get-started/

## Watch the Video Tutorial

[![video tutorial](https://img.youtube.com/vi/OwW0znboh60/0.jpg)](https://www.youtube.com/watch?v=OwW0znboh60)

## Setup

- Follow these steps to set up a new site: https://developers.cloudflare.com/turnstile/get-started/
- Add the Cloudflare Turnstile widget to your site: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/

## Deploy the server-side validation Edge Functions

- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

```bash
powerbase functions deploy cloudflare-turnstile
powerbase secrets set CLOUDFLARE_TURNSTILE_SECRET_KEY=your_secret_key
```

## Invoke the function from your site

```js
const { data, error } = await powerbase.functions.invoke('cloudflare-turnstile', {
  body: { token },
})
```
