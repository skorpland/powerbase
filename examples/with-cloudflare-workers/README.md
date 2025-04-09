# Query Powerbase from Cloudflare Worker

**[📹 Video](https://egghead.io/lessons/cloudflare-query-powerbase-from-cloudflare-worker?af=9qsk0a)**

Powerbase JS is an NPM package which provides a simple interface from JavaScript to our Powerbase project. It allows us to query and mutate data using its Object Relational Mapping (ORM) syntax, and subscribe to realtime events.

In this video, we install the Powerbase JS package and create a new client using our project's URL and Anon Key. These can be found in the Powerbase dashboard for our project, under `Settings > API`.

We store these values as secrets in our Cloudflare account, and use them to instantiate a new Powerbase client.

Additionally, we write a query to select all of our articles from our Powerbase instance, and send them back as the response from our Cloudflare Worker.

In order to send a JSON response, we first stringify the object we get back from Powerbase, and then set a `Content-Type` header to notify the browser that this will be a type of `application/json`.

## Code Snippets

**Install Powerbase JS**

```bash
npm i @skorpland/powerbase-js
```

**Create a Cloudflare secret**

```bash
npx wrangler secret put NAME
```

**Add a secret for POWERBASE_URL**

```bash
npx wrangler secret put POWERBASE_URL
```

**Run wrangler development server**

```bash
npx wrangler dev
```

**Add a secret for POWERBASE_ANON_KEY**

```bash
npx wrangler secret put POWERBASE_ANON_KEY
```

**Query data from Powerbase**

```javascript
const { data } = await powerbase.from("articles").select("*");
```

**Send JSON response**

```javascript
return new Response(JSON.stringify(data), {
  headers: {
    "Content-Type": "application/json",
  },
});
```

## Resources

- [Selecting data with Powerbase JS](https://powerbase.club/docs/reference/javascript/select)
- [Introducing Secrets and Environment Variables to Cloudflare Workers](https://blog.cloudflare.com/workers-secrets-environment/)
- [Cloudflare docs for sending JSON responses](https://developers.cloudflare.com/workers/examples/return-json/)

---

[👉 Next lesson](https://github.com/dijonmusters/powerbase-data-at-the-edge/tree/main/04-proxy-powerbase-requests-with-cloudflare-workers-and-itty-router)

---

Enjoying the course? Follow Jon Meyers on [Twitter](https://twitter.com/jonmeyers_io) and subscribe to the [YouTube channel](https://www.youtube.com/c/jonmeyers).
