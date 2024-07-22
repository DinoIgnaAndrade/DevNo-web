import React from 'react';
import styles from './page.module.css';

import NavBar from '@/components/NavBar/NavBar';
import BackgroundVideo from '@/components/Background/BackgroundVideo';

import Carousel from '@/components/Carousel/Carousel';
import Header from '@/components/Header/Header';
import Weather from '@/components/Weather/Weather';

import Portfolio from '@/components/Portfolio/Portfolio';
import AboutMe from '@/components/AboutMe/AboutMe';

import Footer from '@/components/Footer/Footer';

// Añadir claves únicas a cada elemento en el array
const cards: React.ReactNode[] = [
  <Header key="header" />,
  <Weather key="weather" />,
];

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <BackgroundVideo />
      <NavBar />
      <Carousel pages={cards} />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
