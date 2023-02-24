import { useRef } from 'react';

import styles from '@/styles/Home.module.css';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import SiteHeader from '@/components/layout/site-header';

export default function NotFound() {
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
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', lineHeight: '4rem' }}>
              404... page not found 😵‍💫
            </h3>
            <p style={{ lineHeight: '2rem', marginBottom: '20px' }}>
              Were you looking for inTheory?
              <br />
              <a
                style={{ textDecoration: 'underline', filter: 'opacity(0.6)' }}
                href="https://www.intheory.science">
                https://www.intheory.science
              </a>
            </p>
            <p style={{ lineHeight: '2rem', marginBottom: '20px' }}>
              ... or the IF home page?
              <br />
              <a
                style={{ textDecoration: 'underline', filter: 'opacity(0.6)' }}
                href="https://www.impact-finance.io">
                https://www.impact-finance.io
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
