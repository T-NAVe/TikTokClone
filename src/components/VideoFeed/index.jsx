import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'

const VIDEOS = [
    {
        id: 1,
        author: "pepepatineta",
        description: "Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone",
        likes: 123,
        shares:1234,
        comments: 123,
        songTitle: "Miriam Swordly",
        albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg",
        src: "https://v16-webapp.tiktok.com/613d1498ff0f47f2c84d3e022ebeefa9/61e6edf3/video/tos/useast2a/tos-useast2a-ve-0068c002/dd3566a2972f4a968f06f639dbab3fc3/?a=1988&br=640&bt=320&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=20220118104012010223081157100816E4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anQ0eDU6Zjx5OTMzNzczM0ApZTM5OTUzOjw1Nzc0MzQzM2doYTVfcjRfaTJgLS1kMTZzc2MwMjFiYmIvMWIzLy0yL2I6Yw%3D%3D&vl=&vr="
    },
    {
        id: 2,
        author: "pepepatineta",
        description: "Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone",
        likes: 123,
        shares:1234,
        comments: 123,
        songTitle: "Miriam Swordly",
        albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg",
        src: "https://v16-webapp.tiktok.com/f7c6d5b13628f07cc73bf2aa354b354a/61e6ed76/video/tos/useast5/tos-useast5-pve-0068-tx/ec4b20442f8e4491a36ffc379791487c/?a=1988&br=788&bt=394&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=20220118104012010223081157100816E4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Q2dDc6Zm82OjMzZzczNEApMzVoOGgzODxnNzVpaGVnNmdyZV9jcjQwaWRgLS1kMS9zczNjYy0xYC8uYV41YWBgY2M6Yw%3D%3D&vl=&vr="
    },
    {
        id: 3,
        author: "pepepatineta",
        description: "Preparando la merienda :) // mi ig: @sofyyleone #parati #rutina #sofyyleone",
        likes: 123,
        shares:1234,
        comments: 123,
        songTitle: "Miriam Swordly",
        albumCover: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg",
        src: "https://v16-webapp.tiktok.com/ba9a12afef860bd952941f15199f1ede/61e6f7db/video/tos/useast2a/tos-useast2a-pve-0068/8fc77993b7bb4bdb814b0d59224341d2/?a=1988&br=2696&bt=1348&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201181122220102230821640A0C530B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amt1dzg6ZngzOTMzNzczM0ApPDNlPGk7aGQ2NzhlZmllO2dpMWoycjQwNWhgLS1kMTZzc2FjMS8tNWNgXzIyLzAuLmM6Yw%3D%3D&vl=&vr="
    }
]

export default function VideoFeed () {
    return (
            VIDEOS.map(video =>{
                return(
                <div className={styles.item}>                      
                    <VideoPlayer key={video.id} {...video}/>
                </div>
                )
            })
    )
}