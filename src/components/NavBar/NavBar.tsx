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
        <li className={styles.link}><Link href="#about">Acerca de mi</Link></li>
        <li className={styles.link}><Link href="#projects">Projectos</Link></li>
        <li className={styles.link}><Link href="https://drive.google.com/file/d/1RcyE1_2LbHrezKrAv9YEAJRrhtnJJnAo/view?usp=drive_link">Curriculum</Link></li>
      </ul>

      

    </nav>
  );
};

export default NavBar;
