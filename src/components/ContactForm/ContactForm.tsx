import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';

interface IFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormType>();
  const onSubmit = (data: IFormType) => {
    console.log(data);
    reset({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__input_container}>
        <input
          name='name'
          type='text'
          {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
          aria-label='name'
          placeholder='Name'
        />
        {errors.name && (
          <span className='error'>
            Can't be empty
            <img
              src='/assets/contact/desktop/icon-error.svg'
              alt='attention icon'
            />
          </span>
        )}
      </div>
      <div className={styles.form__input_container}>
        <input
          name='email'
          type='email'
          {...register('email', { required: true })}
          aria-label='email'
          placeholder='Email Address'
        />
        {errors.email && (
          <span className='error'>
            Can't be empty
            <img
              src='/assets/contact/desktop/icon-error.svg'
              alt='attention icon'
            />
          </span>
        )}
      </div>
      <div className={styles.form__input_container}>
        <input
          name='phone'
          type='tel'
          {...register('phone', { required: true })}
          aria-label='phone'
          placeholder='Phone'
        />
        {errors.phone && (
          <span className='error'>
            Can't be empty
            <img
              src='/assets/contact/desktop/icon-error.svg'
              alt='attention icon'
            />
          </span>
        )}
      </div>
      <div className={styles.form__input_container}>
        <textarea
          name='message'
          {...register('message', { required: true })}
          aria-label='Your message'
          placeholder='Your Message'
          rows={3}
        ></textarea>
        {errors.message && (
          <span className='error'>
            Can't be empty
            <img
              src='/assets/contact/desktop/icon-error.svg'
              alt='attention icon'
            />
          </span>
        )}
      </div>
      <button type='submit' className={`${styles.form__btn} btn btn--primary`}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
