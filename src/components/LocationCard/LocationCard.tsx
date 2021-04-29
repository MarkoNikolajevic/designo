import styles from './LocationCard.module.scss';
import Button from '../Button/Button';

const LocationCard = (props: {
  link: string;
  location: string;
  locationImg: string;
  imgBgClass: string;
}) => {

  return (
    <div className={styles.card}>
      <div className={`${styles.card__imgBg} ${props.imgBgClass}`}></div>
      <img src={props.locationImg} alt={props.location} />
      <h3>{props.location}</h3>
      <Button
        link={props.link}
        label='See the location'
        buttonClass='btn btn--secondary'
      />
    </div>
  );
};

export default LocationCard;
