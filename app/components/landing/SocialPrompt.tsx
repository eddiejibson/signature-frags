import { ReactComponent as FacebookIcon } from '~/assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '~/assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '~/assets/icons/tiktok.svg';

import Button from '~/components/common/button/Button';

const SocialPrompt = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl text-white font-semibold drop-shadow-2xl">
        Stay Connected
      </h2>
      <p className="text-offwhite text-center mt-5 md:!max-w-3xl mb-8">
        We love to share previews on our new releases as well as the progress on
        corals we already have in our care. Follow us on any of our social
        accounts to stay up to date.
      </p>
      <div className="flex flex-wrap md:flex-row space-y-6 space-x-6 justify-center">
        <Button className="flex w-max h-min">
          <div className="flex flex-row space-x-3 items-center">
            <FacebookIcon />
            <span>Facebook</span>
          </div>
        </Button>
        <Button className="flex w-max h-min">
          <div className="flex flex-row space-x-3 items-center">
            <InstagramIcon />
            <span>Instagram</span>
          </div>
        </Button>
        <Button className="flex w-max h-min">
          <div className="flex flex-row space-x-3 items-center">
            <TikTokIcon />
            <span>TikTok</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SocialPrompt;
