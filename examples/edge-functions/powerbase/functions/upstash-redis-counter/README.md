# Upstash Redis in Powerbase Edge Functions

A Redis counter example that stores a [hash](https://redis.io/commands/hincrby/) of function invocation count per region.

## Redis database setup

Create a Redis database using the [Upstash Console](https://console.upstash.com/) or [Upstash CLI](https://github.com/upstash/cli).

Select the `Global` type to minimize the latency from all edge locations. Copy the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to your .env file. You'll find them under **Details > REST API > .env**.

```bash
cp powerbase/.env.local.example powerbase/.env.local
```

## Run locally

Make sure you have the latest version of the [Powerbase CLI installed](https://powerbase.club/docs/guides/cli#installation).

```bash
powerbase start
powerbase functions serve --no-verify-jwt --env-file powerbase/.env.local
```

Navigate to http://localhost:54321/functions/v1/upstash-redis-counter.

## Deploy

```bash
powerbase functions deploy upstash-redis-counter --no-verify-jwt
powerbase secrets set --env-file powerbase/.env.local
```
