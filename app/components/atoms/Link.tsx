import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'nav' | 'default';
}

export const Link: React.FC<LinkProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variantStyles = {
    nav: "text-white text-sm font-medium leading-normal hover:text-cyan transition-colors",
    default: "text-[#A0A0A0] hover:text-cyan transition-colors"
  };

  return (
    <a className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
};

