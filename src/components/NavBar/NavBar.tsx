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

    </nav>
  );
};

export default NavBar;
