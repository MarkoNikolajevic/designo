import Link from 'next/link';
import styles from './ProjectCta.module.scss';

const Button = (props: { title: string; link: string; id: string }) => {

  return (
    <div className={styles.cta} id={props.id}>
      <div className={styles.cta__overlay}>
        <h2>{props.title}</h2>
        <Link href={props.link}>
          <a>View projects</a>
        </Link>
      </div>
    </div>
  );
};

export default Button;
