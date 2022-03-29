import {Routes, Route} from "react-router-dom";
import CardsPage from "../../pages/CardsPage";
import Header from "../Header";

import styles from './App.module.css';
import {useState} from "react";

const App = () => {
  const [textForFind, setTextForFind] = useState<string>('')

  return (
    <div className={styles.container}>
      <Header setTextForFind={setTextForFind}/>
      <Routes>
        <Route path='/' element={<CardsPage textForFind={textForFind}/>}/>
      </Routes>
    </div>
  );
}

export default App;
