import {ChangeEvent, useState} from "react";
import {connect} from "react-redux";
import {loadingFilmsSelector} from "../../redux/selectors";
import {RootState} from "../../redux/store";
import {loadFilms} from "../../redux/actions";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";

import styles from './Search.module.css'

interface Props {
  loading: boolean,
  loadFilms: (page: number, searchText: string) => void,
}

const Search = ({loading, loadFilms}: Props) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value)
  

  const handleSearch = (e: any) => {
    e.preventDefault()
    loadFilms(1, searchText)
  }

  return (
    <div className={styles.search}>
      <form className={styles.flexbox} onSubmit={handleSearch}>
        <div className={styles.input}>
          <input
            type="text"
            name="search"
            placeholder="Введите текст"
            value={searchText}
            onChange={handleChange}
          />
        </div>
        <button className={styles.icon}>
          <GlobalSvgIcons type='search'/>
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: loadingFilmsSelector(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  loadFilms: (page: number) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
