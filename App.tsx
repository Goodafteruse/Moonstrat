import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Youtube, Instagram, Heart } from 'lucide-react';
import { GAMES, APP_SUBTITLE } from './constants';
import { Game } from './types';
import Background from './components/Background';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  // Parent container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
        delayChildren: 0.2     // Initial delay before starting
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-gray-900">
      <Background />

      {/* Navbar */}
      <header className="w-full py-6 px-4 md:px-8 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div 
             onClick={() => setActiveGame(null)} 
             className="flex flex-col items-center md:items-start cursor-pointer group"
          >
             <Logo />
             <p className="font-bold text-gray-500 text-sm tracking-widest uppercase mt-1 ml-1 group-hover:text-black transition-colors">{APP_SUBTITLE}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a 
                href="https://youtube.com" 
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-full hover:bg-red-50 text-black"
                whileHover={{ scale: 1.1, rotate: 10, backgroundColor: '#FF0000', color: '#FFF', borderColor: '#FFF' }}
                whileTap={{ scale: 0.9 }}
            >
                <Youtube size={24} />
            </motion.a>
            <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border-2 border-black rounded-full hover:bg-pink-50 text-black"
                whileHover={{ scale: 1.1, rotate: -10, backgroundColor: '#E1306C', color: '#FFF', borderColor: '#FFF' }}
                whileTap={{ scale: 0.9 }}
            >
                <Instagram size={24} />
            </motion.a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 relative z-10">
        <AnimatePresence mode="wait">
          {activeGame ? (
            <GamePlayer 
                key="player" 
                game={activeGame} 
                onBack={() => setActiveGame(null)} 
            />
          ) : (
            <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                {/* Filters / Hero Section */}
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-black mb-4 leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Play?</span>
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-700 font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Explore my collection of hand-picked HTML5 games. No downloads, just pure browser fun.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                    {GAMES.map((game) => (
                        <GameCard 
                            key={game.id} 
                            game={game} 
                            onPlay={setActiveGame} 
                        />
                    ))}
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-8 border-t-4 border-black bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div>
                <h4 className="font-black text-xl">MOONSTRAT</h4>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
                Made with <Heart size={16} className="text-red-500 fill-current animate-pulse" /> by Me.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;