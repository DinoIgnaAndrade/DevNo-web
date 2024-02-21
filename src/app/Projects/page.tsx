import React from 'react'

import styles from './page.module.css'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import Portfolio from '@/components/Portfolio/Portfolio'


const projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default projects