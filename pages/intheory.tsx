import { useRef } from 'react';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import SiteHeader from '@/components/layout/site-header';

export default function Intheory() {
  const portfolio = useRef<HTMLDivElement>(null);
  const team = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const portfolioScroll = () => {
    if (portfolio.current) {
      portfolio.current.scrollIntoView({ block: 'center' });
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
      <Head>
        <meta
          http-equiv="Refresh"
          content="0; url='https://www.intheory.science'"
        />
      </Head>
      <main className={styles.main}>
        <Navbar
          portfolioScroll={portfolioScroll}
          teamScroll={teamScroll}
          contactScroll={contactScroll}
        />
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <h3>Redirecting... hang tight</h3>
        </div>
        <Footer />
      </main>
    </>
  );
}
