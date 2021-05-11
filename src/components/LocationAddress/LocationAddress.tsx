import styles from './LocationAddress.module.scss';

const LocationAddress = (props: {
  nation: string;
  office: string;
  street: string;
  city: string;
  phone: string;
  mail: string;
}) => {
  return (
    <div className={styles.location}>
      <h1 className={styles.location__title}>{props.nation}</h1>
      <div className={styles.location__grid}>
        <div>
          <p className={styles.location__info}>
            <strong>{props.office}</strong>
          </p>
          <p className={styles.location__info}>{props.street}</p>
          <p className={styles.location__info}>{props.city}</p>
        </div>
        <div>
          <p className={styles.location__info}>
            <strong>Contact</strong>
          </p>
          <p className={styles.location__info}>P: {props.phone}</p>
          <p className={styles.location__info}>M: {props.mail}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationAddress;
