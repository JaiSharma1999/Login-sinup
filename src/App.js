import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter ,Route, Routes} from "react-router-dom"

import Homee from './Component/Homee';
import Login from './Component/Login';
import Details from './Component/Details';

import './App.css';
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import Navbbar from "./Component/Navbar/Navbar";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbbar/>
    <Routes>
    <Route path='/' element={<Homee/>} />
      <Route path='/login' element={<Login/>} />
      
      <Route path='/details' element={<Details/>} />
      <Route path=" " element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
