export type Slot = {
  col: number;
  row: number;
  // card?: Object; TODO: decidir o que é melhor
}

export type Card = {
  id: string;
  color: string;
  description: string;
}

export type CardOnBoard = {
  card: Card,
  player: string,
  slot: Slot
}
