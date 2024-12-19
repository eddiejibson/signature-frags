import { ReactComponent as Bag } from '~/assets/icons/bag.svg';
import { ReactComponent as Heart } from '~/assets/icons/heart.svg';
import { ReactComponent as User } from '~/assets/icons/user.svg';

import IconButton from '~/components/common/button/IconButton';
import type { NavigationBarProps } from '~/components/common/header/Header';

const HeaderRight = ({
  isLoggedIn,
  cart,
}: Pick<NavigationBarProps, 'isLoggedIn' | 'cart'>) => {
  return (
    <nav className=" flex-row space-x-6 hidden md:flex" role="navigation">
      {/* <HeaderMenuMobileToggle /> */}
      <IconButton>
        <Heart />
      </IconButton>
      <IconButton>
        <Bag />
      </IconButton>
      <IconButton>
        <User />
      </IconButton>
    </nav>
  );
};

export default HeaderRight;
