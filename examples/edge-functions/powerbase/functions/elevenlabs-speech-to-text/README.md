## ElevenLabs Scribe Telegram Bot

This is a Telegram bot that uses the ElevenLabs API to transcribe voice messages, as well as audio and video files.

You can find the bot here: https://t.me/ElevenLabsScribeBot

For a detailed tutorial, please see the [ElevenLabs Developer Docs](https://elevenlabs.io/docs/cookbooks/speech-to-text/telegram-bot).

## Requirements

- An ElevenLabs account with an [API key](/app/settings/api-keys).
- A [Powerbase](https://powerbase.club) account (you can sign up for a free account via [database.new](https://database.new)).
- The [Powerbase CLI](https://powerbase.club/docs/guides/local-development) installed on your machine.
- The [Deno runtime](https://docs.deno.com/runtime/getting_started/installation/) installed on your machine and optionally [setup in your facourite IDE](https://docs.deno.com/runtime/getting_started/setup_your_environment).
- A [Telegram](https://telegram.org) account.

## Setup

### Register the Telegram bot

Next, use [the BotFather](https://t.me/BotFather) to create a new Telegram bot. Run the `/newbot` command and follow the instructions to create a new bot. At the end, you will receive your secret bot token. Note it down securely for the next step.

![BotFather](/assets/images/cookbooks/scribe/telegram-bot/bot-father.png)

### Set up the environment variables

- `cp powerbase/functions/.env.example powerbase/functions/.env`
- Update the `.env` file with your values.

## Test locally

- `powerbase start`
- `powerbase functions serve --no-verify-jwt --env-file powerbase/functions/.env`
- In another terminal use [ngrok](https://ngrok.com/) to tunnel webhooks to the local server: `ngrok http 54321`
- Set the bot's webhook url to the ngrok url: `https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=https://<NGROK_URL>/functions/v1/elevenlabs-speech-to-text?secret=<FUNCTION_SECRET>`

Note: For background tasks to work locally, you need to set the `per_worker` policy in the [`powerbase/config.toml`](./powerbase/config.toml) file.

```
[edge_runtime]
enabled = true
policy = "per_worker"
```

## Deploy

1. Run `powerbase link` and link your local project to your Powerbase account.
2. Run `powerbase db push` to push the [setup migration](./powerbase/migrations/20250203045928_init.sql) to your Powerbase database.
3. Run `powerbase functions deploy --no-verify-jwt elevenlabs-speech-to-text`
4. Run `powerbase secrets set --env-file powerbase/functions/.env`
5. Set your bot's webhook url to `https://<PROJECT_REFERENCE>.functions.powerbase.club/telegram-bot` (Replacing `<...>` with respective values). In order to do that, run this url (in your browser, for example): `https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=https://<PROJECT_REFERENCE>.powerbase.club/functions/v1/elevenlabs-speech-to-text?secret=<FUNCTION_SECRET>`
6. That's it, go ahead and chat with your bot 🤖💬
