import { ArrowUpRight, Check, MapPin } from 'lucide-react'
import { highlights, profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FACTS = [
  { label: 'Experience', value: '2+ years' },
  { label: 'Company', value: 'Origin Group Ltd' },
  { label: 'Location', value: 'Kigali, Rwanda' },
  { label: 'Focus', value: 'Web & Networks' },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-accent/[0.05] blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="01"
            eyebrow="About me"
            title={
              <>
                A developer who also
                <br className="hidden sm:block" /> keeps the{' '}
                <span className="gold-text">lights on.</span>
              </>
            }
            description="Two years of building software and running the infrastructure it lives on — a combination that makes me think about the whole system, not just the screen."
          />

          <div className="hidden shrink-0 pb-2 md:block">
            <span className="text-outline font-display text-7xl font-extrabold leading-none lg:text-8xl">
              01
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait / facts card */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="gold-ring relative overflow-hidden rounded-3xl bg-panel/60 p-2">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-line bg-panel-3">
                  <div className="dot-bg relative flex aspect-[4/4.1] flex-col justify-between overflow-hidden p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,212,0,0.12),transparent_62%)]" />
                    <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />
                    <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line" />

                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fg-soft">
                        Portfolio · 2026
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-accent-ink">
                        <span className="size-1.5 rounded-full bg-accent" />
                        Available
                      </span>
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                      <span className="font-display text-[6.5rem] font-extrabold leading-none tracking-tighter gold-text">
                        IP
                      </span>
                      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-fg-soft">
                        developer / admin
                      </span>
                    </div>

                    <div className="relative">
                      <p className="font-display text-xl font-bold text-fg">
                        {profile.fullName}
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-fg-soft">
                        <MapPin className="size-3 text-accent-ink" />
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-y divide-line border-t border-line">
                    {FACTS.map((fact) => (
                      <div key={fact.label} className="px-4 py-3.5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-fg-faint">
                          {fact.label}
                        </p>
                        <p className="mt-1 text-[12px] font-medium text-fg">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-fg sm:text-lg">
                {profile.about[0]}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-[15px] leading-relaxed text-fg-muted">{profile.about[1]}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[15px] leading-relaxed text-fg-muted">{profile.about[2]}</p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 rounded-2xl border border-line bg-panel p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-ink">
                  What I bring
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-fg">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-[13px] font-semibold text-bg transition-all duration-300 hover:bg-accent hover:text-on-accent"
                >
                  Explore my experience
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 text-[13px] font-medium text-fg-muted transition-colors hover:text-accent-ink"
                >
                  <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent/60">
                    {profile.email}
                  </span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
