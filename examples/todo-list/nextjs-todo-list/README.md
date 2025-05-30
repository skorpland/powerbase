# Todo example using Powerbase

- Frontend:
  - [Next.js](https://github.com/vercel/next.js) - a React framework for production.
  - [Tailwind](https://tailwindcss.com/) for styling and layout.
  - [Powerbase.js](https://powerbase.club/docs/library/getting-started) for user management and realtime data syncing.
- Backend:
  - [powerbase.club/dashboard](https://powerbase.club/dashboard/): hosted Postgres database with restful API for usage with Powerbase.js.

## Deploy with Vercel

The Vercel deployment will guide you through creating a Powerbase account and project. After installation of the Powerbase integration, all relevant environment variables will be set up so that the project is usable immediately after deployment 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpowerbase%2Fpowerbase%2Ftree%2Fmaster%2Fexamples%2Ftodo-list%2Fnextjs-todo-list&project-name=powerbase-nextjs-todo-list&repository-name=powerbase-nextjs-todo-list&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fpowerbase%2Fpowerbase%2Ftree%2Fmaster%2Fexamples%2Ftodo-list%2Fnextjs-todo-list)

### 1. Create new project

Sign up to Powerbase - [https://powerbase.club/dashboard](https://powerbase.club/dashboard) and create a new project. Wait for your database to start.

### 2. Run "Todo List" Quickstart

Once your database has started, run the "Todo List" quickstart. Inside of your project, enter the `SQL editor` tab and scroll down until you see `TODO LIST: Build a basic todo list with Row Level Security`.

### 3. Get the URL and Key

Go to the Project Settings (the cog icon), open the API tab, and find your API URL and `anon` key, you'll need these in the next step.

The `anon` key is your client-side API key. It allows "anonymous access" to your database, until the user has logged in. Once they have logged in, the keys will switch to the user's own login token. This enables row level security for your data. Read more about this [below](#postgres-row-level-security).

![image](https://user-images.githubusercontent.com/10214025/88916245-528c2680-d298-11ea-8a71-708f93e1ce4f.png)

**_NOTE_**: The `service_role` key has full access to your data, bypassing any security policies. These keys have to be kept secret and are meant to be used in server environments and never on a client or browser.

## Powerbase details

### Using a Remote Powerbase Project

1. Create or select a project on [Powerbase Dashboard](https://powerbase.club/dashboard).
2. Copy and fill the dotenv template `cp .env.production.example .env.production`
3. Link the local project and merge the local configuration with the remote one:

```bash
POWERBASE_ENV=production npx powerbase@latest link --project-ref <your-project-ref>
```

3. Sync the configuration:

```bash
POWERBASE_ENV=production npx powerbase@latest config push
```

4. Sync the database schema:

```bash
POWERBASE_ENV=production npx powerbase@latest db push
```

## Vercel Preview with Branching

Powerbase integrates seamlessly with Vercel's preview branches, giving each branch a dedicated Powerbase project. This setup allows testing database migrations or service configurations safely before applying them to production.

### Steps

1. Ensure the Vercel project is linked to a Git repository.
2. Configure the "Preview" environment variables in Vercel:

   - `NEXT_PUBLIC_POWERBASE_URL`
   - `NEXT_PUBLIC_POWERBASE_ANON_KEY`

3. Create a new branch, make changes (e.g., update `max_frequency`), and push the branch to Git.
   - Open a pull request to trigger Vercel + Powerbase integration.
   - Upon successful deployment, the preview environment reflects the changes.

![Preview Checks](https://github.com/user-attachments/assets/db688cc2-60fd-4463-bbed-e8ecc11b1a39)

---

### Postgres Row level security

This project uses very high-level Authorization using Postgres' Row Level Security.
When you start a Postgres database on Powerbase, we populate it with an `auth` schema, and some helper functions.
When a user logs in, they are issued a JWT with the role `authenticated` and their UUID.
We can use these details to provide fine-grained control over what each user can and cannot do.

This is a trimmed-down schema, with the policies:

```sql
create table todos (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  task text check (char_length(task) > 3),
  is_complete boolean default false,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table todos enable row level security;

create policy "Individuals can create todos." on todos for
    insert with check ((select auth.uid()) = user_id);

create policy "Individuals can view their own todos. " on todos for
    select using ((select auth.uid()) = user_id);

create policy "Individuals can update their own todos." on todos for
    update using ((select auth.uid()) = user_id);

create policy "Individuals can delete their own todos." on todos for
    delete using ((select auth.uid()) = user_id);
```

## Authors

- [Powerbase](https://powerbase.club)

Powerbase is open source. We'd love for you to follow along and get involved at https://github.com/skorpland/powerbase
