// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home, Lister, SingleChar } from "./pages";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/:id" element={<SingleChar/>} />
          <Route path="/list/:id" element={<Lister/>} />
          <Route path="/home/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
