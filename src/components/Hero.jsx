import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Code2,
  MapPin,
} from 'lucide-react'
import { profile, stats } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { InstagramIcon, TelegramIcon } from './BrandIcons'
import Reveal from './Reveal'

const ROLES = [
  'Software Developer',
  'Network Administrator',
  'Frontend Engineer',
  'IT Problem Solver',
]

const SOCIALS = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail', external: false },
  { label: 'Phone', href: `tel:${profile.phoneHref}`, icon: 'phone', external: false },
  { label: 'Telegram', href: profile.telegramHref, icon: 'telegram', external: true },
  { label: 'Instagram', href: profile.instagramHref, icon: 'instagram', external: true },
]

function SocialIcon({ icon }) {
  if (icon === 'telegram') return <TelegramIcon size={17} />
  if (icon === 'instagram') return <InstagramIcon size={17} />
  if (icon === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-12 pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,black_10%,transparent_80%)]" />
        <div className="absolute -top-44 right-[-8%] size-[40rem] rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[32rem] rounded-full bg-panel blur-[120px]" />
        <div className="absolute left-1/2 top-24 hidden size-[34rem] -translate-x-1/2 rounded-full border border-line lg:block" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="rotate-180 font-mono text-[10px] uppercase tracking-[0.5em] text-fg-faint [writing-mode:vertical-rl]">
          Kigali Â· Rwanda Â· Portfolio 2026
        </span>
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-ink">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-accent/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-fg-soft">
                <span className="h-px w-9 bg-line-strong" />
                Hello, I&apos;m
              </p>

              <h1 className="mt-3 font-display text-[clamp(2.9rem,8vw,5.6rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-fg">
                {profile.firstName}
                <span className="mt-1 block gold-text">{profile.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-2 font-display text-lg font-medium text-fg-soft sm:text-xl">
                <span className="text-fg-soft">I&apos;m a</span>
                <span className="text-accent-ink" aria-live="polite">
                  {typed}
                </span>
                <span className="caret" aria-hidden="true" />
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg-muted sm:text-base">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_40px_-8px_rgba(255,212,0,0.65)]"
                >
                  View my work
                  <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:bg-panel hover:text-accent-ink"
                >
                  Contact me
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2.5">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      {...(social.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-line bg-panel text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent-ink"
                    >
                      <SocialIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
                <span className="hidden h-5 w-px bg-panel-2 sm:block" />
                <span className="flex items-center gap-1.5 text-xs text-fg-soft">
                  <MapPin className="size-3.5 text-accent-ink/80" />
                  {profile.location}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Profile card */}
          <Reveal delay={220} className="relative mx-auto w-full max-w-[25rem] lg:max-w-[26.5rem]">
            <div className="pointer-events-none absolute -right-8 -top-10 size-44 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-8 size-44 rounded-full bg-accent/[0.06] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-panel-2 to-bg-soft p-1.5 shadow-[0_35px_80px_-30px_var(--shadow-heavy)]">
              <div className="relative overflow-hidden rounded-[1.65rem] border border-line bg-bg-soft/80">
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-fg-faint" />
                    <span className="size-2 rounded-full bg-fg-faint" />
                    <span className="size-2 rounded-full bg-accent/70" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-fg-faint">
                    ~/promesse/profile
                  </span>
                </div>

                <div className="dot-bg relative px-6 pb-7 pt-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] via-transparent to-transparent" />

                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative grid size-36 place-items-center sm:size-40">
                      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30" />
                      <div className="absolute inset-3 rounded-full bg-accent/10 blur-xl" />

                      <div className="relative size-28 rounded-full sm:size-32">
                        <div className="size-full overflow-hidden rounded-full border border-line bg-panel ring-1 ring-accent/25">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet={profile.photo.webpSrcSet}
                              sizes="(min-width: 640px) 8rem, 7rem"
                            />
                            <img
                              src={profile.photo.src}
                              srcSet={profile.photo.jpgSrcSet}
                              sizes="(min-width: 640px) 8rem, 7rem"
                              alt={profile.photo.alt}
                              width={profile.photo.width}
                              height={profile.photo.height}
                              loading="eager"
                              fetchPriority="high"
                              decoding="async"
                              className="size-full object-cover object-top"
                            />
                          </picture>
                        </div>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/30 bg-panel px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent-ink">
                          dev / net
                        </span>
                      </div>
                    </div>

                    <h2 className="mt-6 font-display text-xl font-bold text-fg">
                      {profile.firstName} <span className="gold-text">{profile.lastName}</span>
                    </h2>
                    <p className="mt-1.5 max-w-[15rem] text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-fg-soft">
                      {profile.role}
                    </p>

                    <div className="mt-6 grid w-full grid-cols-2 gap-2.5">
                      <div className="flex flex-col items-start gap-1 rounded-xl border border-line bg-panel px-3.5 py-2.5 text-left">
                        <MapPin className="size-3.5 text-accent-ink" />
                        <span className="mt-1 text-[10px] uppercase tracking-wider text-fg-faint">
                          Based in
                        </span>
                        <span className="text-xs font-medium text-fg">Kigali, Rwanda</span>
                      </div>
                      <div className="flex flex-col items-start gap-1 rounded-xl border border-line bg-panel px-3.5 py-2.5 text-left">
                        <Building2 className="size-3.5 text-accent-ink" />
                        <span className="mt-1 text-[10px] uppercase tracking-wider text-fg-faint">
                          Experience
                        </span>
                        <span className="text-xs font-medium text-fg">2+ yrs Â· Origin</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {['React', 'Node.js', 'Networks'].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-panel px-2.5 py-1 font-mono text-[10px] text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -top-5 hidden animate-float-slow items-center gap-2 rounded-xl border border-accent/25 bg-panel/95 px-3.5 py-2.5 shadow-xl shadow-black/50 backdrop-blur sm:flex">
              <span className="grid size-7 place-items-center rounded-lg bg-accent text-black">
                <Code2 className="size-3.5" />
              </span>
              <div className="leading-tight">
                <p className="font-mono text-[9px] uppercase tracking-wider text-fg-soft">status</p>
                <p className="text-[11px] font-semibold text-fg">Open to work</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 hidden animate-float rounded-xl border border-line bg-panel/95 px-3.5 py-2.5 shadow-xl shadow-black/50 backdrop-blur sm:block">
              <p className="font-mono text-[9px] text-fg-faint">// currently</p>
              <p className="font-mono text-[11px] text-accent-ink">building &amp; securing</p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={120} className="mt-16 sm:mt-20">
          <dl className="grid grid-cols-3 divide-x divide-line overflow-hidden rounded-2xl border border-line bg-panel backdrop-blur-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 text-center sm:px-6 sm:py-6 sm:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-2xl font-bold tracking-tight gold-text sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-fg-muted sm:text-[11px]">
                    {stat.label}
                  </span>
                  <span className="mt-1 hidden text-[11px] text-fg-faint sm:block">{stat.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 hidden justify-center md:flex">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-fg-faint transition-colors hover:text-accent-ink"
          >
            Scroll to explore
            <ArrowDown className="size-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
