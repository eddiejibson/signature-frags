import { ReactComponent as FacebookIcon } from '~/assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '~/assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '~/assets/icons/tiktok.svg';
import { ReactComponent as YouTubeIcon } from '~/assets/icons/youtube.svg';
import Button from '~/components/common/button/Button';

const Footer = () => {
  return (
    <div
      className="min-w-[100vw] justify-center bg-[#0C1E2E]/30 backdrop-blur-[1.5rem]  flex  z-10 element-with-wave "
      style={
        {
          // height: '450px',
          // clipPath:
          //   'polygon(100% 100%, 0% 100% , 0.00% 28.33%, 2.00% 28.27%, 4.00% 28.10%, 6.00% 27.81%, 8.00% 27.43%, 10.00% 26.96%, 12.00% 26.42%, 14.00% 25.83%, 16.00% 25.21%, 18.00% 24.58%, 20.00% 23.97%, 22.00% 23.39%, 24.00% 22.88%, 26.00% 22.43%, 28.00% 22.08%, 30.00% 21.83%, 32.00% 21.69%, 34.00% 21.67%, 36.00% 21.77%, 38.00% 21.98%, 40.00% 22.30%, 42.00% 22.72%, 44.00% 23.21%, 46.00% 23.77%, 48.00% 24.38%, 50.00% 25.00%, 52.00% 25.62%, 54.00% 26.23%, 56.00% 26.79%, 58.00% 27.28%, 60.00% 27.70%, 62.00% 28.02%, 64.00% 28.23%, 66.00% 28.33%, 68.00% 28.31%, 70.00% 28.17%, 72.00% 27.92%, 74.00% 27.57%, 76.00% 27.12%, 78.00% 26.61%, 80.00% 26.03%, 82.00% 25.42%, 84.00% 24.79%, 86.00% 24.17%, 88.00% 23.58%, 90.00% 23.04%, 92.00% 22.57%, 94.00% 22.19%, 96.00% 21.90%, 98.00% 21.73%, 100.00% 21.67%)',
        }
      }
    >
      <div className="flex  flex-col md:flex-row max-w-7xl justify-around px-8 md:px-12 lg:px-20 xl:px-24 space-x-2 pt-28 lg:pb-[6rem] pb-20">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 leading-7 mb-10 items-center lg:items-start">
          <h1 className="text-white font-semibold text-xl">Quick Links</h1>
          <div className="mt-5 flex flex-col space-y-2 text-offwhite/80 items-center lg:items-start">
            <a
              href="https://signaturefrags.com/search"
              className="hover:text-white transition-all"
            >
              Search
            </a>
            <a
              href="https://signaturefrags.com/blogs/news/about-us"
              className="hover:text-white transition-all"
            >
              About Us
            </a>
            <a
              href="https://signaturefrags.com/policies/refund-policy"
              className="hover:text-white transition-all"
            >
              DOA & Refund Policy
            </a>
            <a
              href="https://signaturefrags.com/policies/privacy-policy"
              className="hover:text-white transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="https://signaturefrags.com/policies/terms-of-service"
              className="hover:text-white transition-all"
            >
              Terms Of Service
            </a>
            <a
              href="https://signaturefrags.com/policies/shipping-policy"
              className="hover:text-white transition-all"
            >
              Shipping Policy
            </a>
            <a
              href="https://signaturefrags.com/policies/contact-information"
              className="hover:text-white transition-all"
            >
              Contact Information
            </a>
            <a
              href="https://signaturefrags.com/pages/contact"
              className="hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 w-full">
            <h2 className="text-white font-semibold text-lg text-center lg:text-left">
              Sign Up for Updates
            </h2>
            <form className="mt-4 flex flex-col space-y-3  items-center lg:items-start justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-none shadow-lg rounded-full px-4 py-2 w-full max-w-[18rem] text-sm backdrop-blur-[1.5rem] bg-black/16 border-offwhite border text-offwhite focus:outline-none"
              />

              <Button className="text-xs w-max mt-1">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 leading-7 text-center lg:text-left">
          <h1 className="text-white font-semibold text-xl">Our Mission</h1>
          <p className="text-offwhite/80 mt-5 text-base">
            To supply marine aquarists with healthy, hardy and colourful problem
            free corals through extensive quarantine & propagation
          </p>
          <p className="text-offwhite/80 mt-3 text-base">
            We believe this is the ethical and sustainable way to enjoy this
            hobby and its beautiful animals whilst protecting the oceans reefs
          </p>

          <div className="flex flex-row items-center justify-center lg:justify-start space-x-6 mt-6 border-t border-t-offwhite/20 pt-4">
            <a
              href="https://www.instagram.com/signature_frags"
              className="text-offwhite/50 transition-all hover:text-white hover:scale-110"
            >
              <FacebookIcon className="size-6 drop-shadow-xl" />
            </a>

            <a
              href="https://www.instagram.com/signature_frags"
              className="text-offwhite/50 transition-all hover:text-white hover:scale-110"
            >
              <InstagramIcon className="size-6 drop-shadow-xl" />
            </a>

            <a
              href="https://www.tiktok.com/@signature.frags"
              className="text-offwhite/50 transition-all hover:text-white hover:scale-110"
            >
              <TikTokIcon className="size-6 drop-shadow-xl" />
            </a>
            <a
              href="https://www.youtube.com/user/chrispond84ify"
              className="text-offwhite/50 transition-all hover:text-white hover:scale-110"
            >
              <YouTubeIcon className="size-6 drop-shadow-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
