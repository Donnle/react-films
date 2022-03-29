import Select from 'react-select'
import {NavLink} from "react-router-dom";
import Search from "../Search";
import UserIsAuth from "./UserIsAuth";
import UserIsNotAuth from "./UserIsNotAuth";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";

import styles from './Header.module.css'

interface IProps {
  setTextForFind: (value: string) => void,
  setActiveGenre: (value: any) => void,
  userData: any,
  setUserData: any,
}

const Header = ({setTextForFind, setActiveGenre, userData, setUserData}: IProps) => {
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
              {userData ? <UserIsAuth userData={userData} setUserData={setUserData}/> : <UserIsNotAuth/>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
