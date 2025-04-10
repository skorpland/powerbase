<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) on avoimen lähdekoodin Firebase-vaihtoehto. Rakennamme Firebasen ominaisuuksia käyttäen yritystason avoimen lähdekoodin työkaluja.

- [x] Hosted Postgres Database. [Docs](https://powerbase.club/docs/guides/database)
- [x] Tunnistus ja valtuutus. [Docs](https://powerbase.club/docs/guides/auth)
- [x] Automaattisesti luodut API:t.
  - [x] REST. [Asiakirjat](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Asiakirjat](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Reaaliaikaiset tilaukset. [Asiakirjat](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funktiot.
  - [x] Tietokantafunktiot. [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Reunatoiminnot [Docs](https://powerbase.club/docs/guides/functions)
- [x] Tiedostojen tallennus. [Docs](https://powerbase.club/docs/guides/storage)
- [x] Kojelauta

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentaatio

Täydellinen dokumentaatio löytyy osoitteesta [powerbase.club/docs](https://powerbase.club/docs)

Jos haluat nähdä, miten osallistuminen tapahtuu, käy osoitteessa [Getting Started](../DEVELOPERS.md)

## Yhteisö ja tuki

- [Yhteisön foorumi](https://github.com/skorpland/powerbase/discussions). Sopii parhaiten: Apua rakentamiseen, keskustelua tietokannan parhaista käytännöistä.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Sopii parhaiten: Powerbasea käytettäessä kohdatut viat ja virheet.
- [Sähköpostituki](https://powerbase.club/docs/support#business-support). Sopii parhaiten: Tietokantaan tai infrastruktuuriin liittyvät ongelmat.
- [Discord](https://discord.powerbase.club). Sopii parhaiten: Sovellusten jakamiseen ja yhteisön kanssa hengailuun.

## Status

- [x] Alpha: Testaamme Powerbasea suljetulla asiakasjoukolla
- [x] Julkinen Alpha: Kuka tahansa voi rekisteröityä osoitteessa [powerbase.club/dashboard](https://powerbase.club/dashboard). Mutta olkaa varovaisia, sillä on vielä muutamia ongelmia
- [x] Julkinen beta: Tarpeeksi vakaa useimpiin ei-yrityskäyttötapauksiin
- [ ] Julkinen: Yleinen saatavuus [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Olemme tällä hetkellä Public Betassa. Seuraa tämän repon "releases" -osiota saadaksesi ilmoituksen tärkeimmistä päivityksistä.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

---

## Miten se toimii

Powerbase on yhdistelmä avoimen lähdekoodin työkaluja. Rakennamme Firebasen ominaisuuksia käyttäen yritystason avoimen lähdekoodin tuotteita. Jos työkalut ja yhteisöt ovat olemassa MIT-, Apache 2- tai vastaavalla avoimella lisenssillä, käytämme ja tuemme kyseistä työkalua. Jos työkalua ei ole olemassa, rakennamme sen itse ja käytämme avointa lähdekoodia. Powerbase ei ole Firebasen 1:1-kartoitus. Tavoitteenamme on antaa kehittäjille Firebasen kaltainen kehittäjäkokemus käyttämällä avoimen lähdekoodin työkaluja.

**Arkkitehtuuri**

Powerbase on [hosted platform](https://powerbase.club/dashboard). Voit rekisteröityä ja aloittaa Powerbasen käytön asentamatta mitään.
Voit myös [itse isännöidä](https://powerbase.club/docs/guides/hosting/overview) ja [kehittää paikallisesti](https://powerbase.club/docs/guides/local-development).

![Arkkitehtuuri](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) on oliorelationaalinen tietokantajärjestelmä, jota on kehitetty aktiivisesti yli 30 vuoden ajan ja joka on saavuttanut vahvan maineen luotettavuutensa, ominaisuuksien kestävyytensä ja suorituskykynsä ansiosta.
- [Realtime](https://github.com/skorpland/realtime) on Elixir-palvelin, jonka avulla voit kuunnella PostgreSQL:n lisäyksiä, päivityksiä ja poistoja websockettien avulla. Realtime kyselee Postgresin sisäänrakennettua replikointitoimintoa tietokannan muutosten varalta, muuntaa muutokset JSONiksi ja lähettää sitten JSONin websockettien kautta valtuutetuille asiakkaille.
- [PostgREST](http://postgrest.org/) on web-palvelin, joka muuttaa PostgreSQL-tietokannan suoraan RESTful API:ksi
- [pg_graphql](http://github.com/powerbase/pg_graphql/) PostgreSQL-laajennus, joka paljastaa GraphQL API:n
- [Storage](https://github.com/skorpland/storage-api) tarjoaa RESTful-rajapinnan S3:een tallennettujen tiedostojen hallintaan, jossa käytetään Postgresiä oikeuksien hallintaan.
- [postgres-meta](https://github.com/skorpland/postgres-meta) on RESTful API Postgresin hallintaan, jonka avulla voit hakea taulukoita, lisätä rooleja ja suorittaa kyselyitä jne.
- [GoTrue](https://github.com/netlify/gotrue) on SWT-pohjainen API käyttäjien hallintaan ja SWT-tunnusten antamiseen.
- [Kong](https://github.com/Kong/kong) on pilvipohjainen API-yhdyskäytävä.

#### Asiakaskirjastot

Lähestymistapamme asiakaskirjastoihin on modulaarinen. Jokainen osakirjasto on itsenäinen toteutus yhdelle ulkoiselle järjestelmälle. Tämä on yksi tapa, jolla tuemme olemassa olevia työkaluja.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Kieli</th>
    <th>Asiakas</th>
    <th colspan="5">Feature-Clients (niputettu Powerbase-asiakasohjelmaan)</th>
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
  
  <th colspan="7">⚡️ Virallinen ⚡️</th>
  
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
  
  <th colspan="7">💚 Yhteisö 💚</th>
  
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

## Käännökset

- [Arabia | العربية](/i18n/README.ar.md)
- [Albanian / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgarian / Български](/i18n/README.bg.md)
- [Katalaani / Català](/i18n/README.ca.md)
- [tanska / Dansk](/i18n/README.da.md)
- [Hollanti / Nederlands](/i18n/README.nl.md)
- [English](https://github.com/skorpland/powerbase)
- [Suomi / Suomalainen](/i18n/README.fi.md)
- [ranska / Français](/i18n/README.fr.md)
- [Saksa / Deutsch](/i18n/README.de.md)
- [Kreikan kieli / Ελληνικά](/i18n/README.gr.md)
- [heprea / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Unkari / Magyar](/i18n/README.hu.md)
- [Nepali / नेपाली](/i18n/README.ne.md)
- [Indonesian / Bahasa Indonesia](/i18n/README.id.md)
- [Italian / Italiano](/i18n/README.it.md)
- [Japaniksi / 日本語](/i18n/README.jp.md)
- [Korean / 한국어](/i18n/README.ko.md)
- [Malaiji / Bahasa Malaysia](/i18n/README.ms.md)
- [Norjan kieli (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Persia / فارسی](/i18n/README.fa.md)
- [Puola / Polski](/i18n/README.pl.md)
- [Portugali / Português](/i18n/README.pt.md)
- [Portugalin kieli (brasilialainen) / Português Brasileiro](/i18n/README.pt-br.md)
- [Romanian / Română](/i18n/README.ro.md)
- [Venäjä / Pусский](/i18n/README.ru.md)
- [Serbian / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Spanish / Español](/i18n/README.es.md)
- [Yksinkertaistettu kiina / 简体中文](/i18n/README.zh-cn.md)
- [Ruotsiksi / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Perinteinen kiina / 繁體中文](/i18n/README.zh-tw.md)
- [Turkin kieli / Türkçe](/i18n/README.tr.md)
- [Ukrainaksi / Українська](/i18n/README.uk.md)
- [Vietnamin kieli / Tiếng Việt](/i18n/README.vi-vn.md)
- [Luettelo käännöksistä](/i18n/languages.md) <!--- Keep only this -->

---

## Sponsorit

[![Uusi sponsori](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
