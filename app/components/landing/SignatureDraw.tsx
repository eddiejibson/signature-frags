import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { ReactComponent as FragsText } from '~/assets/frags-text.svg';
import { Signature } from '~/components/landing/signature';

const SignatureAnimation = () => {
  const pathVariants = (pathLength: number) =>
    ({
      start: {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        fill: 'white',
        fillOpacity: 0,
        transition: {
          duration: 2,
          ease: 'easeInOut',
        },
      },
      middle: {
        strokeDashoffset: 0,
        fillOpacity: 100,
        fill: 'white',
        transition: {
          duration: 2,
          ease: 'easeInOut',
          delay: 0,
        },
      },
      end: {
        stroke: 'none',
        strokeOpacity: 0,
        fillOpacity: 100,
        transition: {
          duration: 10,
          ease: 'easeInOut',
          delay: 3,
        },
      },
    } as Variants);

  return (
    <div className="flex flex-col relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 386.16 130.48"
        className="w-72 md:w-80"
      >
        {Signature.map((path, index) => {
          return (
            <motion.path
              key={index}
              d={path.path}
              fill="transparent"
              stroke="white"
              strokeWidth="1"
              variants={pathVariants(path.pathLength)}
              initial="start"
              animate={['start', 'middle', 'end']}
            />
          );
        })}
      </svg>
      <motion.div
        className="flex flex-row absolute w-full justify-end bottom-0 right-3 opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 3, delay: 3, ease: 'easeOut' }}
      >
        <FragsText className="h-3 md:h-4" />
      </motion.div>
    </div>
  );
};

export default SignatureAnimation;
