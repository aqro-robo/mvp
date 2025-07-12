import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [ip, setIp] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const videoUrl = "/assets/bg.mp4"

  useEffect(() => {
    const handleStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', handleStatus)
    window.addEventListener('offline', handleStatus)
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip))
    if (localStorage.getItem('token')) setIsLoggedIn(true)
    return () => {
      window.removeEventListener('online', handleStatus)
      window.removeEventListener('offline', handleStatus)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        src={videoUrl}
      />
      <div className="relative z-10 bg-white/50 rounded-2xl px-8 py-10 flex flex-col items-center backdrop-blur-md shadow-xl">
        <h1 className="text-2xl font-bold mb-3">در حال بارگذاری Aqro...</h1>
        {!isOnline && (
          <div className="text-red-600 font-semibold my-2">
            اینترنت قطع است!
          </div>
        )}
        <div className="my-2">
          <span className="text-gray-700">آی‌پی شما:</span>
          <span className="mx-2 font-mono">{ip || '...'}</span>
        </div>
        <div className="my-4">
          {isLoggedIn ? (
            <div className="text-green-600 font-semibold">
              شما وارد شده‌اید.
            </div>
          ) : (
            <div className="text-yellow-600 font-semibold">
              شما وارد نشده‌اید!
            </div>
          )}
        </div>
        <span className="mt-4 text-gray-500 text-sm animate-pulse">در حال بررسی اتصال...</span>
      </div>
    </div>
  )
}
