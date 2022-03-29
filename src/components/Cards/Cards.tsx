import {connect} from "react-redux";
import Card from "../Card";
import {IRootState, IFilm} from "../../redux/store";
import {filmsSelector} from "../../redux/selectors";

import styles from './Cards.module.css'

interface IProps {
  films: Array<IFilm>,
  textForFind: string
}

const Cards = ({films, textForFind}: IProps) => {
  const sortedFilms = films.filter(({title}: IFilm) => {
    const titleInLowerCase = title.toLowerCase()
    const textForFindInLowerCase = textForFind.toLowerCase()
    return !textForFindInLowerCase
      .split(' ')
      .map((word: string) => titleInLowerCase.includes(word))
      .includes(false)
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
  films: filmsSelector(state),
})

export default connect(mapStateToProps)(Cards)
