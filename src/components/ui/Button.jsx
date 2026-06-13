import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, to, href, onClick, type = 'button', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-inter font-medium rounded-[10px] transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-brand-gradient text-white shadow-brand hover:shadow-[0_6px_20px_rgba(33,150,243,0.50)] hover:-translate-y-[2px] px-6 py-3",
    ghost: "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white px-6 py-[10px]",
    coral: "bg-accent text-white shadow-[0_4px_14px_rgba(255,92,122,0.35)] hover:shadow-[0_6px_20px_rgba(255,92,122,0.5)] hover:-translate-y-[2px] px-6 py-3",
    white: "bg-white text-brand-deep shadow-card hover:shadow-brand-lg px-6 py-3 font-semibold",
    nav: "bg-brand-gradient text-white shadow-brand hover:shadow-[0_6px_20px_rgba(33,150,243,0.50)] hover:-translate-y-[2px] px-5 py-2 text-sm",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
