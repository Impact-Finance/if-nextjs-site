import Image from 'next/image';

import radial from '@/public/site/radial.png';
import cube from '@/public/shapes/cubic-grid.png';
import cylinder from '@/public/shapes/pipe-grid.png';
import blob1 from '@/public/shapes/blob-1.png';
import blob2 from '@/public/shapes/blob-2.png';
import flubber1 from '@/public/shapes/flubber-1.png';
import flubber2 from '@/public/shapes/flubber-2.png';
import styles from './principles.module.css';
import { Fade } from 'react-awesome-reveal';
import Principle from './principle';

const Principles = () => {
  return (
    <Fade
      duration={1500}
      triggerOnce
      delay={250}>
      <div className={styles.principlesContainer}>
        <Image
          src={cube}
          alt="floating cube"
          height={160}
          width={160}
          className={styles.cube}
        />
        <Image
          src={cylinder}
          alt="floating sphere"
          height={160}
          width={160}
          className={styles.cylinder}
        />
        <Image
          className={styles.radialImg}
          src={radial}
          alt="radial-background"
          fill
          sizes="90vw"
        />
        <Fade
          duration={1000}
          triggerOnce
          direction="down">
          <h2 className={styles.title}>Design Principles</h2>
        </Fade>
        <div className={styles.row}>
          <Fade
            duration={1000}
            triggerOnce
            direction="up"
            cascade>
            <Principle
              image={flubber1}
              title="Sustainability"
            />
            <Principle
              image={blob1}
              title="Social Integrity"
            />
            <Principle
              image={blob2}
              title="Broad Accessibility"
            />
            <Principle
              image={flubber2}
              title="Community Ownership"
            />
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Principles;
