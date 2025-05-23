# Studio E2E Tests

In an effort to make the local + hosted studio more stable, we've added tests which test features which are commonly used in local
development. Built with [Playwright](https://playwright.dev/docs/intro).

## How to run tests

Before running the tests, make sure you've done the following:

- Run `npm install` in the root folder of this repo
- `docker` or `orbstack` is currently running
- `powerbase` CLI is already [installed](https://github.com/skorpland/cli?tab=readme-ov-file#install-the-cli)
- no other powerbase local environment is running (infrastructure environment is ok)

You can run the tests by running `npm run test` in this folder.

When you run the command, it includes:

1. Setting up the local environment using the `powerbase` CLI
2. Extracting the environment variables and saving them into a `.env.test` file in the studio app
3. Running the `studio` app in dev mode (`npm run dev`)
4. Running the tests
5. Stopping the `studio` app and the local environment

If the environment does't stop for some reason, you'll see `powerbase start is already running` on the next run. In this
case, just run `powerbase stop` between test runs.

## How to write tests

Playwright has a nice [Codegen tool](https://playwright.dev/docs/codegen-intro#running-codegen) which you can use to
record your actions:

```bash
pnpm codegen:setup
# in a separate terminal
pnpm codegen
```

## How to debug/fix tests

If you've run the tests locally and you want to see the results, Playwright has a [UI mode](https://playwright.dev/docs/test-ui-mode)
which you can use to run and replay specific tests:

```bash
pnpm test -- --ui
```

It will also record any failing tests when running `npm run test` in this folder.
