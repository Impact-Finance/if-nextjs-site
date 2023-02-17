import Image from 'next/image';

import { TeamMember } from '@/content/team-members';
import styles from './member.module.css';

interface MemberProps {
  person: TeamMember;
}

const Member = ({ person }: MemberProps) => {
  return (
    <>
      {person.advisor ? (
        <div className={styles.personBox}>
          <div className={styles.advisor}>
            <Image
              className={styles.memberImage}
              src={person.image}
              alt={person.name}
              fill
              sizes="(max-width: 425px) 80vw, 
              (max-width: 768px) 70vw, 
              (max-width: 1200px) 20vw,
              25vw"
            />
          </div>
          <div className={styles.advisorText}>
            <h3 className={styles.name}>{person.name}</h3>
            <p className={styles.title}>{person.title}</p>
            <p className={styles.degree}>{person.description}</p>
            {person.advisor && (
              <p className={styles.socials}>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </a>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.personBox}>
          <div className={styles.fullTimer}>
            <Image
              className={styles.memberImage}
              src={person.image}
              alt={person.name}
              fill
              sizes="20vw"
            />
          </div>
          <div className={styles.fullTimerText}>
            <h3 className={styles.name}>{person.name}</h3>
            <p className={styles.title}>{person.title}</p>
            <p className={styles.degree}>{person.degree}</p>
            {!person.advisor && (
              <p className={styles.socials}>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </a>{' '}
                |{' '}
                <a
                  href={person.twitter}
                  target="_blank"
                  rel="noreferrer">
                  Twitter
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Member;
