import { ACTIONS, Card, Player } from "../models/game.models";

const hand: Card[] = [
  {
    id: 'carta-1',
    color: 'blue',
    description: 'carta 1',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  },
  {
    id: 'carta-2',
    color: 'orange',
    description: 'carta 2',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  },
  {
    id: 'carta-3',
    color: 'green',
    description: 'carta 3',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  },
  {
    id: 'carta-4',
    color: 'gray',
    description: 'carta 4',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  },
  {
    id: 'carta-5',
    color: 'white',
    description: 'carta 5',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  },
  {
    id: 'carta-6',
    color: 'purple',
    description: 'carta 6',
    name: "",
    cost: 0,
    live: 0,
    mobility: 0,
    attack: 0,
    defense: 0,
    sides: {
      right: ACTIONS.IDLE,
      left: ACTIONS.IDLE,
      top: ACTIONS.IDLE,
      bottom: ACTIONS.IDLE
    },
    explosion: 0,
    playerId: ""
  }
]

const players: Player[] = [
  {
    name: "Júlia",
    live: 100,
    playing: true,
    energy: 4,
    deck: hand
  },
  {
    name: "João",
    live: 100,
    playing: false,
    energy: 4,
    deck: hand
  }
]


const mocks = {players, hand};

export default mocks