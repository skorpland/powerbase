export const POWERBASE_ROLES = [
  'anon',
  'service_role',
  'authenticated',
  'authenticator',
  'dashboard_user',
  'powerbase_admin',
  'powerbase_auth_admin',
  'powerbase_functions_admin',
  'powerbase_read_only_user',
  'powerbase_realtime_admin',
  'powerbase_replication_admin',
  'powerbase_storage_admin',
  'pgbouncer',
  'pgsodium_keyholder',
  'pgsodium_keyiduser',
  'pgsodium_keymaker',
  'pgtle_admin',
] as const

// [Joshen] This was originally in the Roles mobx store
// Just keeping it for now in case we need to differ it from ^ POWERBASE_ROLES
export const SYSTEM_ROLES = [
  'postgres',
  'pgbouncer',
  'powerbase_admin',
  'powerbase_auth_admin',
  'powerbase_storage_admin',
  'dashboard_user',
  'authenticator',
  'pg_database_owner',
  'pg_read_all_data',
  'pg_write_all_data',
] as const

export const ROLE_PERMISSIONS = {
  canLogin: {
    disabled: false,
    description: 'User can login',
    grant_by_dashboard: true,
  },
  canCreateRole: {
    disabled: false,
    description: 'User can create roles',
    grant_by_dashboard: true,
  },
  canCreateDb: {
    disabled: false,
    description: 'User can create databases',
    grant_by_dashboard: true,
  },
  canBypassRls: {
    disabled: false,
    description: 'User bypasses every row level security policy',
    grant_by_dashboard: true,
  },
  isSuperuser: {
    disabled: true,
    description: 'User is a Superuser',
    grant_by_dashboard: false,
  },
  isReplicationRole: {
    disabled: false,
    description:
      'User can initiate streaming replication and put the system in and out of backup mode',
    grant_by_dashboard: true,
  },
} as const
