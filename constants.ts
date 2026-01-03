import { Game } from './types';

// =========================================================================
// INSTRUCTIONS FOR USER:
// To add your own game:
// 1. Put your game folder in the 'public' directory.
// 2. Add an object to this list below.
// =========================================================================

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Cosmic Jumper',
    description: 'Jump through the stars and avoid the black holes! A classic platformer.',
    thumbnail: 'https://picsum.photos/id/119/400/300',
    // For a real app, use: gameUrl: '/games/cosmic-jumper/index.html',
    gameUrl: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22background%3A%23222%3Bcolor%3Awhite%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bheight%3A100vh%3Bfont-family%3Asans-serif%22%3E%3Ch1%3ECosmic%20Jumper%20Game%20Loaded!%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E', 
    themeColor: '#FF6B6B', // Red/Coral
    category: 'Action'
  },
  {
    id: '2',
    title: 'Bubble Pop Logic',
    description: 'Connect the bubbles of the same color to clear the board.',
    thumbnail: 'https://picsum.photos/id/106/400/300',
    gameUrl: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22background%3A%23eef%3Bcolor%3A%23333%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bheight%3A100vh%3Bfont-family%3Asans-serif%22%3E%3Ch1%3EBubble%20Pop%20Logic%20Loaded!%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E',
    themeColor: '#4ECDC4', // Teal
    category: 'Puzzle'
  },
  {
    id: '3',
    title: 'Neon Racer 2000',
    description: 'High speed racing in a retro-future city.',
    thumbnail: 'https://picsum.photos/id/184/400/300',
    gameUrl: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22background%3Ablack%3Bcolor%3Acyan%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bheight%3A100vh%3Bfont-family%3Asans-serif%22%3E%3Ch1%3ENeon%20Racer%20Loaded!%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E',
    themeColor: '#FFE66D', // Yellow
    category: 'Arcade'
  },
  {
    id: '4',
    title: 'Garden Zen',
    description: 'Plant flowers and watch them grow. No stress, just vibes.',
    thumbnail: 'https://picsum.photos/id/306/400/300',
    gameUrl: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22background%3A%23efe%3Bcolor%3Agreen%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bheight%3A100vh%3Bfont-family%3Asans-serif%22%3E%3Ch1%3EGarden%20Zen%20Loaded!%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E',
    themeColor: '#95E1D3', // Mint
    category: 'Relax'
  },
   {
    id: '5',
    title: 'Dungeon Clicker',
    description: 'Click monsters, get loot, upgrade your sword.',
    thumbnail: 'https://picsum.photos/id/514/400/300',
    gameUrl: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%20style%3D%22background%3A%23311%3Bcolor%3Ared%3Bdisplay%3Aflex%3Balign-items%3Acenter%3Bjustify-content%3Acenter%3Bheight%3A100vh%3Bfont-family%3Asans-serif%22%3E%3Ch1%3EDungeon%20Clicker%20Loaded!%3C%2Fh1%3E%3C%2Fbody%3E%3C%2Fhtml%3E',
    themeColor: '#A8DADC', // Blue Gray
    category: 'Action'
  },
];

export const APP_NAME = "MOONSTRAT";
export const APP_SUBTITLE = "The Best Place for Silly Games";