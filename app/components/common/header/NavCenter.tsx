import { NavLink } from '@remix-run/react';
import { useAside } from '~/components/Aside';
import type { NavigationBarProps } from '~/components/common/header/Header';
import type { Viewport } from '~/components/common/types';

interface NavigationCenterProps {
  menu: NavigationBarProps['header']['menu'];
  primaryDomainUrl: NavigationBarProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: NavigationBarProps['publicStoreDomain'];
}

const NavigationCenter = ({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: NavigationCenterProps) => {
  const { close } = useAside();

  return (
    <div className="flex flex-row space-x-20" role="navigation">
      {viewport === 'mobile' && (
        <NavLink end onClick={close} prefetch="intent" to="/">
          Home
        </NavLink>
      )}
      {menu &&
        menu.items.map((item) => {
          if (!item.url) return null;

          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;
          return (
            <NavLink
              className="header-menu-item font-semibold"
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
