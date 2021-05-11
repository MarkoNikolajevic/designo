import Link from 'next/link';
import styles from './Button.module.scss';
import { motion } from 'framer-motion';

const Button = (props: {
  link: string;
  label: string;
  buttonClass?: string;
}) => {

  return (
    <motion.button
      className={`${styles.btn} ${props.buttonClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={props.link}>
        <a>{props.label}</a>
      </Link>
    </motion.button>
  );
};

export default Button;
