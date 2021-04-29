import styles from './InnerPageHeader.module.scss';

const HomeHeader = (props: { title: string; paragraph: string }) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <h1 className={styles.header__title}>{props.title}</h1>
        <p className={styles.header__paragraph}>{props.paragraph}</p>
      </div>
    </header>
  );
};

export default HomeHeader;
