import {Routes, Route} from "react-router-dom";
import CardsPage from "../../pages/CardsPage";
import Header from "../Header";

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Routes>
        <Route path='/' element={<CardsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
