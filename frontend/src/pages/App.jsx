import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import Home from './Home'
import AuthPage from './AuthPage'


export default function App() {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem('token')
      setLoggedIn(!!token)
      setLoading(false)
      navigate(token ? "/home" : "/AuthPage")
    }, 3000)
  }, [])

  if (loading) return <Loading />

  return (
    <Routes>
      <Route path="/AuthPage" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
