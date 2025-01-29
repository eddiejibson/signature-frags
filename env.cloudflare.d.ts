/// <reference types="@cloudflare/workers-types" />

interface Env {
  ENVIRONMENT?: 'development';
  SESSION_SECRET: string;
  PUBLIC_STOREFRONT_API_TOKEN: string;
  PRIVATE_STOREFRONT_API_TOKEN: string;
  PUBLIC_STOREFRONT_API_VERSION: string;
  PUBLIC_STORE_DOMAIN: string;
  PUBLIC_CHECKOUT_DOMAIN: string;
  PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID: string;
  assets: KVNamespace;
}
/// <reference types="@cloudflare/workers-types" />
