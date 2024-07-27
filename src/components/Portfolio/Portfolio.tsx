import React from 'react'

import styles from './Portfolio.module.css'
import ProjectItem from '../Items/ProjectItem'

import logoWeb from '../../media/logo.jpg'
import eCommerce from '../../media/PlatillaECommerce.jpg'
import elAyudante from '../../media/elAyundante.jpeg'
import benTenImage from '../../media/BenTen.jpeg'
import miniProjectos from '../../media/miniprojectos.jpg'

import { FaReact, FaJava, FaPython } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandTypescript, TbBrandJavascript, TbBrandNodejs, TbBrandReactNative, TbBrandRedux, TbBrandFirebase, TbBrandFramerMotion } from "react-icons/tb";
import { SiExpo, SiMysql } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

const Portfolio: React.FC = () => {
    const devnowebIcons = [TbBrandTypescript, TbBrandNodejs, FaReact, TbBrandNextjs, BiLogoNetlify];
    const plantillaEcommerceIcons = [TbBrandJavascript, TbBrandNodejs, FaReact, SiExpo, TbBrandReactNative, TbBrandRedux, TbBrandFirebase];
    const elAyudanteIcons = [TbBrandJavascript, TbBrandNodejs, FaReact, TbBrandNextjs, BiLogoNetlify, TbBrandFramerMotion];
    const bentenIcons = [TbBrandTypescript, TbBrandNodejs, FaReact, SiExpo, TbBrandReactNative, TbBrandRedux];
    const miniProjectosIcons = [FaJava, FaPython, SiMysql]

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Projectos</h1>
            <p className={styles.parragraph}> 
                Estos son mi proyectos particulares. Tanto los que use para aprender tecnologias como proyectos personales en uso. Fueron lindas
                experiencias pero aun asi me sacaron de canas de lo frustrante que eran algunas cosas.
            </p>

            <div className={styles.itemsContainer} id='projects'>

                <ProjectItem
                    title='BenTen'
                    description="Reproductor de música hecho en Expo, creado principalmente para prácticas con React Native Reanimated."
                    image={benTenImage}
                    icons={bentenIcons}
                    projectLink='https://github.com/DinoIgnaAndrade/BenTen.git'
                />
                <ProjectItem
                    title='Plantilla E-Commerce'
                    description="Es un proyecto de aplicación en React/Expo, que tiene como objetivo ser el 
                prototipo base para futuros proyectos de comercio electrónico y personalizados."
                    image={eCommerce}
                    icons={plantillaEcommerceIcons}
                    projectLink='https://github.com/DinoIgnaAndrade/Plantilla-E-Commerce.git'
                />
                <ProjectItem
                    title='DevNo Website'
                    description="El espacio donde exhibo todos mis proyectos, 
                                comparto conocimientos, experiencias y agrego proyectos pequeños. A medida que avanzo, 
                                lo desarrollo gradualmente."
                    image={logoWeb}
                    icons={devnowebIcons}
                    projectLink=''
                />
                <ProjectItem
                    title='Refrigeracion El Ayudante'
                    description="Página web para un servicio de refrigeración en Lomas de Zamora."
                    image={elAyudante}
                    icons={elAyudanteIcons}
                    projectLink='https://elayundaterefrigeracion.netlify.app/'
                />
                <ProjectItem
                    title='Mini Projectos'
                    description="Recopilación de pequeños trabajos, tales como asistentes por voz, chat bots y proyectos relacionados con bases de datos. 
                Incluye el manejo de lógica simple en Java, Python y MySQL."
                    image={miniProjectos}
                    icons={miniProjectosIcons}
                    projectLink='https://github.com/DinoIgnaAndrade/MiniProjectos'
                />
            </div>
        </div>


    )
}

export default Portfolio