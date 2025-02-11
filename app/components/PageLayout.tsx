/* eslint-disable import/prefer-default-export */
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import { Aside } from '~/components/Aside';
import { NavigationBar } from '~/components/common/header/Header';
import Footer from '~/components/landing/Footer';

interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
}

export function PageLayout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
}: PageLayoutProps) {
  return (
    <Aside.Provider>
      {/* <MenuSideNav /> */}
      {header && (
        <NavigationBar
          header={header}
          cart={cart}
          isLoggedIn={isLoggedIn}
          publicStoreDomain={publicStoreDomain}
        />
      )}
      <main className="content relative">
        {children}
        <Footer />
      </main>
    </Aside.Provider>
  );
}

// function CartAside({ cart }: { cart: PageLayoutProps['cart'] }) {
//   return (
//     <Aside type="cart" heading="CART">
//       <Suspense fallback={<p>Loading cart ...</p>}>
//         <Await resolve={cart}>
//           {(_cart) => {
//             return <CartMain cart={_cart} layout="aside" />;
//           }}
//         </Await>
//       </Suspense>
//     </Aside>
//   );
// }

// function SearchAside() {
//   const queriesDatalistId = useId();
//   return (
//     <Aside type="search" heading="SEARCH">
//       <div className="predictive-search">
//         <br />
//         <SearchFormPredictive>
//           {({ fetchResults, goToSearch, inputRef }) => (
//             <>
//               <input
//                 name="q"
//                 onChange={fetchResults}
//                 onFocus={fetchResults}
//                 placeholder="Search"
//                 ref={inputRef}
//                 type="search"
//                 list={queriesDatalistId}
//               />
//               &nbsp;
//               <button onClick={goToSearch}>Search</button>
//             </>
//           )}
//         </SearchFormPredictive>

//         <SearchResultsPredictive>
//           {({ items, total, term, state, closeSearch }) => {
//             const { articles, collections, pages, products, queries } = items;

//             if (state === 'loading' && term.current) {
//               return <div>Loading...</div>;
//             }

//             if (!total) {
//               return <SearchResultsPredictive.Empty term={term} />;
//             }

//             return (
//               <>
//                 <SearchResultsPredictive.Queries
//                   queries={queries}
//                   queriesDatalistId={queriesDatalistId}
//                 />
//                 <SearchResultsPredictive.Products
//                   products={products}
//                   closeSearch={closeSearch}
//                   term={term}
//                 />
//                 <SearchResultsPredictive.Collections
//                   collections={collections}
//                   closeSearch={closeSearch}
//                   term={term}
//                 />
//                 <SearchResultsPredictive.Pages
//                   pages={pages}
//                   closeSearch={closeSearch}
//                   term={term}
//                 />
//                 <SearchResultsPredictive.Articles
//                   articles={articles}
//                   closeSearch={closeSearch}
//                   term={term}
//                 />
//                 {term.current && total ? (
//                   <Link
//                     onClick={closeSearch}
//                     to={`${SEARCH_ENDPOINT}?q=${term.current}`}
//                   >
//                     <p>
//                       View all results for <q>{term.current}</q>
//                       &nbsp; →
//                     </p>
//                   </Link>
//                 ) : null}
//               </>
//             );
//           }}
//         </SearchResultsPredictive>
//       </div>
//     </Aside>
//   );
// }

// function MobileMenuAside({
//   header,
//   publicStoreDomain,
// }: {
//   header: PageLayoutProps['header'];
//   publicStoreDomain: PageLayoutProps['publicStoreDomain'];
// }) {
//   return (
//     header.menu &&
//     header.shop.primaryDomain?.url && (
//       <Aside type="mobile" heading="MENU">
//         <NavigationCenter
//           menu={header.menu}
//           viewport="mobile"
//           primaryDomainUrl={header.shop.primaryDomain.url}
//           publicStoreDomain={publicStoreDomain}
//         />
//       </Aside>
//     )
//   );
// }
