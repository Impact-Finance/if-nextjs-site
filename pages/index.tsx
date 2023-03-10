import { useRef } from 'react';

import Hero from '@/components/about/hero';
import FocusAreas from '@/components/about/focus-areas';
import About from '@/components/about/about';
import Products from '@/components/products/products';
import Principles from '@/components/principles/principles';
import Supporters from '@/components/supporters/supporters';
import Team from '@/components/team/team';
import Contact from '@/components/contact/contact';
import styles from '@/styles/Home.module.css';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import SiteHeader from '@/components/layout/site-header';

export default function Home() {
  const portfolio = useRef<HTMLDivElement>(null);
  const focusAreas = useRef<HTMLDivElement>(null);
  const team = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const portfolioScroll = () => {
    if (portfolio.current) {
      portfolio.current.scrollIntoView({ block: 'center' });
    }
  };

  const focusScroll = () => {
    if (focusAreas.current) {
      focusAreas.current.scrollIntoView({ block: 'start' });
    }
  };

  const teamScroll = () => {
    if (team.current) {
      team.current.scrollIntoView({ block: 'start' });
    }
  };

  const contactScroll = () => {
    if (contact.current) {
      contact.current.scrollIntoView({ block: 'start' });
    }
  };

  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <Navbar
          portfolioScroll={portfolioScroll}
          teamScroll={teamScroll}
          contactScroll={contactScroll}
        />
        <Hero focusScroll={focusScroll} />
        <div ref={focusAreas}>
          <FocusAreas />
        </div>
        <About />
        <div ref={portfolio}>
          <Products />
        </div>
        <Principles />
        <Supporters />
        <div ref={team}>
          <Team />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
