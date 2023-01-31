import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import Image from 'next/image';

import logo from '@/public/company/if-logo.png';
import styles from './navbar.module.css';

interface NavbarProps {
  portfolioScroll: () => void;
  teamScroll: () => void;
  contactScroll: () => void;
}

const Navbar = ({
  portfolioScroll,
  teamScroll,
  contactScroll,
}: NavbarProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={
        scrollPosition > 50
          ? `${styles.navbar} ${styles.navbarScrolled}`
          : styles.navbar
      }>
      <Fade
        className={styles.logoContainer}
        direction="left"
        duration={1500}>
        <Image
          className={styles.logo}
          onClick={scrollTop}
          src={logo}
          alt="Impact Finance logo"
          fill
          sizes="20vw"
        />
      </Fade>
      <ul className={styles.navLinks}>
        <Fade
          duration={750}
          cascade
          direction="right">
          <li
            className={styles.navItem}
            onClick={portfolioScroll}>
            Portfolio
          </li>
          <li
            className={styles.navItem}
            onClick={teamScroll}>
            Team
          </li>
          <li
            className={styles.navItem}
            onClick={contactScroll}>
            Contact
          </li>
        </Fade>
      </ul>
    </div>
  );
};

export default Navbar;
