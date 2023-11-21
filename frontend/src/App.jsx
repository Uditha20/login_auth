import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {
 return(
    
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>


  </Routes>
  </BrowserRouter>
 
 )
}

export default App;
