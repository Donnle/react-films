import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination";
import {loadingFilmsSelector} from "../../redux/selectors";
import {loadFilms} from "../../redux/actions";

import styles from "./CardsPage.module.css";

interface Props {
  loadFilms: (currPage: number) => void,
  loading: boolean,
  textForFind: string,
}

const CardsPage = ({loadFilms, loading, textForFind}: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    if (!loading) loadFilms(currentPage)
  }, [currentPage])     // eslint-disable-line

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Cards textForFind={textForFind}/>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </main>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: loadingFilmsSelector(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  loadFilms: (page: number) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage)
