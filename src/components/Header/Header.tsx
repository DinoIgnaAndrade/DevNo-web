import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';
import Weather from '../Weather/Weather';

const Header: React.FC = () => {

  return (
    <header className={styles.container}>

      <div className={styles.presentation}>

        <h4>Programando...</h4>
        <h1>Hola soy Dino, desarrollador Front-End web y mobile</h1>

        <p className={styles.paragraph}>
          Soy un entusiasta desarrollador novato, explorando el mundo de la creación de sitios web y aplicaciones.
          A pesar de ser nuevo en este emocionante campo, he invertido tiempo y esfuerzo para ampliar mis habilidades.
          Mi enfoque se centra en el aprendizaje constante y la práctica activa. Creo firmemente en la importancia de construir
          proyectos prácticos para aplicar los conocimientos adquiridos y desafiar mis límites.
        </p>

      </div>

      <Weather />

    </header>
  )
}

export default Header
