import React from 'react';
import { motion } from 'framer-motion';

interface GradeRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GradeReveal: React.FC<GradeRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.85, scale: 0.98, filter: 'grayscale(60%) contrast(110%)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'grayscale(0%) contrast(100%)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
