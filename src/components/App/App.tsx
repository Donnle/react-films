import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import CardsPage from "../../pages/CardsPage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import Header from "../Header";

import styles from './App.module.css';

const App = () => {
  const [textForFind, setTextForFind] = useState<string>('')
  const [activeGenre, setActiveGenre] = useState<string>('All')

  return (
    <div className={styles.container}>
      <Header setTextForFind={setTextForFind} setActiveGenre={setActiveGenre}/>
      <Routes>
        <Route path='/' element={<CardsPage textForFind={textForFind} activeGenre={activeGenre}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
