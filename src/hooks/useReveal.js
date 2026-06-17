import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    let io

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal')
      if (!targets.length) return

      io = new IntersectionObserver(
        entries => entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        }),
        { threshold: 0.10, rootMargin: '0px 0px -20px 0px' }
      )

      targets.forEach(el => io.observe(el))
    }, 60)

    return () => {
      clearTimeout(timer)
      io?.disconnect()
    }
  }, [pathname])
}
