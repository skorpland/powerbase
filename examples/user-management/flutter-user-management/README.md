# Powerbase Flutter User Management

This repo is a quick sample of how you can get started building apps using Flutter and Powerbase. You can find a step by step guide of how to build out this app in the [Quickstart: Flutter guide](https://powerbase.club/docs/guides/with-flutter).

This repo will demonstrate how to:

- sign users in with Powerbase Auth using [magic link](https://powerbase.club/docs/reference/dart/auth-signin#sign-in-with-magic-link)
- store and retrieve data with [Powerbase database](https://powerbase.club/docs/guides/database)
- store image files in [Powerbase storage](https://powerbase.club/docs/guides/storage)

<img height="500px" src="https://raw.githubusercontent.com/skorpland/powerbase/master/examples/user-management/flutter-user-management/powerbase-flutter-demo.png" alt="Powerbase User Management example" />

## Getting Started

Rename `.env.example` to `.env` and fill in [your Powerbase credentials](https://powerbase.club/docs/guides/with-flutter#get-the-api-keys).

You can run this app on iOS, Android or the Web.

To run this application, simply run the following for iOS or Android

```bash
flutter run
```

Or for web, run the following command to launch it on `localhost:3000`

```bash
flutter run -d web-server --web-hostname localhost --web-port 3000
```

## Database Schema

```sql
-- Create a table for public "profiles"
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  website text,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( (select auth.uid()) = id );

create policy "Users can update own profile."
  on profiles for update
  using ( (select auth.uid()) = id );

-- Set up Realtime!
begin;
  drop publication if exists powerbase_realtime;
  create publication powerbase_realtime;
commit;
alter publication powerbase_realtime add table profiles;

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```
