import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

type InputsType = {
  name: string;
  email: string;
  phone: number;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();

  return (
    <form className={styles.form}>
      <input
        name='name'
        type='text'
        {...register('name', { required: true })}
        aria-label='name'
        placeholder='Name'
      />
      {errors.name && <span>Can't be empty</span>}
      <input
        name='email'
        type='email'
        {...register('email', { required: true })}
        aria-label='email'
        placeholder='Email Address'
      />
      {errors.email && <span>Can't be empty</span>}
      <input
        name='phone'
        type='tel'
        {...register('phone', { required: true })}
        aria-label='phone'
        placeholder='Phone'
      />
      {errors.phone && <span>Can't be empty</span>}
      <textarea
        name='message'
        {...register('message', { required: true })}
        aria-label='Your message'
        placeholder='Your Message'
        rows={3}
      ></textarea>
      {errors.message && <span>Can't be empty</span>}
      <button type='submit' className={`${styles.form__btn} btn btn--primary`}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
