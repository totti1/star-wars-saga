// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import { AppBar, FooterPage } from './components';
import { Home, Lister, SingleChar } from "./pages";



function App() {
  return (
    <Router>
      <div>
        <AppBar />

        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
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
