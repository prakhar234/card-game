export interface Card {
  suit: string;
  value: string;
  highlight?: boolean;
  shuffle?: boolean;
}

export interface Player {
  id: number;
  cards: Card[];
}

export interface GameState {
  players: Player[];
  gameStarted: boolean;
  currentRound: number;
}
