import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import {IFilm} from '../../redux/store'

import styles from './Card.module.css'


const Card = ({genres, posterUrl, title, year}: IFilm) => (
  <li className={styles.item}>
    <div className={styles.item__image}>
      <img src={posterUrl} alt="poster"/>
    </div>
    <div className={styles.item__text}>
      <div className={styles.item__title}>
        <p>{title}<span>({year})</span></p>
        <GlobalSvgIcons type='active-heard'/>
      </div>
      <div className={styles.item__subtitle}>
        <p>{genres?.join(', ')}</p>
      </div>
    </div>
  </li>
)


export default Card
