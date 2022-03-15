import MusicIcon from '../icons/MusicIcon'
import styles from './styles.module.css'
import Marquee from 'react-fast-marquee'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed={50}>{'-' + songTitle}</Marquee>
    </div>
  )
}
