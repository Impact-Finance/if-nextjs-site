import Image from 'next/image';

import radial from '@/public/site/radial.png';
import sphere from '@/public/shapes/spheric-grid.png';
import prism from '@/public/shapes/prismatic-grid.png';
import styles from './about.module.css';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Fade
      duration={1500}
      triggerOnce
      delay={500}>
      <div className={styles.aboutContainer}>
        <Image
          src={sphere}
          alt="floating sphere"
          height={160}
          width={160}
          className={styles.sphere}
        />
        <Image
          src={prism}
          alt="floating sphere"
          height={160}
          width={160}
          className={styles.prism}
        />
        <Image
          className={styles.radialImg}
          src={radial}
          alt="radial-background"
          fill
          sizes="100vw"
        />
        <Fade
          duration={2000}
          triggerOnce
          direction="down"
          delay={500}
          cascade>
          <p className={styles.text}>
            Today&apos;s global challenges require a new type of cooperative
            economy, centered around causes and communities.
          </p>
          <p className={styles.text}>
            <span className={styles.highlighted}>
              That&apos;s what we&apos;re building.
            </span>
          </p>
        </Fade>
      </div>
    </Fade>
  );
};

export default About;
