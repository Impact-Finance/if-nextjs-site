import Image, { StaticImageData } from 'next/image';
import { Fade } from 'react-awesome-reveal';

import styles from './principle.module.css';

interface PrincipleProps {
  image: StaticImageData;
  title: string;
}

const Principle = ({ image, title }: PrincipleProps) => {
  return (
    <div className={styles.principleBox}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        fill
        sizes="30vw"
      />
      <Fade
        duration={2000}
        triggerOnce
        direction="down"
        delay={1500}>
        <h3 className={styles.title}>{title}</h3>
      </Fade>
    </div>
  );
};

export default Principle;
