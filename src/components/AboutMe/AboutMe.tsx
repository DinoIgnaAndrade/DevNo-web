import Image from 'next/image'

import { TbBrandTypescript, TbBrandReactNative, TbBrandNextjs} from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

import { SiExpo } from "react-icons/si";

import me from '../../asset/me.jpg'
import styles from './AboutMe.module.css'
import TechMap from '../TechMap/TechMap'

const AboutMe: React.FC = () => {
    return (
            <div className={styles.container} id='about'>

                <div className={styles.presentation}>
                    <h1 className={styles.title}>Dino Ignacio Andrade</h1>
                    <p className={styles.paragraph}>
                        En primer lugar soy Argentino, en segundo Francia. Cuando aprendi a programar se supone que era Full Magic Power Stack, pero me quede en un simple fronted
                        con React, NextJs y el lindo TypeScript. Actualmente estoy trabajando como tecnico en refrigeracion y arreglo placas electronicas. 
                        Programo como frelancer como pasatiempo para mejorar mis habilidades y experiencia.
                    </p>

                    <h2>Estas son las tecnologias que aprendi y se usar de manera decente.</h2>

                    <TechMap />
                </div>

                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={me}
                        alt='avatar'
                        width={3455}
                        height={2847}
                    />
                    <div className={styles.myTechs}>
                        <h4>Mis Tecnologías Actuales</h4>
                        <div>
                            <TbBrandTypescript className={styles.iconTechs} />
                            <FaReact className={styles.iconTechs} />
                            <TbBrandNextjs className={styles.iconTechs} />
                            <TbBrandReactNative className={styles.iconTechs} />
                            <SiExpo className={styles.iconTechs} />
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default AboutMe