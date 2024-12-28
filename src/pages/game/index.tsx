
import { useState } from 'react'
import BoardComponent from '../../components/board'
import HandComponent from '../../components/hand'
import styles from './styles.module.scss'
import { Card, CardOnBoard, Slot } from '../../models/game.models'
import { handMock } from '../../mocks'


function Game() {

  const [selectedCard, setSelectedCard] = useState<Card | undefined>();

  const [cardsonBoard, setCardsOnBoard] = useState<CardOnBoard[]>([]);

  const [hand, setHand] = useState<Card[]>(handMock);

  const selectSlot = (slot: Slot) => {
    if (!selectedCard) return;

    const newItem: CardOnBoard = {
      card: selectedCard, slot, player: 'eu'
    }

    setCardsOnBoard(current => [...current, newItem])
    setSelectedCard(undefined);

    setHand(current => current.filter(({id}) => id !== selectedCard.id))
  }

  return (
    <div className={styles.game}>
      <BoardComponent cardsonBoard={cardsonBoard} selectSlot={selectSlot} />
      <HandComponent selectCard={setSelectedCard} cards={hand} />
    </div>
  )
}

export default Game
