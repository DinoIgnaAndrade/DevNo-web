import React, { useEffect } from 'react';
import Image from 'next/image';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import styles from './Footer.module.css'
import logo from '../../asset/logo.jpg';


const Footer: React.FC = () => {

    return (
        <div>
            <footer className={styles.container}>

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

                <Image
                    className={styles.imageLogo}
                    src={logo}
                    alt='' />

                <div className={styles.copyright}>
                    2024 DevNo
                </div>

            </footer>
        </div>
    )
}

export default Footer
