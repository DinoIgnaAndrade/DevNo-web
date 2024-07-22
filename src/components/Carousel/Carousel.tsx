'use client';
import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';

//Icons
import ArrowLeft from '../IconsSvg/ArrowLeft';
import ArrowRight from '../IconsSvg/ArrowRight';

type Props = {
  pages: React.ReactNode[]
};

const Carousel = ({ pages }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 15000; 

  useEffect(() => {
    const autoChangeSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
    };

    const id = setInterval(autoChangeSlide, intervalTime);

    return () => {
      clearInterval(id);
    };
  }, [pages.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={handlePrev}><ArrowLeft /></button>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 1s ease-in-out' }}
      >
        {pages.map((page, index) => (
          <div key={index} className={styles.page}>
            {page}
          </div>
        ))}
      </div>
      <button className={styles.arrow} onClick={handleNext}><ArrowRight /></button>
    </div>
  );
};

export default Carousel;
