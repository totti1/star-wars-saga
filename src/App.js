import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AppBar, FooterPage } from './components';
import { Home, Lister, SingleChar } from "./pages";
import { useSelector } from "react-redux"
// import { loadSingleCharacter } from "./redux/reducers/singleChar";


function App() {
  // const myData = useSelector(state => state.lastVisited)
  let myData = []
  let CURRENT = localStorage.getItem("singleCharId")
  if(CURRENT === null){
    console.log(typeof CURRENT)
    myData=[]
  }else{
    CURRENT= JSON.parse(CURRENT)
    myData=CURRENT.slice(-4, -1)
  }
  return (
    <Router>
      <div>
        <AppBar lastVisitedData={myData}/>

        <Routes>
          <Route path="/search-results/:term" element={<SingleChar/>} />
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
