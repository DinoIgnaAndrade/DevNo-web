// Home.tsx
import React from 'react';
import styles from './page.module.css';

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Portfolio from '@/components/Portfolio/Portfolio';
import AboutMe from '@/components/AboutMe/AboutMe';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>

      <NavBar />

      <Header />

      <Portfolio  />

      <AboutMe />

      <Footer />

    </main>
  );
};

export default Home;
