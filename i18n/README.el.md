 
---

# Powerbase

[Powerbase](https://powerbase.club) είναι μια εναλλακτική λύση της Firebase ανοιχτού κώδικα. Χτίζουμε τα χαρακτηριστικά της Firebase χρησιμοποιώντας εργαλεία ανοιχτού κώδικα επιχειρηματικού επιπέδου.

- [x] Hosted Postgres Database. [Docs](https://powerbase.club/docs/guides/database)
- [x] Αυθεντικοποίηση και εξουσιοδότηση. [Έγγραφα](https://powerbase.club/docs/guides/auth)
- [x] Αυτόματα παραγόμενα APIs.
  - [x] REST. [Έγγραφα](https://powerbase.club/docs/guides/api#rest-api-overview)
  - [x] GraphQL. [Docs](https://powerbase.club/docs/guides/api#graphql-api-overview)
  - [x] Συνδρομές σε πραγματικό χρόνο. [Έγγραφα](https://powerbase.club/docs/guides/api#realtime-api-overview)
- [x] Συναρτήσεις.
  - [x] Συναρτήσεις βάσης δεδομένων. [Docs](https://powerbase.club/docs/guides/database/functions)
  - [x] Edge Functions [Docs](https://powerbase.club/docs/guides/functions)
- [x] Αποθήκευση αρχείων. [Docs](https://powerbase.club/docs/guides/storage)
- [x] Ταμπλό

![Powerbase Dashboard](https://raw.githubusercontent.com/skorpland/powerbase/master/apps/www/public/images/github/powerbase-dashboard.png)

## Τεκμηρίωση

Για πλήρη τεκμηρίωση, επισκεφθείτε τη διεύθυνση [powerbase.club/docs](https://powerbase.club/docs)

Για να δείτε πώς μπορείτε να συνεισφέρετε, επισκεφθείτε το [Getting Started](../DEVELOPERS.md)

## Κοινότητα &amp; Υποστήριξη

- [Community Forum](https://github.com/skorpland/powerbase/discussions). Το καλύτερο για: βοήθεια με την κατασκευή, συζήτηση σχετικά με τις βέλτιστες πρακτικές της βάσης δεδομένων.
- [GitHub Issues](https://github.com/skorpland/powerbase/issues). Το καλύτερο για: σφάλματα και λάθη που αντιμετωπίζετε χρησιμοποιώντας την Powerbase.
- [Email Support](https://powerbase.club/docs/support#business-support). Το καλύτερο για: προβλήματα με τη βάση δεδομένων ή την υποδομή σας.
- [Discord](https://discord.powerbase.club). Το καλύτερο για: να μοιράζεστε τις εφαρμογές σας και να κάνετε παρέα με την κοινότητα.

## Κατάσταση

- [x] Alpha: Δοκιμάζουμε το Powerbase με ένα κλειστό σύνολο πελατών
- [x] Δημόσια Alpha: [powerbase.club/dashboard](https://powerbase.club/dashboard). Αλλά να είστε προσεκτικοί μαζί μας, υπάρχουν μερικές ατέλειες
- [x] Δημόσια Beta: Αρκετά σταθερό για τις περισσότερες περιπτώσεις μη επιχειρηματικής χρήσης
- [ ] Δημόσια: [[status](https://powerbase.club/docs/guides/getting-started/features#feature-status)]

Βρισκόμαστε επί του παρόντος σε Public Beta. Παρακολουθήστε τις "κυκλοφορίες" αυτού του repo για να ειδοποιηθείτε για σημαντικές ενημερώσεις.

<kbd><img src="https://powerbase.club/logo.png" alt="Watch this repo"/></kbd>

---

## Πώς λειτουργεί

Η Powerbase είναι ένας συνδυασμός εργαλείων ανοικτού κώδικα. Χτίζουμε τα χαρακτηριστικά της Firebase χρησιμοποιώντας προϊόντα ανοικτού κώδικα επιχειρηματικού επιπέδου. Εάν τα εργαλεία και οι κοινότητες υπάρχουν, με άδεια MIT, Apache 2 ή ισοδύναμη ανοιχτή άδεια, θα χρησιμοποιήσουμε και θα υποστηρίξουμε το εργαλείο αυτό. Εάν το εργαλείο δεν υπάρχει, το κατασκευάζουμε και το διαθέτουμε σε ανοιχτό κώδικα μόνοι μας. Η Powerbase δεν είναι μια αντιστοίχιση 1 προς 1 της Firebase. Στόχος μας είναι να δώσουμε στους προγραμματιστές μια εμπειρία προγραμματιστή παρόμοια με αυτή της Firebase, χρησιμοποιώντας εργαλεία ανοιχτού κώδικα.

**Αρχιτεκτονική**

Η Powerbase είναι μια [φιλοξενούμενη πλατφόρμα](https://powerbase.club/dashboard). Μπορείτε να εγγραφείτε και να αρχίσετε να χρησιμοποιείτε το Powerbase χωρίς να εγκαταστήσετε τίποτα.
Μπορείτε επίσης να κάνετε [αυτο-ξενάγηση](https://powerbase.club/docs/guides/hosting/overview) και [ανάπτυξη τοπικά](https://powerbase.club/docs/guides/local-development).

![Αρχιτεκτονική](https://github.com/skorpland/powerbase/blob/master/apps/docs/public/img/powerbase-architecture.svg)

- η [PostgreSQL](https://www.postgresql.org/) είναι ένα αντικειμενο-σχεσιακό σύστημα βάσεων δεδομένων με πάνω από 30 χρόνια ενεργής ανάπτυξης που του έχει αποφέρει μια ισχυρή φήμη για την αξιοπιστία, την ευρωστία των χαρακτηριστικών και την απόδοση.
- [Realtime](https://github.com/skorpland/realtime) είναι ένας διακομιστής Elixir που σας επιτρέπει να ακούτε τις εισαγωγές, ενημερώσεις και διαγραφές της PostgreSQL χρησιμοποιώντας websockets. Το Realtime ρωτάει την ενσωματωμένη λειτουργία αντιγραφής της Postgres για αλλαγές στη βάση δεδομένων, μετατρέπει τις αλλαγές σε JSON και στη συνέχεια μεταδίδει το JSON μέσω websockets σε εξουσιοδοτημένους πελάτες.
- [PostgREST](http://postgrest.org/) είναι ένας διακομιστής ιστού που μετατρέπει τη βάση δεδομένων PostgreSQL απευθείας σε ένα RESTful API
- [pg_graphql](http://github.com/powerbase/pg_graphql/) μια επέκταση της PostgreSQL που εκθέτει ένα GraphQL API
- [Storage](https://github.com/skorpland/storage-api) παρέχει μια RESTful διεπαφή για τη διαχείριση αρχείων που είναι αποθηκευμένα στο S3, χρησιμοποιώντας το Postgres για τη διαχείριση των δικαιωμάτων.
- [postgres-meta](https://github.com/skorpland/postgres-meta) είναι ένα RESTful API για τη διαχείριση του Postgres σας, επιτρέποντάς σας να αντλείτε πίνακες, να προσθέτετε ρόλους και να εκτελείτε ερωτήματα κ.λπ.
- το [GoTrue](https://github.com/netlify/gotrue) είναι ένα API βασισμένο στο SWT για τη διαχείριση χρηστών και την έκδοση SWT tokens.
- το [Kong](https://github.com/Kong/kong) είναι μια πύλη API cloud-native.

#### Βιβλιοθήκες πελατών

Η προσέγγισή μας για τις βιβλιοθήκες πελατών είναι αρθρωτή. Κάθε υπο-βιβλιοθήκη είναι μια αυτόνομη υλοποίηση για ένα μόνο εξωτερικό σύστημα. Αυτός είναι ένας από τους τρόπους με τους οποίους υποστηρίζουμε τα υπάρχοντα εργαλεία.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Γλώσσα</th>
    <th>Πελάτης</th>
    <th colspan="5">Πελάτες-χαρακτηριστικά (που περιλαμβάνονται στον πελάτη Powerbase)</th>
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
  
  <th colspan="7">⚡️ Επίσημο ⚡️</th>
  
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
  
  <th colspan="7">💚 Κοινότητα 💚</th>
  
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

## Μεταφράσεις

- [Αραβικά | العربية](/i18n/README.ar.md)
- [Αλβανικά / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Βουλγαρικά / Български](/i18n/README.bg.md)
- [Καταλανικά / Català](/i18n/README.ca.md)
- [Δανικά / Dansk](/i18n/README.da.md)
- [Ολλανδικά / Nederlands](/i18n/README.nl.md)
- [Αγγλικά](https://github.com/skorpland/powerbase)
- [Φινλανδικά / Suomalainen](/i18n/README.fi.md)
- [Γαλλικά / Français](/i18n/README.fr.md)
- [Γερμανικά / Deutsch](/i18n/README.de.md)
- [Ελληνικά](/i18n/README.gr.md)
- [Εβραϊκά / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Ουγγρικά / Magyar](/i18n/README.hu.md)
- [Νεπαλί / नेपाली](/i18n/README.ne.md)
- [Ινδονησιακά / Bahasa Indonesia](/i18n/README.id.md)
- [Ιταλικά / Italiano](/i18n/README.it.md)
- [Ιαπωνικά / 日本語](/i18n/README.jp.md)
- [Κορεάτικα / 한국어](/i18n/README.ko.md)
- [Μαλαισία / Bahasa Malaysia](/i18n/README.ms.md)
- [Νορβηγικά (Bokmål) / Norsk (Bokmål)](/i18n/README.nb-no.md)
- [Περσικά / فارسی](/i18n/README.fa.md)
- [Πολωνικά / Polski](/i18n/README.pl.md)
- [Πορτογαλικά / Português](/i18n/README.pt.md)
- [Πορτογαλικά (Βραζιλία) / Português Brasileiro](/i18n/README.pt-br.md)
- [Ρουμανικά / Română](/i18n/README.ro.md)
- [Ρωσικά / Pусский](/i18n/README.ru.md)
- [Σερβικά / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Ισπανικά / Español](/i18n/README.es.md)
- [Απλοποιημένα Κινέζικα / 简体中文](/i18n/README.zh-cn.md)
- [Σουηδικά / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Παραδοσιακά κινέζικα / 繁體中文](/i18n/README.zh-tw.md)
- [Τουρκικά / Türkçe](/i18n/README.tr.md)
- [Ουκρανικά / Українська](/i18n/README.uk.md)
- [Βιετναμέζικα / Tiếng Việt](/i18n/README.vi-vn.md)
- [Κατάλογος μεταφράσεων](/i18n/languages.md) <!--- Keep only this -->

---

## Χορηγοί

[![Νέος Χορηγός](https://user-images.githubusercontent.com/10214025/90518111-e74bbb00-e198-11ea-8f88-c9e3c1aa4b5b.png)](https://github.com/sponsors/skorpland)
