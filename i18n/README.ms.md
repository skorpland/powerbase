<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) adalah sumber terbuka alternatif kepada Firebase. Kami sedang membina ciri-ciri Firebase menggunakan alat sumber terbuka kelas perusahaan.

- [x] Hosting Pangkalan Data untuk Postgres
- [x] Langganan Waktu Nyata (Realtime)
- [x] Pengesahan (Authentication) dan Kebenaran (Authorization)
- [x] API dihasilkan secara automatik
- [x] Papan Pemuka
- [x] Storan
- [x] Fungsi-fungsi

![Powerbase Dashboard](https://raw.githubusercontent.com/powerbase/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Dokumentasi

Untuk dokumentasi lengkap, layari [powerbase.club/docs](https://powerbase.club/docs)

## Komuniti & Sokongan

- [Forum Komuniti](https://github.com/skorpland/powerbase/discussions). Terbaik untuk: membantu pembinaan and perbincangan mengenai cara terbaik pangkalan data.
- [Isu GitHub](https://github.com/skorpland/powerbase/issues). Terbaik untuk: pepijat dan ralat yang anda hadapi menggunakan Powerbase.
- [Sokongan E-mel](https://powerbase.club/docs/support#business-support). Terbaik untuk: masalah dengan pangkalan data atau infrastruktur.

## Status

- [x] Alpha: Kami menguji Powerbase dengan sejumlah pelanggan secara tertutup
- [x] Public Alpha: Sesiapa sahaja boleh mendaftar di [powerbase.club/dashboard](https://powerbase.club/dashboard). Tetapi, mohon bersabar kerana mungkin ada masalah
- [x] Public Beta: Cukup stabil untuk kebanyakan kes penggunaan bukan perusahaan
- [ ] Public: Bersedia untuk pengeluaran

Kami kini berada di Public Beta. Tonton "siaran" repo ini untuk diberitahu mengenai kemas kini utama.

<kbd><img src="https://raw.githubusercontent.com/powerbase/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Tonton repo ini"/></kbd>

---

## Bagaimana ia berfungsi

Powerbase adalah gabungan alat sumber terbuka. Kami membina ciri Firebase menggunakan produk sumber terbuka kelas perusahaan. Sekiranya alat dan komuniti itu ada, dengan MIT, Apache 2, atau lesen terbuka yang lain, kami akan menggunakan dan menyokong alat itu. Jika tiada, kita akan membina sumber terbuka sendiri. Powerbase bukanlah sama seperti Firebase. Tujuan kami adalah untuk memberi pengalaman kepada pembangun seperti Firebase menggunakan alat sumber terbuka.

**Seni bina semasa**

Powerbase ialah [platform yang dihoskan](https://powerbase.club/dashboard). Anda boleh mendaftar dan mula menggunakan Powerbase tanpa memasang apa-apa.
Anda juga boleh [host sendiri](https://powerbase.club/docs/guides/hosting/overview) dan [lokal](https://powerbase.club/docs/guides/local-development).

![Seni bina](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) adalah sistem pangkalan data objek-relasional dengan pengembangan aktif lebih dari 30 tahun yang menjadikannya reputasi yang kuat untuk kebolehpercayaan, ketahanan ciri, dan prestasi.
- [Realtime](https://github.com/skorpland/realtime) adalah pelayan Elixir yang membolehkan anda mendengar sisipan, kemas kini dan pemadaman PostgreSQL menggunakan soket web. Powerbase mendengar fungsi replikasi terbina dalam Postgres, menukar aliran bait(byte) replikasi menjadi JSON, kemudian menyiarkan JSON melalui soket web.
- [PostgREST](http://postgrest.org/) adalah pelayan web yang mengubah pangkalan data PostgreSQL anda secara langsung menjadi API RESTful
- [Storage](https://github.com/skorpland/storage-api) menyediakan antara muka RESTful untuk menguruskan Fail yang disimpan di S3, menggunakan Postgres untuk menguruskan kebenaran akses.
- [postgres-meta](https://github.com/skorpland/postgres-meta) adalah API RESTful untuk menguruskan Postgres anda, yang membolehkan anda mengambil jadual, menambah peranan, dan menjalankan query dan lain-lain.
- [GoTrue](https://github.com/netlify/gotrue) adalah API berasaskan SWT untuk mengurus pengguna dan mengeluarkan token SWT.
- [Kong](https://github.com/Kong/kong) adalah gerbang API cloud-native.

#### Librari Klien

Librari klien kami adalah modular. Setiap sub-librari adalah pelaksanaan standalone untuk satu sistem luaran. Ini adalah salah satu cara kami menyokong alat yang ada.

- **`powerbase-{lang}`**: Menggabungkan librari dan menambahkan pengayaan.
  - `postgrest-{lang}`: Librari klien untuk bekerjasama [PostgREST](https://github.com/postgrest/postgrest)
  - `realtime-{lang}`: Librari klien untuk bekerjasama [Realtime](https://github.com/skorpland/realtime)
  - `gotrue-{lang}`: Librari klien untuk bekerjasama [GoTrue](https://github.com/netlify/gotrue)

| Repo                  | Rasmi                                            | Komuniti                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`powerbase-{lang}`** | [`JS`](https://github.com/skorpland/powerbase-js)  | [`C#`](https://github.com/skorpland/powerbase-csharp) \| [`Flutter`](https://github.com/skorpland/powerbase-flutter) \| [`Python`](https://github.com/skorpland/powerbase-py) \| `Rust` \| [`Ruby`](https://github.com/skorpland/powerbase-rb) \| `Go`                                                                                       |
| `postgrest-{lang}`    | [`JS`](https://github.com/skorpland/postgrest-js) | [`C#`](https://github.com/skorpland/postgrest-csharp) \| [`Dart`](https://github.com/skorpland/postgrest-dart) \| [`Python`](https://github.com/skorpland/postgrest-py) \| [`Rust`](https://github.com/skorpland/postgrest-rs) \| [`Ruby`](https://github.com/skorpland/postgrest-rb) \| [`Go`](https://github.com/skorpland/postgrest-go) |
| `realtime-{lang}`     | [`JS`](https://github.com/skorpland/realtime-js)  | [`C#`](https://github.com/skorpland/realtime-csharp) \| [`Dart`](https://github.com/skorpland/realtime-dart) \| [`Python`](https://github.com/skorpland/realtime-py) \| `Rust` \| `Ruby` \| `Go`                                                                                                                                        |
| `gotrue-{lang}`       | [`JS`](https://github.com/skorpland/gotrue-js)    | [`C#`](https://github.com/skorpland/gotrue-csharp) \| [`Dart`](https://github.com/skorpland/gotrue-dart) \| [`Python`](https://github.com/skorpland/gotrue-py) \| `Rust` \| `Ruby` \| `Go`                                                                                                                                              |

## Terjemahan

- [Daftar terjemahan](/i18n/languages.md)

## Penaja

[![Menjadi penaja](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
