import Image, { StaticImageData } from 'next/image';

import styles from './supporter.module.css';

interface SupporterProps {
  title: string;
  image: StaticImageData;
  link: string;
  brighten: boolean;
}

const Supporter = ({ title, image, link, brighten }: SupporterProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer">
      <div className={styles.supporterBox}>
        <Image
          className={brighten ? `${styles.logo} ${styles.bright}` : styles.logo}
          src={image}
          alt={title}
          fill
          sizes="(max-width: 425px) 70vw, (max-width: 768px) 50vw, 20vw"
        />
      </div>
    </a>
  );
};

export default Supporter;
