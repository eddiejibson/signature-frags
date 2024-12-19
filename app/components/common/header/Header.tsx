import { Await, useAsyncValue } from '@remix-run/react';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import classNames from 'classnames';
import { motion } from 'motion/react';
import { Suspense, useEffect, useState } from 'react';
import type {
  CartApiQueryFragment,
  HeaderQuery,
} from 'storefrontapi.generated';
import { ReactComponent as Icon } from '~/assets/icon-v2.svg';
import { ReactComponent as SignatureFragsText } from '~/assets/text.svg';
import { useAside } from '~/components/Aside';
import BurgerIcon from '~/components/common/header/BurgerIcon';
import HeaderRight from '~/components/common/header/HeaderRight';
import MenuSideNav from '~/components/common/header/MenuSideNav';
import NavigationCenter from '~/components/common/header/NavCenter';

export interface NavigationBarProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

export function NavigationBar({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: NavigationBarProps) {
  const { menu } = header;
  const { type } = useAside();
  const [isNavDownPage, setIsNavDownPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 6) {
        setIsNavDownPage(true);
      } else {
        setIsNavDownPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        {
          '!bg-[#000e40]/30 pt-4 pb-4 shadow-lg ': isNavDownPage,
          'transition-none backdrop-blur-[1.5rem]':
            type !== 'mobile' && isNavDownPage,
          'bg-transparent pt-12 pb-4': !isNavDownPage,
        },
        `transition-all duration-700 z-3 fixed top-0 left-0 right-0 flex flex-row w-full items-center text-white/80 px-8 md:px-12 lg:px-20 xl:px-24`,
      )}
    >
      <div className=" md:flex-1 flex-none flex justify-between w-full md:w-max">
        <div className="flex md:hidden">
          <BurgerIcon />
        </div>
        <div className="flex flex-row items-center">
          <MenuSideNav menu={menu} />
          <Icon
            className={classNames(
              'drop-shadow-2xl transition-all duration-700 text-white',
              {
                'h-12 lg:h-16': !isNavDownPage,
                'h-7 lg:h-8': isNavDownPage,
              },
            )}
          />
          {isNavDownPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 2, ease: 'easeIn' }}
            >
              <SignatureFragsText className="hidden md:flex ml-2.5 h-8 lg:h-9 mt-1 w-min drop-shadow-2xl" />
            </motion.div>
          )}
        </div>
      </div>
      <div className="flex-[3] flex justify-center">
        <NavigationCenter menu={menu} />
      </div>
      <div className="flex-1  justify-end hidden md:flex">
        <HeaderRight isLoggedIn={isLoggedIn} cart={cart} />
      </div>
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const { open } = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const { open } = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

function CartBadge({ count }: { count: number | null }) {
  const { open } = useAside();
  const { publish, shop, cart, prevCart } = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

function CartToggle({ cart }: Pick<NavigationBarProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

export function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
