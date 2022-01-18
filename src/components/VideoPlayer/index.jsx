import styles from './styles.module.css'
import clsx from 'clsx'
import {useRef, useState} from 'react'

const SRC = 'https://v16-webapp.tiktok.com/613d1498ff0f47f2c84d3e022ebeefa9/61e6edf3/video/tos/useast2a/tos-useast2a-ve-0068c002/dd3566a2972f4a968f06f639dbab3fc3/?a=1988&br=640&bt=320&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=20220118104012010223081157100816E4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anQ0eDU6Zjx5OTMzNzczM0ApZTM5OTUzOjw1Nzc0MzQzM2doYTVfcjRfaTJgLS1kMTZzc2MwMjFiYmIvMWIzLy0yL2I6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)
    const handlePlay = () =>{
        const {current: videoEl} = video
        playing
            ? videoEl.pause()
            : videoEl.play()

        setPlaying(!playing)
    }

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing,
    })

    return (
      <div>
        <video
            ref={video}
            className={styles.video}
            src={SRC}
            controls={false}
            onClick={handlePlay}
        />
        <i className={playerClassName} onClick={handlePlay}>
        </i>
      </div>
  )
}

//tiktok player icon    
{/* <svg class="player" width="72" height="72" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"></path></svg> */ } 