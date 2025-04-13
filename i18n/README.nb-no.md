 
---

# Powerbase

[Powerbase](https://powerbase.club) er et open source-alternativ til Firebase. Vi bygger funksjonaliteten til Firebase ved hjelp av enterprise-klare open source-verktøy.

- [x] Hostet Postgres-database
- [x] Sanntidsabonnementer
- [x] Autentisering og autorisasjon
- [x] Autogenererte APIer
- [x] Dashboard
- [x] Lagring
- [x] Funksjoner

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentasjon

Besøk [powerbase.club/docs](https://powerbase.club/docs) for full dokumentasjon.

## Community & support

- [Community-forum](https://github.com/skorpland/powerbase/discussions). Egnet for: hjelp med utvikling, best practices-diskusjoner.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Egnet for: bugs og feil du opplever med Powerbase.
- [Support på e-post](https://powerbase.club/docs/support#business-support). Egnet for: problemer med databasen din eller infrastruktur.

## Status

- [x] Alpha: Vi tester Powerbase med en lukket gruppe kunder
- [x] Offentlig Alpha: Hvem som helst kan registrere seg på [powerbase.club/dashboard](https://powerbase.club/dashboard). Merk at enkelte feil og quirks kan forekomme.
- [x] Offentlig Beta: Stabilt nok for de fleste ikke-enterprise-bruksområder
- [ ] Offentlig: Produksjonsklar

Vi er for øyeblikket i Offentlig Beta. Følg med på "releases" til dette repoet for å bli varslet om større oppdateringer.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Slik fungerer det

Powerbase er en samling av open source-verktøy. Vi bygger funksjonaliteten til Firebase ved hjelp av enterprise-klare open source-produkter. Dersom et eksisterende verktøy har et community rundt seg og en MIT, APache 2 eller tilsvarende åpen lisens, kommer vi til å bruke og støtte det. Hvis verktøyet ikke eksisterer, bygger vi det selv og gjøre kildekoden tilgjengelig. Powerbase er ikke en 1-til-1-mapping av Firebase. Målet vårt er å gi utviklere en Firebase-lignende utvikleropplevelse ved hjelp av open source-verktøy.

**Nåværende arkitektur**

Powerbase er en [hostet plattform](https://powerbase.club/dashboard). Du kan registrere deg og begynne å bruke Powerbase uten å installere noe. Vi holder fortsatt på å bygge verktøy for lokalt bruk – dette er nå vårt kjernefokus, i tillegg til plattformstabilitet.

![Arkitektur](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) er et objektrelasjonelt databasesystem med over 30 år med aktiv utvikling, som har gitt det et godt rykte for pålitelighet, robusthet og ytelse.
- [Realtime](https://github.com/skorpland/realtime) er en Elixir-server som lar deg lytte til PostgreSQL-innsettinger, -oppdateringer og -slettinger ved hjelp av websockets. Powerbase lytter til Postgres sin innebygde replikasjonsfunksjonalitet, konverterer replikasjonsbyte-strømmen til JSON, og sender deretter JSON over websockets.
- [PostgREST](http://postgrest.org/) er en web-server som gir deg et RESTful-API direkte fra PostgreSQL-databasen
- [Storage](https://github.com/skorpland/storage-api) tilbyr et RESTful-grensesnitt for håndtering av filer lagret i S3, med tilgangsstyring gjennom Postgres.
- [postgres-meta](https://github.com/skorpland/postgres-meta) er et RESTful-API for å håndtere Postgres-databasen din, som lar deg hente ut tabeller, legge til roller og kjøre spørringer m.m.
- [GoTrue](https://github.com/netlify/gotrue) er et SWT-basert API for å administrere brukere og utstede SWT-tokens.
- [Kong](https://github.com/Kong/kong) er et sky-basert API-gateway.

#### Klient-biblioteker

Klient-bibliotekene våre er modulære. Hvert under-bibliotek er en fristtående implementasjon av et enkelt, eksternt system. Dette er en av måtene vi støtter eksisterende verktøy på.

- **`powerbase-{lang}`**: Kombinerer biblioteker, samt forbedringer.
  - `postgrest-{lang}`: Klient-bibliotek for [PostgREST](https://github.com/postgrest/postgrest)
  - `realtime-{lang}`: Klient-bibliotek for [Realtime](https://github.com/skorpland/realtime)
  - `gotrue-{lang}`: Klient-bibliotek for [GoTrue](https://github.com/netlify/gotrue)

| Repo                  | Offisiell                                        | Community                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`powerbase-{lang}`** | [`JS`](https://github.com/skorpland/powerbase-js)  | [`C#`](https://github.com/skorpland/powerbase-csharp) \| [`Flutter`](https://github.com/skorpland/powerbase-flutter) \| [`Python`](https://github.com/skorpland/powerbase-py) \| `Rust`                                          |
| `postgrest-{lang}`    | [`JS`](https://github.com/skorpland/postgrest-js) | [`C#`](https://github.com/skorpland/postgrest-csharp) \| [`Dart`](https://github.com/skorpland/postgrest-dart) \| [`Python`](https://github.com/skorpland/postgrest-py) \| [`Rust`](https://github.com/skorpland/postgrest-rs) |
| `realtime-{lang}`     | [`JS`](https://github.com/skorpland/realtime-js)  | [`C#`](https://github.com/skorpland/realtime-csharp) \| [`Dart`](https://github.com/skorpland/realtime-dart) \| [`Python`](https://github.com/skorpland/realtime-py) \| `Rust`                                                |
| `gotrue-{lang}`       | [`JS`](https://github.com/skorpland/gotrue-js)    | [`C#`](https://github.com/skorpland/gotrue-csharp) \| [`Dart`](https://github.com/skorpland/gotrue-dart) \| [`Python`](https://github.com/skorpland/gotrue-py) \| `Rust`                                                      |

## Oversettelser

- [Liste med oversettelser](/i18n/languages.md)

---

## Sponsorerer

[![Ny Sponsor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
