import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'

export default function VideoDescription ({ albumCover, author, description }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a className={styles.author} href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className={styles.text}>
          {description}
        </p>
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
