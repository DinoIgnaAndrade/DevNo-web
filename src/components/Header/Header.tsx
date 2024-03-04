import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';
import Weather from '../Weather/Weather';

const Header:React.FC = () => {

  return (
      <header className={styles.container}>

          <div className={styles.presentation}>

            <h4>Programando por un sueño</h4>
            <h1>Hola soy Dino, Web y Aplication developer</h1>

            <p className={styles.paragraph}>
              Soy un apasionado desarrollador novato en el mundo de la creación de sitios web y aplicaciones.
              A pesar de ser nuevo en este campo, he estado dedicando tiempo y esfuerzo para aprender; y crecer en mis
              habilidades.
            </p>

          </div>

          <Weather />
          
      </header>
  )
}

export default Header
