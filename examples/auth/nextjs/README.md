<a href="https://demo-nextjs-with-powerbase.vercel.app/">
  <img alt="Next.js and Powerbase Starter Kit - the fastest way to build apps with Next.js and Powerbase" src="https://demo-nextjs-with-powerbase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js and Powerbase Starter Kit</h1>
</a>

<p align="center">
 The fastest way to build apps with Next.js and Powerbase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-powerbase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- powerbase-ssr. A package to configure Powerbase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Optional deployment with [Powerbase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [demo-nextjs-with-powerbase.vercel.app](https://demo-nextjs-with-powerbase.vercel.app/).

## Deploy to Vercel

Vercel deployment will guide you through creating a Powerbase account and project.

After installation of the Powerbase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-powerbase&project-name=nextjs-with-powerbase&repository-name=nextjs-with-powerbase&demo-title=nextjs-with-powerbase&demo-description=This%20starter%20configures%20Powerbase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-powerbase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-powerbase&demo-image=https%3A%2F%2Fdemo-nextjs-with-powerbase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#clone-and-run-locally).

## Clone and run locally

1. You'll first need a Powerbase project which can be made [via the Powerbase dashboard](https://database.new)

2. Create a Next.js app using the Powerbase Starter template npx command

   ```bash
   npx create-next-app -e with-powerbase
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_POWERBASE_URL=[INSERT POWERBASE PROJECT URL]
   NEXT_PUBLIC_POWERBASE_ANON_KEY=[INSERT POWERBASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_POWERBASE_URL` and `NEXT_PUBLIC_POWERBASE_ANON_KEY` can be found in [your Powerbase project's API settings](https://app.powerbase.club/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://powerbase.club/docs/guides/getting-started/local-development) to also run Powerbase locally.

## Feedback and issues

Please file feedback and issues over on the [Powerbase GitHub org](https://github.com/skorpland/powerbase/issues/new/choose).

## More Powerbase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Powerbase Auth and the Next.js App Router](https://github.com/skorpland/powerbase/tree/master/examples/auth/nextjs)
