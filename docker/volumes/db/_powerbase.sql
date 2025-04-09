\set pguser `echo "$POSTGRES_USER"`

CREATE DATABASE _powerbase WITH OWNER :pguser;
