import { useInView } from '../hooks/useInView'

/**
 * Fades and lifts its children into view once they hit the viewport.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = as
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
