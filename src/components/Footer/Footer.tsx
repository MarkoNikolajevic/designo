import styles from './Footer.module.scss';
import Link from 'next/link';
import ActiveLink from '../ActiveLink/ActiveLink';
import SocialList from './SocialList';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <a className={styles.footer__logo}>
          <img src='/assets/shared/desktop/logo-light.png' alt='Designo logo' />
        </a>
      </Link>
      <ul className={styles.footer__menu}>
        <li className={styles.footer__menu__item}>
          <ActiveLink activeClassName='active' href='/about'>
            <a>Our Company</a>
          </ActiveLink>
        </li>
        <li className={styles.footer__menu__item}>
          <ActiveLink activeClassName='active' href='/locations'>
            <a>Locations</a>
          </ActiveLink>
        </li>
        <li className={styles.footer__menu__item}>
          <ActiveLink activeClassName='active' href='/contact'>
            <a>Contact</a>
          </ActiveLink>
        </li>
      </ul>
      <div className={styles.footer__info_wrapper}>
        <div>
          <p className={styles.footer__info}>
            <strong>Designo Central Office</strong>
          </p>
          <p className={styles.footer__info}>3886 Wellington Street</p>
          <p className={styles.footer__info}>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className={styles.footer__info_second_block}>
          <p className={styles.footer__info}>
            <strong>Contact Us (Central Office)</strong>
          </p>
          <p className={styles.footer__info}>P : +1 253-863-8967</p>
          <p className={styles.footer__info}>M : contact@designo.co</p>
        </div>
      </div>
      <SocialList />
    </footer>
  );
};

export default Footer;
