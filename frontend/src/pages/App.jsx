import React, { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://185.213.164.85:8000/users/register', form)
      setMessage('ثبت‌نام موفقیت‌آمیز بود')
    } catch (err) {
      setMessage('خطا در ثبت‌نام')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-xl font-bold text-center">ثبت‌نام Aqro</h1>

        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          placeholder="ایمیل"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="name"
          placeholder="نام"
          value={form.name}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ثبت‌نام
        </button>

        {message && <p className="text-center text-sm">{message}</p>}
      </form>
    </div>
  )
}
