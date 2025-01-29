import { storefrontRedirect } from '@shopify/hydrogen';
import { createRequestHandler } from '@shopify/remix-oxygen';
import mime from 'mime';
import * as remixBuild from 'virtual:remix/server-build';
import { createAppLoadContext } from '~/lib/context';

export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const url = new URL(request.url);

      // Check if the request is for a static asset
      const staticExtensions = [
        '.css',
        '.js',
        '.jpg',
        '.png',
        '.jpeg',
        '.svg',
        '.woff2',
        '.ttf',
        '.mp4',
        '.mov',
        '.webp',
        '.ico',
        '.ogg',
        '.webm',
        '.mp3',
        '.wav',
        '.flac',
        '.aac',
        '.pdf',
      ];
      const isStaticAsset = staticExtensions.some((ext) =>
        url.pathname.endsWith(ext),
      );

      if (isStaticAsset && env.assets) {
        const key = url.pathname.replace(/^\/+/, ''); // strip any preceding slashes
        if (!key) {
          return new Response('Missing path in URL', {
            status: 400,
          });
        }

        // Get the mime type based on the extension
        const mimeType = mime.getType(key) || 'text/plain';

        // Retrieve the asset from KV
        const value = await env.assets.get(key);
        if (!value) {
          return new Response('Static asset not found', {
            status: 404,
          });
        }

        // Return the static asset with the correct MIME type
        return new Response(value, {
          status: 200,
          headers: new Headers({
            'Content-Type': mimeType,
          }),
        });
      }

      // If not a static asset, proceed with regular handling
      const requestGroupId = request.headers.get('request-id') || ''; // Fallback to empty string
      const buyerIp = request.headers.get('CF-Connecting-IP') || ''; // Fallback to empty string

      const cookie = request.headers.get('cookie') || '';
      const purposets = request.headers.get('purposets') || '';

      const appLoadContext = await createAppLoadContext(
        request,
        env,
        executionContext,
        {
          requestGroupId,
          buyerIp,
          cookie,
          purposets,
        },
      );

      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => appLoadContext,
      });

      const response = await handleRequest(request);

      if (appLoadContext.session.isPending) {
        response.headers.set(
          'Set-Cookie',
          await appLoadContext.session.commit(),
        );
      }

      if (response.status === 404) {
        return storefrontRedirect({
          request,
          response,
          storefront: appLoadContext.storefront,
        });
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return new Response('An unexpected error occurred', { status: 500 });
    }
  },
};
