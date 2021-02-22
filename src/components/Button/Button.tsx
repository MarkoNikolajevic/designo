import { useState } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import { motion } from 'framer-motion';

const Button = (props: {
  link: string;
  label: string;
  buttonClass?: string;
}) => {
  const [link] = useState(props.link);
  const [label] = useState(props.label);
  const [buttonClass] = useState(props.buttonClass);

  return (
    <motion.button
      className={`${styles.btn} ${buttonClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={`${link}`}>
        <a target='_blank'>{`${label}`}</a>
      </Link>
    </motion.button>
  );
};

export default Button;
