import {connect} from "react-redux";
import {countPagesFilmsSelector} from "../../redux/selectors";
import {IRootState} from "../../redux/store";

import styles from './Pagination.module.css'

interface IProps {
  currentPage: number,
  setCurrentPage: (arg: number) => void,
  countPages: number,
}

const Pagination = ({currentPage, setCurrentPage, countPages}: IProps) => {
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

const mapStateToProps = (state: IRootState) => ({
  countPages: countPagesFilmsSelector(state),
})

export default connect(mapStateToProps)(Pagination)
