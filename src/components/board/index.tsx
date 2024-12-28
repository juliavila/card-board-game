import { CardOnBoard, Slot } from '../../models/game.models';
import styles from './styles.module.scss';

function slotToGridPos({col, row}: Slot) {
  return {
    gridColumn: `${col+1} / ${col+2}`,
    gridRow: `${row+1} / ${row+2}`
  }
}

const slots = (Array.from(Array(35).keys())).map((_, index) => {

  const TOTAL_COLS= 7;

  const row = Math.floor(index/ TOTAL_COLS);
  
  return {
    row,
    col: index - TOTAL_COLS * row
  }

} )

type Props = {
  cardsonBoard: CardOnBoard[],
  selectSlot: (slot: Slot) => void
}

const BoardComponent = ({cardsonBoard, selectSlot}: Props) => {
  return <div className={styles.board}>

    {slots.map((slot) => {
      const card = cardsonBoard.find((card) => card.slot.col === slot.col && card.slot.row === slot.row)
      return <button 
        style={slotToGridPos(slot)} 
        className={styles.cardSlot}
        onClick={() => selectSlot(slot)}
        disabled={!!card}
      >
        {/* {JSON.stringify(slot)} <br /> */}
        {card?.card.id}
      </button>
    })}

  </div>
}

export default BoardComponent;