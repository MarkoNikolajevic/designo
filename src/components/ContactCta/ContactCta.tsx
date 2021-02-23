import styles from './ContactCta.module.scss';
import Button from '../Button/Button';

const ContactCta = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__text}>
        <h1 className={styles.contact__title}>Let’s talk about your project</h1>
        <p className={styles.contact__paragraph}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button
        label='Get in touch'
        link='/contact'
        buttonClass='btn btn--primary'
      />
    </div>
  );
};

export default ContactCta;
