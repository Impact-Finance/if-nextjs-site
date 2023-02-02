import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import Supporter from './supporter';
import gitcoin from '@/public/support/gitcoin.png';
import celo from '@/public/support/celocamp.png';
import bw from '@/public/support/businesswire.png';
import yahoo from '@/public/support/yahoo.png';
import polygon from '@/public/support/polygon.png';
import spotify from '@/public/support/spotify.png';
import angelblock from '@/public/support/angelblock.png';
import triangle from '@/public/shapes/triangle-grid.png';
import styles from './supporters.module.css';

const Supporters = () => {
  return (
    <>
      <Fade
        duration={1000}
        triggerOnce
        direction="down"
        delay={250}>
        <h3 className={styles.title}>Media and Support</h3>
      </Fade>
      <div className={styles.supportContainer}>
        <Image
          src={triangle}
          alt="floating cube"
          height={160}
          width={160}
          className={styles.triangle}
        />
        <div className={styles.row}>
          <Fade
            duration={1000}
            triggerOnce
            direction="up"
            delay={250}
            cascade>
            <Supporter
              title="AngelBlock"
              image={angelblock}
              link="https://twitter.com/AngelBlock_io/status/1593699098800136192?s=20&t=x811mOsHlVB0iB6-AUaK0Q"
              brighten={false}
            />
            <Supporter
              title="Gitcoin GR15"
              image={gitcoin}
              link="https://gitcoin.co/grants/7268/intheory-research-markets-by-impact-finance"
              brighten={false}
            />
            <Supporter
              title="Celo Camp"
              image={celo}
              link="https://blog.celo.org/celo-camp-batch-6-teams-announced-with-new-founders-support-from-coinbase-cloud-e3c52087021b"
              brighten={false}
            />
            <Supporter
              title="Polygon Village"
              image={polygon}
              link="https://village.polygon.community/"
              brighten={true}
            />
          </Fade>
        </div>
        <div className={styles.row}>
          <Fade
            duration={1000}
            triggerOnce
            direction="up"
            delay={250}
            cascade>
            <Supporter
              title="Business Wire"
              image={bw}
              link="https://www.businesswire.com/news/home/20221007005125/en/Announcing-Celo-Camp-Batch-6-With-New-Founders-Support-from-Coinbase-Cloud"
              brighten={true}
            />
            <Supporter
              title="The DAOstronaut"
              image={spotify}
              link="https://open.spotify.com/episode/0RdSDotrZdbRG3BSeOfdW9?si=b31ff16b27f8437c"
              brighten={true}
            />
            <Supporter
              title="Yahoo!"
              image={yahoo}
              link="https://www.yahoo.com/now/announcing-celo-camp-batch-6-130100939.html"
              brighten={true}
            />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Supporters;
