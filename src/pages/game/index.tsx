
import { useEffect, useState } from 'react'
import BoardComponent from '../../components/board'
import HandComponent from '../../components/hand'
import styles from './styles.module.scss'
import { Card, CardOnBoard, Player, Slot } from '../../models/game.models'
import mocks from '../../mocks'
import PlayersComponent from '../../components/player'

const mapToInvertTurn = (players: Player[]) => 
  players.map(player => ({ ...player, playing: !player.playing }))

function Game() {

  const [selectedCard, setSelectedCard] = useState<Card | undefined>();

  const [cardsonBoard, setCardsOnBoard] = useState<CardOnBoard[]>([]);

  const [hand, setHand] = useState<Card[]>([]);
  const [players, setPlayers] = useState<Player[]>(mocks.players);

  const primaryPlayer = players.find(({ playing }) => playing) as Player
  const secondaryPlayer = players.find(({ playing }) => !playing) as Player

  const endTurn = () => setPlayers(mapToInvertTurn);

  const selectSlot = (slot: Slot) => {
    if (!selectedCard) return;

    const newItem: CardOnBoard = {
      card: selectedCard, slot, player: 'eu'
    }

    setCardsOnBoard(current => [...current, newItem])
    setSelectedCard(undefined);

    setHand(current => current.filter(({ id }) => id !== selectedCard.id))
  }

  useEffect(() => {
    setHand(primaryPlayer.deck.slice(1, 5))
  }, [primaryPlayer])

  return (
    <div className={styles.game}>

      <div style={{ display: 'flex' }}>
        <BoardComponent cardsonBoard={cardsonBoard} selectSlot={selectSlot} />
        <PlayersComponent primaryPlayer={primaryPlayer} secondaryPlayer={secondaryPlayer} endTurn={endTurn} />
      </div>
      <HandComponent selectCard={setSelectedCard} cards={hand} />
    </div>
  )
}

export default Game
