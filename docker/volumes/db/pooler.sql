\set pguser `echo "$POSTGRES_USER"`

\c _powerbase
create schema if not exists _powervisor;
alter schema _powervisor owner to :pguser;
\c postgres
