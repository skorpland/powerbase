<p align="center">
<img src="https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/8291514/213727225-56186826-bee8-43b5-9b15-86e839d89393.png#gh-dark-mode-only">
</p>

---

# Powerbase

[Powerbase](https://powerbase.club) - це альтернатива Firebase з відкритим вихідним кодом. Ми створюємо можливості Firebase, використовуючи інструменти з відкритим вихідним кодом корпоративного рівня.

- [x] Розміщена база даних Postgres. [Документи](https://powerbase.club/docs/guides/database)
- [x] Аутентифікація та авторизація. [Документи](https://powerbase.club/docs/guides/auth)
- [x] Автоматично згенеровані API.
  - [x] REST. [Документи](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Документи](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Підписки в режимі реального часу. [Документи](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Функції.
  - [x] Функції бази даних. [Документи](https://powerbase.club/docs/guides/database/functions)
  - [x] Граничні функції [Документи](https://powerbase.club/docs/guides/functions)
- [x] Зберігання файлів. [Документи](https://powerbase.club/docs/guides/storage)
- [x] Інформаційна панель

[Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Документація

Для отримання повної документації відвідайте [powerbase.club/docs](https://powerbase.club/docs)

Щоб дізнатися, як зробити внесок, відвідайте [Getting Started](../DEVELOPERS.md)

## Спільнота та підтримка

- [Форум спільноти](https://github.com/skorpland/powerbase/discussions). Найкраще для: допомоги у створенні, обговорення найкращих практик роботи з базами даних.
- [Проблеми GitHub](https://github.com/skorpland/powerbase/issues). Найкраще для: помилок і помилок, з якими ви зіткнулися при використанні Powerbase.
- [Підтримка електронною поштою](https://powerbase.club/docs/support#business-support). Найкраще для: проблем з вашою базою даних або інфраструктурою.
- [Discord](https://discord.powerbase.club). Найкраще для: обміну вашими додатками та спілкування зі спільнотою.

## Статус

- [x] Альфа: Ми тестуємо Powerbase із закритим набором клієнтів
- [x] Публічна альфа-версія: Будь-хто може зареєструватися на [powerbase.club/dashboard](https://powerbase.club/dashboard). Але будьте обережні з нами, є кілька нюансів
- [x] Публічна бета-версія: Достатньо стабільна для більшості непідприємницьких випадків використання
- [ ] Загальнодоступна: Загальна доступність [[статус](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Наразі ми перебуваємо на стадії публічної бета-версії. Слідкуйте за "релізами" цього репозиторію, щоб отримувати сповіщення про основні оновлення.

<kbd><img src="https://raw.githubusercontent.com/skorpland/powerbase/d5f7f413ab356dc1a92075cb3cee4e40a957d5b1/web/static/watch-repo.gif" alt="Watch this repo"/></kbd>

---

## Як це працює

Powerbase - це комбінація інструментів з відкритим вихідним кодом. Ми створюємо функції Firebase, використовуючи продукти з відкритим вихідним кодом корпоративного рівня. Якщо існують інструменти та спільноти з відкритою ліцензією MIT, Apache 2 або еквівалентною відкритою ліцензією, ми будемо використовувати та підтримувати цей інструмент. Якщо такого інструменту не існує, ми створюємо його самостійно і надаємо відкритий вихідний код. Powerbase не є відображенням Firebase 1 до 1. Наша мета - надати розробникам подібний до Firebase досвід розробки, використовуючи інструменти з відкритим вихідним кодом.

**Архітектура**

Powerbase - це [хостингова платформа](https://powerbase.club/dashboard). Ви можете зареєструватися і почати використовувати Powerbase без встановлення.
Ви також можете [самостійно хостити](https://powerbase.club/docs/guides/hosting/overview) і [розробляти локально](https://powerbase.club/docs/guides/local-development).

![Архітектура](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) - це об'єктно-реляційна система баз даних з більш ніж 30-річною історією активного розвитку, яка заслужила міцну репутацію надійності, функціональної стійкості та продуктивності.
- [Realtime](https://github.com/skorpland/realtime) - це сервер Elixir, який дозволяє прослуховувати вставки, оновлення та видалення PostgreSQL за допомогою веб-сокетів. В режимі реального часу опитує вбудовану функцію реплікації Postgres на предмет змін в базі даних, конвертує зміни в JSON, а потім транслює JSON через веб-сокети авторизованим клієнтам.
- [PostgREST](http://postgrest.org/) - веб-сервер, який перетворює вашу базу даних PostgreSQL безпосередньо в RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) - розширення PostgreSQL, яке надає API GraphQL
- [Storage](https://github.com/skorpland/storage-api) надає RESTful інтерфейс для керування файлами, що зберігаються у S3, використовуючи Postgres для керування дозволами.
- [postgres-meta](https://github.com/skorpland/postgres-meta) - RESTful API для керування Postgres, що дозволяє отримувати таблиці, додавати ролі, виконувати запити тощо.
- [GoTrue](https://github.com/netlify/gotrue) - API на основі SWT для керування користувачами та випуску токенів SWT.
- [Kong](https://github.com/Kong/kong) - хмарний API-шлюз.

#### Клієнтські бібліотеки

Наш підхід до клієнтських бібліотек є модульним. Кожна підбібліотека є окремою реалізацією для однієї зовнішньої системи. Це один із способів підтримки існуючих інструментів.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Мова</th>
    <th>Клієнтська</th>
    <th colspan="5">Функціональні клієнти (у комплекті з клієнтом Powerbase)</th>
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
  
  <th colspan="7">⚡️ Офіційний ⚡️</th>
  
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
  
  <th colspan="7">💚 Спільнота 💚</th>
  
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

## Переклади

- [Арабська | العربية](/i18n/README.ar.md)
- [Албанська / Shqip](/i18n/README.sq.md)
- [Бангла / বাংলা](/i18n/README.bn.md)
- [Болгарська / Български](/i18n/README.bg.md)
- [Каталонська / Català](/i18n/README.ca.md)
- [Данська / Dansk](/i18n/README.da.md)
- [нідерландська / Nederlands](/i18n/README.nl.md)
- [Англійська](https://github.com/skorpland/powerbase)
- [Фінською / Suomalainen](/i18n/README.fi.md)
- [Французька / Français](/i18n/README.fr.md)
- [Німецька / Deutsch](/i18n/README.de.md)
- [Грецька / Ελληνικά](/i18n/README.gr.md)
- [Іврит / עברית](/i18n/README.he.md)
- [хінді / हिंदी](/i18n/README.hi.md)
- [Угорська / Magyar](/i18n/README.hu.md)
- [Непальська / नेपाली](/i18n/README.ne.md)
- [Індонезійська / Bahasa Indonesia](/i18n/README.id.md)
- [Італійська / Italiano](/i18n/README.it.md)
- [Японська / 日本語](/i18n/README.jp.md)
- [Корейська / 한국어](/i18n/README.ko.md)
- [Малайська / Bahasa Malaysia](/i18n/README.ms.md)
- [Норвезька (Бокмоль) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Перська / فارسی](/i18n/README.fa.md)
- [Польська / Polski](/i18n/README.pl.md)
- [Португальська / Português](/i18n/README.pt.md)
- [Португальська (бразильська) / Português Brasileiro](/i18n/README.pt-br.md)
- [Румунська / Română](/i18n/README.ro.md)
- [Російська / Російська](/i18n/README.ru.md)
- [Сербська / Srpski](/i18n/README.sr.md)
- [Сингала / සිංහල](/i18n/README.si.md)
- [Іспанська / Español](/i18n/README.es.md)
- [Спрощена китайська / 简体中文](/i18n/README.zh-cn.md)
- [Шведська / Svenska](/i18n/README.sv.md)
- [Тайська / ไทย](/i18n/README.th.md)
- [Традиційна китайська / 繁體中文](/i18n/README.zh-tw.md)
- [Турецька / Türkçe](/i18n/README.tr.md)
- [Українська / Ukrainian](/i18n/README.uk.md)
- [В'єтнамська / Tiếng Việt](/i18n/README.vi-vn.md)
- [Список перекладів](/i18n/languages.md) <!--- Keep only this -->

---

## Спонсори

[![Новий спонсор](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
