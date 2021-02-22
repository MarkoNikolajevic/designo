import { useState } from 'react';
import styles from './LocationCard.module.scss';
import Button from '../Button/Button';

const LocationCard = (props: {
  link: string;
  location: string;
  locationImg: string;
  imgBgClass: string;
}) => {
  const [link] = useState(props.link);
  const [location] = useState(props.location);
  const [locationImg] = useState(props.locationImg);
  const [imgBgClass] = useState(props.imgBgClass);

  return (
    <div className={styles.card}>
      <div className={`${styles.card__imgBg} ${imgBgClass}`}></div>
      <img src={`${locationImg}`} alt={`${location}`} />
      <h3>{`${location}`}</h3>
      <Button
        link={`${link}`}
        label='See the location'
        buttonClass='btn btn--secondary'
      />
    </div>
  );
};

export default LocationCard;
