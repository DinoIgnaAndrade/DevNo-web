import React from 'react'

import styles from './page.module.css'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import AboutMe from '@/components/AboutMe/AboutMe'


const about: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default about