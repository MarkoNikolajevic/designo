import styles from './ProjectCard.module.scss';

const ProjectCard = (props: any) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt={props.id} className={styles.card__img} />
      <div className={styles.card__text}>
        <h3 className={styles.card__title}>{props.title}</h3>
        <p className={styles.card__description}>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
