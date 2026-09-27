/**
 * Handwritten-style annotation used as a decorative accent over photos
 * and dark banners. Purely presentational — always paired with real text.
 */
export default function HandNote({ children, className = '', rotate = -3 }) {
  return (
    <span
      className={`hand-note inline-block text-2xl leading-tight sm:text-3xl ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}
