import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const API_URL = "http://185.213.164.85:8000/users"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")

    if (!isLogin && password !== confirmPassword) {
      setMessage("Passwords do not match.")
      return
    }

    try {
      if (isLogin) {
        const res = await axios.post(`${API_URL}/login`, { email, password })
        localStorage.setItem("token", res.data.token)
        navigate("/home")
      } else {
        const wallet = uuidv4()
        const res = await axios.post(`${API_URL}/register`, {
          email,
          password,
          name: email.split("@")[0],
          wallet
        })
        if (res.status === 200) {
          const loginRes = await axios.post(`${API_URL}/login`, { email, password })
          localStorage.setItem("token", loginRes.data.token)
          navigate("/home")
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.detail || "Something went wrong.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md space-y-6 shadow-lg border border-gray-700">
        <div className="flex justify-between mb-4">
          <button onClick={() => setIsLogin(true)} className={isLogin ? 'font-bold underline' : ''}>Login</button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? 'font-bold underline' : ''}>Register</button>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-white text-black py-2 rounded">Continue with Google</button>
          <button className="w-full bg-white text-black py-2 rounded">Continue with Apple</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-black border border-gray-700"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-black border border-gray-700"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-black border border-gray-700"
              required
            />
          )}
          <button type="submit" className="w-full bg-white text-black py-2 rounded">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {message && <p className="text-sm text-center text-red-400">{message}</p>}
      </div>
    </div>
  )
}
