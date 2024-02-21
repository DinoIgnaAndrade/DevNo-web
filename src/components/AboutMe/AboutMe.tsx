import Image from 'next/image'

import { TbBrandTypescript,TbBrandReactNative,TbBrandNextjs,TbBrandRedux  } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

import { SiExpo } from "react-icons/si";

import me from '../../img/me.jpg'
import styles from './AboutMe.module.css'
import TechMap from '../TechMap/TechMap'

const AboutMe: React.FC = () => {
    return (
        <div className={styles.container}>

            <div className={styles.presentation}>
                <h1 className={styles.title}>Dino Ignacio Andrade</h1>
                <p className={styles.paragraph}>Dentro de la fantasia soy un DESARROLLADOR FULL STACK DEVELOPER EN COMPLETA FORMA.
                    En la realidad, soy desarrollador JR de fronted que entiende backend, y que, ademas puede desarrollar aplicaciones Android y IOS
                    Llevo un tiempo estudiando y programando. Y este fue mi camino:
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
                        <TbBrandTypescript className={styles.iconTechs}/>
                        <FaReact className={styles.iconTechs}/>
                        <TbBrandNextjs className={styles.iconTechs}/>
                        <TbBrandReactNative className={styles.iconTechs}/>
                        <SiExpo className={styles.iconTechs}/>
                        <TbBrandRedux className={styles.iconTechs}/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AboutMe