import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { publishVideo, uploadVideo } from '../../services'
import styles from './styles.module.css'

export default function Upload () {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    const [error, fileUrl] = await uploadVideo({ videoFile: file })
    console.log(error, fileUrl)
    if (error) return console.error(error)
    setUploaded(fileUrl)
  }

  const {
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: 'video/mp4,video/x-m4v,video/*',
    onDrop
  })

  const dndClassNames = clsx(styles.dnd, {
    [styles.uploaded]: uploaded,
    [styles.uploading && !styles.uploaded]: uploading,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  const renderDndContent = () => {
    if (uploaded) return <h4>¡Archivo cargado con éxito!</h4>
    if (uploading) return <h4>Subiendo archivo...</h4>
    if (isDragReject) return <h4>Archivo no soportado</h4>
    if (isDragAccept) return <h4>¡Suelta el archivo para subirlo!</h4>
    return (
      <>
        <h4>Selecciona el video para cargar</h4>
        <h5>O arrastra y suelta un archivo</h5>
        <ul>
          <li>MP4 o WebM</li>
          <li>Resolución de al menos 720x1280</li>
          <li>Hasta 180 segundos</li>
        </ul>
      </>
    )
  }

  useEffect(() => {
    if (isDragReject) navigator.vibrate(100)
  }, [isDragReject])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!uploaded) return
    const description = e.target.description.value
    const [error] = await publishVideo({ src: uploaded, description })
    if (error) return console.error(error)
    else console.log('Video publicado')
  }

  return (
    <div className={styles.upload} onSubmit={handleSubmit}>
      <h1>Cargar video</h1>
      <p>Este video se publicará en el perfil de @midudev</p>

      <form className={styles.form}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={dndClassNames}>
            <img
              src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg'
              width='49'
            />
            {renderDndContent()}
          </div>
        </div>

        <label>
          leyenda
          <input name='description' placeholder='' />
        </label>

        <button type='submit'>Publicar</button>
      </form>
    </div>
  )
}
