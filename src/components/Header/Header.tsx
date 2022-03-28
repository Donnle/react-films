import Select from 'react-select'
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";

import styles from './Header.module.css'
import Search from "../Search";

interface Props {
}

const Header = (props: Props) => {
  const options = [
    {value: "Comedy", label: "Comedy"},
    {value: "Fantasy", label: "Fantasy"},
    {value: "Crime", label: "Crime"},
    {value: "Drama", label: "Drama"},
    {value: "Music", label: "Music"},
    {value: "Adventure", label: "Adventure"},
    {value: "History", label: "History"},
    {value: "Thriller", label: "Thriller"},
    {value: "Animation", label: "Animation"},
    {value: "Family", label: "Family"},
    {value: "Mystery", label: "Mystery"},
    {value: "Biography", label: "Biography"},
    {value: "Action", label: "Action"},
    {value: "FilmNoir", label: "Film-Noir"},
    {value: "Romance", label: "Romance"},
    {value: "SciFi", label: "Sci-Fi"},
    {value: "War", label: "War"},
    {value: "Western", label: "Western"},
    {value: "Horror", label: "Horror"},
    {value: "Musical", label: "Musical"},
    {value: "Sport", label: "Sport"},
  ]

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.flexbox}>
          <GlobalSvgIcons type={'logo'}/>
          <div className={styles.select}>
            <Select options={options}/>
          </div>
          <Search/>
          <div className={styles.user}>
            <div className={styles.user__flexbox}>
              <div className={styles.user__register}>
                <span>Регистрация</span>
              </div>
              <div className={styles.user__login}>
                <span>Вход</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
