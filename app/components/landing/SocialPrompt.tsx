import { motion } from 'motion/react';
import { ReactComponent as FacebookIcon } from '~/assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '~/assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '~/assets/icons/tiktok.svg';
import { ReactComponent as YouTubeIcon } from '~/assets/icons/youtube.svg';

import Button from '~/components/common/button/Button';

const SocialPrompt = () => {
  return (
    <motion.div
      className="flex flex-col items-center py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-xl text-white font-semibold drop-shadow-2xl">
        Stay Connected
      </h2>
      <p className="text-offwhite text-center mt-5 md:!max-w-3xl mb-8">
        We love to share previews on our new releases as well as the progress on
        corals we already have in our care. Follow us on any of our social
        accounts to stay up to date.
      </p>
      <div className="flex flex-col md:flex-nowrap md:flex-row mb-6 space-x-0 md:space-x-6 justify-around items-center">
        <Button
          a
          className="flex w-max h-min mb-6"
          href="https://www.facebook.com/SignatureFrags"
        >
          <div className="flex flex-row space-x-3 items-center">
            <FacebookIcon />
            <span>Facebook</span>
          </div>
        </Button>
        <Button
          a
          href="https://www.instagram.com/signature_frags"
          className="flex w-max h-min mb-6"
        >
          <div className="flex flex-row space-x-3 items-center">
            <InstagramIcon />
            <span>Instagram</span>
          </div>
        </Button>
        <Button
          a
          className="flex w-max h-min mb-6"
          href="https://www.tiktok.com/@signature.frags"
        >
          <div className="flex flex-row space-x-3 items-center">
            <TikTokIcon />
            <span>TikTok</span>
          </div>
        </Button>
        <Button
          a
          href="https://www.youtube.com/user/chrispond84ify"
          className="flex w-max h-min mb-6"
        >
          <div className="flex flex-row space-x-3 items-center">
            <YouTubeIcon />
            <span>YouTube</span>
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default SocialPrompt;
