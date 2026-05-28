import { useState, useEffect } from 'react'

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState('up')

  useEffect(() => {
    let last = 0

    const handler = () => {
      const current = window.scrollY
      setScrollY(current)
      setDirection(current > last ? 'down' : 'up')
      last = current
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return { scrollY, direction }
}
