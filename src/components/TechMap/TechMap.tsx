import style from './TechMap.module.css'
import { TbBrandPython, TbBrandMysql, TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandFirebase } from "react-icons/tb";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { SiExpo } from "react-icons/si";

const TechMap: React.FC = () => {
    return (
        <div className={style.container}>

            <div className={style.step}>
                <h3>Logica Básica y OOP</h3>
                <div>
                    <FaJava className={style.icon} />
                    <TbBrandPython className={style.icon}/>
                </div>
                <p>Java y Python. Ejercicios de logica pura y compresiones basicas.</p>
            </div>

            <div className={style.step}>
                <h3>Base de Datos</h3>
                <div>
                    <FaJava className={style.icon}/>
                    <TbBrandMysql className={style.icon}/>
                </div>
                <p>Mysql con Java. Nociones basicas, JDBC y JPA</p>
            </div>

            <div className={style.step}>
                <h3>Desarrollo Web</h3>
                <div>
                    <FaHtml5 className={style.icon}/>
                    <FaCss3Alt className={style.icon}/>
                </div>
                <p>Html y Css.</p>
            </div>


            <div className={style.step}>
                <h3>Desarrollo Web con React</h3>
                <div>
                    <FaNodeJs className={style.icon}/>
                    <FaReact className={style.icon}/>
                    <TbBrandJavascript className={style.icon}/>
                    <FaBootstrap className={style.icon}/>
                </div>
                <p>Html, Css y JavaScript. Frameworks y librerias.</p>
            </div>

            <div className={style.step}>
                <h3>Desarrollo de Aplicaciones</h3>
                <div>
                    <FaNodeJs className={style.icon}/>
                    <TbBrandReactNative className={style.icon}/>
                    <SiExpo className={style.icon}/>
                    <TbBrandJavascript className={style.icon}/>
                    <TbBrandRedux className={style.icon}/>
                    <TbBrandFirebase className={style.icon}/>
                </div>
                <p>Despliegue aplicaciones móviles. React Native, JavaScript. Prototipado. Sincronización de datos con Firebase.</p>
            </div>

        </div>
    )
}

export default TechMap