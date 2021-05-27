import styles from './HomeHeader.module.scss';
import Image from 'next/image';
import Button from '../Button/Button';

const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.header__title}>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className={styles.header__paragraph}>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Button
          label='Learn more'
          link='/about'
          buttonClass='btn btn--primary'
        />
      </div>
      <div className={styles.header__img} aria-hidden='true'>
        <Image
          src='/assets/home/desktop/image-hero-phone.png'
          alt=''
          layout='fixed'
          width={624}
          height={913}
          priority={true}
        />
      </div>
    </header>
  );
};

export default HomeHeader;
