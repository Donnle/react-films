import {ChangeEvent, useEffect, useState} from "react";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";

import styles from './Search.module.css'

interface IProps {
  setTextForFind: (value: string) => void,
}

const Search = ({setTextForFind}: IProps) => {
  const [searchText, setSearchText] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value)

  useEffect(() => {
    setTextForFind(searchText)
  }, [setTextForFind, searchText])

  return (
    <div className={styles.search}>
      <form className={styles.flexbox} onSubmit={e => e.preventDefault()}>
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

export default Search
