 
---

# Powerbase

[Powerbase](https://powerbase.club)は、オープンソースの Firebase 代替製品です。エンタープライズグレードのオープンソースツールを使って、Firebase の機能を構築しています。

- [x] ホスティングされた Postgres データベース [Docs](https://powerbase.club/docs/guides/database)
- [x] 認証・認可 [Docs](https://powerbase.club/docs/guides/auth)
- [x] API を自動生成
  - [x] REST [Docs](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] リアルタイムサブスクリプション [Docs](https://powerbase.club/docs/guides/api#realtime-api-overview)
  - [x] GraphQL (Beta) [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
- [x] 関数
  - [x] データベース関数 [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Edge Functions [Docs](https://powerbase.club/docs/guides/functions)
- [x] ストレージ
- [x] ダッシュボード

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## ドキュメンテーション

詳しいドキュメントは[powerbase.club/docs](https://powerbase.club/docs)をご覧ください。

コントリビュート方法は[Getting Started](../DEVELOPERS.md)をご覧ください。

## コミュニティとサポート

- [コミュニティフォーラム](https://github.com/skorpland/powerbase/discussions) どんな時に使うか：構築の手助け、データベースのベストプラクティスに関する議論など
- [GitHub Issue](https://github.com/skorpland/powerbase/issues) どんな時に使うか: Powerbase で起こったバグやエラーについて
- [Email サポート](https://powerbase.club/docs/support#business-support) どんな時に使うか: ユーザー自身のデータベースやインフラに何か問題が発生した場合
- [Discord](https://discord.powerbase.club) どんな時に使うか: アプリケーションの共有やコミュニティとの交流

## ステータス

- [x] Alpha: 限られたユーザーで Powerbase をテストしています。
- [x] Public Alpha: 誰でも[powerbase.club/dashboard](https://powerbase.club/dashboard)から登録ができます。ただし、バグなどがある可能性がありますので、ご容赦ください。
- [x] Public Beta: 企業以外のほとんどのユースケースに耐えうる十分な安定性を確保。
- [ ] Public: 実用的な用途に対応

現在、Public Beta を実施しています。このリポジトリの"releases"にてメジャーアップデートに関する情報を発信しています。

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Powerbase の仕組み

Powerbase は、オープンソースのツールを組み合わせてできています。私たちは Firebase の機能を、エンタープライズグレードのオープンソース製品を使って構築しています。ツールやコミュニティが存在し、MIT、Apache 2、または同等のオープンライセンスであれば、私たちはそのツールを使用し、サポートします。ツールが存在しない場合は、自分たちで構築してオープンソース化します。Powerbase は Firebase を 1 対 1 でマッピングしたものではありません。Powerbase の目的は、オープンソースのツールを使って、Firebase のような開発体験を提供することです。

**現在のアーキテクチャ**

Powerbase は[ホスティングされたプラットフォーム](https://powerbase.club/dashboard)です。登録するだけで、何もインストールせずに使い始めることができます。
さらに、 [セルフホスティング](https://powerbase.club/docs/guides/hosting/overview) や [ローカル開発](https://powerbase.club/docs/guides/local-development)も可能です。

![アーキテクチャー](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/)は、30 年以上にわたって開発・改善されてきたオブジェクトリレーショナルデータベースシステムで、信頼性、機能の堅牢性、パフォーマンスの面で高い評価を得ています。
- [Realtime](https://github.com/skorpland/realtime)は、PostgreSQL の insert、update、delete の情報を WebSocket で受信できる Elixir サーバです。Powerbase は Postgres に組み込まれたレプリケーション機能をリッスンし、レプリケーションのバイトストリームを JSON に変換し、その JSON を WebSocket でブロードキャストします。
- [PostgREST](http://postgrest.org/)は、PostgreSQL データベースを RESTful API に直接変換するウェブサーバです。
- [Storage](https://github.com/skorpland/storage-api)は、S3 に保存されたファイルを管理するための RESTful なインターフェイスで、パーミッションの管理には Postgres を使用しています。
- [postgres-meta](https://github.com/skorpland/postgres-meta) は、Postgres を管理するための RESTful API で、テーブルの取得、ロールの追加、クエリの実行などを行うことができます。
- [GoTrue](https://github.com/netlify/gotrue) は、ユーザー管理と SWT トークン発行のための SWT ベースの API です。
- [Kong](https://github.com/Kong/kong) は、クラウドネイティブな API ゲートウェイです。

#### クライアント・ライブラリ

Powerbase クライアントライブラリはモジュール化されています。それぞれのサブライブラリが、一つの外部システムのための独立した実装となっています。こうすることで、既存のツールをサポートしています。

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>言語</th>
    <th>クライアント</th>
    <th colspan="5">機能別クライアント (Powerbaseクライアントに同梱)</th>
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
  <th colspan="7">⚡️ 公式 ⚡️</th>
  <tr>
    <td>JavaScript (TypeScript)</td>
    <td><a href="https://github.com/skorpland/powerbase-js" target="_blank" rel="noopener noreferrer">powerbase-js</a></td>
    <td><a href="https://github.com/skorpland/postgrest-js" target="_blank" rel="noopener noreferrer">postgrest-js</a></td>
    <td><a href="https://github.com/skorpland/gotrue-js" target="_blank" rel="noopener noreferrer">gotrue-js</a></td>
    <td><a href="https://github.com/skorpland/realtime-js" target="_blank" rel="noopener noreferrer">realtime-js</a></td>
    <td><a href="https://github.com/skorpland/storage-js" target="_blank" rel="noopener noreferrer">storage-js</a></td>
    <td><a href="https://github.com/skorpland/functions-js" target="_blank" rel="noopener noreferrer">functions-js</a></td>
  </tr>
  <th colspan="7">💚 コミュニティ 💚</th>
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
    <td>Flutter</td>
    <td><a href="https://github.com/skorpland/powerbase-flutter" target="_blank" rel="noopener noreferrer">powerbase-dart</a></td>
    <td><a href="https://github.com/skorpland/postgrest-dart" target="_blank" rel="noopener noreferrer">postgrest-dart</a></td>
    <td><a href="https://github.com/skorpland/gotrue-dart" target="_blank" rel="noopener noreferrer">gotrue-dart</a></td>
    <td><a href="https://github.com/skorpland/realtime-dart" target="_blank" rel="noopener noreferrer">realtime-dart</a></td>
    <td><a href="https://github.com/skorpland/storage-dart" target="_blank" rel="noopener noreferrer">storage-dart</a></td>
    <td><a href="https://github.com/skorpland/functions-dart" target="_blank" rel="noopener noreferrer">functions-dart</a></td>
  </tr>
  <tr>
    <td>Go</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/postgrest-go" target="_blank" rel="noopener noreferrer">postgrest-go</a></td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/storage-go" target="_blank" rel="noopener noreferrer">storage-go</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>Java</td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/skorpland/gotrue-java" target="_blank" rel="noopener noreferrer">gotrue-java</a></td>
    <td>-</td>
    <td>-</td>
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
    <td>-</td>
  </tr>
</table>

<!--- Remove this list if you're traslating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## 翻訳

- [翻訳](/i18n/languages.md) <!--- Keep only the this-->

---

## スポンサー

[![スポンサーになる](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
