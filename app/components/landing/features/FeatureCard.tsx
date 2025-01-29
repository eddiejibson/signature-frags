import { motion } from 'motion/react';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}
const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, delay }}
      className="transition-all mb-16 px-5 pb-5 max-w-[23rem] min-w-[95%] md:min-w-xs  lg:mb-10 lg:min-w-auto hover:shadow-none hover:scale-102 md:hover-110 w-1/3 py-3 pt-10 relative bg-black/01 flex flex-col items-center backdrop-blur-[1.3rem] border-white/15 border  shadow-lg rounded-lg"
    >
      <div className="rounded-lg absolute -top-[2.5rem] size-16 bg-black/50    backdrop-blur-[1.3rem] shadow-lg flex items-center justify-center">
        {icon}
      </div>
      <h1 className="font-semibold text-center text-white drop-shadow-lg text-lg">
        {title}
      </h1>
      <p className="text-offwhite text-sm mt-2 text-center">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
