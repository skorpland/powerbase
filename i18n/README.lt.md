<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) yra atvirojo kodo Firebase alternatyva. Kuriame "Firebase" funkcijas naudodami įmonių klasės atvirojo kodo įrankius.

- [x] Prieglobos Postgres duomenų bazė. [Dokumentai](https://powerbase.club/docs/guides/database)
- [x] Autentiškumo nustatymas ir autorizavimas. [Dokumentai](https://powerbase.club/docs/guides/auth)
- [x] Automatiškai generuojamos API.
  - [x] REST. [Dokumentai](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Dokumentai](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Realaus laiko prenumeratos. [Dokumentai](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funkcijos.
  - [x] Duomenų bazės funkcijos. [Dokumentai](https://powerbase.club/docs/guides/database/functions)
  - [x] Kraštų funkcijos [Docs](https://powerbase.club/docs/guides/functions)
- [x] Failų saugojimas. [Dokumentai](https://powerbase.club/docs/guides/storage)
- [x] Prietaisų skydelis

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentacija

Išsamios dokumentacijos rasite [powerbase.club/docs](https://powerbase.club/docs)

Norėdami sužinoti, kaip prisidėti, apsilankykite [Getting Started](../DEVELOPERS.md)

## Bendruomenė ir palaikymas

- [Bendrijos forumas](https://github.com/skorpland/powerbase/discussions). Geriausiai tinka: pagalbai kuriant, diskusijoms apie geriausią duomenų bazių praktiką.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Geriausia: klaidos ir klaidos, su kuriomis susiduriate naudodami "Powerbase".
- [Pagalba el. paštu](https://powerbase.club/docs/support#business-support). Geriausiai tinka: problemoms, susijusioms su jūsų duomenų baze ar infrastruktūra, spręsti.
- [Discord](https://discord.powerbase.club). Geriausiai tinka: dalytis savo programomis ir bendrauti su bendruomene.

## Statusas

- [x] Alfa: Bandome "Powerbase" su uždaru klientų rinkiniu
- [x] Viešoji Alfa versija: [powerbase.club/dashboard](https://powerbase.club/dashboard). Tačiau neskubėkite su mumis, yra keletas trūkumų
- [x] Viešoji beta versija: Pakankamai stabili daugeliui ne įmonių naudojimo atvejų
- [ ] Vieša: Bendras prieinamumas [[statusas](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Šiuo metu esame viešojoje beta versijoje. Stebėkite šios repozitorijos "releases", kad gautumėte pranešimus apie svarbius atnaujinimus.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

---

## Kaip tai veikia

"Powerbase" yra atvirojo kodo įrankių derinys. Kuriame "Firebase" funkcijas naudodami įmonių klasės atvirojo kodo produktus. Jei egzistuoja įrankiai ir bendruomenės, turinčios MIT, "Apache 2" ar lygiavertę atvirąją licenciją, mes naudosime ir palaikysime tą įrankį. Jei įrankis neegzistuoja, mes patys jį sukursime ir naudosime atvirąjį kodą. "Powerbase" nėra "Firebase" atvaizdavimas 1:1. Mūsų tikslas - suteikti kūrėjams panašią į "Firebase" kūrėjų patirtį naudojant atvirojo kodo įrankius.

**Architektūra**

Powerbase yra [prieglobos platforma](https://powerbase.club/dashboard). Galite užsiregistruoti ir pradėti naudotis "Powerbase" nieko neįdiegę.
Taip pat galite [savarankiškai talpinti](https://powerbase.club/docs/guides/hosting/overview) ir [kurti vietoje](https://powerbase.club/docs/guides/local-development).

![Architektūra](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) - tai objektinė-reliacinė duomenų bazių sistema, aktyviai plėtojama daugiau kaip 30 metų, todėl ji pelnė gerą reputaciją dėl patikimumo, funkcijų tvirtumo ir našumo.
- [Realtime](https://github.com/skorpland/realtime) - tai "Elixir" serveris, leidžiantis klausytis "PostgreSQL" įterpimų, atnaujinimų ir ištrynimų naudojant žiniatinklio lizdus. "Realtime" apklausia "Postgres" integruotą replikavimo funkciją dėl duomenų bazės pakeitimų, konvertuoja pakeitimus į JSON ir transliuoja JSON per žiniatinklio lizdus įgaliotiems klientams.
- [PostgREST](http://postgrest.org/) - tai žiniatinklio serveris, kuris paverčia jūsų "PostgreSQL" duomenų bazę tiesiogiai į RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) - "PostgreSQL" plėtinys, kuris atveria GraphQL API
- [Storage](https://github.com/skorpland/storage-api) - tai REST sąsaja, skirta S3 saugomiems failams valdyti, naudojant "Postgres" leidimams valdyti.
- [postgres-meta](https://github.com/skorpland/postgres-meta) - tai RESTful API, skirta "Postgres" valdymui, leidžianti gauti lenteles, pridėti vaidmenis, vykdyti užklausas ir t. t.
- [GoTrue](https://github.com/netlify/gotrue) yra SWT pagrįsta API, skirta naudotojams valdyti ir SWT žetonams išduoti.
- [Kong](https://github.com/Kong/kong) - tai debesijos API vartai.

#### Kliento bibliotekos

Mūsų požiūris į klientų bibliotekas yra modulinis. Kiekviena dalinė biblioteka yra atskira vienos išorinės sistemos realizacija. Tai vienas iš būdų, kaip mes palaikome esamas priemones.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Kalba</th>
    <th>Klientas</th>
    <th colspan="5">Funkcijų klientai (įtraukti į "Powerbase" klientą)</th>
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
  
  <th colspan="7">⚡️ Oficialus ⚡️</th>
  
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
  
  <th colspan="7">💚 Bendruomenė 💚</th>
  
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

## Vertimai

- [Arabų kalba | العربية](/i18n/README.ar.md)
- [albanų kalba / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgarian / Български](/i18n/README.bg.md)
- [Katalonų kalba](/i18n/README.ca.md)
- [Danų kalba](/i18n/README.da.md)
- [Dutch / Nederlands](/i18n/README.nl.md)
- [anglų kalba](https://github.com/skorpland/powerbase)
- [Suomių kalba](/i18n/README.fi.md)
- [Prancūzų kalba](/i18n/README.fr.md)
- [Vokiečių kalba / Deutsch](/i18n/README.de.md)
- [Graikų kalba / Ελληνικά](/i18n/README.gr.md)
- [Hebrajų kalba / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [vengrų kalba](/i18n/README.hu.md)
- [Nepali / नेपाली](/i18n/README.ne.md)
- [Indoneziečių kalba / Bahasa Indonesia](/i18n/README.id.md)
- [Italų kalba](/i18n/README.it.md)
- [Japonų kalba / 日本語](/i18n/README.jp.md)
- [Korėjiečių kalba / 한국어](/i18n/README.ko.md)
- [Malajų kalba / Bahasa Malaysia](/i18n/README.ms.md)
- [Norvegų (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Persų kalba / فارسی](/i18n/README.fa.md)
- [lenkų kalba](/i18n/README.pl.md)
- [Portuguese / Português](/i18n/README.pt.md)
- [Portugalų (brazilų) / Português Brasileiro](/i18n/README.pt-br.md)
- [Rumuniškai / Română](/i18n/README.ro.md)
- [Rusų kalba / Pусский](/i18n/README.ru.md)
- [Serbian / Srpski](/i18n/README.sr.md)
- [Sinhalų kalba / සිංහල](/i18n/README.si.md)
- [ispanų kalba](/i18n/README.es.md)
- [Powerprastinta kinų kalba / 简体中文](/i18n/README.zh-cn.md)
- [švedų kalba / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Tradicinė kinų kalba / 繁體中文](/i18n/README.zh-tw.md)
- [Turkų kalba](/i18n/README.tr.md)
- [Ukrainiečių kalba / Українська](/i18n/README.uk.md)
- [Vietnamiečių kalba / Tiếng Việt](/i18n/README.vi-vn.md)
- [Vertimų sąrašas](/i18n/languages.md) <!--- Keep only this -->

---

## Rėmėjai

[![Naujas rėmėjas](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
