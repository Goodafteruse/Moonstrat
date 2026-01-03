import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

// Child variant that matches the parent's "hidden" and "show" keys
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <motion.div
      layoutId={`card-${game.id}`}
      variants={cardVariants}
      className="group relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer flex flex-col h-full"
      whileHover={{ 
        scale: 1.05, 
        rotate: 1, 
        shadow: "12px 12px 0px 0px rgba(0,0,0,1)",
        transition: { duration: 0.2 }
      }}
      onClick={() => onPlay(game)}
    >
      {/* Category Tag */}
      <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-black text-white text-xs font-bold rounded-full uppercase tracking-wider">
        {game.category}
      </div>

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden border-b-4 border-black bg-gray-200">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
                <Play className="w-8 h-8 text-black fill-current translate-x-1" />
            </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className="text-2xl font-black text-black mb-2 leading-tight" style={{ fontFamily: 'Fredoka' }}>
            {game.title}
        </h3>
        <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4 flex-grow">
            {game.description}
        </p>
        
        <div className="mt-auto">
             <div 
                className="h-2 w-full rounded-full opacity-50" 
                style={{ backgroundColor: game.themeColor }}
             ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;