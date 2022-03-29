import {NavLink} from "react-router-dom";

import styles from "./UserIsNotAuth.module.css";


const UserIsNotAuth = () => (
  <>
    <NavLink to='/registration' className={styles.user__register}>
      <span>Регистрация</span>
    </NavLink>

    <NavLink to='/login' className={styles.user__login}>
      <span>Вход</span>
    </NavLink>
  </>
)

export default UserIsNotAuth
