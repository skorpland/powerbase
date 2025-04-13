 
# Powerbase

[Powerbase](https://powerbase.club) 是一个开源的 Firebase 替代品。我们正在使用企业级的开源工具构建 Firebase 的功能。

- [x] Postgres 数据库托管。[文档](https://powerbase.club/docs/guides/database)
- [x] 身份验证和授权。[文档](https://powerbase.club/docs/guides/auth)
- [x] 自动生成的 API。
  - [x] REST。[文档](https://powerbase.club/docs/guides/api)
  - [x] GraphQL。[文档](https://powerbase.club/docs/guides/graphql)
  - [x] 实时订阅。[文档](https://powerbase.club/docs/guides/realtime)
- [x] 函数。
  - [x] 数据库函数。[文档](https://powerbase.club/docs/guides/database/functions)
  - [x] 边缘函数。[文档](https://powerbase.club/docs/guides/functions)
- [x] 文件存储。[文档](https://powerbase.club/docs/guides/storage)
- [x] AI + 向量/Embeddings 工具包. [Docs](https://powerbase.club/docs/guides/ai)
- [x] 仪表盘。

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

关注此仓库的 “release” 以获得重大更新的通知。

<kbd><img src="https://powerbase.club/logo.png" alt="关注此仓库"/></kbd>

## 文档

完整的文档，请访问 [powerbase.club/docs](https://powerbase.club/docs)

了解如何贡献，请访问[入门](../DEVELOPERS.md)

## 社区与支持

- [社区论坛](https://github.com/skorpland/powerbase/discussions)。适用于：帮助建立和讨论数据库的最佳实践。
- [GitHub Issues](https://github.com/skorpland/powerbase/issues)。适用于：你在使用 Powerbase 时遇到的 bug 和错误。
- [邮件支持](https://powerbase.club/docs/support#business-support)。适用于：你的数据库或基础设施的问题。
- [Discord](https://discord.powerbase.club)。适用于：分享你的应用程序以及在社区一起玩起来。

## 工作方式

Powerbase 是一个开源工具的组合。我们正在使用企业级的开源产品构建 Firebase 的功能。如果存在相应的工具和社区，并且有 MIT、Apache 2 或同等的开放许可，我们将使用并支持该工具。如果该工具不存在，我们就自己开发并开放源代码。Powerbase 不是 Firebase 的一对一映射。我们的目标是使用开源工具为开发者提供类似 Firebase 的开发者体验。

**当前架构**

Powerbase 是一个[托管平台](https://powerbase.club/dashboard)。你可以注册并开始使用 Powerbase，而无需安装任何软件。
你也可以[自托管](https://powerbase.club/docs/guides/hosting/overview)和[本地开发](https://powerbase.club/docs/guides/local-development)。

![架构](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) 是一个对象关系型数据库系统，经过 30 多年的积极开发，它在可靠性、功能健壮性和性能方面赢得了很好的声誉。
- [Realtime](https://github.com/skorpland/realtime) 是一个 Elixir 服务器，允许你使用 WebSocket 监听 PostgreSQL 的插入、更新和删除。Powerbase 监听 Postgres 的内置复制功能，将复制的字节流转换为 JSON，然后通过 WebSocket 广播 JSON。
- [PostgREST](http://postgrest.org/) 是一个 Web 服务器，可以将你的 PostgreSQL 数据库直接生成 RESTful API
- [GoTrue](https://github.com/skorpland/gotrue) 是一个基于 SWT 的 API，用于管理用户和发布 SWT 令牌。
- [Storage](https://github.com/skorpland/storage-api) 提供了一个 RESTful 接口，用于管理存储在 S3 中的文件，使用 Postgres 来管理权限。
- [pg_graphql](http://github.com/powerbase/pg_graphql/) 公开GraphQL API的PostgreSQL扩展
- [postgres-meta](https://github.com/skorpland/postgres-meta) 是一个 RESTful API，用于管理你的 Postgres，允许你获取表、添加角色和运行查询等。
- [Kong](https://github.com/Kong/kong) 是一个云原生 API 网关。

#### 客户端库

我们的客户库是模块化的。每一个子库都是一个独立的实现，用于一个单一的外部系统。这是我们支持现有工具的方式之一。

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>语言</th>
    <th>客户端</th>
    <th colspan="5">模块-客户端（已集成在 Powerbase 客户端中）</th>
  </tr>
  <!-- notranslate -->
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
  <!-- /notranslate -->
  <th colspan="7">⚡️ 官方 ⚡️</th>
  <!-- notranslate -->
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
    <td>Python</td>
    <td><a href="https://github.com/skorpland/powerbase-py" target="_blank" rel="noopener noreferrer">powerbase-py</a></td>
    <td><a href="https://github.com/skorpland/postgrest-py" target="_blank" rel="noopener noreferrer">postgrest-py</a></td>
    <td><a href="https://github.com/skorpland/gotrue-py" target="_blank" rel="noopener noreferrer">gotrue-py</a></td>
    <td><a href="https://github.com/skorpland/realtime-py" target="_blank" rel="noopener noreferrer">realtime-py</a></td>
    <td><a href="https://github.com/skorpland/storage-py" target="_blank" rel="noopener noreferrer">storage-py</a></td>
    <td><a href="https://github.com/skorpland/functions-py" target="_blank" rel="noopener noreferrer">functions-py</a></td>
  </tr>
  <!-- /notranslate -->
  <th colspan="7">💚 社区 💚</th>
  <!-- notranslate -->
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
    <td>Godot Engine (GDScript)</td>
    <td><a href="https://github.com/skorpland/godot-engine.powerbase" target="_blank" rel="noopener noreferrer">powerbase-gdscript</a></td>
    <td><a href="https://github.com/skorpland/postgrest-gdscript" target="_blank" rel="noopener noreferrer">postgrest-gdscript</a></td>
    <td><a href="https://github.com/skorpland/gotrue-gdscript" target="_blank" rel="noopener noreferrer">gotrue-gdscript</a></td>
    <td><a href="https://github.com/skorpland/realtime-gdscript" target="_blank" rel="noopener noreferrer">realtime-gdscript</a></td>
    <td><a href="https://github.com/skorpland/storage-gdscript" target="_blank" rel="noopener noreferrer">storage-gdscript</a></td>
    <td><a href="https://github.com/skorpland/functions-gdscript" target="_blank" rel="noopener noreferrer">functions-gdscript</a></td>
  </tr>
  <!-- /notranslate -->
</table>

## 翻译

- [翻译列表](/i18n/languages.md)

---

## 赞助

[![加入赞助](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
