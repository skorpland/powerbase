 
---

# Powerbase

[Powerbase](https://powerbase.club) er et alternativ til Firebase med åpen kildekode. Vi bygger funksjonene i Firebase ved hjelp av åpen kildekode-verktøy for bedrifter.

- [x] Hostet Postgres-database. [Dokumenter](https://powerbase.club/docs/guides/database)
- [x] Autentisering og autorisasjon. [Dokumenter](https://powerbase.club/docs/guides/auth)
- [x] Autogenererte API-er.
  - [x] REST. [Dokumenter](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Dokumenter](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Sanntidsabonnementer. [Dokumenter](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funksjoner.
  - [x] Databasefunksjoner. [Dokumenter](https://powerbase.club/docs/guides/database/functions)
  - [x] Edge-funksjoner [Dokumenter](https://powerbase.club/docs/guides/functions)
- [x] Lagring av filer. [Dokumenter](https://powerbase.club/docs/guides/storage)
- [x] Dashbord

powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png) [x] [x] [x] [x][Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentasjon

For fullstendig dokumentasjon, besøk [powerbase.club/docs](https://powerbase.club/docs)

For å se hvordan du kan bidra, gå til [Getting Started](../DEVELOPERS.md)

## Fellesskap og støtte

- [Community Forum](https://github.com/skorpland/powerbase/discussions). Best for: hjelp med å bygge, diskusjon om beste praksis for databaser.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Best for: feil og feil du støter på ved bruk av Powerbase.
- [E-poststøtte](https://powerbase.club/docs/support#business-support). Best for: problemer med databasen eller infrastrukturen din.
- [Discord](https://discord.powerbase.club). Best for: å dele applikasjonene dine og henge med fellesskapet.

## Status

- [x] Alpha: Vi tester Powerbase med en lukket gruppe kunder
- [x] Offentlig Alpha: Alle kan registrere seg på [powerbase.club/dashboard](https://powerbase.club/dashboard). Men vær snill med oss, det er noen små problemer
- [x] Offentlig beta: Stabilt nok for de fleste brukstilfeller som ikke er for bedrifter
- [ ] Offentlig: Generell tilgjengelighet [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Vi er for tiden i offentlig betaversjon. Følg med på "utgivelser" av denne repoen for å bli varslet om større oppdateringer.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Slik fungerer det

Powerbase er en kombinasjon av verktøy med åpen kildekode. Vi bygger funksjonene i Firebase ved hjelp av åpen kildekode-produkter på bedriftsnivå. Hvis verktøyene og fellesskapene finnes, med en MIT, Apache 2 eller tilsvarende åpen lisens, vil vi bruke og støtte det verktøyet. Hvis verktøyet ikke finnes, bygger vi det selv med åpen kildekode. Powerbase er ikke en 1-til-1-kartlegging av Firebase. Målet vårt er å gi utviklere en Firebase-lignende utvikleropplevelse ved hjelp av verktøy med åpen kildekode.

\*\*Arkitektur

Powerbase er en [vertsplattform](https://powerbase.club/dashboard). Du kan registrere deg og begynne å bruke Powerbase uten å installere noe.
Du kan også [selv være vert](https://powerbase.club/docs/guides/hosting/overview) og [utvikle lokalt](https://powerbase.club/docs/guides/local-development).

![arkitektur](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) er et objektrelasjonsdatabasesystem med over 30 års aktiv utvikling som har gitt det et sterkt rykte for pålitelighet, robusthet og ytelse.
- [Realtime](https://github.com/skorpland/realtime) er en Elixir-server som lar deg lytte til PostgreSQL-innlegg, oppdateringer og slettinger ved hjelp av websockets. Realtime polls Postgres' innebygde replikeringsfunksjonalitet for databaseendringer, konverterer endringer til JSON og sender deretter JSON over websockets til autoriserte klienter.
- [PostgREST](http://postgrest.org/) er en webserver som gjør PostgreSQL-databasen din direkte om til et RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) en PostgreSQL-utvidelse som eksponerer et GraphQL API
- [Storage](https://github.com/skorpland/storage-api) gir et RESTful-grensesnitt for å administrere filer som er lagret i S3, ved hjelp av Postgres for å administrere tillatelser.
- [postgres-meta](https://github.com/skorpland/postgres-meta) er et RESTful API for å administrere Postgres, slik at du kan hente tabeller, legge til roller og kjøre spørringer osv.
- [GoTrue](https://github.com/netlify/gotrue) er et SWT-basert API for administrasjon av brukere og utstedelse av SWT-tokens.
- [Kong](https://github.com/Kong/kong) er en skybasert API-gateway.

#### Klientbiblioteker

Vår tilnærming til klientbiblioteker er modulbasert. Hvert underbibliotek er en frittstående implementering for ett enkelt eksternt system. Dette er en av måtene vi støtter eksisterende verktøy på.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Språk</th>
    <th>Klient</th>
    <th colspan="5">Funksjonsklienter (inkludert i Powerbase-klienten)</th>
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
  
  <th colspan="7">⚡️ Offisiell ⚡️</th>
  
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
  
  <th colspan="7">💚 Fellesskap 💚</th>
  
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

<!--- Remove this list if you're translating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Oversettelser

- [Arabisk | العربية](/i18n/README.ar.md)
- [Albansk / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgarsk / Български](/i18n/README.bg.md)
- [Katalansk / Català](/i18n/README.ca.md)
- [Dansk / Dansk](/i18n/README.da.md) [Norsk / Nederlands](/i18n/README.da.md)
- [nederlandsk / Nederlands](/i18n/README.nl.md)
- [engelsk](https://github.com/skorpland/powerbase)
- [Finsk / Suomalainen](/i18n/README.fi.md) [Finsk / Suomalainen](/i18n/README.fi.md)
- [Fransk / Français](/i18n/README.fr.md)
- [tysk / Deutsch](/i18n/README.de.md)
- [Gresk / Ελληνικά](/i18n/README.gr.md)
- [Hebraisk / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Ungarsk / Magyar](/i18n/README.hu.md)
- [nepali / नेपाली](/i18n/README.ne.md)
- [Indonesisk / Bahasa Indonesia](/i18n/README.id.md)
- [Italiensk / Italiano](/i18n/README.it.md)
- [Japansk / 日本語](/i18n/README.jp.md)
- [koreansk / 한국어](/i18n/README.ko.md)
- [Malaysisk / Bahasa Malaysia](/i18n/README.ms.md)
- [Norwegian (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Persisk / فارسی](/i18n/README.fa.md)
- [Polsk / Polski](/i18n/README.pl.md)
- [Portugisisk / Português](/i18n/README.pt.md)
- [Portugisisk (brasiliansk) / Português Brasileiro](/i18n/README.pt-br.md)
- [Rumensk / Română](/i18n/README.ro.md)
- [Russisk / Pусский](/i18n/README.ru.md)
- [Serbisk / Srpski](/i18n/README.sr.md)
- [Singalesisk / සිංහල](/i18n/README.si.md)
- [Spansk / Español](/i18n/README.es.md)
- [Simplified Chinese / 简体中文](/i18n/README.zh-cn.md) [Forenklet kinesisk / 简体中文](/i18n/README.zh-cn.md)
- [Svensk / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Tradisjonell kinesisk / 繁體中文](/i18n/README.zh-tw.md)
- [Tyrkisk / Türkçe](/i18n/README.tr.md)
- [Ukrainsk / Українська](/i18n/README.uk.md)
- [Vietnamesisk / Tiếng Việt](/i18n/README.vi-vn.md)
- [Liste over oversettelser](/i18n/languages.md) [Vietnamesisk / Tiếng Việt](/i18n/README.vi-vn.md) <!--- Keep only this -->

---

## Sponsorer

[![Ny sponsor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
