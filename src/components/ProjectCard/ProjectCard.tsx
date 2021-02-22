import styles from './ProjectCard.module.scss';

const ProjectCard = (props: any) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt={props.id} />
      <h3 className={styles.card__title}>{props.id}</h3>
      <p className={styles.card__description}>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
