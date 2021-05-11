import Link from 'next/link';
import styles from './ProjectCta.module.scss';

const Button = (props: { title: string; link: string; id: string }) => {

  return (
    <div className={styles.cta} id={props.id}>
      <Link href={props.link}>
        <div className={styles.cta__overlay}>
          <h2>{props.title}</h2>
          <a>
            View projects
            <img
              src='/assets/shared/desktop/icon-right-arrow.svg'
              alt='arrow right icon'
            />
          </a>
        </div>
      </Link>
    </div>
  );
};

export default Button;
