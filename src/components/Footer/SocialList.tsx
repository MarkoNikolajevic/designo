import styles from './Footer.module.scss';

const SocialList = () => {
  return (
    <ul className={styles.footer__social}>
      <li className={styles.footer__social_item}>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/assets/shared/desktop/icon-facebook.svg'
            alt='Facebook logo'
          />
        </a>
      </li>
      <li className={styles.footer__social_item}>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/assets/shared/desktop/icon-youtube.svg'
            alt='Youtube logo'
          />
        </a>
      </li>
      <li className={styles.footer__social_item}>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/assets/shared/desktop/icon-twitter.svg'
            alt='Twitter logo'
          />
        </a>
      </li>
      <li className={styles.footer__social_item}>
        <a
          href='https://www.pinterest.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/assets/shared/desktop/icon-pinterest.svg'
            alt='Pinterest logo'
          />
        </a>
      </li>
      <li className={styles.footer__social_item}>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/assets/shared/desktop/icon-instagram.svg'
            alt='Instagram logo'
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
