import { Heart } from '../Icons/Heart.jsx'
import { Share } from '../Icons/Share.jsx'
import { Comment } from '../Icons/Comment.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions ({likes = 0, comments = 0, shares = 0, hearted = false }) {
    return (
        <aside className={styles.actions}>
            <div className={styles.action}>
                <Heart/>
                <strong title='Like'>{likes}</strong>
            </div>
            <div className={styles.action}>
                <Comment/>
                <strong title='Comments'>{comments}</strong>
            </div>
            <div className={styles.action}>
                <Share/>
                <strong title='Shares'>{shares}</strong>
            </div>
        </aside>
    )
}

