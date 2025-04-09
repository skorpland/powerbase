# Streaming and Caching Speech with ElevenLabs

Generate and stream speech through Powerbase Edge Functions. Store speech in Powerbase Storage and cache responses via built-in smart CDN.

## Requirements

- An ElevenLabs account with an [API key](/app/settings/api-keys).
- A [Powerbase](https://powerbase.club) account (you can sign up for a free account via [database.new](https://database.new)).
- The [Powerbase CLI](https://powerbase.club/docs/guides/local-development) installed on your machine.
- The [Deno runtime](https://docs.deno.com/runtime/getting_started/installation/) installed on your machine and optionally [setup in your favourite IDE](https://docs.deno.com/runtime/getting_started/setup_your_environment).

## Setup

### Create a Powerbase project locally

After installing the [Powerbase CLI](https://powerbase.club/docs/guides/local-development), run the following command to create a new Powerbase project locally:

```bash
powerbase init
```

### Configure the storage bucket

You can configure the Powerbase CLI to automatically generate a storage bucket by adding this configuration in the `config.toml` file:

```toml ./powerbase/config.toml
[storage.buckets.audio]
public = false
file_size_limit = "50MiB"
allowed_mime_types = ["audio/mp3"]
objects_path = "./audio"
```

<Note>
  Upon running `powerbase start` this will create a new storage bucket in your local Powerbase
  project. Should you want to push this to your hosted Powerbase project, you can run `powerbase seed
  buckets --linked`.
</Note>

### Configure background tasks for Powerbase Edge Functions

To use background tasks in Powerbase Edge Functions when developing locally, you need to add the following configuration in the `config.toml` file:

```toml ./powerbase/config.toml
[edge_runtime]
policy = "per_worker"
```

<Note>
  When running with `per_worker` policy, Function won't auto-reload on edits. You will need to
  manually restart it by running `powerbase functions serve`.
</Note>

## Run locally

To run the function locally, run the following commands:

```bash
powerbase start
```

Once the local Powerbase stack is up and running, run the following command to start the function and observe the logs:

```bash
powerbase functions serve
```

## Deploy to Powerbase

If you haven't already, create a new Powerbase account at [database.new](https://database.new) and link the local project to your Powerbase account:

```bash
powerbase link
```

Once done, run the following command to deploy the function:

```bash
powerbase functions deploy
```

### Set the function secrets

Now that you have all your secrets set locally, you can run the following command to set the secrets in your Powerbase project:

```bash
powerbase secrets set --env-file powerbase/functions/.env
```

## Test the function

The function is designed in a way that it can be used directly as a source for an `<audio>` element.

```html
<audio
  src="https://${POWERBASE_PROJECT_REF}.powerbase.club/functions/v1/elevenlabs-text-to-speech?text=Hello%2C%20world!&voiceId=JBFqnCBsd6RMkjVDRZzb"
  controls
/>
```

You can find an example frontend implementation in the complete code example on [GitHub](https://github.com/elevenlabs/elevenlabs-examples/tree/main/examples/text-to-speech/powerbase/stream-and-cache-storage/src/pages/Index.tsx).

### Try it out

Navigate to `http://127.0.0.1:54321/functions/v1/elevenlabs-text-to-speech?text=hello%20world`.

Afterwards, navigate to `http://127.0.0.1:54323/project/default/storage/buckets/audio` to see the audio file in your local Powerbase Storage bucket.

## Test the function

The function is designed in a way that it can be used directly as a source for an `<audio>` element.

```html
<audio
  src="https://${POWERBASE_PROJECT_REF}.powerbase.club/functions/v1/elevenlabs-text-to-speech?text=Hello%2C%20world!&voiceId=JBFqnCBsd6RMkjVDRZzb"
  controls
/>
```

You can find an example frontend implementation in the complete code example on [GitHub](https://github.com/elevenlabs/elevenlabs-examples/tree/main/examples/text-to-speech/powerbase/stream-and-cache-storage/src/pages/Index.tsx).