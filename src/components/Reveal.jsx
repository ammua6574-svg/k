import { useEffect, useRef, useState } from 'react'

/**
 * Fade-in-on-scroll wrapper. Subtle, professional motion only —
 * content is never hidden for users who prefer reduced motion
 * (CSS handles that via the global media query).
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  from = 'up',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden =
    from === 'left'
      ? 'opacity-0 -translate-x-8'
      : from === 'right'
        ? 'opacity-0 translate-x-8'
        : 'opacity-0 translate-y-8'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}