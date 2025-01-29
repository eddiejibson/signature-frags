/* eslint-disable import/prefer-default-export */
import { createHydrogenContext } from '@shopify/hydrogen';
import { CART_QUERY_FRAGMENT } from '~/lib/fragments';
import { AppSession } from '~/lib/session';

/**
 * The context implementation is separate from server.ts
 * so that type can be extracted for AppLoadContext
 * */
export async function createAppLoadContext(
  request: Request,
  env: Env,
  executionContext: ExecutionContext,
  extraContext: {
    requestGroupId: string;
    buyerIp: string;
    cookie: string;
    purposets: string;
  },
) {
  /**
   * Open a cache instance in the worker and a custom session instance.
   */
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set');
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext);
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ]);

  const { requestGroupId, buyerIp, cookie, purposets } = extraContext;

  const hydrogenContext = createHydrogenContext({
    storefront: {
      headers: {
        buyerIp,
        requestGroupId,
        cookie,
        purpose: purposets,
      },
    },
    env,
    request,
    cache,
    waitUntil,
    session,
    customerAccount: {
      unstableB2b: true,
    },
    i18n: { language: 'EN', country: 'US' },
    cart: {
      queryFragment: CART_QUERY_FRAGMENT,
    },
  });

  return {
    ...hydrogenContext,
    // declare additional Remix loader context
  };
}
