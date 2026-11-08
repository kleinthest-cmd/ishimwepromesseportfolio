import { Briefcase, Calendar, Check, MapPin } from 'lucide-react'
import { experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-24 size-[26rem] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been{' '}
              <span className="gold-text">building and solving.</span>
            </>
          }
          description="Real work, real systems. A timeline of the roles and projects that shaped how I build software and run infrastructure."
        />

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute bottom-4 left-2.5 top-2 w-px bg-gradient-to-b from-accent/80 via-line-strong to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <Reveal key={`${exp.role}-${exp.company}`} delay={index * 90}>
                <article className="relative pl-10 md:pl-16">
                  <span className="absolute left-0 top-2.5 grid size-5 place-items-center rounded-full border border-accent/40 bg-bg">
                    {index === 0 ? (
                      <>
                        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/25" />
                        <span className="relative size-2 rounded-full bg-accent" />
                      </>
                    ) : (
                      <span className="size-1.5 rounded-full bg-fg-faint" />
                    )}
                  </span>

                  <div
                    className={`group rounded-2xl border bg-panel p-6 transition-all duration-300 hover:bg-fg/[0.035] sm:p-8 ${
                      index === 0
                        ? 'border-accent/20 hover:border-accent/40'
                        : 'border-line hover:border-line-strong'
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-ink">
                            <Briefcase className="size-3" />
                            {exp.type}
                          </span>
                          {index === 0 ? (
                            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent-ink">
                              Current
                            </span>
                          ) : null}
                        </div>

                        <h3 className="mt-2.5 font-display text-lg font-bold text-fg sm:text-xl">
                          {exp.role}
                        </h3>

                        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fg-muted">
                          <span className="font-medium text-fg">{exp.company}</span>
                          <span className="text-fg-faint">·</span>
                          <span className="inline-flex items-center gap-1 text-fg-soft">
                            <MapPin className="size-3" />
                            {exp.location}
                          </span>
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[10px] text-fg">
                          <Calendar className="size-3 text-accent-ink/80" />
                          {exp.period}
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-fg-faint">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">{exp.summary}</p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-fg-muted">
                          <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-accent/10 text-accent-ink">
                            <Check className="size-2.5" strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-line bg-panel px-2 py-1 font-mono text-[10px] text-fg-soft transition-colors group-hover:border-line-strong group-hover:text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 pl-10 font-mono text-[11px] text-fg-faint md:pl-16">
            // References available on request.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
