export type Slot = {
  col: number;
  row: number;
  // card?: Object; TODO: decidir o que é melhor
}

export enum ACTIONS {
  IDLE,
  DEFENSE,
  ATACK
}

export type Card = {
  id: string;
  name: string;
  cost: number;
  live: number;
  mobility: number;
  attack: number;
  defense: number;
  sides: {
    right: ACTIONS,
    left: ACTIONS,
    top: ACTIONS,
    bottom: ACTIONS,
  }
  description: string;
  explosion: number;
  playerId: string
  color: string;
}

export type CardOnBoard = {
  card: Card,
  player: string,
  slot: Slot
}

export type Player = {
  name: string;
  live: number;
  playing: boolean;
  energy: number;
  deck: Card[];
  handSize: number;
  hand: Card[];
  discard: Card[];
}
