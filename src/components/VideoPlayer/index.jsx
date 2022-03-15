import styles from './styles.module.css'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription/index'

export default function VideoPlayer ({ src, likes, comments, shares, albumCover, author, description, songTitle, ...props }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)
  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions likes={likes} comments={comments} shares={shares} />
      <VideoDescription albumCover={albumCover} author={author} description={description} songTitle={songTitle} />
    </div>
  )
}

// tiktok player icon
/* <svg class="player" width="72" height="72" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"></path></svg>
*/
