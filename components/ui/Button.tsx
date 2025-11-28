import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  target?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href,
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  fullWidth = false,
  target,
  disabled
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/40",
    secondary: "border-transparent text-brand-700 bg-brand-50 hover:bg-brand-100",
    outline: "border-2 border-stone-200 text-stone-700 bg-white hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-700",
    ghost: "border-transparent text-stone-600 hover:text-brand-600 hover:bg-stone-100 px-6",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={target} 
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;