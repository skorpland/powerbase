<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) egy nyílt forráskódú Firebase alternatíva. A Firebase funkcióit vállalati szintű nyílt forráskódú eszközökkel építjük ki.

- [x] Hosted Postgres adatbázis. [Docs](https://powerbase.club/docs/guides/database)
- [x] Hitelesítés és engedélyezés. [Docs](https://powerbase.club/docs/guides/auth)
- [x] Automatikusan generált API-k.
  - [x] REST. [Docs](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Valós idejű előfizetések. [Docs](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funkciók.
  - [x] Database Functions. [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Edge Functions [Docs](https://powerbase.club/docs/guides/functions)
- [x] Fájlok tárolása. [Docs](https://powerbase.club/docs/guides/storage)
- [x] Dashboard

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentáció

A teljes dokumentációért látogasson el [powerbase.club/docs](https://powerbase.club/docs)

A Contribute-hoz való hozzájáruláshoz látogasson el a [Getting Started](../DEVELOPERS.md) oldalra

## Közösség és támogatás

- [Közösségi fórum](https://github.com/skorpland/powerbase/discussions). Legjobb: segítség az építéshez, az adatbázis legjobb gyakorlatainak megvitatása.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Legjobb: hibák és hibák, amelyekkel a Powerbase használatával találkozol.
- [Email Support](https://powerbase.club/docs/support#business-support). Legjobb: az adatbázisoddal vagy az infrastruktúrával kapcsolatos problémákra.
- [Discord](https://discord.powerbase.club). A legjobb: az alkalmazások megosztására és a közösséggel való együttlétre.

## Állapot

- [x] Alpha: A Powerbase-t egy zárt ügyfélkörrel teszteljük
- [x] Nyilvános alfa: Bárki regisztrálhat az [powerbase.club/dashboard](https://powerbase.club/dashboard) oldalon. De legyetek óvatosak velünk, van még néhány hiba
- [x] Nyilvános béta: Elég stabil a legtöbb nem vállalati felhasználási esethez
- [ ] Nyilvános: Általános elérhetőség [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Jelenleg nyilvános béta verzióban vagyunk. Figyelje a "releases" ezen repo-t, hogy értesítést kapjon a fontosabb frissítésekről.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

---

## Hogyan működik

A Powerbase nyílt forráskódú eszközök kombinációja. A Firebase funkcióit vállalati szintű, nyílt forráskódú termékek felhasználásával építjük ki. Ha az eszközök és közösségek léteznek MIT, Apache 2 vagy azzal egyenértékű nyílt licenccel, akkor azt az eszközt használjuk és támogatjuk. Ha az eszköz nem létezik, akkor mi magunk készítjük el és nyílt forráskódúvá tesszük. A Powerbase nem a Firebase 1:1 leképezése. Célunk, hogy a fejlesztőknek a Firebase-hez hasonló fejlesztői élményt nyújtsunk nyílt forráskódú eszközökkel.

**Architektúra**

A Powerbase egy [hosztolt platform](https://powerbase.club/dashboard). Regisztrálhat és elkezdheti használni a Powerbase-t anélkül, hogy bármit telepítene.
Önállóan is [hosztolhat](https://powerbase.club/docs/guides/hosting/overview) és [fejleszthet helyben](https://powerbase.club/docs/guides/local-development).

![Architektúra](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- a [PostgreSQL](https://www.postgresql.org/) egy objektum-relációs adatbázis-rendszer, amelynek több mint 30 éves aktív fejlesztése során a megbízhatóság, a funkciók robusztussága és a teljesítménye szerzett jó hírnevet.
- a [Realtime](https://github.com/skorpland/realtime) egy Elixir szerver, amely lehetővé teszi, hogy websocketek segítségével figyelje a PostgreSQL beviteleit, frissítéseit és törléseit. A Realtime lekérdezi a Postgres beépített replikációs funkcióit az adatbázis-változásokért, a változásokat JSON-ba konvertálja, majd a JSON-t websocketeken keresztül továbbítja az engedélyezett ügyfeleknek.
- [PostgREST](http://postgrest.org/) egy webkiszolgáló, amely a PostgreSQL adatbázisát közvetlenül RESTful API-vá alakítja
- [pg_graphql](http://github.com/powerbase/pg_graphql/) egy PostgreSQL kiterjesztés, amely GraphQL API-t tesz elérhetővé
- [Storage](https://github.com/skorpland/storage-api) egy RESTful felületet biztosít az S3-ban tárolt fájlok kezeléséhez, a Postgres segítségével a jogosultságok kezeléséhez.
- [postgres-meta](https://github.com/skorpland/postgres-meta) egy RESTful API a Postgres kezeléséhez, amely lehetővé teszi a táblák lekérdezését, szerepek hozzáadását, lekérdezések futtatását stb.
- [GoTrue](https://github.com/netlify/gotrue) egy SWT alapú API a felhasználók kezelésére és SWT tokenek kiadására.
- a [Kong](https://github.com/Kong/kong) egy felhő-natív API átjáró.

#### Ügyfélkönyvtárak

Az ügyfélkönyvtárakra vonatkozó megközelítésünk moduláris. Minden egyes alkönyvtár egy önálló megvalósítás egyetlen külső rendszerhez. Ez az egyik módja annak, hogy a meglévő eszközöket támogassuk.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Nyelv</th>
    <th>Ügyfél</th>
    <th colspan="5">Feature-kliensek (a Powerbase klienssel együtt)</th>
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
  
  <th colspan="7">⚡️ Hivatalos ⚡️</th>
  
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
  
  <th colspan="7">💚 Közösség 💚</th>
  
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

## Fordítások

- [Arabic | العربية](/i18n/README.ar.md)
- [Albán / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [bolgár / Български](/i18n/README.bg.md)
- [Katalán / Català](/i18n/README.ca.md)
- [Dán / Dansk](/i18n/README.da.md)
- [Holland / Nederlands](/i18n/README.nl.md)
- [angol](https://github.com/skorpland/powerbase)
- [Finn / Suomalainen](/i18n/README.fi.md)
- [Francia / Français](/i18n/README.fr.md)
- [Német / Deutsch](/i18n/README.de.md)
- [Görög / Ελληνικά](/i18n/README.gr.md)
- [Héber / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Magyar / Magyar](/i18n/README.hu.md)
- [Nepáli / नेपाली](/i18n/README.ne.md)
- [Indonéz / Bahasa Indonesia](/i18n/README.id.md)
- [Olasz / Italiano](/i18n/README.it.md)
- [Japán / 日本語](/i18n/README.jp.md)
- [Koreai / 한국어](/i18n/README.ko.md)
- [Maláj / Bahasa Malaysia](/i18n/README.ms.md)
- [Norvég (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Perzsa / فارسی](/i18n/README.fa.md)
- [Lengyel / Polski](/i18n/README.pl.md)
- [Portugál / Português](/i18n/README.pt.md)
- [Portugál (brazil) / Português Brasileiro](/i18n/README.pt-br.md)
- [Román / Română](/i18n/README.ro.md)
- [Orosz / Pусский](/i18n/README.ru.md)
- [Szerb / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Spanyol / Español](/i18n/README.es.md)
- [Egyszerűsített kínai / 简体中文](/i18n/README.zh-cn.md)
- [Svéd / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Hagyományos kínai / 繁體中文](/i18n/README.zh-tw.md)
- [Török / Türkçe](/i18n/README.tr.md)
- [Ukrán / Українська](/i18n/README.uk.md)
- [Vietnámi / Tiếng Việt](/i18n/README.vi-vn.md)
- [Fordítások listája](/i18n/languages.md) <!--- Keep only this -->

---

## Szponzorok

[![Új szponzor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
