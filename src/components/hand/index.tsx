import { Card } from '../../models/game.models';
import styles from './styles.module.scss';

type Props = {
  cards: Card[];
  selectCard: (card: Card | undefined) => void
}

const HandComponent = ({cards,  selectCard }: Props) => {
  return <div className={styles.player}>
    <div className={styles.deck}>
      store
    </div>

    <div className={styles.hand}>

      {cards.map((card) =>

        <button
          className={styles.card}
          style={{ background: card.color }}
          onClick={() => selectCard(card)}>
          {card.description}
        </button>

      )}

    </div>

    <div className={styles.deck}>
      deck
    </div>

  </div>

}

export default HandComponent