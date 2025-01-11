import { Player } from "../../../models/game.models";

export const playerManager =  {
  
 suffleDeck: (player: Player) => {
    let shuffledDeck = [...player.deck]
    let currentIndex = shuffledDeck.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = 
        [shuffledDeck[randomIndex], shuffledDeck[currentIndex]];
    }

    return {...player, deck: shuffledDeck}
  },

  resetHand: (player: Player) => {
    if (player.hand.length >= player.handSize) return player; 

    let newDeck = [...player.deck];
    let newHand = [...player.hand]; 

    for (var i = 0; i < player.handSize - player.hand.length; i++)
    {
      const newItem = newDeck.shift();
      newItem && newHand.push(newItem);
    }

    return {...player, deck: newDeck, hand: newHand}
  },

  invertTurn: (player: Player) => ({ ...player, playing: !player.playing })
  
} 