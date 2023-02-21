import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

import mainBg from '@/public/site/main-bg.webp';
import isoGraphic from '@/public/isometrics/iso-graphic.webp';
import loading from '@/public/site/loading.webp';
import styles from './hero.module.css';

interface HeroProps {
  focusScroll: () => void;
}

const Hero = ({ focusScroll }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.heroContainer}>
      <Image
        className={styles.background}
        src={mainBg}
        alt="gradient-background"
        fill
        sizes="100vw"
        priority
      />
      {!isLoaded && (
        <div className={styles.loadingContainer}>
          <Image
            className={styles.loading}
            src={loading}
            alt="loading-graphic"
            fill
            sizes="20vw"
            priority
          />
        </div>
      )}
      <div className={styles.graphicContainer}>
        <Image
          className={styles.isoGraphic}
          src={isoGraphic}
          alt="isometric-graphic"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onLoadingComplete={() => {
            setIsLoaded(true);
          }}
        />
      </div>
      <div className={styles.textContainer}>
        <Fade
          duration={750}
          direction="up"
          triggerOnce
          cascade>
          <h1 className={styles.mainHead}>Own the Future</h1>
          <h4 className={styles.subHead}>
            We build interactive digital economies to support high-impact
            causes.
          </h4>
          <button
            className={styles.primaryBtn}
            onClick={focusScroll}>
            Learn More →
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
