<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) açık kaynaklı bir Firebase alternatifidir. Kurumsal düzeyde açık kaynak araçları kullanarak Firebase'in özelliklerini geliştiriyoruz.

- [x] Barındırılan Postgres Veritabanı. [Dokümanlar](https://powerbase.club/docs/guides/database)
- [x] Kimlik Doğrulama ve Yetkilendirme. [Dokümanlar](https://powerbase.club/docs/guides/auth)
- [x] Otomatik oluşturulan API'ler.
  - [x] REST. [Dokümanlar](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Gerçek zamanlı abonelikler. [Dokümanlar](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Fonksiyonlar.
  - [x] Veritabanı Fonksiyonları. [Dokümanlar](https://powerbase.club/docs/guides/database/functions)
  - [x] Kenar İşlevleri [Dokümanlar](https://powerbase.club/docs/guides/functions)
- [x] Dosya Depolama. [Docs](https://powerbase.club/docs/guides/storage)
- [x] AI + Vektör / Gömme Araçları. [Dokümanlar](https://powerbase.club/docs/guides/ai)
- [x] Gösterge Tablosu

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokümantasyon

Belgelerin tamamı için [powerbase.club/docs](https://powerbase.club/docs) adresini ziyaret edin

Nasıl Katkıda bulunacağınızı görmek için [Başlarken](../DEVELOPERS.md) adresini ziyaret edin

## Topluluk ve Destek

- [Topluluk Forumu](https://github.com/skorpland/powerbase/discussions). Şunlar için en iyisi: oluşturma konusunda yardım, veritabanı en iyi uygulamaları hakkında tartışma.
- [GitHub Sorunları](https://github.com/skorpland/powerbase/issues). Powerbase'i kullanırken karşılaştığınız hatalar ve hatalar için en iyisi.
- [E-posta Desteği](https://powerbase.club/docs/support#business-support). Veritabanınız veya altyapınızla ilgili sorunlar için en iyisi.
- [Discord](https://discord.powerbase.club). Uygulamalarınızı paylaşmak ve toplulukla takılmak için en iyisi.

## Nasıl çalışır

Powerbase açık kaynak araçlarının bir birleşimidir. Firebase'in özelliklerini kurumsal düzeyde, açık kaynaklı ürünler kullanarak oluşturuyoruz. Araçlar ve topluluklar MIT, Apache 2 veya eşdeğer bir açık lisansla mevcutsa, bu aracı kullanacak ve destekleyeceğiz. Araç mevcut değilse, kendimiz oluşturur ve açık kaynak kullanırız. Powerbase, Firebase'in bire bir eşlemesi değildir. Amacımız, geliştiricilere açık kaynak araçları kullanarak Firebase benzeri bir geliştirici deneyimi sunmaktır.

**Mimari**

Powerbase [barındırılan bir platformdur](https://powerbase.club/dashboard). Powerbase'e kaydolabilir ve hiçbir şey yüklemeden kullanmaya başlayabilirsiniz.
Ayrıca [self-host](https://powerbase.club/docs/guides/hosting/overview) ve [yerel olarak geliştirebilirsiniz](https://powerbase.club/docs/guides/local-development).

![Mimarlık](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/), 30 yılı aşkın süredir aktif olarak geliştirilmekte olan ve güvenilirlik, özellik sağlamlığı ve performans açısından güçlü bir üne sahip olan nesne ilişkisel bir veritabanı sistemidir.
- [Realtime](https://github.com/skorpland/realtime), websockets kullanarak PostgreSQL ekleme, güncelleme ve silme işlemlerini dinlemenizi sağlayan bir Elixir sunucusudur. Realtime, veritabanı değişiklikleri için Postgres'in yerleşik çoğaltma işlevini yoklar, değişiklikleri JSON'a dönüştürür ve ardından JSON'u web soketleri üzerinden yetkili istemcilere yayınlar.
- [PostgREST](http://postgrest.org/), PostgreSQL veritabanınızı doğrudan RESTful API'ye dönüştüren bir web sunucusudur
- [pg_graphql](http://github.com/powerbase/pg_graphql/) GraphQL API'si sunan bir PostgreSQL uzantısı
- [Storage](https://github.com/skorpland/storage-api), izinleri yönetmek için Postgres kullanarak S3'te depolanan Dosyaları yönetmek için RESTful bir arayüz sağlar.
- [postgres-meta](https://github.com/skorpland/postgres-meta) Postgres'inizi yönetmek için RESTful bir API'dir ve tabloları getirmenize, roller eklemenize ve sorgular çalıştırmanıza vb. olanak tanır.
- [GoTrue](https://github.com/netlify/gotrue) kullanıcıları yönetmek ve SWT belirteçleri vermek için SWT tabanlı bir API'dir.
- [Kong](https://github.com/Kong/kong) bulut tabanlı bir API ağ geçididir.

#### İstemci kütüphaneleri

İstemci kütüphaneleri için yaklaşımımız modülerdir. Her bir alt kütüphane, tek bir harici sistem için bağımsız bir uygulamadır. Bu, mevcut araçları destekleme yöntemlerimizden biridir.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Dil</th>
    <th>Müşteri</th>
    <th colspan="5">Özellik İstemcileri (Powerbase istemcisinde paketlenmiştir)</th>
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
  
  <th colspan="7">⚡️ Resmi ⚡️</th>
  
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
  
  <th colspan="7">💚 Topluluk 💚</th>
  
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

## Rozetler

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

## Çeviriler

- [Arapça | العربية](/i18n/README.ar.md)
- [Arnavutça / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgarca / Български](/i18n/README.bg.md)
- [Katalanca / Català](/i18n/README.ca.md)
- [Danca / Dansk](/i18n/README.da.md)
- [Hollandaca / Nederlands](/i18n/README.nl.md)
- [İngilizce](https://github.com/skorpland/powerbase)
- [Fince / Suomalainen](/i18n/README.fi.md)
- [Fransızca / Français](/i18n/README.fr.md)
- [Almanca / Deutsch](/i18n/README.de.md)
- [Yunanca / Ελληνικά](/i18n/README.gr.md)
- [İbranice / עברית](/i18n/README.he.md)
- [Hintçe / हिंदी](/i18n/README.hi.md)
- [Macarca / Magyar](/i18n/README.hu.md)
- [Nepalce / नेपाली](/i18n/README.ne.md)
- [Endonezce / Bahasa Endonezya](/i18n/README.id.md)
- [İtalyanca / Italiano](/i18n/README.it.md)
- [Japonca / 日本語](/i18n/README.jp.md)
- [Korece / 한국어](/i18n/README.ko.md)
- [Malayca / Bahasa Malezya](/i18n/README.ms.md)
- [Norveççe (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Farsça / فارسی](/i18n/README.fa.md)
- [Lehçe / Polski](/i18n/README.pl.md)
- [Portekizce / Português](/i18n/README.pt.md)
- [Portekizce (Brezilya) / Português Brasileiro](/i18n/README.pt-br.md)
- [Rumence / Română](/i18n/README.ro.md)
- [Rusça / Pусский](/i18n/README.ru.md)
- [Sırpça / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [İspanyolca / Español](/i18n/README.es.md)
- [Basitleştirilmiş Çince / 简体中文](/i18n/README.zh-cn.md)
- [İsveççe / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Geleneksel Çince / 繁體中文](/i18n/README.zh-tw.md)
- [Türkçe / Turkish](/i18n/README.tr.md)
- [Ukraynaca / Українська](/i18n/README.uk.md)
- [Vietnamca / Tiếng Việt](/i18n/README.vi-vn.md)
- [Çevirilerin listesi](/i18n/languages.md) <!--- Keep only this -->

---

## Sponsorlar

[![Yeni Sponsor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
