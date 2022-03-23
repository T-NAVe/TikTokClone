import { Heart } from '../Icons/Heart.jsx'
import { Share } from '../Icons/Share.jsx'
import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 0, comments = 0, shares = 0, hearted = false, username, avatar }) {
  const handleLike = () => {
    window.alert('Like')
  }
  const handleComment = () => {
    window.alert('Comment')
  }
  const handleShare = () => {
    window.alert('Share')
  }
  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img src={avatar} alt={username} />
        <img
          src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg'
          width='24'
        />
      </div>

      <button onClick={handleLike} className={styles.action}>
        <Heart />
        <span title='Like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment />
        <span title='Comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share />
        <span title='Shares'>{shares}</span>
      </button>

    </aside>
  )
}
