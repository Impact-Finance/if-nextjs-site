import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import intheory from '@/public/company/inTheory-logo.png';
import swap from '@/public/company/IF-swap-logo.png';
import triangle from '@/public/shapes/triangle-grid.png';
import Product from './product';
import styles from './products.module.css';

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <Image
        className={styles.triangle}
        src={triangle}
        alt="triangle-background"
        fill
        sizes="100vw"
      />
      <Fade
        duration={1000}
        triggerOnce
        direction="down">
        <h2 className={styles.headline}>Current Projects</h2>
      </Fade>
      <div className={styles.itemBox}>
        <Fade
          duration={1000}
          triggerOnce
          direction="up"
          cascade>
          <Product
            title="inTheory Research"
            image={intheory}
            description="A market network at the intersection of science x art"
            link="https://intheory.science"
            release=""
          />
          <Product
            title="IF Swap"
            image={swap}
            description="A bridgeless cross-chain DEX for impact assets"
            link=""
            release="Coming 2024"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Products;
