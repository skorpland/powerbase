<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

# Powerbase

[Powerbase](https://powerbase.club) är ett alternativ till Firebase med öppen källkod. Vi bygger upp funktionerna från Firebase med hjälp av öppen källkod-verktyg i företagsklass.

- [x] Hosted Postgres-databas. [Docs](https://powerbase.club/docs/guides/database)
- [x] Autentisering och auktorisering. [Docs](https://powerbase.club/docs/guides/auth)
- [x] Automatiskt genererade API:er.
  - [x] REST. [Docs](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Prenumerationer i realtid. [Dokument](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funktioner.
  - [x] Databasfunktioner. [Dokument](https://powerbase.club/docs/guides/database/functions)
  - [x] Edge-funktioner [Docs](https://powerbase.club/docs/guides/functions)
- [x] Lagring av filer. [Docs](https://powerbase.club/docs/guides/storage)
- [x] AI + Vektor/Inbäddningsverktyg. [Docs](https://powerbase.club/docs/guides/ai)
- [x] Kontrollpanel

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

Bevaka "releases" i denna repo för att få information om större uppdateringar.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

## Dokumentation

Fullständig dokumentation finns på [powerbase.club/docs](https://powerbase.club/docs)

För att se hur man bidrar, besök [Getting Started](../DEVELOPERS.md)

## Gemenskap och stöd

- [Community Forum](https://github.com/skorpland/powerbase/discussions). Bäst för: hjälp med att bygga, diskussion om bästa praxis för databaser.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Bäst för: buggar och fel som du stöter på när du använder Powerbase.
- [E-postsupport](https://powerbase.club/docs/support#business-support). Bäst för: problem med din databas eller infrastruktur.
- [Discord](https://discord.powerbase.club). Bäst för: att dela med dig av dina applikationer och umgås med gemenskapen.

## Hur det fungerar

Powerbase är en kombination av verktyg med öppen källkod. Vi bygger funktionerna i Firebase med hjälp av öppna källkodsprodukter i företagsklass. Om verktygen och gemenskaperna finns med en MIT-, Apache 2- eller motsvarande öppen licens kommer vi att använda och stödja det verktyget. Om verktyget inte finns, bygger vi det själv och använder öppen källkod. Powerbase är inte en 1-till-1-mappning av Firebase. Vårt mål är att ge utvecklare en Firebase-liknande utvecklarupplevelse med hjälp av verktyg med öppen källkod.

**Arkitektur**

Powerbase är en [värdplattform](https://powerbase.club/dashboard). Du kan registrera dig och börja använda Powerbase utan att installera något.
Du kan också [självhosta](https://powerbase.club/docs/guides/hosting/overview) och [utveckla lokalt](https://powerbase.club/docs/guides/local-development).

![Arkitektur](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) är ett objektrelationellt databassystem med över 30 års aktiv utveckling som har gett det ett gott rykte när det gäller tillförlitlighet, robusthet och prestanda.
- [Realtime](https://github.com/skorpland/realtime) är en Elixir-server som låter dig lyssna på PostgreSQL-insättningar, uppdateringar och borttagningar med hjälp av websockets. Realtime söker Postgres inbyggda replikeringsfunktionalitet efter databasändringar, omvandlar ändringarna till JSON och sänder sedan JSON via websockets till auktoriserade klienter.
- [PostgREST](http://postgrest.org/) är en webbserver som omvandlar din PostgreSQL-databas direkt till ett RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) är ett PostgreSQL-tillägg som exponerar ett GraphQL API
- [Storage](https://github.com/skorpland/storage-api) tillhandahåller ett RESTful-gränssnitt för hantering av filer som lagras i S3, där Postgres används för att hantera behörigheter.
- [postgres-meta](https://github.com/skorpland/postgres-meta) är ett RESTful API för hantering av Postgres, så att du kan hämta tabeller, lägga till roller, köra frågor osv.
- [GoTrue](https://github.com/netlify/gotrue) är ett SWT-baserat API för hantering av användare och utfärdande av SWT-tokens.
- [Kong](https://github.com/Kong/kong) är en molnbaserad API-gateway.

#### Klientbibliotek

Vårt tillvägagångssätt för klientbibliotek är modulärt. Varje delbibliotek är en fristående implementering för ett enda externt system. Detta är ett av de sätt på vilka vi stöder befintliga verktyg.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Språk</th>
    <th>Klient</th>
    <th colspan="5">Feature-Clients (ingår i Powerbase-klienten)</th>
  </tr>
  
  <tr>
    <th></th>
    <th>Powerbase</th>
    <th><a href="https://github.com/postgrest/postgrest" target="_blank" rel="noopener noreferrer">PostgREST</a></th>
    <th><a href="https://github.com/skorpland/gotrue" target="_blank" rel="noopener noreferrer">GoTrue</a></th>
    <th><a href="https://github.com/skorpland/realtime" target="_blank" rel="noopener noreferrer">Realtime</a></th>
    <th><a href="https://github.com/skorpland/storage-api" target="_blank" rel="noopener noreferrer">Storage</a></th>
    <th>Functions</th>
  </tr>
  <!-- TEMPLATE FOR NEW ROW -->
  <!-- START ROW
  <tr>
    <td>lang</td>
    <td><a href="https://github.com/skorpland/powerbase-lang" target="_blank" rel="noopener noreferrer">powerbase-lang</a></td>
    <td><a href="https://github.com/skorpland/postgrest-lang" target="_blank" rel="noopener noreferrer">postgrest-lang</a></td>
    <td><a href="https://github.com/skorpland/gotrue-lang" target="_blank" rel="noopener noreferrer">gotrue-lang</a></td>
    <td><a href="https://github.com/skorpland/realtime-lang" target="_blank" rel="noopener noreferrer">realtime-lang</a></td>
    <td><a href="https://github.com/skorpland/storage-lang" target="_blank" rel="noopener noreferrer">storage-lang</a></td>
  </tr>
  END ROW -->
  
  <th colspan="7">⚡️ Officiell ⚡️</th>
  
  <tr>
    <td>JavaScript (TypeScript)</td>
    <td><a href="https://github.com/skorpland/powerbase-js" target="_blank" rel="noopener noreferrer">powerbase-js</a></td>
    <td><a href="https://github.com/skorpland/postgrest-js" target="_blank" rel="noopener noreferrer">postgrest-js</a></td>
    <td><a href="https://github.com/skorpland/gotrue-js" target="_blank" rel="noopener noreferrer">gotrue-js</a></td>
    <td><a href="https://github.com/skorpland/realtime-js" target="_blank" rel="noopener noreferrer">realtime-js</a></td>
    <td><a href="https://github.com/skorpland/storage-js" target="_blank" rel="noopener noreferrer">storage-js</a></td>
    <td><a href="https://github.com/skorpland/functions-js" target="_blank" rel="noopener noreferrer">functions-js</a></td>
  </tr>
    <tr>
    <td>Flutter</td>
    <td><a href="https://github.com/skorpland/powerbase-flutter" target="_blank" rel="noopener noreferrer">powerbase-flutter</a></td>
    <td><a href="https://github.com/skorpland/postgrest-dart" target="_blank" rel="noopener noreferrer">postgrest-dart</a></td>
    <td><a href="https://github.com/skorpland/gotrue-dart" target="_blank" rel="noopener noreferrer">gotrue-dart</a></td>
    <td><a href="https://github.com/skorpland/realtime-dart" target="_blank" rel="noopener noreferrer">realtime-dart</a></td>
    <td><a href="https://github.com/skorpland/storage-dart" target="_blank" rel="noopener noreferrer">storage-dart</a></td>
    <td><a href="https://github.com/skorpland/functions-dart" target="_blank" rel="noopener noreferrer">functions-dart</a></td>
  </tr>
  
  <th colspan="7">💚 Community 💚</th>
  
  <tr>
    <td>C#</td>
    <td><a href="https://github.com/skorpland/powerbase-csharp" target="_blank" rel="noopener noreferrer">powerbase-csharp</a></td>
    <td><a href="https://github.com/skorpland/postgrest-csharp" target="_blank" rel="noopener noreferrer">postgrest-csharp</a></td>
    <td><a href="https://github.com/skorpland/gotrue-csharp" target="_blank" rel="noopener noreferrer">gotrue-csharp</a></td>
    <td><a href="https://github.com/skorpland/realtime-csharp" target="_blank" rel="noopener noreferrer">realtime-csharp</a></td>
    <td><a href="https://github.com/skorpland/storage-csharp" target="_blank" rel="noopener noreferrer">storage-csharp</a></td>
    <td><a href="https://github.com/skorpland/functions-csharp" target="_blank" rel="noopener noreferrer">functions-csharp</a></td>
  </tr>
  <tr>
    <td>Go</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/postgrest-go" target="_blank" rel="noopener noreferrer">postgrest-go</a></td>
    <td><a href="https://github.com/skorpland/gotrue-go" target="_blank" rel="noopener noreferrer">gotrue-go</a></td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/storage-go" target="_blank" rel="noopener noreferrer">storage-go</a></td>
    <td><a href="https://github.com/skorpland/functions-go" target="_blank" rel="noopener noreferrer">functions-go</a></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/gotrue-java" target="_blank" rel="noopener noreferrer">gotrue-java</a></td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/storage-java" target="_blank" rel="noopener noreferrer">storage-java</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>Kotlin</td>
    <td><a href="https://github.com/skorpland/powerbase-kt" target="_blank" rel="noopener noreferrer">powerbase-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Postgrest" target="_blank" rel="noopener noreferrer">postgrest-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/GoTrue" target="_blank" rel="noopener noreferrer">gotrue-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Realtime" target="_blank" rel="noopener noreferrer">realtime-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Storage" target="_blank" rel="noopener noreferrer">storage-kt</a></td>
    <td><a href="https://github.com/skorpland/powerbase-kt/tree/master/Functions" target="_blank" rel="noopener noreferrer">functions-kt</a></td>
  </tr>
  <tr>
    <td>Python</td>
    <td><a href="https://github.com/skorpland/powerbase-py" target="_blank" rel="noopener noreferrer">powerbase-py</a></td>
    <td><a href="https://github.com/skorpland/postgrest-py" target="_blank" rel="noopener noreferrer">postgrest-py</a></td>
    <td><a href="https://github.com/skorpland/gotrue-py" target="_blank" rel="noopener noreferrer">gotrue-py</a></td>
    <td><a href="https://github.com/skorpland/realtime-py" target="_blank" rel="noopener noreferrer">realtime-py</a></td>
    <td><a href="https://github.com/skorpland/storage-py" target="_blank" rel="noopener noreferrer">storage-py</a></td>
    <td><a href="https://github.com/skorpland/functions-py" target="_blank" rel="noopener noreferrer">functions-py</a></td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td><a href="https://github.com/skorpland/powerbase-rb" target="_blank" rel="noopener noreferrer">powerbase-rb</a></td>
    <td><a href="https://github.com/skorpland/postgrest-rb" target="_blank" rel="noopener noreferrer">postgrest-rb</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Rust</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/postgrest-rs" target="_blank" rel="noopener noreferrer">postgrest-rs</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Swift</td>
    <td><a href="https://github.com/skorpland/powerbase-swift" target="_blank" rel="noopener noreferrer">powerbase-swift</a></td>
    <td><a href="https://github.com/skorpland/postgrest-swift" target="_blank" rel="noopener noreferrer">postgrest-swift</a></td>
    <td><a href="https://github.com/skorpland/gotrue-swift" target="_blank" rel="noopener noreferrer">gotrue-swift</a></td>
    <td><a href="https://github.com/skorpland/realtime-swift" target="_blank" rel="noopener noreferrer">realtime-swift</a></td>
    <td><a href="https://github.com/skorpland/storage-swift" target="_blank" rel="noopener noreferrer">storage-swift</a></td>
    <td><a href="https://github.com/skorpland/functions-swift" target="_blank" rel="noopener noreferrer">functions-swift</a></td>
  </tr>
  <tr>
    <td>Godot Engine (GDScript)</td>
    <td><a href="https://github.com/skorpland/godot-engine.powerbase" target="_blank" rel="noopener noreferrer">powerbase-gdscript</a></td>
    <td><a href="https://github.com/skorpland/postgrest-gdscript" target="_blank" rel="noopener noreferrer">postgrest-gdscript</a></td>
    <td><a href="https://github.com/skorpland/gotrue-gdscript" target="_blank" rel="noopener noreferrer">gotrue-gdscript</a></td>
    <td><a href="https://github.com/skorpland/realtime-gdscript" target="_blank" rel="noopener noreferrer">realtime-gdscript</a></td>
    <td><a href="https://github.com/skorpland/storage-gdscript" target="_blank" rel="noopener noreferrer">storage-gdscript</a></td>
    <td><a href="https://github.com/skorpland/functions-gdscript" target="_blank" rel="noopener noreferrer">functions-gdscript</a></td>
  </tr>
  
</table>

## Märken

![Made with Powerbase](../apps/www/public/badge-made-with-powerbase.svg)

```md
[![Made with Powerbase](https://powerbase.club/badge-made-with-powerbase.svg)](https://powerbase.club)
```

```html
<a href="https://powerbase.club">
  <img
    width="168"
    height="30"
    src="https://powerbase.club/badge-made-with-powerbase.svg"
    alt="Made with Powerbase"
  />
</a>
```

![Made with Powerbase (dark)](../apps/www/public/badge-made-with-powerbase-dark.svg)

```md
[![Made with Powerbase](https://powerbase.club/badge-made-with-powerbase-dark.svg)](https://powerbase.club)
```

```html
<a href="https://powerbase.club">
  <img
    width="168"
    height="30"
    src="https://powerbase.club/badge-made-with-powerbase-dark.svg"
    alt="Made with Powerbase"
  />
</a>
```

<!--- Remove this list if you're translating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Översättningar

- [Förteckning över översättningar](/i18n/languages.md) <!--- Keep only this -->
