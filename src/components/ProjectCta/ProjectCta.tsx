import { useState } from 'react';
import Link from 'next/link';
import styles from './ProjectCta.module.scss';

const Button = (props: { title: string; link: string; id: string }) => {
  const [title] = useState(props.title);
  const [link] = useState(props.link);
  const [id] = useState(props.id);

  return (
    <div className={styles.cta} id={`${id}`}>
      <div className={styles.cta__overlay}>
        <h2>{`${title}`}</h2>
        <Link href={`${link}`}>
          <a>View projects</a>
        </Link>
      </div>
    </div>
  );
};

export default Button;
