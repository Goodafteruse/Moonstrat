export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // URL to image
  gameUrl: string; // Path to the HTML file (e.g., /games/my-game/index.html)
  themeColor: string; // Hex code or Tailwind color class
  category: 'Action' | 'Puzzle' | 'Arcade' | 'Relax';
}

export type ScreenState = 'GRID' | 'PLAYING';