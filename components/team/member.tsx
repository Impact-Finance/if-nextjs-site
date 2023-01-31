import Image, { StaticImageData } from 'next/image';

import { TeamMember } from '@/content/team-members';
import styles from './member.module.css';

interface MemberProps {
  person: TeamMember;
}

const Member = ({ person }: MemberProps) => {
  return (
    <>
      <div className={person.advisor ? styles.advisor : styles.fullTimer}>
        <Image
          className={styles.memberImage}
          src={person.image}
          alt={person.name}
          fill
          sizes="20vw"
        />
      </div>
      <div className={styles.text}>
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
    </>
  );
};

export default Member;
