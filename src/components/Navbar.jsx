import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { InstagramIcon, TelegramIcon } from './BrandIcons'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)

    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-bg/85 py-3 shadow-[0_10px_40px_-20px_var(--shadow-heavy)] backdrop-blur-xl'
            : 'border-b border-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-3"
            aria-label="ISHIMWE Promesse â€” home"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-accent font-display text-sm font-extrabold text-black transition-transform duration-300 group-hover:rotate-6">
              IP
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[13px] font-bold tracking-[0.18em] text-fg">
                ISHIMWE
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-fg-soft">
                Promesse
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-ink' : 'text-fg-muted hover:text-fg'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_30px_-6px_rgba(255,212,0,0.6)] sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-line bg-panel text-fg transition-colors hover:border-accent/50 hover:text-accent-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className={`absolute inset-0 bg-bg/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`relative flex h-full flex-col px-5 py-5 transition-all duration-300 sm:px-8 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-accent font-display text-sm font-extrabold text-black">
                IP
              </span>
              <span className="font-display text-[13px] font-bold tracking-[0.18em] text-fg">
                ISHIMWE
              </span>
            </a>

            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-line bg-panel text-fg transition-colors hover:border-accent/50 hover:text-accent-ink"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <nav className="mt-12 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-line py-3.5"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-accent-ink/60">
                    0{index + 1}
                  </span>
                  <span className="font-display text-2xl font-semibold text-fg transition-colors group-hover:text-accent-ink">
                    {link.label}
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
              </a>
            ))}
          </nav>

          <div className="mt-auto pb-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-fg-soft">
              Get in touch
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-line px-4 py-2 text-xs text-fg transition-colors hover:border-accent/40 hover:text-accent-ink"
              >
                {profile.email}
              </a>
              <a
                href={profile.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent/40 hover:text-accent-ink"
                aria-label="Telegram"
              >
                <TelegramIcon size={16} />
              </a>
              <a
                href={profile.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent/40 hover:text-accent-ink"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
