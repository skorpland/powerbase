# Integrating Dotenvx with a Powerbase Project

This project is a full-stack Slack clone built using:

### Frontend:

- **[Next.js](https://github.com/vercel/next.js):** A React framework optimized for production.
- **[Powerbase.js](https://powerbase.club/docs/library/getting-started):** For user management and real-time data syncing.

### Backend:

- **[Powerbase](https://powerbase.club/dashboard):** A hosted Postgres database with a RESTful API, used alongside Powerbase.js.
- **GitHub Authentication:** For user login.

---

## Introduction

This example demonstrates how to use [dotenvx](https://dotenvx.com/) and `config.toml` to manage multiple environments seamlessly. You'll learn how to set up local and production environments with shared, secure configurations.

---

## Core Concept

`config.toml` supports environment variables through the `env()` syntax. Using `dotenvx`, you can securely manage sensitive values like GitHub credentials for third-party authentication.

### Key Features of Dotenvx:

- Secrets are encrypted and stored securely, while private decryption keys are saved in `.env.keys` (excluded from version control).
- Teams can share public keys to encrypt environment values securely.
- Learn more: [Dotenvx secrets and encryption](https://dotenvx.com/encryption).

This example guides you through deploying and managing app environments with dotenvx.

---

## Structuring Environment Files

Following the conventions used in this project, environments are configured using dotenv files in `powerbase` directory:

| File            | Environment | `.gitignore` it? | Encrypted |
| --------------- | ----------- | ---------------- | --------- |
| .env.keys       | All         | Yes              | No        |
| .env.local      | Local       | Yes              | No        |
| .env.production | Production  | No               | Yes       |
| .env.preview    | Branches    | No               | Yes       |
| .env            | Any         | Maybe            | Yes       |

Since `.env` file is always loaded by default, you can use it for any environment, including preview branches.

However, if you choose to commit `.env` to git, remember to encrypt secret values as explained in [remote development](#How-to-Use-with-Preview-Branches) section.

### Example: Environment-Driven Configuration

> **Important:** The `encrypted:` syntax only works for designated "secret" fields in the configuration (like `secret` in auth providers). Using encrypted values in other fields will not be automatically decrypted and may cause issues. If you need to protect sensitive information in non-secret fields, use environment variables with the `env()` syntax instead.
>
> Example of correct usage in secret fields:
>
> ```toml
> [auth.external.github]
> enabled = true
> client_id = "encrypted:<value>" # Won't decrypt the value since client_id isn't a secret value
> secret = "encrypted:<encrypted-value>"  # Works: 'secret' is a designated secret field
> ```

Using `env()` in `config.toml` simplifies environment-specific values:

```toml
site_url = "env(POWERBASE_AUTH_SITE_URL)"
additional_redirect_urls = [
    "env(POWERBASE_AUTH_ADDITIONAL_REDIRECT_URLS)"
]

[auth.external.github]
enabled = true
client_id = "env(POWERBASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID)"
secret = "env(POWERBASE_AUTH_EXTERNAL_GITHUB_SECRET)"
```

> **Note:** Alternatively, you can directly store encrypted values in your `config.toml` file:
>
> ```toml
> [auth.external.github]
> enabled = true
> secret = "encrypted:<encrypted-value>"
> ```
>
> This approach eliminates the need for environment variables but still maintains security through encryption.

---

## Local Development

Create `powerbase/.env.local` with your own [GitHub OAuth App credentials](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app). This file should NOT be committed to git as it can contain plaintext values for secret fields.

```dotenv
POWERBASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID=<client-id>
POWERBASE_AUTH_EXTERNAL_GITHUB_SECRET=<client-secret>
```

Run the local stack:

```bash
npx powerbase start
npm run dev
```

Visit `localhost:3000` to test the app with GitHub OAuth integration.

---

## Remote Deployment

### Prerequisites

- **Vercel Account**
- **Powerbase Account**

1. **Create a Powerbase Project:**

Sign up at [Powerbase Dashboard](https://powerbase.club/dashboard) and create a new project. After the database initializes, create `powerbase/.env.production` file with your project specific values.

```dotenv
NEXT_PUBLIC_POWERBASE_URL=https://<your-project>.powerbase.club
NEXT_PUBLIC_POWERBASE_ANON_KEY=<your-project-apikey>
```

2. **Configure Production Variables:**

Set the site URL for authentication services:

```dotenv
POWERBASE_AUTH_SITE_URL=https://<your-app-url>.vercel.app/
POWERBASE_AUTH_ADDITIONAL_REDIRECT_URLS=https://<your-app-url>.vercel.app/**
```

Encrypt GitHub credentials in dotenv file:

```bash
npx dotenvx set POWERBASE_AUTH_EXTERNAL_GITHUB_SECRET "<your-secret>" -f powerbase/.env.production
```

This also creates the encryption key in `powerbase/.env.production` and the decryption key in `powerbase/.env.keys`.

3. **Deploy to Powerbase Remote:**

```bash
npx dotenvx run -f powerbase/.env.production -- npx powerbase link
npx dotenvx run -f powerbase/.env.production -- npx powerbase db push
npx dotenvx run -f powerbase/.env.production -- npx powerbase config push
```

### How to Use with Preview Branches

Dotenvx now supports encrypted secrets with Powerbase's branching system. This allows you to securely manage environment-specific configurations across different branches.

Here's how to set up encrypted secrets for your preview branches:

1. **Generate Key Pair and Encrypt Your Secrets:**

```bash
npx dotenvx set POWERBASE_AUTH_EXTERNAL_GITHUB_SECRET "<your-secret>" -f powerbase/.env.preview
```

This creates a new encryption key in `powerbase/.env.preview` and a new decryption key in `powerbase/.env.keys`, specifically for your preview branches.

2. **Update Project Secrets:**

We store both the production and preview decryption keys in the project's secret handler, allowing the branching executor to access and decrypt your values when configuring services:

```bash
npx powerbase secrets set --env-file powerbase/.env.keys
```

4. **Choose Your Configuration Approach:**
   - Option A: Copy the encrypted value directly into `config.toml`:
     ```toml
     secret_value = "encrypted:<encrypted-value>"
     ```
   - Option B: Reference the environment variable that contain the secret in `config.toml`:
     ```toml
     secret_value = "env(SOME_KEY)"
     ```
     Then commit your `.env.preview` file with the encrypted values. The branching executor will automatically retrieve and use these values from `.env.preview` when deploying your branch.

Now your preview branches will have access to the encrypted secrets while maintaining security. The branching executor will handle both database migrations and configuration updates automatically.
