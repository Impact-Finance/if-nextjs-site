import Image from 'next/image';

import meta from '@/public/company/meta-image.jpg';
import SiteHeader from '@/components/layout/site-header';
import styles from '@/styles/Home.module.css';

const Meta = () => {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>
        <Image
          src={meta}
          alt="Metadata image for Impact Finance"
          width={1200}
          height={627}
        />
      </main>
    </>
  );
};

export default Meta;
