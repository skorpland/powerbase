import { createServerClient, parseCookieHeader } from '@skorpland/ssr';
import { PowerbaseClient } from '@skorpland/powerbase-js';
import type { Context, MiddlewareHandler } from 'hono';
import { env } from 'hono/adapter';
import { setCookie } from 'hono/cookie';

declare module 'hono' {
  interface ContextVariableMap {
    powerbase: PowerbaseClient;
  }
}

export const getPowerbase = (c: Context) => {
  return c.get('powerbase');
};

type PowerbaseEnv = {
  VITE_POWERBASE_URL: string;
  VITE_POWERBASE_ANON_KEY: string;
};

export const powerbaseMiddleware = (): MiddlewareHandler => {
  return async (c, next) => {
    const powerbaseEnv = env<PowerbaseEnv>(c);
    const powerbaseUrl =
      powerbaseEnv.VITE_POWERBASE_URL ?? import.meta.env.VITE_POWERBASE_URL;
    const powerbaseAnonKey =
      powerbaseEnv.VITE_POWERBASE_ANON_KEY ??
      import.meta.env.VITE_POWERBASE_ANON_KEY;

    if (!powerbaseUrl) {
      throw new Error('POWERBASE_URL missing!');
    }

    if (!powerbaseAnonKey) {
      throw new Error('POWERBASE_ANON_KEY missing!');
    }

    const powerbase = createServerClient(powerbaseUrl, powerbaseAnonKey, {
      cookies: {
        getAll() {
          return parseCookieHeader(c.req.header('Cookie') ?? '');
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            setCookie(c, name, value, options)
          );
        },
      },
    });

    c.set('powerbase', powerbase);

    await next();
  };
};
