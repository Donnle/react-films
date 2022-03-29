import {FormEvent, useState} from "react";
import styles from './LoginPage.module.css'
import axios from "axios";
import {NavLink} from "react-router-dom";

interface Props {
  setUserData: any,
}

const LoginPage = ({setUserData}: Props) => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginChange = (event: any) => setLogin(event.target.value)
  const handlePasswordChange = (event: any) => setPassword(event.target.value)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('/api/login-user', {login, password})
      .then(res => {
        localStorage.setItem('userData', JSON.stringify(res.data.userData))
        setUserData(res.data.userData)
      }).catch(_ => alert('User is not defined'))
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerTitle}>
            <span>ВХОД | РЕГИСТРАЦИЯ</span>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <form className={styles.mainWrapper} onSubmit={handleFormSubmit}>
          <div className={styles.mainInput__wrapper}>
            <div className={styles.mainLogin}>
              <input
                type="text"
                value={login}
                className={styles.mainLogin__input}
                placeholder="Логин"
                onChange={handleLoginChange}
              />
            </div>
            <div className={styles.mainRegistration}>
              <input
                type="password"
                value={password}
                className={styles.mainRegistration__input}
                placeholder="Пароль"
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className={styles.mainButtons}>
            <button className={styles.mainButtons__login}>
              <span>ВХОД</span>
            </button>
            <NavLink to='/registration' className={styles.mainButtons__registration}>
              <span>Еще не зарегистрированы?</span>
            </NavLink>
          </div>
        </form>
      </main>
    </div>
  )
}

export default LoginPage
