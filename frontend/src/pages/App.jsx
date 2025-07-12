import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import Home from './Home'
import Auth from './Auth'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem('token')
      setLoggedIn(!!token)
      setLoading(false)
      navigate(token ? "/home" : "/auth")
    }, 3000)
  }, [])

  if (loading) return <Loading />

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
