'use client'
import styles from './Header.module.css';
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

const Header: React.FC = () => {

  return (
    <header className={styles.container}>

      <div className={styles.presentation}>

        <h4>
          <Typewriter
            words={['Desarrollando...', 'Arreglando...', 'Sufriendo...', 'Funciona!!!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={5000}
            />
        </h4>

        <h1>Hola soy Dino, desarrollador Front-End web y mobile</h1>

        <p className={styles.paragraph}>
          Soy tecnico en refrigeración, arreglo placas electronicas y me encanta programar. 
          Llevo 2 años aprendiendo, creando y haciendo trabajos freelace en mi tiempo libre.
        </p>

        {/* <h4>dinoignaandrade.com</h4> */}

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

    </header>
  )
}

export default Header
