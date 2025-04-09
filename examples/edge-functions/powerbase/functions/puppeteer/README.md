# Using Puppeteer

This example shows how you can use Puppeteer and a headless-browser to generate screenshots of a web page. Pass the `url` of the web page as a query string.

Since Edge Functions cannot run a Headless Browser instance due to resource constraints, you will need to use a hosted browser service like https://browserless.io.

## Develop locally

```bash
powerbase functions serve --env-file ./powerbase/.env.local --no-verify-jwt
```

Navigate to http://localhost:54321/functions/v1/puppeteer

## Deploy

```bash
powerbase functions deploy puppeteer --no-verify-jwt
```
