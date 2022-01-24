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
        songTitle: 'Miriam Swordly',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/febff098306a9d7f914bef4f90576c12/61ef5f69/video/tos/useast2a/tos-useast2a-ve-0068c001/46a63d781c514586ae57415aefdfe68c/?a=1988&br=2164&bt=1082&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThGN35lXq&l=2022012420240701022307901222532871&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3JoO2c6ZnlmOTMzNzczM0ApNzc1ZzRnZ2VlNzc5aGVkPGdzXm5tcjRfMGhgLS1kMTZzczEzNTBjLjYtX2NfLV5jLWA6Yw%3D%3D&vl=&vr='
    },
    {
        id: 2,
        author: 'pepepatineta',
        description: 'Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone',
        likes: 123,
        shares: 1234,
        comments: 123,
        songTitle: 'Miriam Swordly',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/fb631314a616a2a798902691ea9979f0/61ef5f50/video/tos/useast2a/tos-useast2a-ve-0068c003/bf32eabfbfd542cd9c6f9958f7262769/?a=1988&br=3302&bt=1651&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThGN35lXq&l=2022012420240701022307901222532871&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dzNDo6ZjNpOjMzNzczM0ApZ2k8aDo6OTw0N2Y5PDM1ZWdzaS1hcjRvcDBgLS1kMTZzc2EzM2E0LjRjLTZhMzNgLTE6Yw%3D%3D&vl=&vr='
    },
    {
        id: 3,
        author: 'pepepatineta',
        description: 'Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone',
        likes: 123,
        shares: 1234,
        comments: 123,
        songTitle: 'Miriam Swordly',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg',
        src: 'https://v16-webapp.tiktok.com/12056f47c1003009ba710cb24186f9a8/61ef5f54/video/tos/alisg/tos-alisg-pve-0037c001/6dca01685ef84616b1c7317e0e4cf7d5/?a=1988&br=1562&bt=781&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThGN35lXq&l=2022012420240701022307901222532871&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ5ZWU6ZjlyNzMzODczNEApZzY2ZWZoNDs6NzhoNjU3M2dzZGdqcjRnYTBgLS1kMS1zc2NiMS9iMjMxYy4tYDIzYV46Yw%3D%3D&vl=&vr='
    }
]

export default function VideoFeed() {
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
