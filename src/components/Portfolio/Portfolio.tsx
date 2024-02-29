import React from 'react'

import styles from './Portfolio.module.css'
import ProjectItem from '../Items/ProjectItem'

import logoWeb from '../../img/logo.jpg'
import eCommerce from '../../img/PlatillaECommerce.jpg'
import elAyudante from '../../img/elAyundante.jpeg'
import benTenImage from '../../img/BenTen.jpeg'
import miniProjectos from '../../img/miniprojectos.jpg'	

import { FaReact, FaJava, FaPython  } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandTypescript, TbBrandJavascript, TbBrandNodejs, TbBrandReactNative, TbBrandRedux, TbBrandFirebase, TbBrandFramerMotion } from "react-icons/tb";
import { SiExpo, SiMysql } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

const Portfolio: React.FC = () => {
    const devnowebIcons = [TbBrandTypescript, TbBrandNodejs, FaReact, TbBrandNextjs, BiLogoNetlify];
    const plantillaEcommerceIcons = [TbBrandJavascript, TbBrandNodejs, FaReact, SiExpo, TbBrandReactNative, TbBrandRedux, TbBrandFirebase];
    const elAyudanteIcons = [TbBrandJavascript, TbBrandNodejs, FaReact, TbBrandNextjs, BiLogoNetlify, TbBrandFramerMotion];
    const bentenIcons = [TbBrandTypescript, TbBrandNodejs, FaReact, SiExpo, TbBrandReactNative, TbBrandRedux];
    const miniProjectosIcons =[FaJava,FaPython,SiMysql]

    return (
        <div className={styles.container}>
            <ProjectItem
                title='DevNo Website'
                description='Es mi sitio web donde no solo muestro todos mis projectos, tambien voy agregando conocimientos y experiencias; y 
                poco a poco la hago crecer'
                image={logoWeb}
                icons={devnowebIcons}
                projectLink=''
            />
            <ProjectItem
                title='Plantilla E-Commerce'
                description='Es un proyecto de app en React/Expo, 
                el cual tiene como objetivo de ser el prototipo base de futuros proyectos futuros de e-commerce y personalizados.'
                image={eCommerce}
                icons={plantillaEcommerceIcons}
                projectLink='https://github.com/DinoIgnaAndrade/Plantilla-E-Commerce.git'
            />
            <ProjectItem
                title='Refrigeracion El Ayudante'
                description='Pagina Web para un sercvicio de refrigeracion de Lomas de Zamora'
                image={elAyudante}
                icons={elAyudanteIcons}
                projectLink='https://elayundaterefrigeracion.netlify.app/'
            />
            <ProjectItem
                title='BenTen(En producción)'
                description='Reproductor de musica echo en Expo, hecho mas que nada para practicas de React Native Reanimated'
                image={benTenImage}
                icons={bentenIcons}
                projectLink='https://github.com/DinoIgnaAndrade/BenTen.git'
            />
            <ProjectItem
                title='Mini Projectos'
                description='RRecopilacion de tanto pequeños trabajos de aprendisaje como primeros projectos de base de datos y trabajo con logica simple en Java, Pytho y mySQL' 
                image={miniProjectos}
                icons={miniProjectosIcons}
                projectLink='https://github.com/DinoIgnaAndrade/MiniProjectos'
            />
        </div>
    )
}

export default Portfolio