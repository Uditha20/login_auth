import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from "../context/UserContext";
import Dashboard from "./pages/Dashboard";



axios.defaults.baseURL="http://localhost:5000/auth/user";
axios.defaults.withCredentials=true;

function App() {
 return(
  <UserContextProvider>

  <BrowserRouter>
  <Navbar/>
  <Toaster position="top-center" toastOptions={{duration:2000}}/>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>



  </Routes>
  </BrowserRouter>
  </UserContextProvider>
 
 )
}

export default App;
