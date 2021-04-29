import styles from './ProcessCard.module.scss';

const ProcessCard = (props: {
  process: string;
  description: string;
  processImg: string;
  imgBgClass: string;
}) => {

  return (
    <div className={styles.card}>
      <div>
        <div className={`${styles.card__imgBg} ${props.imgBgClass}`}></div>
        <img src={props.processImg} alt={props.process} />
      </div>
      <div className={styles.card__text}>
        <h3>{props.process}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
