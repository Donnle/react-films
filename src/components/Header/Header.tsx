import Select from 'react-select'
import Search from "../Search";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";

import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
  setTextForFind: (value: string) => void,
  setActiveGenre: (value: any) => void
}

const Header = ({setTextForFind, setActiveGenre}: IProps) => {
  const options: any = [
    {value: "All", label: "All"},
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
    {value: "Film-Noir", label: "Film-Noir"},
    {value: "Romance", label: "Romance"},
    {value: "Sci-Fi", label: "Sci-Fi"},
    {value: "War", label: "War"},
    {value: "Western", label: "Western"},
    {value: "Horror", label: "Horror"},
    {value: "Musical", label: "Musical"},
    {value: "Sport", label: "Sport"},
  ]

  const handleChange = (selectedOptions: any) => setActiveGenre(selectedOptions.value)

  const userData = JSON.parse(localStorage.getItem('userData')!)
  console.log(userData)

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.flexbox}>
          <NavLink to='/'>
            <GlobalSvgIcons type={'logo'}/>
          </NavLink>
          <div className={styles.select}>
            <Select
              defaultValue={options[0]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <Search setTextForFind={setTextForFind}/>
          <div className={styles.user}>
            <div className={styles.user__flexbox}>

              <NavLink to='/follows' className={styles.user__follows}>
                <GlobalSvgIcons type='active-heard'/>
              </NavLink>

              <NavLink to='/' className={styles.user__username}>
                {userData.username}
              </NavLink>

              {/*<NavLink to='/registration' className={styles.user__register}>*/}
              {/*  <span>Регистрация</span>*/}
              {/*</NavLink>*/}

              {/*<NavLink to='/login' className={styles.user__login}>*/}
              {/*  <span>Вход</span>*/}
              {/*</NavLink>*/}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
