import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Circle 1 */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-yellow-200 opacity-60 mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Circle 2 */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-pink-200 opacity-60 mix-blend-multiply filter blur-2xl"
        animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Circle 3 */}
      <motion.div
        className="absolute top-[40%] left-[50%] w-72 h-72 rounded-full bg-blue-200 opacity-60 mix-blend-multiply filter blur-xl"
        animate={{
            x: [0, 40, 0],
            y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cat Chase Animation Layer */}
      <div className="absolute bottom-4 w-full h-32 overflow-hidden opacity-30">
        <motion.div
            className="flex items-end absolute"
            initial={{ x: "-100%" }}
            animate={{ x: "120vw" }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear",
            }}
            style={{ bottom: '10%' }}
        >
             {/* Mouse */}
             <div className="text-4xl transform scale-x-[-1] grayscale contrast-200 blur-[0.5px]">🐁</div>
             
             {/* Space between */}
             <div className="w-32"></div>

             {/* Cat */}
             <div className="text-6xl transform scale-x-[-1] grayscale contrast-200 blur-[0.5px]">🐈</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;