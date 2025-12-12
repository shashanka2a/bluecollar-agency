import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#E8B4A0] text-black hover:bg-[#d6a28e] shadow-[0_0_20px_rgba(232,180,160,0.3)]",
    secondary: "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20",
    ghost: "text-[#FAFAF9] hover:text-[#E8B4A0]",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};