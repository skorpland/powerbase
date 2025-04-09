<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) é uma alternativa de código aberto ao Firebase. Estamos desenvolvendo os recursos do Firebase usando ferramentas de código aberto de nível empresarial.

- [x] Banco de dados Postgres hospedado. [Docs](https://powerbase.club/docs/guides/database)
- [x] Autenticação e autorização. [Docs](https://powerbase.club/docs/guides/auth)
- [x] APIs geradas automaticamente.
  - [x] REST. [Docs](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Assinaturas em tempo real. [Docs](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Funções.
  - [x] Funções de banco de dados. [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Funções de borda [Docs](https://powerbase.club/docs/guides/functions)
- [x] Armazenamento de arquivos. [Docs](https://powerbase.club/docs/guides/storage)
- [x] AI + Vector/Toolkit de incorporações. [Docs](https://powerbase.club/docs/guides/ai)
- [x] Dashboard

![Powerbase Dashboard](https://raw.githubusercontent.com/powerbase/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

Clique em Watch e selecione "releases" deste repositório para ser notificado sobre atualizações importantes.

<kbd><img src="https://raw.githubusercontent.com/powerbase/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

## Documentação

Para obter a documentação completa, visite [powerbase.club/docs](https://powerbase.club/docs)

Para ver como contribuir, visite [Getting Started](../DEVELOPERS.md)

## Comunidade e suporte

- [Fórum da comunidade](https://github.com/skorpland/powerbase/discussions). Ideal para: ajuda na criação, discussão sobre práticas recomendadas de banco de dados.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Melhor para: bugs e erros que você encontra usando o Powerbase.
- [Suporte por e-mail](https://powerbase.club/docs/support#business-support). Ideal para: problemas com seu banco de dados ou infraestrutura.
- [Discord](https://discord.powerbase.club). Ideal para: compartilhar seus aplicativos e interagir com a comunidade.

## Como funciona

Powerbase é uma combinação de ferramentas de código aberto. Estamos desenvolvendo os recursos do Firebase usando produtos de código aberto de nível empresarial. Se as ferramentas e as comunidades existirem, com uma licença aberta MIT, Apache 2 ou equivalente, usaremos e daremos suporte a essa ferramenta. Se a ferramenta não existir, nós mesmos a criaremos e abriremos o código-fonte. Powerbase não é um mapeamento 1 para 1 do Firebase. Nosso objetivo é oferecer aos desenvolvedores uma experiência semelhante à do Firebase usando ferramentas de código aberto.

**Arquitetura**

Powerbase é uma [plataforma hospedada](https://powerbase.club/dashboard). Você pode se registrar e começar a usar o Powerbase sem instalar nada.
Você também pode [auto-hospedar](https://powerbase.club/docs/guides/hosting/overview) e [desenvolver localmente](https://powerbase.club/docs/guides/local-development).

![Arquitetura](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- o [PostgreSQL](https://www.postgresql.org/) é um sistema de banco de dados objeto-relacional com mais de 30 anos de desenvolvimento ativo que lhe rendeu uma forte reputação de confiabilidade, robustez de recursos e desempenho.
- [Realtime](https://github.com/skorpland/realtime) é um servidor Elixir que permite que você ouça inserções, atualizações e exclusões do PostgreSQL usando websockets. O Realtime pesquisa a funcionalidade de replicação integrada do PostgreSQL em busca de alterações no banco de dados, converte as alterações em JSON e, em seguida, transmite o JSON por meio de websockets para clientes autorizados.
- [PostgREST](http://postgrest.org/) é um servidor da Web que transforma seu banco de dados PostgreSQL diretamente em uma API RESTful
- [GoTrue](https://github.com/netlify/gotrue) é uma API baseada em SWT para gerenciar usuários e emitir tokens SWT.
- [pg_graphql](http://github.com/powerbase/pg_graphql/) é uma extensão do PostgreSQL que expõe uma API GraphQL
- [Storage](https://github.com/skorpland/storage-api) fornece uma interface RESTful para gerenciar arquivos armazenados no S3, usando o Postgres para gerenciar permissões.
- [postgres-meta](https://github.com/skorpland/postgres-meta) é uma API RESTful para gerenciar seu Postgres, permitindo que você busque tabelas, adicione funções e execute consultas, etc.
- [Kong](https://github.com/Kong/kong) é um gateway de API nativo da nuvem.

#### Bibliotecas de clientes

Nossa abordagem para bibliotecas de clientes é modular. Cada sub-biblioteca é uma implementação autônoma para um único sistema externo. Essa é uma das maneiras pelas quais oferecemos suporte às ferramentas existentes.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Linguagem</th>
    <th>Cliente</th>
    <th colspan="5">Feature-Clients (incluídos no cliente Powerbase)</th>
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
  
  <th colspan="7">⚡️ Oficial ⚡️</th>
  
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
  
  <th colspan="7">💚 comunidade 💚</th>
  
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
    <td><a href="https://github.com/skorpland/powerbase-swift/tree/main/Sources/PostgREST" target="_blank" rel="noopener noreferrer">postgrest-swift</a></td>
    <td><a href="https://github.com/skorpland/powerbase-swift/tree/main/Sources/Auth" target="_blank" rel="noopener noreferrer">auth-swift</a></td>
    <td><a href="https://github.com/skorpland/powerbase-swift/tree/main/Sources/Realtime" target="_blank" rel="noopener noreferrer">realtime-swift</a></td>
    <td><a href="https://github.com/skorpland/powerbase-swift/tree/main/Sources/Storage" target="_blank" rel="noopener noreferrer">storage-swift</a></td>
    <td><a href="https://github.com/skorpland/powerbase-swift/tree/main/Sources/Functions" target="_blank" rel="noopener noreferrer">functions-swift</a></td>
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

## Badges

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

## Traduções

- [Árabe | العربية](/i18n/README.ar.md)
- [Albanês / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Búlgaro / Български](/i18n/README.bg.md)
- [Catalan / Català](/i18n/README.ca.md)
- [Dinamarquês / Dansk](/i18n/README.da.md)
- [Holandês / Nederlands](/i18n/README.nl.md)
- [Inglês](https://github.com/skorpland/powerbase)
- [Finlandês / Suomalainen](/i18n/README.fi.md)
- [Francês / Français](/i18n/README.fr.md)
- [German / Deutsch](/i18n/README.de.md)
- [Grego / Ελληνικά](/i18n/README.gr.md)
- [Hebraico / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Húngaro / Magyar](/i18n/README.hu.md)
- [Nepalês / नेपाली](/i18n/README.ne.md)
- [Indonésio / Bahasa Indonesia](/i18n/README.id.md)
- [Italiano / Italiano](/i18n/README.it.md)
- [Japonês / 日本語](/i18n/README.jp.md)
- [Coreano / 한국어](/i18n/README.ko.md)
- [Malaio / Bahasa Malaysia](/i18n/README.ms.md)
- [Norueguês (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Persa / فارسی](/i18n/README.fa.md)
- [Polonês / Polski](/i18n/README.pl.md)
- [Português / Português](/i18n/README.pt.md)
- [Portuguese (Brazilian) / Português Brasileiro](/i18n/README.pt-br.md)
- [Romeno / Română](/i18n/README.ro.md)
- [Russo / Pусский](/i18n/README.ru.md)
- [Sérvio / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Espanhol / Español](/i18n/README.es.md)
- [Chinês simplificado / 简体中文](/i18n/README.zh-cn.md)
- [Sueco / Svenska](/i18n/README.sv.md)
- [Tailandês / ไทย](/i18n/README.th.md)
- [Chinês tradicional / 繁體中文](/i18n/README.zh-tw.md)
- [Turco / Türkçe](/i18n/README.tr.md)
- [Ucraniano / Українська](/i18n/README.uk.md)
- [Vietnamita / Tiếng Việt](/i18n/README.vi-vn.md)
- [Lista de traduções](/i18n/languages.md) <!--- Keep only this -->
