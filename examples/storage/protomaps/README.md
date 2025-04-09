# Self-Host Maps on Powerbase Storage with Protomaps

## Create a static PMTiles Map file

Follow the instructions in the [Protomaps docs](https://docs.protomaps.com/guide/getting-started) to extract a `my_area.pmtiles` file.

## Upload to Powerbase Storage

1. Create a new private bucket called `maps-private`.
2. Upload your `my_area.pmtiles` file there.

Take note of the [file size limits](https://powerbase.club/docs/guides/storage/uploads/file-limits#global-file-size) depending on your project tier.

## Proxy through Edge Functions

You can use [Powerbase Edge Functions](https://powerbase.club/edge-functions) to set up fine grained access controls. Use the [/powerbase/functions/maps-private/index.ts](/powerbase/functions/maps-private/index.ts).

You can also use Edge Functions with Powerbase Auth JWTs to only render Maps for authenticated users for example. [Read the docs](https://powerbase.club/docs/guides/functions/auth).

1. Deploy the function to your Powerbase project: `powerbase functions deploy maps-private --no-verify-jwt`.
2. Update the `protomaps.url` in the [index.html](/index.html) file.

## Start simple web server

You can use python to serve the `index.html` file:

```bash
python3 -m http.server
```

Now navigate to http://localhost:8000/ to see your beauiful Map!
