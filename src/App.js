import React from 'react'
import "./App.css";
import Navbar  from './Components/Navbar';
import Footer  from './Components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="home" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App

