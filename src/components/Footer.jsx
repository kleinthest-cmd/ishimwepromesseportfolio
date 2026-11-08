import { ArrowUpRight, MapPin } from 'lucide-react'
import { contactLinks, navLinks, profile } from '../data/portfolio'
import Icon from './Icon'

const SOCIALS = contactLinks.filter((link) => ['telegram', 'instagram'].includes(link.icon))
const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-bg-deep">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="container-x relative pt-14">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] lg:gap-14">
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-accent font-display text-sm font-extrabold text-black transition-transform duration-300 group-hover:rotate-6">
                IP
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[13px] font-bold tracking-[0.18em] text-fg">
                  ISHIMWE
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-fg-soft">
                  Promesse
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-fg-muted">
              Software developer and network administrator turning ideas into fast, reliable
              products — and keeping the infrastructure behind them healthy.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-line text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-ink"
                >
                  <Icon name={social.icon} className="size-4" />
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-[11px] text-fg-muted transition-all duration-300 hover:border-accent/40 hover:text-accent-ink"
              >
                {profile.email}
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-fg-soft">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12.5px] text-fg-soft transition-colors hover:text-accent-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-fg-soft">
              Get in touch
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[12.5px] text-fg-muted transition-colors hover:text-accent-ink"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-[12.5px] text-fg-muted transition-colors hover:text-accent-ink"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.telegramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12.5px] text-fg-muted transition-colors hover:text-accent-ink"
                >
                  Telegram · {profile.telegram}
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-[12.5px] text-fg-soft">
                <MapPin className="size-3.5 text-accent-ink/70" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 sm:flex-row">
          <p className="text-[11px] text-fg-soft">
            © {YEAR} {profile.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-fg-faint">
            Built with <span className="text-accent-ink">React</span> &amp;
            <span className="text-accent-ink">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
