import { Fade } from 'react-awesome-reveal';

import FocusItem from './focus-item';
import desci from '@/public/isometrics/desci-iso.png';
import pg from '@/public/isometrics/pg-iso.png';
import climate from '@/public/isometrics/climate-iso.png';
import cube from '@/public/shapes/cubic-grid.png';
import pipe from '@/public/shapes/pipe-grid.png';
import triangle from '@/public/shapes/triangle-grid.png';
import styles from './focus-areas.module.css';

const FocusAreas = () => {
  return (
    <div className={styles.focusContainer}>
      <Fade
        duration={1000}
        triggerOnce
        direction="down">
        <h2 className={styles.headline}>Designing solutions for...</h2>
      </Fade>
      <div className={styles.items}>
        <Fade
          duration={1000}
          triggerOnce
          direction="up"
          cascade>
          <FocusItem
            title="Decentralized Science"
            image={desci}
            justify={0}
            description="Transparent and open-access scientific research, governed and funded by informed communities."
            shape={cube}
          />
          <FocusItem
            title="Sustainable Public Goods"
            image={pg}
            justify={1}
            description="Non-extractive and incentive-aligned systems with the power to support vital community resources."
            shape={triangle}
          />
          <FocusItem
            title="Climate Action x Web3"
            image={climate}
            justify={0}
            description="Targeted and verifiable contributions towards saving our planet, powered by human networks."
            shape={pipe}
          />
        </Fade>
      </div>
    </div>
  );
};

export default FocusAreas;
