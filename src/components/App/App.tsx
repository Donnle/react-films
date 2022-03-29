import {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import CardsPage from "../../pages/CardsPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import Header from "../Header";

import styles from './App.module.css';


const App = () => {
  const [textForFind, setTextForFind] = useState<string>('')
  const [activeGenre, setActiveGenre] = useState<string>('All')

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')!))

  return (
    <div className={styles.container}>
      <Header
        setTextForFind={setTextForFind}
        setActiveGenre={setActiveGenre}
        userData={userData}
        setUserData={setUserData}/>
      <Routes>
        <Route path='/' element={<CardsPage textForFind={textForFind} activeGenre={activeGenre}/>}/>

        {userData ?
          <Route path="/login" element={<Navigate to="/" replace/>}/>
          : <Route path='/login' element={<LoginPage setUserData={setUserData}/>}/>}

        {userData ?
          <Route path="/registration" element={<Navigate to="/" replace/>}/>
          : <Route path='/registration' element={<RegistrationPage/>}/>}

      </Routes>
    </div>
  );
}

export default App;
