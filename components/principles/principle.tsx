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
        sizes="(max-width: 375px) 60vw, 
        (max-width: 425px) 60vw, 
        (max-width: 768px) 50vw, 
        (max-width: 999px) 30vw,
        (max-width: 1200px) 20vw,
        20vw"
      />
      <Fade
        duration={2000}
        triggerOnce
        direction="down"
        delay={1000}>
        <h3 className={styles.title}>{title}</h3>
      </Fade>
    </div>
  );
};

export default Principle;
