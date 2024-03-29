// NavBar.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../asset/logo.jpg';
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

      <Link className={styles.btn} href="https://drive.google.com/file/d/1xOC8P_2R_6QErcGFDnjJ5IcLRaIvqHXD/view?usp=drive_link">
        C_Vitae
        </Link>

    </nav>
  );
};

export default NavBar;
