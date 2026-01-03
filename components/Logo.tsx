import React from 'react';
import { motion } from 'framer-motion';
import { APP_NAME } from '../constants';

const Logo: React.FC = () => {
  const letters = APP_NAME.split('');

  return (
    <div className="flex items-baseline space-x-1 cursor-pointer select-none">
        {letters.map((letter, index) => (
            <motion.span
                key={index}
                className="text-4xl md:text-5xl font-black text-black drop-shadow-[3px_3px_0px_rgba(255,255,255,1)]"
                initial={{ y: 0 }}
                whileHover={{ 
                    y: -10, 
                    rotate: Math.random() * 10 - 5,
                    color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F1C'][index % 4]
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                   textShadow: '3px 3px 0px #000'
                }}
            >
             <span className="text-white relative z-10 drop-shadow-md" 
                   style={{ WebkitTextStroke: '2px black' }}>
                {letter}
             </span>
            </motion.span>
        ))}
    </div>
  );
};

export default Logo;