import { motion } from 'framer-motion';
import { ReactComponent as FragsText } from '~/assets/frags-text.svg';
import { Signature } from '~/components/landing/signature';

const SignatureAnimation = () => {
  return (
    <div className="flex flex-col relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 386.16 130.48"
        className="w-72 md:w-80"
      >
        <defs>
          <mask id="reveal-mask">
            <motion.rect
              initial={{ width: 0 }}
              animate={{ width: 400 }} // Expand to cover signature
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
              x="0"
              y="0"
              height="100%"
              fill="white"
            />
          </mask>
        </defs>

        {Signature.map((path, index) => (
          <motion.path
            key={index}
            d={path.path}
            fill="white"
            mask="url(#reveal-mask)"
          />
        ))}
      </svg>

      <motion.div
        className="flex flex-row absolute w-full justify-end bottom-0 right-3 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3, ease: 'easeOut' }}
      >
        <FragsText className="h-3 md:h-4" />
      </motion.div>
    </div>
  );
};

export default SignatureAnimation;
