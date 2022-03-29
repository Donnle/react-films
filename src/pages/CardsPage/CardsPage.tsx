import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {IRootState} from "../../redux/store";
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination";
import {loadingFilmsSelector} from "../../redux/selectors";
import {loadFilms} from "../../redux/actions";

import styles from "./CardsPage.module.css";
import Loader from "../../components/Loader";

interface IProps {
  loadFilms: (currPage: number) => void,
  loading: boolean,
  textForFind: any,
  activeGenre: string,
}

const CardsPage = ({loadFilms, loading, textForFind, activeGenre}: IProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    if (!loading) loadFilms(currentPage)
  }, [currentPage])     // eslint-disable-line

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Cards textForFind={textForFind} activeGenre={activeGenre}/>
      </div>
      {loading ? <Loader/> : ''}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </main>
  )
}

const mapStateToProps = (state: IRootState) => ({
  loading: loadingFilmsSelector(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  loadFilms: (page: number) => dispatch(loadFilms(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage)
