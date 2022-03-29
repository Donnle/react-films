import {connect} from "react-redux";
import {countPagesFilmsSelector} from "../../redux/selectors";
import {RootState} from "../../redux/store";

import styles from './Pagination.module.css'

interface Props {
  currentPage: number,
  setCurrentPage: (arg: number) => any,
  countPages: number,
}

const Pagination = ({currentPage, setCurrentPage, countPages}: Props) => {
  const handleIncrement = () =>
    setCurrentPage(countPages === currentPage ? currentPage : currentPage + 1)

  return (
    <div className={styles.pagination}>
      <span onClick={handleIncrement}>
        {countPages === currentPage ? 'Больше фильмов нет' : 'Загрузить еще'}
      </span>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  countPages: countPagesFilmsSelector(state),
})

export default connect(mapStateToProps)(Pagination)
