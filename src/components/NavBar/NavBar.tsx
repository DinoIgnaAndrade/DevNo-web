// NavBar.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';

import cv from './Curriculum.pdf'
import logo from '../../img/logo.jpg';
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {

  return (
    <nav className={styles.container}>

      <Link href='/'>
        <Image
          className={styles.imageLogo}
          src={logo}
          alt="Logo"
          width={300}
          height={300}
        />
      </Link>
      <Link href='/'
        className={styles.nameLogo}>
        DevNo
      </Link>

      <ul className={styles.navLinks}>
        <li className={styles.link}><Link href="/">Home</Link></li>
        <li className={styles.link}><Link href="/Projects">Proyects</Link></li>
        <li className={styles.link}><Link href="/About">About</Link></li>
      </ul>

      <a className={styles.btn} href={cv} download={true} >Curriculum</a>

    </nav>
  );
};

export default NavBar;
