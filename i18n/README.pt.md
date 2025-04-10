<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) é uma alternativa de código aberto ao Firebase. Estamos reproduzindo as funcionalidades do Firebase usando ferramentas de código aberto de nível empresarial.

- [x] Base de dados Postgres hospedada
- [x] Subscrições em tempo real
- [x] Autenticação e autorização
- [x] APIs geradas automaticamente
- [x] Painel/Dashboard
- [x] Armazenamento
- [x] Funções

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Documentação

Para ver a documentação completa, visite [powerbase.club/docs](https://powerbase.club/docs)

## Comunidade & Suporte

- [Fórum da comunidade](https://github.com/skorpland/powerbase/discussions). Indicado para: ajuda no desenvolvimento, discussão sobre as melhores práticas de base de dados.
- [Problemas do GitHub](https://github.com/skorpland/powerbase/issues). Indicado para: bugs e erros que tu encontrares ao usar o Powerbase.
- [Suporte por e-mail](https://powerbase.club/docs/support#business-support). Indicado para: problemas com a tua base de dados ou infraestrutura.

## Status

- [x] Alpha: estamos a testar o Powerbase com um grupo fechado de clientes
- [x] Alpha Público: Qualquer pessoa pode se inscrever em [powerbase.club/dashboard](https://powerbase.club/dashboard). Mas vai com calma, ainda existem alguns problemas.
- [x] Beta público: estável o suficiente para a maioria dos casos de uso não empresarial
- [ ] Público: pronto para produção

Estamos atualmente em Beta Público. Assista aos lançamentos deste repositório para ser notificado sobre as principais atualizações.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

---

## Como funciona

Powerbase é uma combinação de ferramentas de código aberto. Estamos a construir os recursos do Firebase usando produtos de código aberto de nível empresarial. Se as ferramentas e comunidades existirem, com uma licença MIT, Apache 2 ou licença aberta equivalente, usaremos e ofereceremos suporte para essa ferramenta. Se a ferramenta não existir, nós mesmos a construímos e abrimos o código-fonte. Powerbase não é uma reprodução 1 para 1 do Firebase. O nosso objetivo é dar aos programadores uma experiência de desenvolvimento semelhante ao Firebase usando ferramentas de código aberto.

**Arquitetura atual**

Powerbase é uma [plataforma hospedada](https://powerbase.club/dashboard). Podes-te inscrever e começar a usar o Powerbase sem instalar nada. Ainda estamos a criar a experiência de desenvolvimento local - esse é nosso foco atual, juntamente com a estabilidade da plataforma.

![Arquitetura](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) é um sistema de base de dados objeto-relacional com mais de 30 anos de desenvolvimento ativo que lhe rendeu uma forte reputação de confiabilidade, robustez de recursos e desempenho.
- [Realtime](https://github.com/skorpland/realtime) é um servidor Elixir que permite ouvir inserções, atualizações e exclusões PostgreSQL usando websockets. A Powerbase escuta a funcionalidade de replicação embutida do Postgres, converte o fluxo de bytes de replicação em JSON e, de seguida, transmite o JSON através de websockets.
- [PostgREST](http://postgrest.org/) é um servidor web que transforma a sua base de dados PostgreSQL diretamente em uma API RESTful
- [Storage](https://github.com/skorpland/storage-api) fornece uma interface RESTful para gerir arquivos armazenados no S3, usando Postgres para gerir permissões.
- [postgres-meta](https://github.com/skorpland/postgres-meta) é uma API RESTful para gerir o seu Postgres, permitindo que você procure tabelas, adicione funções e execute consultas etc.
- [GoTrue](https://github.com/netlify/gotrue) é uma API baseada em SWT para gerir utilizadores e emitir tokens SWT.
- [Kong](https://github.com/Kong/kong) é um gateway de API nativo da nuvem.

#### Bibliotecas Cliente

Nossa biblioteca cliente é modular. Cada sub-biblioteca é uma implementação independente para um único sistema externo. Esta é uma das maneiras pelas quais oferecemos suporte às ferramentas existentes.

- **`powerbase-{lang}`**: Combina bibliotecas e adiciona funcionalidades.
  - `postgrest-{lang}`: Biblioteca cliente para trabalhar com [PostgREST](https://github.com/postgrest/postgrest)
  - `realtime-{lang}`: Biblioteca cliente para trabalhar com [Realtime](https://github.com/skorpland/realtime)
  - `gotrue-{lang}`: Biblioteca cliente para trabalhar com [GoTrue](https://github.com/netlify/gotrue)

| Repositório           | Oficial                                          | Comunidade                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`powerbase-{lang}`** | [`JS`](https://github.com/skorpland/powerbase-js)  | [`C#`](https://github.com/skorpland/powerbase-csharp) \| [`Flutter`](https://github.com/skorpland/powerbase-flutter) \| [`Python`](https://github.com/skorpland/powerbase-py) \| `Rust`                                          |
| `postgrest-{lang}`    | [`JS`](https://github.com/skorpland/postgrest-js) | [`C#`](https://github.com/skorpland/postgrest-csharp) \| [`Dart`](https://github.com/skorpland/postgrest-dart) \| [`Python`](https://github.com/skorpland/postgrest-py) \| [`Rust`](https://github.com/skorpland/postgrest-rs) |
| `realtime-{lang}`     | [`JS`](https://github.com/skorpland/realtime-js)  | [`C#`](https://github.com/skorpland/realtime-csharp) \| [`Dart`](https://github.com/skorpland/realtime-dart) \| [`Python`](https://github.com/skorpland/realtime-py) \| `Rust`                                                |
| `gotrue-{lang}`       | [`JS`](https://github.com/skorpland/gotrue-js)    | [`C#`](https://github.com/skorpland/gotrue-csharp) \| [`Dart`](https://github.com/skorpland/gotrue-dart) \| [`Python`](https://github.com/skorpland/gotrue-py) \| `Rust`                                                      |

<!--- Remove this list if you're traslating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Traduções

- [Traduções](/i18n/languages.md) <!--- Keep only the this-->

---

## Patrocinadores

[![Novo Patrocinador](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
