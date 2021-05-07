import styles from './ContactHeader.module.scss';
import ContactForm from '../ContactForm/ContactForm';

const ContactHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__text}>
          <h1 className={styles.header__title}>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactForm />
      </div>
    </header>
  );
};

export default ContactHeader;
