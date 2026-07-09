import { useEffect, useRef } from 'react'

const COLORS = ['#4fa3e3', '#b8b8be', '#e08a4f', '#4fa3e3']

function randomShape(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: 6 + Math.random() * 16,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.02,
    kind: Math.random() > 0.5 ? 'circle' : 'square'
  }
}

export default function PhotoBackdrop() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let shapes = []
    let animationId
    let width, height

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = wrap.clientWidth
      height = canvas.height = wrap.clientHeight
      shapes = Array.from({ length: 16 }, () => randomShape(width, height))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      for (const s of shapes) {
        s.x += s.vx
        s.y += s.vy
        s.rotation += s.spin
        if (s.x < -20 || s.x > width + 20) s.vx *= -1
        if (s.y < -20 || s.y > height + 20) s.vy *= -1

        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.rotation)
        ctx.globalAlpha = 0.45
        ctx.fillStyle = s.color
        if (s.kind === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, s.r, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(-s.r / 2, -s.r / 2, s.r, s.r)
        }
        ctx.restore()
      }
      animationId = requestAnimationFrame(step)
    }

    resize()
    if (!reduceMotion) step()
    else step()

    if (reduceMotion) cancelAnimationFrame(animationId)

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="photo-backdrop" aria-hidden="true" />
}
