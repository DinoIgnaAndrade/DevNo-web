import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';
import Weather from '../Weather/Weather';

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

const Header: React.FC = () => {

  return (
    <header className={styles.container}>

      <div className={styles.presentation}>

        <h4>Programando...</h4>
        <h1>Hola soy Dino, desarrollador Front-End web y mobile</h1>

        <p className={styles.paragraph}>
          Soy un entusiasta desarrollador novato, explorando el mundo de la creación de sitios web y aplicaciones.
          A pesar de ser nuevo en este emocionante campo, he invertido tiempo y esfuerzo para ampliar mis habilidades.
        </p>

        <h4>dinoignaandrade.com</h4>

        <div className={styles.socials}>
          <a href='https://github.com/DinoIgnaAndrade'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/dino-ignacio-andrade-6326342b8/'>
            <FaLinkedin />
          </a>
          <a href='https://wa.me/+5491131917494'>
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <Weather />

    </header>
  )
}

export default Header
