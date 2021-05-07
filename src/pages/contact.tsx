import styles from '../styles/Contact.module.scss';
import LocationCard from '../components/LocationCard/LocationCard';

export default function Contact() {
  return (
    <>
      <section className={styles.contact__grid}>
        <LocationCard
          link='/locations/#canada'
          location='Canada'
          locationImg='/assets/shared/desktop/illustration-canada.svg'
          imgBgClass='to_top_bg'
        />
        <LocationCard
          link='/locations/#australia'
          location='Australia'
          locationImg='/assets/shared/desktop/illustration-australia.svg'
          imgBgClass='to_left_bg'
        />
        <LocationCard
          link='/locations/#united-kingdom'
          location='United Kingdom'
          locationImg='/assets/shared/desktop/illustration-united-kingdom.svg'
          imgBgClass='to_bottom_bg'
        />
      </section>
    </>
  );
}
