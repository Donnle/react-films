import {NavLink} from "react-router-dom";
import GlobalSvgIcons from "../../../assets/icons/GlobalSvgIcons";

import styles from "./UserIsAuth.module.css";

interface Props {
  userData: any,
  setUserData: any
}

const UserIsAuth = ({userData, setUserData}: Props) => {
  const handleUserClick = () => {
    setUserData('')
    localStorage.removeItem('userData')
  }

  return (
    <>
      <NavLink to='/follows' className={styles.user__follows}>
        <GlobalSvgIcons type='active-heard'/>
      </NavLink>

      <span className={styles.user__username} onClick={handleUserClick}>
        {userData.username}
      </span>
    </>
  )
}

export default UserIsAuth
