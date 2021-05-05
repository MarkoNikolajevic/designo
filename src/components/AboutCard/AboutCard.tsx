import styles from './AboutCard.module.scss';

const AboutCard = (props: {
  title: string;
  desc1: string;
  desc2: string;
  imgMobile: string;
  imgMedium: string;
  imgLarge: string;
  altText: string;
  id?: string;
}) => {
  return (
    <section
      className={`${styles.card} container ${
        props.id === 'real-deal' ? 'card--inverted' : ''
      }`}
    >
      <div className={styles.card__img_wrapper}>
        <picture>
          <source media='(min-width:75rem)' srcSet={props.imgLarge} />
          <source media='(min-width:48rem)' srcSet={props.imgMedium} />
          <img src={props.imgMobile} alt={props.altText} />
        </picture>
      </div>
      <div className={styles.card__text}>
        <h1 className={styles.card__title}>{props.title}</h1>
        <p className={styles.card__paragraph}>{props.desc1}</p>
        <br />
        <p className={styles.card__paragraph}>{props.desc2}</p>
      </div>
    </section>
  );
};

export default AboutCard;
