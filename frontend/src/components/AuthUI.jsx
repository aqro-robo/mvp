import React, { useEffect, useState } from 'react'

const typingText = (text, setter, delay = 40) => {
  let i = 0
  const interval = setInterval(() => {
    setter(prev => prev + text[i])
    i++
    if (i >= text.length) clearInterval(interval)
  }, delay)
}

export default function AuthUI() {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 1000)

    setTimeout(() => {
      typingText('Enter your credentials', setLabel)
    }, 1500)
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {!open && (
        <div className="w-1 h-0.5 bg-white animate-grow origin-center" />
      )}
      {open && (
        <div className="transition-all duration-700 ease-in-out w-full max-w-md p-6 bg-white/10 rounded-xl border border-gray-700 backdrop-blur-md shadow-xl">
          <h2 className="text-center text-sm text-gray-400 mb-6 animate-type">{label}</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-white text-white"
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded hover:bg-silver transition"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
