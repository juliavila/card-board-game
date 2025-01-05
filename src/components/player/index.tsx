import { Player } from "../../models/game.models"
import styles from './styles.module.scss'

type Props = { primaryPlayer: Player, secondaryPlayer: Player, endTurn: () => void }

const PlayersComponent = ({ primaryPlayer, secondaryPlayer, endTurn }: Props) => {

  return <div className={styles.players}>
    <div>
      <p>Openente</p>
      <h3>{secondaryPlayer.name}</h3>
      <p>Vida: {secondaryPlayer.live}</p>
      <p>Energia: {secondaryPlayer.energy}</p>
    </div>

    <div>
      <p>Você</p>
      <h3>{primaryPlayer.name}</h3>
      <p>Vida: {primaryPlayer.live}</p>
      <p>Energia: {primaryPlayer.energy}</p>
    </div>

    <button onClick={endTurn}>Finalizar turno</button>
  </div>
}

export default PlayersComponent;