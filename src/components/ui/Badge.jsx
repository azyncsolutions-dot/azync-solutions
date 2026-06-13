import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, className }) => {
  return (
    <span className={cn("inline-block px-3 py-1 bg-[rgba(33,150,243,0.08)] border border-[rgba(33,150,243,0.20)] text-brand-deep rounded-full text-xs font-semibold uppercase tracking-wider", className)}>
      {children}
    </span>
  );
};

export default Badge;
