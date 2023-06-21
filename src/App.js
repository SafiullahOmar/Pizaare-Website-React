import React from 'react'
import "./App.css";
import Navbar  from './Components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App

