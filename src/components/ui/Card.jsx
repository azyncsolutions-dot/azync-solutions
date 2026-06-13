import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Card = ({ children, className, hover = true, glass = false }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass ? "glass-card" : "bg-white shadow-card hover:shadow-brand-lg border border-transparent hover:border-[rgba(33,150,243,0.30)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
