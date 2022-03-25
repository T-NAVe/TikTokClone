import { supabase } from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.Key ? `${prefix}${data.Key}` : ''
  return [error, file]
}

export const publishVideo = async ({ src, description }) => {
  const defaultUser = '5d3b1b12-3ac5-4fd2-9b0f-bfdbbec8980f'
  const defaultAlbumCover = 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fcac982df7ce46958d31a6f728c54a29~c5_200x200.jpeg'
  const defaultSongTitle = 'Miriam Swordly, dacing in the rain - The mig seguchans'
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        user_id: defaultUser,
        albumCover: defaultAlbumCover,
        songTitle: defaultSongTitle,
        src,
        description
      }
    ])
  return [error, data]
}
export const getVideos = async () => {
  const { data, error } = await supabase.from('videos')
    // '*,alias:nombre del campo relacional(campos a traer)
    .select('*,user:user_id(username, avatar, id)')
    .order('created_at', { ascending: false })

  return [error, data]
}
