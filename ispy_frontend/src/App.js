import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './container/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App