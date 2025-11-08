import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all";
  
  const variantStyles = {
    primary: "bg-cyan text-black shadow-[0_0_15px_rgba(0,255,255,0.6)]",
    secondary: "bg-magenta text-white shadow-[0_0_15px_rgba(255,0,255,0.6)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

