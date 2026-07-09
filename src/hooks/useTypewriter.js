import { useEffect, useState } from 'react'

export function useTypewriter(phrases, { typingSpeed = 70, deletingSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause])

  return text
}
