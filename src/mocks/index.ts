import { ACTIONS, Card, Player } from "../models/game.models";
import colors from "./colors";

const ramdomValue = (max: number) => Math.floor(Math.random() * max);

const ramdomColor = () => colors[ramdomValue(colors.length)];

const ramdomAction = (): ACTIONS => {
  const index = ramdomValue(Object.keys(ACTIONS).length);
  const value = Object.values(ACTIONS)[index] as keyof (typeof ACTIONS);
  return ACTIONS[value];
}

const ramdomDeck: Card[] = [...Array(50)].map((_, index) => {

  const card: Card = ({
    id: `carta-${index}`,
    color: ramdomColor(),
    description: `carta ${index}`,
    name: `carta ${index}`,
    cost: ramdomValue(5),
    live: ramdomValue(10),
    mobility: ramdomValue(2),
    attack: ramdomValue(5),
    defense: ramdomValue(5),
    sides: {
      right: ramdomAction(),
      left: ramdomAction(),
      top: ramdomAction(),
      bottom: ramdomAction()
    },
    explosion: ramdomValue(10),
    playerId: "",
  });

  return card;
})

const players: Player[] = [
  {
    name: "Júlia",
    live: 100,
    playing: true,
    energy: 4,
    deck: ramdomDeck,
    handSize: 5,
    hand: [],
    discard: []
  },
  {
    name: "João",
    live: 100,
    playing: false,
    energy: 4,
    deck: ramdomDeck,
    handSize: 5,
    hand: [],
    discard: []
  }
]


const mocks = { players };

export default mocks