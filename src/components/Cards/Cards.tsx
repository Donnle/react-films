import {connect} from "react-redux";
import Card from "../Card";
import {RootState, Film} from "../../redux/store";
import {filmsSelector} from "../../redux/selectors";

import styles from './Cards.module.css'

interface Props {
  films: Array<Film>,
  textForFind: string
}

const Cards = ({films, textForFind}: Props) => {
  const sortedFilms = films.filter(({title}: Film) => {
    const titleInLowerCase = title.toLowerCase()
    const textForFindInLowerCase = textForFind.toLowerCase()
    return !textForFindInLowerCase.split(' ').map(word => titleInLowerCase.includes(word)).includes(false)
  })

  return (
    <ul className={styles.list}>
      {sortedFilms?.map((film: Film) =>
        <Card key={film._id} {...film}/>
      )}
    </ul>
  )
}

const mapStateToProps = (state: RootState) => ({
  films: filmsSelector(state),
})

export default connect(mapStateToProps)(Cards)
