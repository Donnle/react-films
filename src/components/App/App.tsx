import {Routes, Route} from "react-router-dom";
import CardsPage from "../../pages/CardsPage";
import Header from "../Header";

import styles from './App.module.css';
import {useState} from "react";

const App = () => {
  const [textForFind, setTextForFind] = useState<string>('')
  const [activeGenre, setActiveGenre] = useState<string>('All')

  return (
    <div className={styles.container}>
      <Header setTextForFind={setTextForFind} setActiveGenre={setActiveGenre}/>
      <Routes>
        <Route path='/' element={<CardsPage textForFind={textForFind} activeGenre={activeGenre}/>}/>
      </Routes>
    </div>
  );
}

export default App;
