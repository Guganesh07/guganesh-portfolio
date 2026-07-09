import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId
    let width, height

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function init() {
      resize()
      const count = Math.min(70, Math.floor((width * height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(79, 163, 227, 0.55)'
      ctx.strokeStyle = 'rgba(140, 140, 144, 0.16)'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.globalAlpha = 1 - dist / 130
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(step)
    }

    init()
    if (!reduceMotion) step()
    else {
      // Draw a single static frame for reduced-motion users
      step()
      cancelAnimationFrame(animationId)
    }

    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-bg" aria-hidden="true" />
}
