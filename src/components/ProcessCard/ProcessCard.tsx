import { useState } from 'react';
import styles from './ProcessCard.module.scss';

const ProcessCard = (props: {
  process: string;
  description: string;
  processImg: string;
  imgBgClass: string;
}) => {
  const [process] = useState(props.process);
  const [description] = useState(props.description);
  const [processImg] = useState(props.processImg);
  const [imgBgClass] = useState(props.imgBgClass);

  return (
    <div className={styles.card}>
      <div>
        <div className={`${styles.card__imgBg} ${imgBgClass}`}></div>
        <img src={`${processImg}`} alt={`${process}`} />
      </div>
      <div className={styles.card__text}>
        <h3>{`${process}`}</h3>
        <p>{`${description}`}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
