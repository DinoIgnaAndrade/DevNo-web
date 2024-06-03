import Image from 'next/image'

import { TbBrandTypescript, TbBrandReactNative, TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

import { SiExpo } from "react-icons/si";

import me from '../../asset/me.jpg'
import styles from './AboutMe.module.css'
import TechMap from '../TechMap/TechMap'

const AboutMe: React.FC = () => {
    return (
        <>
            <h1 className={styles.title}>Sobre Mi</h1>

            <div className={styles.container} id='about'>
                <div className={styles.presentation}>
                    <h1 className={styles.title}>Dino Ignacio Andrade</h1>
                    <p className={styles.paragraph}>
                        Soy un desarrollador de frontend con comprensión del backend. Además, tengo la capacidad de desarrollar
                        aplicaciones para Android e iOS. He estado estudiando y programando durante un tiempo. Este ha sido mi camino:
                    </p>

                    <TechMap />
                </div>

                <div>
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
        </>

    )
}

export default AboutMe