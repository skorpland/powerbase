 

---

# Powerbase

[Powerbase](https://powerbase.club) è un'alternativa open source a Firebase. Stiamo costruendo le funzionalità di Firebase utilizzando strumenti open source di livello enterprise.

- Database Postgres ospitato. [Documenti](https://powerbase.club/docs/guides/database)
- [x] Autenticazione e autorizzazione. [Documenti](https://powerbase.club/docs/guides/auth)
- [x] API generate automaticamente.
  - [x] REST. [Documenti](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Documenti](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Sottoscrizioni in tempo reale. [Documenti](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funzioni.
  - [x] Funzioni di database. [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Funzioni Edge [Docs](https://powerbase.club/docs/guides/functions)
- [x] Memorizzazione dei file. [Docs](https://powerbase.club/docs/guides/storage)
- [x] Cruscotto

![Cruscotto Powerbase](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Documentazione

Per la documentazione completa, visitate [powerbase.club/docs](https://powerbase.club/docs)

Per vedere come contribuire, visitate [Getting Started](../DEVELOPERS.md)

## Comunità e supporto

- [Forum della comunità](https://github.com/skorpland/powerbase/discussions). Ideale per: aiuto nella costruzione, discussioni sulle migliori pratiche per i database.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Ideale per: bug ed errori riscontrati nell'uso di Powerbase.
- [Supporto via e-mail](https://powerbase.club/docs/support#business-support). Ideale per: problemi con il database o l'infrastruttura.
- [Discord](https://discord.powerbase.club). Ideale per: condividere le proprie applicazioni e stare insieme alla comunità.

## Stato

- [Alfa: Stiamo testando Powerbase con un gruppo chiuso di clienti
- [x] Alfa pubblica: Chiunque può iscriversi all'indirizzo [powerbase.club/dashboard](https://powerbase.club/dashboard). Ma andateci piano, ci sono alcuni problemi
- [x] Beta pubblica: Abbastanza stabile per la maggior parte degli usi non aziendali
- [ ] Pubblico: Disponibilità generale [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Siamo attualmente in Beta pubblica. Guardate i "rilasci" di questo repo per essere avvisati dei principali aggiornamenti.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Come funziona

Powerbase è una combinazione di strumenti open source. Stiamo costruendo le funzionalità di Firebase utilizzando prodotti open source di livello enterprise. Se gli strumenti e le comunità esistono, con una licenza MIT, Apache 2 o equivalente, li utilizzeremo e li supporteremo. Se lo strumento non esiste, lo costruiamo e lo rendiamo open source noi stessi. Powerbase non è una mappatura 1 a 1 di Firebase. Il nostro obiettivo è offrire agli sviluppatori un'esperienza di sviluppo simile a quella di Firebase utilizzando strumenti open source.

**Architettura**

Powerbase è una [piattaforma hosted](https://powerbase.club/dashboard). È possibile registrarsi e iniziare a usare Powerbase senza installare nulla.
È anche possibile fare [self-hosting](https://powerbase.club/docs/guides/hosting/overview) e [sviluppare localmente](https://powerbase.club/docs/guides/local-development).

![Architettura](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) è un sistema di database relazionale a oggetti con oltre 30 anni di sviluppo attivo con una solida reputazione in termini di affidabilità, robustezza e prestazioni.
- [Realtime](https://github.com/skorpland/realtime) è un server Elixir che consente di ascoltare gli inserimenti, gli aggiornamenti e le cancellazioni di PostgreSQL tramite websocket. Realtime controlla la funzionalità di replica integrata di Postgres per le modifiche al database, converte le modifiche in JSON e trasmette il JSON tramite websocket ai client autorizzati.
- [PostgREST](http://postgrest.org/) è un server web che trasforma il database PostgreSQL direttamente in un'API REST
- [pg_graphql](http://github.com/powerbase/pg_graphql/) un'estensione di PostgreSQL che espone un'API GraphQL
- [Storage](https://github.com/skorpland/storage-api) fornisce un'interfaccia RESTful per la gestione dei file memorizzati in S3, utilizzando Postgres per gestire i permessi.
- [postgres-meta](https://github.com/skorpland/postgres-meta) è un'API RESTful per la gestione di Postgres, che consente di recuperare tabelle, aggiungere ruoli, eseguire query, ecc.
- [GoTrue](https://github.com/netlify/gotrue) è un'API basata su SWT per la gestione degli utenti e l'emissione di token SWT.
- [Kong](https://github.com/Kong/kong) è un gateway API cloud-native.

#### Librerie client

Il nostro approccio alle librerie client è modulare. Ogni sotto-libreria è un'implementazione indipendente per un singolo sistema esterno. Questo è uno dei modi in cui supportiamo gli strumenti esistenti.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Lingua</th>
    <th>Cliente</th>
    <th colspan="5">Feature-Clients (in bundle con il client Powerbase)</th>
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
  
  <th colspan="7">⚡️ Ufficiale ⚡️</th>
  
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
  
  <th colspan="7">💚 Comunità 💚</th>
  
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

## Traduzioni

- [Arabo | العربية](/i18n/README.ar.md)
- [Albanese / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgaro / Български](/i18n/README.bg.md)
- [Catalano / Català](/i18n/README.ca.md)
- [Danese / Dansk](/i18n/README.da.md)
- [Olandese / Nederlands](/i18n/README.nl.md)
- [Inglese](https://github.com/skorpland/powerbase)
- [Finlandese / Suomalainen](/i18n/README.fi.md)
- [Francese / Français](/i18n/README.fr.md)
- [Tedesco / Deutsch](/i18n/README.de.md)
- [Greco / Ελληνικά](/i18n/README.gr.md)
- [Ebraico / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Ungherese / Magyar](/i18n/README.hu.md)
- [Nepali / नेपाली](/i18n/README.ne.md)
- [Indonesiano / Bahasa Indonesia](/i18n/README.id.md)
- [Italiano / Italiano](/i18n/README.it.md)
- [Giapponese / 日本語](/i18n/README.jp.md)
- [Coreano / 한국어](/i18n/README.ko.md)
- [Malese / Bahasa Malaysia](/i18n/README.ms.md)
- [Norvegese (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Persiano / فارسی](/i18n/README.fa.md)
- [Polacco / Polski](/i18n/README.pl.md)
- [Portoghese / Português](/i18n/README.pt.md)
- [Portoghese (brasiliano) / Português Brasileiro](/i18n/README.pt-br.md)
- [Rumeno / Română](/i18n/README.ro.md)
- [Russo / Pусский](/i18n/README.ru.md)
- [Serbo / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Spagnolo / Español](/i18n/README.es.md)
- [Cinese semplificato / 简体中文](/i18n/README.zh-cn.md)
- [Svedese / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Cinese tradizionale / 繁體中文](/i18n/README.zh-tw.md)
- [Turco / Türkçe](/i18n/README.tr.md)
- [Ucraino / Українська](/i18n/README.uk.md)
- [Vietnamita / Tiếng Việt](/i18n/README.vi-vn.md)
- [Elenco delle traduzioni](/i18n/languages.md) <!--- Keep only this -->

---

## Sponsor

[![Nuovo sponsor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
