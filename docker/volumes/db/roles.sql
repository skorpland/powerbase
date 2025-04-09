-- NOTE: change to your own passwords for production environments
\set pgpass `echo "$POSTGRES_PASSWORD"`

ALTER USER authenticator WITH PASSWORD :'pgpass';
ALTER USER pgbouncer WITH PASSWORD :'pgpass';
ALTER USER powerbase_auth_admin WITH PASSWORD :'pgpass';
ALTER USER powerbase_functions_admin WITH PASSWORD :'pgpass';
ALTER USER powerbase_storage_admin WITH PASSWORD :'pgpass';
