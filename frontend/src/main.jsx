import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
