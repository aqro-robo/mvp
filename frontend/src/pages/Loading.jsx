import React from 'react'
import MatrixText from './components/MatrixText'

export default function Loading() {
  return (
    <div className="w-screen h-screen bg-coldGray text-silver flex items-center justify-center relative overflow-hidden">
      <MatrixText />
      <div className="z-10 w-96 h-64 bg-black/60 border border-silver shadow-xl rounded-xl flex flex-col items-center justify-center backdrop-blur-sm relative">
        <video
          autoPlay
          loop
          muted
          playsInline
         
          className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-30"
        />
        <div className="z-10 text-center space-y-2">
          <h2 className="text-silver text-sm uppercase">Routing to: /home</h2>
          <h1 className="text-xl text-white font-bold tracking-wider">Loading...</h1>
        </div>
      </div>
    </div>
  )
}
