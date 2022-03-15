import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'pepepatineta',
    description: 'Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone',
    likes: 123,
    shares: 1234,
    comments: 123,
    songTitle: 'Miriam Swordly, dacing in the rain - The mig seguchans',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/e88f2bf1d27b9054809f38321ba76ad3/623147e3/video/tos/useast2a/tos-useast2a-ve-0068c004/5010c8ed265f49559d8f37c40a7e7c65/?a=1988&br=4066&bt=2033&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7Thg2KiDXq&l=202203152010590102230780221B72C13B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3RwOTY6ZmZrOzMzNzczM0ApNzo7ZGU4NmVlNzxkOWk5N2drMGNecjQwYGpgLS1kMTZzczA1Xl80XjI2X2FeNTAxLWM6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'pepepatineta',
    description: 'Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone',
    likes: 123,
    shares: 1234,
    comments: 123,
    songTitle: 'Miriam Swordly, dacing in the rain - The mig seguchans',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/dd2bb254525dd3de807a765734bb1d84/6231477e/video/tos/useast2a/tos-useast2a-ve-0068c004/99236f406f6b4d489e524b7ed9e9d18a/?a=1988&br=2152&bt=1076&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7Thg2KiDXq&l=202203152010590102230780221B72C13B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVuNzg6Zmt2OzMzNzczM0ApNGc4OWQ6ODwzN2lkN2c2O2cuaGFmcjRnXjBgLS1kMTZzczFfY2EwXjYzMDNfNC5jMTQ6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'pepepatineta',
    description: 'Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone',
    likes: 123,
    shares: 1234,
    comments: 123,
    songTitle: 'Miriam Swordly, dacing in the rain - The mig seguchans',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/4581d79cebdedeedeba34dcb33b6470d/6231486e/video/tos/useast2a/tos-useast2a-ve-0068c002/4c26566931c94c2eb2b50d79a4ca0300/?a=1988&br=1284&bt=642&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThNeKiDXq&l=202203152012570102230711610E7162D5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl1cmY6ZjltOzMzNzczM0ApOTdpPDozOmVpNzs2NGg0O2djYl5ncjQwYWpgLS1kMTZzczA0NjQ0NWE1YzEwXzQyMDM6Yw%3D%3D&vl=&vr='
  }
]

export default function VideoFeed () {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
