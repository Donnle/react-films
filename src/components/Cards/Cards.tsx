import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {loadFilms} from "../../redux/actions";
import {RootState, Film} from "../../redux/store";
import {
  errorFilmsSelector,
  filmsSelector,
  loadedFilmsSelector,
  loadingFilmsSelector
} from "../../redux/selectors";
import Card from "../Card";

import styles from './Cards.module.css'

interface Props {
  films: Array<Film>,
}

const Cards = ({films}: Props) => {
  return (
    <ul className={styles.list}>
      {films?.map((film: Film) =>
        <Card key={film._id} {...film}/>
      )}
    </ul>
  )
}

const mapStateToProps = (state: RootState) => ({
  films: filmsSelector(state),
})

export default connect(mapStateToProps)(Cards)
