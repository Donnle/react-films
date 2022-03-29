import {connect} from "react-redux";
import Card from "../Card";
import {IRootState, IFilm} from "../../redux/store";
import {filmsSelector} from "../../redux/selectors";

import styles from './Cards.module.css'

interface IProps {
  films: Array<IFilm>,
  textForFind: string,
  activeGenre: string,
}

const Cards = ({films, textForFind, activeGenre}: IProps) => {
  const sortedFilms = films.filter(({title, genres}: IFilm) => {
    const titleInLowerCase = title.toLowerCase()
    const textForFindInLowerCase = textForFind.toLowerCase()

    const isFilmHasGenre =
      activeGenre === 'All' ? true : genres.includes(activeGenre)

    const isFilmHasFindText =
      !textForFindInLowerCase
        .split(' ')
        .map((word: string) => titleInLowerCase.includes(word))
        .includes(false)

    return isFilmHasFindText && isFilmHasGenre
  })

  return (
    <ul className={styles.list}>
      {sortedFilms?.map((film: IFilm) =>
        <Card key={film._id} {...film}/>
      )}
    </ul>
  )
}

const mapStateToProps = (state: IRootState) => ({
  films: filmsSelector(state)
})

export default connect(mapStateToProps)(Cards)
