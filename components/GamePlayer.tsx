import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize, Minimize, RefreshCw, AlertCircle } from 'lucide-react';
import { Game } from '../types';
import Button from './Button';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        iframeRef.current?.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="w-full max-w-6xl mx-auto px-4"
    >
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <Button onClick={onBack} variant="secondary" icon={<ArrowLeft />}>
            Back to Arcade
        </Button>
        
        <div className="flex flex-col md:items-end">
            <h2 className="text-3xl font-black text-black">{game.title}</h2>
            <div className="flex gap-2 mt-1">
                 <span className="bg-black text-white px-2 py-0.5 rounded text-xs font-bold uppercase">
                    {game.category}
                 </span>
            </div>
        </div>
      </div>

      {/* Game Container */}
      <div className="relative bg-black rounded-3xl p-2 md:p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Toolbar */}
        <div className="absolute top-0 left-0 w-full h-12 flex items-center justify-between px-6 z-10 pointer-events-none">
             {/* Use pointer-events-none on container and auto on buttons so they don't block game if overlapping */}
        </div>

        {/* Iframe Wrapper */}
        <div 
            className={`relative bg-gray-900 rounded-xl overflow-hidden w-full ${isFullscreen ? 'h-full' : 'aspect-video'}`}
            ref={iframeRef}
        >
             {loading && (
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                     <div className="text-white font-bold animate-bounce flex flex-col items-center gap-2">
                        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                        Loading Game Bits...
                     </div>
                 </div>
             )}
             
             <iframe
                src={game.gameUrl}
                title={game.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setLoading(false)}
             />
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-800 rounded-b-xl mt-2 p-2 flex justify-between items-center text-white">
            <div className="flex gap-2">
                <button onClick={handleRefresh} className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-white" title="Restart Game">
                    <RefreshCw size={20} />
                </button>
            </div>
            <div className="text-xs font-mono text-gray-400 hidden sm:block">
                Playing: {game.title}
            </div>
            <div className="flex gap-2">
                 <button onClick={toggleFullscreen} className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-white" title="Toggle Fullscreen">
                    {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                </button>
            </div>
        </div>
      </div>

      {/* Description / Instructions */}
      <div className="mt-8 bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <AlertCircle size={20} className="text-blue-500" />
            How to Play
        </h3>
        <p className="text-gray-700 leading-relaxed">
            {game.description}
        </p>
        <div className="mt-4 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 text-sm text-yellow-800">
            <strong>Developer Note:</strong> To make this game work fully, ensure the <code>gameUrl</code> in <code>constants.ts</code> points to your actual <code>index.html</code> file in the <code>public/games/</code> folder.
        </div>
      </div>
    </motion.div>
  );
};

export default GamePlayer;