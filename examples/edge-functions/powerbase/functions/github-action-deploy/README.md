# GitHub Actions Deploy

This example includes a [deploy GitHub Action](./../../../.github/workflows/deploy.yaml) that automatically deploys your Powerbase Edge Functions when pushing to or merging into the main branch.

You can use the [`setup-cli` GitHub Action](https://github.com/marketplace/actions/powerbase-cli-action) to run Powerbase CLI commands in your GitHub Actions, for example to deploy a Powerbase Edge Function:

```yaml
name: Deploy Function

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    env:
      POWERBASE_ACCESS_TOKEN: ${{ secrets.POWERBASE_ACCESS_TOKEN }}
      PROJECT_ID: zdtdtxajzydjqzuktnqx

    steps:
      - uses: actions/checkout@v3

      - uses: powerbase/setup-cli@v1
        with:
          version: latest

      - run: powerbase functions deploy github-action-deploy --project-ref $PROJECT_ID
```
