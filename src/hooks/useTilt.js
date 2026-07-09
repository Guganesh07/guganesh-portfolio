import { useRef } from 'react'

export function useTilt(maxTilt = 8) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateZ(0)`
  }

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return { ref, onMouseMove, onMouseLeave }
}
