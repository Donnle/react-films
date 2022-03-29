import styles from './LoginPage.module.css'
import {FormEvent, FormEventHandler, useState} from "react";
import axios from "axios";

interface Props {

}

const LoginPage = (props: Props) => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginChange = (event: any) => setLogin(event.target.value)
  const handlePasswordChange = (event: any) => setPassword(event.target.value)

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(1)
    e.preventDefault()
    await axios.post('/api/add-user', {login, password})
      .then(console.log)
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
            <div className={styles.mainButtons__registration}>
              <span>Еще не зарегистрированы?</span>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default LoginPage
