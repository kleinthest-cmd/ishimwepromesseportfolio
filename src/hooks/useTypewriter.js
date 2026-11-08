import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)

/**
 * Small looping typewriter effect used in the hero section.
 * Falls back to a static word when the user prefers reduced motion.
 */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1700 } = {}) {
  const reduced = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(reduced ? words[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return undefined

    const word = words[index % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((current) => (current + 1) % words.length)
      }, deleteSpeed)
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduced])

  return reduced ? words[0] : text
}
