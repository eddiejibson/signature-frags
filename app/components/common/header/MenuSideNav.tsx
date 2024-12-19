import { NavLink } from '@remix-run/react';
import { useAside } from '~/components/Aside';
import type { NavigationBarProps } from '~/components/common/header/Header';

interface MenuSideNavProps {
  menu: NavigationBarProps['header']['menu'];
}

const MenuSideNav = ({ menu }: MenuSideNavProps) => {
  const { close, type } = useAside();
  return (
    <div
      className={`z-10 min-h-screen fixed top-0 left-0 bottom-0 w-full h-full bg-black/30 backdrop-blur-[1.5rem] transition-transform duration-300 ease-in-out ${
        type === 'mobile' ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="px-10 md:px-12 flex flex-col mt-36 space-y-10">
        {menu &&
          menu.items.map((item) => {
            if (!item.url) return null;

            const url = item.url.includes('myshopify.com')
              ? new URL(item.url).pathname
              : item.url;
            return (
              <NavLink
                className="font-semibold hover:font-bold text-white/90 hover:text-white transition-all text-4xl"
                end
                key={item.id}
                onClick={close}
                prefetch="intent"
                to={url}
              >
                {item.title}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default MenuSideNav;
