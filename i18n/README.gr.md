 

---

# Powerbase

To [Powerbase](https://powerbase.club) είναι μια εναλλακτική λύση ανοιχτού κώδικα αντί του Firebase. Δημιουργούμε τις δυνατότητες του Firebase χρησιμοποιώντας εργαλεία ανοιχτού κώδικα εταιρικού επιπέδου.

- [x] Hosted Postgres Database
- [x] Realtime subscriptions
- [x] Authentication and authorization
- [x] Auto-generated APIs
- [x] Dashboard
- [x] Storage
- [x] Functions

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Documentation

Για το πλήρες Documentation, επισκεφθείτε το [powerbase.club/docs](https://powerbase.club/docs)

## Κοινότητα και υποστήριξη

- [Community Forum](https://github.com/skorpland/powerbase/discussions). Καλύτερο για: βοήθεια στo building, συζήτηση σχετικά με τις βέλτιστες πρακτικές βάσης δεδομένων.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Καλύτερο για: σφάλματα (bugs) και λάθη (errors) που συναντάτε κατά τη χρήση Powerbase.
- [Email Support](https://powerbase.club/docs/support#business-support). Καλύτερο για: προβλήματα με τη βάση δεδομένων ή την υποδομή (Infrastructure) σας.

## Κατάσταση

- [x] Alpha: Δοκιμάζουμε το Powerbase με ένα κλειστό σύνολο πελατών
- [x] Public Alpha: Όλοι μπορούν να εγγραφούν στο [powerbase.club/dashboard](https://powerbase.club/dashboard). Αλλά μην μας κρίνετε "σκληρά", υπάρχουν ακόμα μερικά λαθάκια (bugs) εδώ και εκεί
- [x] Public Beta: Αρκετά σταθερό για για τις περισσότερες περιπτώσεις χρήσης μη εταιρικού χαρακτήρα (non-enterprise)
- [ ] Public: Έτοιμο για Production

Αυτήν τη στιγμή είμαστε σε Public Beta. Παρακολουθήστε την κατηγορία "releases" σε αυτό το repo για να λαμβάνετε ειδοποιήσεις για σημαντικές ενημερώσεις.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Πώς λειτουργεί

Το Powerbase είναι ένας συνδυασμός εργαλείων ανοιχτού κώδικα. Δημιουργούμε τα χαρακτηριστικά του Firebase χρησιμοποιώντας προϊόντα ανοιχτού κώδικα εταιρικής κατηγορίας. Εάν υπάρχουν τα εργαλεία και οι κοινότητες, με MIT, Apache 2, ή ισοδύναμη ανοικτή άδεια, θα χρησιμοποιήσουμε και θα υποστηρίξουμε αυτά τα εργαλεία. Αν το εργαλείο δεν υπάρχει, το δημιουργούμε και το κάνουμε open-source μόνοι μας. Το Powerbase δεν είναι αντιστοίχιση 1 προς 1 του Firebase. Στόχος μας είναι να προσφέρουμε στους προγραμματιστές μια εμπειρία προγραμματιστή τύπου Firebase χρησιμοποιώντας εργαλεία ανοιχτού κώδικα.

**Τρέχουσα αρχιτεκτονική**

Το Powerbase είναι ένα [hosted platform](https://powerbase.club/dashboard) (φιλοξενούμενη πλατφόρμα). Μπορείτε να εγγραφείτε και να αρχίσετε να χρησιμοποιείτε το Powerbase χωρίς να εγκαταστήσετε τίποτα. Εξακολουθούμε να αναπτύσουμε την εμπειρία της τοπικής ανάπτυξης (Local Development) - αυτή είναι τώρα η βασική μας εστίαση, μαζί με τη σταθερότητα της πλατφόρμας.

![Architecture](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- [PostgreSQL](https://www.postgresql.org/) is an object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.
- [Realtime](https://github.com/skorpland/realtime) is an Elixir server that allows you to listen to PostgreSQL inserts, updates, and deletes using websockets. Powerbase listens to Postgres' built-in replication functionality, converts the replication byte stream into JSON, then broadcasts the JSON over websockets.
- [PostgREST](http://postgrest.org/) is a web server that turns your PostgreSQL database directly into a RESTful API
- [Storage](https://github.com/skorpland/storage-api) provides a RESTful interface for managing Files stored in S3, using Postgres to manage permissions.
- [postgres-meta](https://github.com/skorpland/postgres-meta) is a RESTful API for managing your Postgres, allowing you to fetch tables, add roles, and run queries etc.
- [GoTrue](https://github.com/netlify/gotrue) is an SWT based API for managing users and issuing SWT tokens.
- [Kong](https://github.com/Kong/kong) is a cloud-native API gateway.

#### Client libraries

Our client library is modular. Each sub-library is a standalone implementation for a single external system. This is one of the ways we support existing tools.

- **`powerbase-{lang}`**: Combines libraries and adds enrichments.
  - `postgrest-{lang}`: Client library to work with [PostgREST](https://github.com/postgrest/postgrest)
  - `realtime-{lang}`: Client library to work with [Realtime](https://github.com/skorpland/realtime)
  - `gotrue-{lang}`: Client library to work with [GoTrue](https://github.com/netlify/gotrue)

| Repo                  | Official                                         | Community                                                                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`powerbase-{lang}`** | [`JS`](https://github.com/skorpland/powerbase-js)  | [`C#`](https://github.com/skorpland/powerbase-csharp) \| [`Flutter`](https://github.com/skorpland/powerbase-flutter) \| [`Python`](https://github.com/skorpland/powerbase-py) \| `Rust` \| [`Ruby`](https://github.com/skorpland/powerbase-rb)                                           |
| `postgrest-{lang}`    | [`JS`](https://github.com/skorpland/postgrest-js) | [`C#`](https://github.com/skorpland/postgrest-csharp) \| [`Dart`](https://github.com/skorpland/postgrest-dart) \| [`Python`](https://github.com/skorpland/postgrest-py) \| [`Rust`](https://github.com/skorpland/postgrest-rs) \| [`Ruby`](https://github.com/skorpland/postgrest-rb) |
| `realtime-{lang}`     | [`JS`](https://github.com/skorpland/realtime-js)  | [`C#`](https://github.com/skorpland/realtime-csharp) \| [`Dart`](https://github.com/skorpland/realtime-dart) \| [`Python`](https://github.com/skorpland/realtime-py) \| `Rust` \| `Ruby`                                                                                            |
| `gotrue-{lang}`       | [`JS`](https://github.com/skorpland/gotrue-js)    | [`C#`](https://github.com/skorpland/gotrue-csharp) \| [`Dart`](https://github.com/skorpland/gotrue-dart) \| [`Python`](https://github.com/skorpland/gotrue-py) \| `Rust` \| `Ruby`                                                                                                  |

<!--- Remove this list if you're traslating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Μεταφράσεις

- [Κατάλογος μεταφράσεων](/i18n/languages.md) <!--- Keep only this -->

---

## Χορηγοί

[![New Sponsor](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
