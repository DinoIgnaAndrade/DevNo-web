// Home.tsx
import React from 'react';
import Link from 'next/link';

import styles from './page.module.css';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>

      <NavBar />

      <Header />

      <Footer />

    </main>
  );
};

export default Home;
