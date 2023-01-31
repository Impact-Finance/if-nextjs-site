import Image, { StaticImageData } from 'next/image';
import { Fade } from 'react-awesome-reveal';

import styles from './focus-item.module.css';

interface FocusItemProps {
  title: string;
  image: StaticImageData;
  justify: number;
  description: string;
  shape: StaticImageData;
}

const FocusItem = ({
  title,
  image,
  justify,
  description,
  shape,
}: FocusItemProps) => {
  return (
    <>
      {justify === 0 ? (
        <div className={styles.itemBox}>
          <Image
            src={image}
            alt={title}
            height={300}
            width={375}
            className={styles.isoRight}
          />
          <Image
            src={shape}
            alt="floating shape"
            height={160}
            width={160}
            className={styles.shapeRight}
          />
          <div className={styles.textRight}>
            <Fade
              duration={750}
              triggerOnce
              direction="right"
              cascade
              delay={250}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </Fade>
          </div>
        </div>
      ) : (
        <div className={styles.itemBox}>
          <div className={styles.textLeft}>
            <Fade
              duration={750}
              triggerOnce
              direction="left"
              cascade
              delay={250}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </Fade>
          </div>
          <Image
            src={image}
            alt={title}
            height={300}
            width={375}
            className={styles.isoLeft}
          />
          <Image
            src={shape}
            alt="floating shape"
            height={160}
            width={160}
            className={styles.shapeLeft}
          />
        </div>
      )}
    </>
  );
};

export default FocusItem;
