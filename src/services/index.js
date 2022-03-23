import { supabase } from './supabase'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    // '*,alias:nombre del campo relacional(campos a traer)
    .select('*,user:user_id(username, avatar, id)')

  return [error, data]
}
