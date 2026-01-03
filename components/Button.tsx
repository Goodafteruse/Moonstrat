import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className, ...props }) => {
  const colors = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 text-black',
    secondary: 'bg-white hover:bg-gray-100 text-black',
    danger: 'bg-red-400 hover:bg-red-300 text-white'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.95, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
      className={`
        relative px-6 py-3 font-bold rounded-xl border-4 border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors 
        flex items-center justify-center gap-2
        ${colors[variant]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;