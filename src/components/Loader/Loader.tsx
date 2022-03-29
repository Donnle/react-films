import styles from './Loader.module.css'

const Loader = () => (
  <div className={styles.wrapper}>
    <div className={styles.preloader__row}>
      <div className={styles.preloader__item}/>
      <div className={styles.preloader__item}/>
    </div>
  </div>
)

export default Loader
