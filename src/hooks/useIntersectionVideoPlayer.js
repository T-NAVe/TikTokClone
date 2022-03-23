import { useEffect, useState } from 'react'

// if root is null, window viewport will be used
const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.8
}

const observer = new window.IntersectionObserver((entries) => {
  entries
    .forEach(entry => {
      const { target, isIntersecting } = entry
      target._handleIntersect(isIntersecting)
    })
}, options)

export default function useIntersectionVideoPlayer ({ video }) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!video.current) return

    observer.observe(video.current)
    video.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = video
      isIntersecting ? videoEl.play() : videoEl.pause()
      setPlaying(isIntersecting)
    }
  }, [video.current])

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!videoEl.paused)
  }

  return { playing, handlePlay }
}
