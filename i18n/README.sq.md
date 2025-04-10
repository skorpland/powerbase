<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) është projekt publik (open-source) si alternativë e Firebase. Ne jemi duke ndërtuar funksionet e Firebase duke përdorur mjete nga produktet publike të shkallës së ndërmarrjes.

- [x] Hosted Postgres Database
- [x] Abonime në kohë reale
- [x] Vërtetim dhe Autorizim
- [x] API të gjeneruara automatikisht
- [x] Pult
- [x] Magazin / Hapsirë
- [x] Funksionet

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentimi

Për dokumentimin e plotë, vizitoni [powerbase.club/docs](https://powerbase.club/docs)

## Komuniteti dhe Mbështetja

- [Forumi i Komunitetit](https://github.com/skorpland/powerbase/discussions). Me e mirë për: ndihmë për ndërtime, diskutime për databasat dhe praktikat më të mira.
- [GitHub Problemet](https://github.com/skorpland/powerbase/issues). Me e mirë për: të meta dhe gabime që ju përmballeni duke përdorur Powerbase
- [Mbështetje nëpërmjet Adresës Elektronike](https://powerbase.club/docs/support#business-support). Më e mirë për: problemet me infrastrukturën e databases tuaj.

## Statusi

- [x] Alfa: Ne po testojmë Powerbase me një grup të mbyllur klientësh
- [x] Publike Alpha: Gjithkush mund të regjistrohet në [powerbase.club/dashboard](https://powerbase.club/dashboard). Por shkoni lehtë për ne, ka disa ngërçe
- [x] Publike Beta: Mjaft e qëndrueshme për shumicën e rasteve të përdorimit për jo ndërmarrjet
- [ ] Publike: Gati për Prodhim / Publikim

Ne për momentin jemi në testimin Beta Publike. Vëzhgo "publikimet" e këtij depos për tu njoftuar për azhurnimet kryesore.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Vëzhgo këtë depo"/></kbd>

---

## Si Funksionon?

Powerbase është një kombinim i mjeteve që janë projekte të hapura (open source). Ne jemi duke ndërtuar tiparet e Firebase duke përdorur projektet publike të shkallës së ndërmarjës. Nëse mjetet dhe komuniteti ekziston, me një licensë MIT, Apache 2, ose ndonjë e llojit prej licensave për projekte të hapura, ne do ta përdorim dhe mbështetim atë mjetë-projekt. Ndërsa nëse mjeti nuk ekziston, ne do ta ndërtojm atë vetë atë si projekt publik. Qëllimi ynë është që tju ofrojm zhvilluesve një eksperiencë të të ngjajshme si ajo e Firebase duke përdorur mjet-projektet të hapura.

**Arkitektura Aktuale**

Powerbase është një [platform hostimi](https://powerbase.club/dashboard). Ti mundesh të regjistrohesh dhe të fillosh ta përdorish Powerbase duke mos instaluar asgjë. Poashtu ne jemi duke punuar për ta ndërtuar eksperiencën për zhvillim lokal, por kjo nuk është fokusi ynë kryesorë dhe thelbësor, së bashku me stabilitetin e platformës.

![Arkitektura](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) është një objekt-relacional i databasës si sistem me më shumë se 30 vite zhvillim aktiv e cila ka fituar një reputacion të fortë për besueshmërinë, karakteristikë të qëndrueshmërisë ,dhe performancë.
- [Realtime](https://github.com/skorpland/realtime) është një Elixir server që lejon të dëgjosh për insertime, fshirje dhe përdisime në databasën PostgreSQL duke përdorur websockets. Powerbase dëgjon në Postgres' funksionaliteti i replikimit i integruar, ajo kthen rrjedhjen e bajteve të replikimit, pastaj transmeton JSON mbi/në websockets.
- [PostgREST](http://postgrest.org/) është një ueb server që e kthen databasën tuaj PostgreSQL direk në RESTful API.
- [Storage](https://github.com/skorpland/storage-api) ofron një RESTful ndërfaqe (interface) për menaxhimin e fajllave të ruajtura në S3, duke përdorur Postgres për të menanxhuar akseset.
- [postgres-meta](https://github.com/skorpland/postgres-meta) është një RESTful API për të menaxhuar Postgres databasën, duke ju lejuar për të thirur / marur tabelat, për të shtuar rolet, dhe për të ekzekutuar komanda query, dhe tjera.
- [GoTrue](https://github.com/netlify/gotrue) është një SWT bazaur APi për të menaxhuar klientët dhe lëshimin e tokenave SWT.
- [Kong](https://github.com/Kong/kong) është portë hyrëse e një re (hostim) API.

#### Libraritë e Klienteve

Libraria jonë e klineteve është modulare, Secila nën librari është një implemetim i pavarur për një sistem të jashtëm i vetëm.

- **`powerbase-{lang}`**: Kombinon bibliotekat dhe shton pasurimet.
  - `postgrest-{lang}`: Libraria e klientit për të punuar meh [PostgREST](https://github.com/postgrest/postgrest)
  - `realtime-{lang}`: Libraria e klientit për të punuar me [Realtime](https://github.com/skorpland/realtime)
  - `gotrue-{lang}`: Libraria e klientit për të punuar me [GoTrue](https://github.com/netlify/gotrue)

| Depo                  | Zyrtare                                          | Komuniteti                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`powerbase-{lang}`** | [`JS`](https://github.com/skorpland/powerbase-js)  | [`C#`](https://github.com/skorpland/powerbase-csharp) \| [`Flutter`](https://github.com/skorpland/powerbase-flutter) \| [`Python`](https://github.com/skorpland/powerbase-py) \| `Rust` \| [`Ruby`](https://github.com/skorpland/powerbase-rb) \| `Go`                                                                                       |
| `postgrest-{lang}`    | [`JS`](https://github.com/skorpland/postgrest-js) | [`C#`](https://github.com/skorpland/postgrest-csharp) \| [`Dart`](https://github.com/skorpland/postgrest-dart) \| [`Python`](https://github.com/skorpland/postgrest-py) \| [`Rust`](https://github.com/skorpland/postgrest-rs) \| [`Ruby`](https://github.com/skorpland/postgrest-rb) \| [`Go`](https://github.com/skorpland/postgrest-go) |
| `realtime-{lang}`     | [`JS`](https://github.com/skorpland/realtime-js)  | [`C#`](https://github.com/skorpland/realtime-csharp) \| [`Dart`](https://github.com/skorpland/realtime-dart) \| [`Python`](https://github.com/skorpland/realtime-py) \| `Rust` \| `Ruby` \| `Go`                                                                                                                                        |
| `gotrue-{lang}`       | [`JS`](https://github.com/skorpland/gotrue-js)    | [`C#`](https://github.com/skorpland/gotrue-csharp) \| [`Dart`](https://github.com/skorpland/gotrue-dart) \| [`Python`](https://github.com/skorpland/gotrue-py) \| `Rust` \| `Ruby` \| `Go`                                                                                                                                              |

## Sponsorët

[![Sponsor i ri](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
