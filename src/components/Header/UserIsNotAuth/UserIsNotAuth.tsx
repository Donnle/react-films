import {NavLink} from "react-router-dom";

import styles from "./UserIsNotAuth.module.css";

interface Props {

}

const UserIsNotAuth = (props: Props) => {
  return (
    <>
      <NavLink to='/registration' className={styles.user__register}>
        <span>Регистрация</span>
      </NavLink>

      <NavLink to='/login' className={styles.user__login}>
        <span>Вход</span>
      </NavLink>
    </>
  )
}

export default UserIsNotAuth
