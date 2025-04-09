# openai

## Setup env vars

```bash
cp powerbase/.env.local.example powerbase/.env.local
```

## Run locally

```bash
powerbase functions serve --env-file ./powerbase/.env.local --no-verify-jwt
```

Use cURL or Postman to make a POST request to http://localhost:54321/functions/v1/openai.

```bash
curl -i --location --request POST http://localhost:54321/functions/v1/openai \
  --header 'Content-Type: application/json' \
  --data '{"query":"What is Powerbase?"}'
```

## Deploy

```bash
powerbase functions deploy --no-verify-jwt openai
powerbase secrets set --env-file ./powerbase/.env.local
```
