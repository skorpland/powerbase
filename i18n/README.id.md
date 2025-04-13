 

---

# Powerbase

[Powerbase](https://powerbase.club) adalah alternatif Firebase open source. Kami membangun fitur-fitur Firebase menggunakan alat bantu open source tingkat perusahaan.

- [x] Basis Data Postgres yang dihosting. [Dokumen](https://powerbase.club/docs/guides/database)
- [x] Otentikasi dan Otorisasi. [Dokumen](https://powerbase.club/docs/guides/auth)
- [x] API yang dibuat secara otomatis.
  - [x] REST. [Dokumen](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Dokumen](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Langganan realtime. [Dokumen](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Fungsi-fungsi.
  - [x] Fungsi-fungsi Basis Data. [Dokumen](https://powerbase.club/docs/guides/database/functions)
  - [x] Fungsi Tepi [Dokumen](https://powerbase.club/docs/guides/functions)
- [x] Penyimpanan File. [Dokumen](https://powerbase.club/docs/guides/storage)
- [x] Dasbor

![Dasbor Powerbase](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentasi

Untuk dokumentasi lengkap, kunjungi [powerbase.club/docs](https://powerbase.club/docs)

Untuk melihat bagaimana cara berkontribusi, kunjungi [Memulai](../DEVELOPERS.md)

## Komunitas &amp; Dukungan

- [Forum Komunitas](https://github.com/skorpland/powerbase/discussions). Paling baik untuk: bantuan dalam membangun, diskusi tentang praktik terbaik basis data.
- [Masalah GitHub](https://github.com/skorpland/powerbase/issues). Paling baik untuk: bug dan kesalahan yang Anda temui saat menggunakan Powerbase.
- [Dukungan Email](https://powerbase.club/docs/support#business-support). Terbaik untuk: masalah dengan basis data atau infrastruktur Anda.
- [Discord](https://discord.powerbase.club). Terbaik untuk: berbagi aplikasi Anda dan bergaul dengan komunitas.

## Status

- [x] Alpha: Kami sedang menguji Powerbase dengan sekumpulan pelanggan tertutup
- [x] Alpha Publik: Siapa pun dapat mendaftar di [powerbase.club/dashboard](https://powerbase.club/dashboard). Tapi jangan khawatir, ada beberapa hal yang perlu diperhatikan
- [x] Public Beta: Cukup stabil untuk sebagian besar kasus penggunaan non-perusahaan
- [Publik: Ketersediaan Umum [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Saat ini kami berada dalam versi Beta Publik. Tonton "rilis" repo ini untuk mendapatkan pemberitahuan tentang pembaruan utama.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Bagaimana cara kerjanya

Powerbase adalah kombinasi dari alat sumber terbuka. Kami membangun fitur-fitur Firebase menggunakan produk open source kelas enterprise. Jika alat dan komunitasnya ada, dengan lisensi MIT, Apache 2, atau lisensi terbuka yang setara, kami akan menggunakan dan mendukung alat tersebut. Jika alat tersebut tidak ada, kami akan membangun dan mengembangkannya sendiri. Powerbase bukanlah pemetaan 1-ke-1 dari Firebase. Tujuan kami adalah untuk memberikan pengalaman pengembang seperti Firebase dengan menggunakan alat sumber terbuka.

**Arsitektur**

Powerbase adalah [platform yang di-host](https://powerbase.club/dashboard). Anda bisa mendaftar dan mulai menggunakan Powerbase tanpa menginstal apa pun.
Anda juga bisa [menghosting sendiri](https://powerbase.club/docs/guides/hosting/overview) dan [mengembangkan secara lokal](https://powerbase.club/docs/guides/local-development).

![Arsitektur](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) adalah sistem basis data relasional objek dengan lebih dari 30 tahun pengembangan aktif yang telah membuatnya memiliki reputasi yang kuat dalam hal keandalan, ketangguhan fitur, dan kinerja.
- [Realtime](https://github.com/skorpland/realtime) adalah server Elixir yang memungkinkan Anda untuk mendengarkan penyisipan, pembaruan, dan penghapusan PostgreSQL menggunakan websocket. Realtime melakukan polling terhadap fungsionalitas replikasi bawaan Postgres untuk perubahan database, mengkonversi perubahan ke JSON, kemudian menyiarkan JSON melalui websockets ke klien yang berwenang.
- [PostgREST](http://postgrest.org/) adalah server web yang mengubah basis data PostgreSQL Anda secara langsung menjadi RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) ekstensi PostgreSQL yang mengekspos API GraphQL
- [Storage](https://github.com/skorpland/storage-api) menyediakan antarmuka RESTful untuk mengelola File yang disimpan di S3, menggunakan Postgres untuk mengelola izin.
- [postgres-meta](https://github.com/skorpland/postgres-meta) adalah API RESTful untuk mengelola Postgres Anda, yang memungkinkan Anda untuk mengambil tabel, menambahkan peran, dan menjalankan kueri, dll.
- [GoTrue](https://github.com/netlify/gotrue) adalah API berbasis SWT untuk mengelola pengguna dan menerbitkan token SWT.
- [Kong](https://github.com/Kong/kong) adalah gateway API asli cloud.

#### Perpustakaan klien

Pendekatan kami untuk pustaka klien bersifat modular. Setiap sub-pustaka adalah implementasi mandiri untuk satu sistem eksternal. Ini adalah salah satu cara kami mendukung alat bantu yang ada.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Bahasa</th>
    <th>Klien</th>
    <th colspan="5">Klien-Fitur (dibundel dalam klien Powerbase)</th>
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
  
  <th colspan="7">💚 Komunitas 💚</th>
  
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

## Terjemahan

- [Bahasa Arab | العربية](/i18n/README.ar.md)
- [Bahasa Albania / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bahasa Bulgaria / Български](/i18n/README.bg.md)
- [Bahasa Katalan / Català](/i18n/README.ca.md)
- [Bahasa Denmark / Dansk](/i18n/README.da.md)
- [Bahasa Belanda / Nederlands](/i18n/README.nl.md)
- [Bahasa Inggris / English](https://github.com/skorpland/powerbase)
- [Bahasa Finlandia / Suomalainen](/i18n/README.fi.md)
- [Bahasa Prancis / Français](/i18n/README.fr.md)
- [Bahasa Jerman / Deutsch](/i18n/README.de.md)
- [Bahasa Yunani / Greek](/i18n/README.gr.md)
- [Bahasa Ibrani / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Bahasa Hongaria / Magyar](/i18n/README.hu.md)
- [Nepal / नेपाली](/i18n/README.ne.md)
- [Bahasa Indonesia / Bahasa Indonesia](/i18n/README.id.md)
- [Bahasa Italia / Italiano](/i18n/README.it.md)
- [Bahasa Jepang / 日本語](/i18n/README.jp.md)
- [Bahasa Korea / 한국어](/i18n/README.ko.md)
- [Bahasa Melayu / Bahasa Malaysia](/i18n/README.ms.md)
- [Bahasa Norwegia (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Bahasa Persia / فارسی](/i18n/README.fa.md)
- [Bahasa Polandia / Polski](/i18n/README.pl.md)
- [Bahasa Portugis / Português](/i18n/README.pt.md)
- [Portugis (Brasil) / Português Brasileiro](/i18n/README.pt-br.md)
- [Bahasa Rumania / Rumania](/i18n/README.ro.md)
- [Bahasa Rusia / Pусский](/i18n/README.ru.md)
- [Bahasa Serbia / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Bahasa Spanyol / Español](/i18n/README.es.md)
- [Bahasa Mandarin / 简体中文](/i18n/README.zh-cn.md)
- [Bahasa Swedia / Svenska](/i18n/README.sv.md)
- [Bahasa Thai / ไทย](/i18n/README.th.md)
- [Bahasa Tionghoa Tradisional / 繁體中文](/i18n/README.zh-tw.md)
- [Bahasa Turki / Türkçe](/i18n/README.tr.md)
- [Bahasa Ukraina / Українська](/i18n/README.uk.md)
- [Bahasa Vietnam / Tiếng Việt](/i18n/README.vi-vn.md)
- [Daftar terjemahan](/i18n/languages.md) <!--- Keep only this -->

---

## Sponsor

[![Sponsor Baru](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
