import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import sphere from '@/public/shapes/spheric-grid.png';
import Member from './member';
import teamArray from '@/content/team-members';
import styles from './team.module.css';

const fullTimers = teamArray.filter(person => !person.advisor);
const advisors = teamArray.filter(person => person.advisor);

const Team = () => {
  return (
    <>
      <Fade
        duration={1000}
        triggerOnce
        direction="down">
        <h3 className={styles.title}>Core Team</h3>
      </Fade>
      <div className={styles.teamContainer}>
        <Image
          src={sphere}
          alt="floating sphere"
          height={160}
          width={160}
          className={styles.sphere}
        />
        <div className={styles.row}>
          <Fade
            duration={1000}
            triggerOnce
            direction="up"
            cascade>
            {fullTimers.map(person => (
              <Member
                key={person.name}
                person={person}
              />
            ))}
          </Fade>
        </div>
        <div className={styles.row}>
          <Fade
            duration={1000}
            triggerOnce
            direction="up"
            cascade>
            {advisors.map(person => (
              <Member
                key={person.name}
                person={person}
              />
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Team;
