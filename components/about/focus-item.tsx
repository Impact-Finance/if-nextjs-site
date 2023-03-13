import Image, { StaticImageData } from 'next/image';
// import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';

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
  const [boxInView, setBoxInView] = useState(false);
  const [textInView, setTextInView] = useState(false);
  return (
    <>
      {justify === 0 ? (
        <Waypoint
          onEnter={() => {
            setBoxInView(true);
          }}>
          <div
            className={
              boxInView ? styles.itemBox : `${styles.itemBox} ${styles.offDown}`
            }>
            <Image
              src={image}
              alt={title}
              height={350}
              width={600}
              className={styles.isoRight}
            />
            <Image
              src={shape}
              alt="floating shape"
              height={160}
              width={160}
              className={styles.shapeRight}
            />
            <Waypoint
              onEnter={() => {
                setTextInView(true);
              }}
              bottomOffset={150}>
              <div
                className={
                  textInView
                    ? styles.textRight
                    : `${styles.textRight} ${styles.transparent}`
                }>
                {/* <Fade
            duration={750}
            triggerOnce
            direction="right"
            cascade> */}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {/* </Fade> */}
              </div>
            </Waypoint>
          </div>
        </Waypoint>
      ) : (
        <Waypoint
          onEnter={() => {
            setBoxInView(true);
          }}>
          <div
            className={
              boxInView ? styles.itemBox : `${styles.itemBox} ${styles.offDown}`
            }>
            <Waypoint
              onEnter={() => {
                setTextInView(true);
              }}
              bottomOffset={150}>
              <div
                className={
                  textInView
                    ? styles.textLeft
                    : `${styles.textLeft} ${styles.transparent}`
                }>
                {/* <Fade
              duration={750}
              triggerOnce
              direction="left"
              cascade> */}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {/* </Fade> */}
              </div>
            </Waypoint>
            <Image
              src={image}
              alt={title}
              height={350}
              width={600}
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
        </Waypoint>
      )}
    </>
  );
};

export default FocusItem;
