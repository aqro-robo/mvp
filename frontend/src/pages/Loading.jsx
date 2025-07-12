import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [ip, setIp] = useState('')
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true))
    window.addEventListener('offline', () => setIsOnline(false))

    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip))

    return () => {
      window.removeEventListener('online', () => setIsOnline(true))
      window.removeEventListener('offline', () => setIsOnline(false))
    }
  }, [])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative">
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/assets/bg.mp4"
      />
      <div className="z-10 bg-white/60 p-6 rounded-xl backdrop-blur-md text-center space-y-3">
        <h1 className="text-2xl font-bold">Loading Aqro...</h1>
        <p>Your IP: {ip || 'Detecting...'}</p>
        <p className={isOnline ? "text-green-600" : "text-red-600"}>
          {isOnline ? "You are Online" : "No Internet"}
        </p>
      </div>
    </div>
  )
}
