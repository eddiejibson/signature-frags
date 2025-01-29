import { useLoaderData, type MetaFunction } from '@remix-run/react';
import { defer, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import Hero from '~/components/Hero';
import Features from '~/components/landing/Features';
import InitialInfoLanding from '~/components/landing/InitialInfoLanding';
import ProductSpotlight from '~/components/landing/ProductSpotlight';
import { PRODUCT_SPOTLIGHT_QUERY } from '~/components/landing/queries/product-spotlight.query';
import SocialPrompt from '~/components/landing/SocialPrompt';

export const meta: MetaFunction = () => {
  return [{ title: 'Signature Frags | Aquacultured Corals' }];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({ context }: LoaderFunctionArgs) {
  const [{ products }] = await Promise.all([
    context.storefront.query(PRODUCT_SPOTLIGHT_QUERY),
  ]);

  return {
    productSpotlight: products.nodes,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({ context }: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(PRODUCT_SPOTLIGHT_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <Hero />
      <div className="w-screen  flex flex-col pt-14 md:pt-20 px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="w-full h-full overflow-y-auto ">
          <InitialInfoLanding />
          <div className="justify-normal items-center flex mt-10 flex-col">
            <ProductSpotlight products={data.productSpotlight} />
            <Features />
            <SocialPrompt />
          </div>
        </div>
      </div>
    </>
  );
}

// function FeaturedCollection({
//   collection,
// }: {
//   collection: ProductSpotlightItemFragment[];
// }) {
//   if (!collection) return null;
//   const image = collection?.products?.nodes[0]?.images?.edges[0].node;
//   return (
//     <Link className="featured-collection" to="/collections/test">
//       {image && (
//         <div className="featured-collection-image">
//           <Image data={image} sizes="100vw" />
//         </div>
//       )}
//       <h1>{collection?.products?.nodes[0].title}</h1>
//     </Link>
//   );
// }
