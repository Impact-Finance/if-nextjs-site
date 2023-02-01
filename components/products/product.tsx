import Image, { StaticImageData } from 'next/image';

import styles from './product.module.css';

interface ProductProps {
  title: string;
  image: StaticImageData;
  description: string;
  link: string;
  release: string;
}

const Product = ({
  title,
  image,
  description,
  link,
  release,
}: ProductProps) => {
  return (
    <div className={styles.productBox}>
      <Image
        className={styles.productImage}
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 70vw, 40vw"
      />
      <div className={styles.hoverContent}>
        <h3 className={styles.description}>{description}</h3>
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer">
            Learn More
          </a>
        )}
        {release && <p className={styles.release}>{release}</p>}
      </div>
      <div className={styles.smallMediaContent}>
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer">
            Learn More
          </a>
        )}
        {release && <p className={styles.release}>{release}</p>}
      </div>
    </div>
  );
};

export default Product;
