import React, { useEffect, useRef } from 'react'

export default function MatrixText() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = '⟁⧫⊚☰⟁⚙⌽∎⟡'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(31,31,31,0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#C0C0C0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
  )
}
