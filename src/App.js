import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AppBar, FooterPage } from './components';
import { Home, Lister, SingleChar } from "./pages";
import { useDispatch, useSelector } from "react-redux"
import { loadSingleCharacter } from "./redux/reducers/singleChar";


function App() {
  const dispatch = useDispatch()
  const data = []
  const myData = useSelector(state => state)

  useState(() => {
    // getting stored value
    const saved = localStorage.getItem("singleCharId");
    const id = JSON.parse(saved);
    dispatch(loadSingleCharacter(id))
    
  });
  data.push(myData.singleChar.list)
  return (
    <Router>
      <div>
        <AppBar lastVisitedData={data}/>

        <Routes>
          <Route path="/single/character/:id" element={<SingleChar/>} />
          <Route path="/list/:id" element={<Lister/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
