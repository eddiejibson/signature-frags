import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import RainbowBg from '~/assets/rainbow.jpg';
import SignatureAnimation from '~/components/landing/SignatureDraw';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      if (videoElement.readyState >= 3) handleVideoLoad();
    }
  }, [videoRef]);

  return (
    <div className="relative h-[460px] md:h-[510px]">
      <div
        className="absolute top-0 w-full"
        style={{
          height: '650px',
          clipPath:
            'polygon(100% 0%, 0% 0% , 0.00% 86.67%, 2.00% 86.62%, 4.00% 86.46%, 6.00% 86.21%, 8.00% 85.87%, 10.00% 85.46%, 12.00% 84.98%, 14.00% 84.44%, 16.00% 83.88%, 18.00% 83.29%, 20.00% 82.71%, 22.00% 82.15%, 24.00% 81.62%, 26.00% 81.14%, 28.00% 80.74%, 30.00% 80.41%, 32.00% 80.18%, 34.00% 80.04%, 36.00% 80.00%, 38.00% 80.07%, 40.00% 80.23%, 42.00% 80.50%, 44.00% 80.85%, 46.00% 81.27%, 48.00% 81.76%, 50.00% 82.30%, 52.00% 82.87%, 54.00% 83.46%, 56.00% 84.04%, 58.00% 84.60%, 60.00% 85.12%, 62.00% 85.58%, 64.00% 85.98%, 66.00% 86.29%, 68.00% 86.52%, 70.00% 86.64%, 72.00% 86.66%, 74.00% 86.58%, 76.00% 86.40%, 78.00% 86.13%, 80.00% 85.76%, 82.00% 85.33%, 84.00% 84.83%, 86.00% 84.28%, 88.00% 83.71%, 90.00% 83.12%, 92.00% 82.55%, 94.00% 81.99%, 96.00% 81.48%, 98.00% 81.02%, 100.00% 80.64%);',
        }}
      >
        {!isVideoLoaded && (
          <img
            src={RainbowBg}
            alt="Rainbow Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        <motion.video
          preload="auto"
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100"
          src="/bg-compr.mp4"
          autoPlay
          loop
          muted
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
        />
        <div className="absolute top-0 bg-black/60 h-full w-full flex justify-center items-center flex-col">
          <div className="flex flex-col -mt-3">
            <SignatureAnimation />
            <motion.h3
              className="italic text-white/70 mt-5 drop-shadow-2xl tracking-widest text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 3, delay: 5, ease: 'easeOut' }}
            >
              THE UK’S HOME OF AQUACULTURED CORALS
            </motion.h3>
            <motion.div
              className="flex flex-row space-x-4 mt-7 justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 5, delay: 5, ease: 'easeInOut' }}
            >
              <a
                href="https://signaturefrags.com/a/gempages?preview=1717352587&type=template-index"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:scale-110 font-black bg-white px-4 py-2 rounded-full border-white border shadow-lg cursor-pointer hover:bg-transparent hover:text-white transition-all delay-150"
              >
                BOOK A VISIT
              </a>
              <a
                href="https://signaturefrags.com/collections"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:scale-110 font-black border-white border text-white px-3 py-2 rounded-full shadow-lg cursor-pointer hover:bg-white hover:text-black transition-all delay-150"
              >
                <span className="drop-shadow-lg">SHOP ONLINE</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
