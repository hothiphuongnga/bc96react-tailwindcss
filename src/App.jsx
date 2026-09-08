import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import Home from './pages/Home'
import AdminLayout from './components/Layouts/Admin/AdminLayout'
import Dashboard from './pages/Admin/Dashboard'
// import heroImg from './assets/hero.png'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}/>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard />}/>
      </Route>
      
    </Routes>
  )
}

export default App
