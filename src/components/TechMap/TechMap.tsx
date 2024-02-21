
import style from './TechMap.module.css'
import { TbBrandPython, TbBrandMysql, TbBrandJavascript, TbBrandReactNative, TbBrandRedux, TbBrandFirebase } from "react-icons/tb";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { BiLogoSpringBoot } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { SiExpo } from "react-icons/si";

const TechMap: React.FC = () => {
    return (
        <div className={style.container}>

            <div className={style.step}>
                <h4>Logica Básica y OOP</h4>
                <div>
                    <FaJava className={style.icon} />
                    <TbBrandPython className={style.icon}/>
                </div>
            </div>

            <MdOutlineDoubleArrow className={style.iconConnection}/>

            <div className={style.step}>
                <h4>Base de Datos</h4>
                <div>
                    <FaJava className={style.icon}/>
                    <TbBrandMysql className={style.icon}/>
                </div>
            </div>

            <MdOutlineDoubleArrow className={style.iconConnection}/>

            <div className={style.step}>
                <h4>Bases del Desarrollo Web</h4>
                <div>
                    <FaHtml5 className={style.icon}/>
                    <FaCss3Alt className={style.icon}/>
                </div>
            </div>

            <MdOutlineDoubleArrow className={style.iconConnection}/>

            <div className={style.step}>
                <h4>DW con React</h4>
                <div>
                    <FaNodeJs className={style.icon}/>
                    <FaReact className={style.icon}/>
                    <TbBrandJavascript className={style.icon}/>
                    <FaBootstrap className={style.icon}/>
                </div>
            </div>

            <ImCross className={style.iconCroxx}/>

            <div className={style.noStep}>
                <h4>Desarrollo con Springboot</h4>
                <div>
                    <FaJava className={style.noIcon}/>
                    <BiLogoSpringBoot className={style.noIcon}/>
                </div>
            </div>

            <MdOutlineDoubleArrow className={style.iconConnection}/>

            <div className={style.step}>
                <h4>Desarrollo de Aplicaciones</h4>
                <div>
                    <FaNodeJs className={style.icon}/>
                    <TbBrandReactNative className={style.icon}/>
                    <SiExpo className={style.icon}/>
                    <TbBrandJavascript className={style.icon}/>
                    <TbBrandRedux className={style.icon}/>
                    <TbBrandFirebase className={style.icon}/>
                </div>
            </div>

        </div>
    )
}

export default TechMap