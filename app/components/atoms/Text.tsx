import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const variants = {
    h1: "text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]",
    h2: "text-white text-[22px] sm:text-3xl font-bold leading-tight tracking-[-0.015em]",
    h3: "text-white text-lg font-bold leading-tight",
    body: "text-[#EAEAEA] text-base sm:text-lg font-normal leading-normal",
    caption: "text-[#A0A0A0] text-sm font-normal leading-normal"
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Component,
    { className: `${variants[variant]} ${className}` },
    children
  );
};

