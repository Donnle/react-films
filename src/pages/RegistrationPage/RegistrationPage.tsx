import styles from './RegistrationPage.module.css'
import {FormEvent, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

interface Props {

}

const RegistrationPage = (props: Props) => {
  const [username, setUsername] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginChange = (event: any) => setLogin(event.target.value)
  const handlePasswordChange = (event: any) => setPassword(event.target.value)
  const handleUsernameChange = (event: any) => setUsername(event.target.value)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('/api/add-user', {username, login, password})
      .then(({data}) => alert(data.message))
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
                value={username}
                type="text"
                className={styles.mainLogin__input}
                placeholder="Никнейм"
                onChange={handleUsernameChange}
              />
            </div>
            <div className={styles.mainLogin}>
              <input
                value={login}
                type="text"
                className={styles.mainLogin__input}
                placeholder="Логин"
                onChange={handleLoginChange}
              />
            </div>
            <div className={styles.mainRegistration}>
              <input
                value={password}
                type="password"
                className={styles.mainRegistration__input}
                placeholder="Пароль"
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className={styles.mainButtons}>
            <button className={styles.mainButtons__login}>
              <span>РЕГИСТРАЦИЯ</span>
            </button>
            <NavLink to='/login' className={styles.mainButtons__registration}>
              <span>Уже есть аккаунт?</span>
            </NavLink>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RegistrationPage
