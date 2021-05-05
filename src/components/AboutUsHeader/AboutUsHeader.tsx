import styles from './AboutUsHeader.module.scss';

const AboutUsHeader = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__img_wrapper}>
        <picture>
          <source
            media='(min-width:75rem)'
            srcSet='/assets/about/desktop/image-about-hero.jpg'
          />
          <source
            media='(min-width:48rem)'
            srcSet='/assets/about/tablet/image-about-hero.jpg'
          />
          <img
            src='/assets/about/mobile/image-about-hero.jpg'
            alt='Team work photo from above'
          />
        </picture>
      </div>
      <div className={styles.header__text}>
        <h1 className={styles.header__title}>About Us</h1>
        <p className={styles.header__paragraph}>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </header>
  );
};

export default AboutUsHeader;
