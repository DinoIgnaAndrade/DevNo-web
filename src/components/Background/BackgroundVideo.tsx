import React from 'react'
import styles from './BackgroundVideo.module.css'


type Props = {}

const BackgroundVideo = (props: Props) => {
  return (
    <div className={styles.videoBackground}>
      <video src={require('../../../public/waves.mp4')} autoPlay muted loop className={styles.video} />
    </div>
  )
}

export default BackgroundVideo;