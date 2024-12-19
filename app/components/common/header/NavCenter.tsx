import { NavLink } from '@remix-run/react';
import { useAside } from '~/components/Aside';
import type { NavigationBarProps } from '~/components/common/header/Header';

interface NavigationCenterProps {
  menu: NavigationBarProps['header']['menu'];
}

const NavigationCenter = ({ menu }: NavigationCenterProps) => {
  const { close } = useAside();

  return (
    <div
      className="flex-row space-x-5 md:space-x-10 lg:space-x-20 text-xs md:text-sm hidden md:flex"
      role="navigation"
    >
      {menu &&
        menu.items.map((item) => {
          if (!item.url) return null;

          const url = item.url.includes('myshopify.com')
            ? new URL(item.url).pathname
            : item.url;
          return (
            <NavLink
              className="font-semibold hover:font-bold text-white/80  hover:text-white transition-all"
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
  );
};

export default NavigationCenter;
