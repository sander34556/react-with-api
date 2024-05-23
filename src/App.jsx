import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

import './App.css'

import Navbar from './component/Navbar'
import User from './component/User'
import UserCreate from "./component/UserCreate";
import Agcaddy from "./component/Agcaddy";

function App() {

  return (
    <div>
      <Navbar/>
      <Agcaddy/>
      {/* <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<UserCreate />} />
      </Routes> */}
    </div>
  )
}

export default App
