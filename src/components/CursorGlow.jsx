import { useEffect, useRef } from 'react'

/**
 * Soft gold spotlight that follows the pointer behind the page content.
 * Disabled entirely on touch devices via CSS.
 */
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    let frame = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const render = () => {
      frame = 0
      element.style.transform = `translate3d(${x - 270}px, ${y - 270}px, 0)`
    }

    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = window.requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
