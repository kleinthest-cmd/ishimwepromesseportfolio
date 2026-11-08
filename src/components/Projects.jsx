import { ArrowUpRight, Sparkles } from 'lucide-react'
import { profile, projects } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[130px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="05"
            eyebrow="Selected work"
            title={
              <>
                Things I&apos;ve built,
                <br className="hidden sm:block" /> shipped and{' '}
                <span className="gold-text">maintained.</span>
              </>
            }
            description="A selection of projects that show how I approach product thinking, clean front ends and the infrastructure behind them."
          />
          <div className="hidden shrink-0 pb-2 md:block">
            <span className="text-outline font-display text-7xl font-extrabold leading-none lg:text-8xl">
              05
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
              `Case study request â€” ${project.title}`,
            )}&body=${encodeURIComponent(
              `Hi Promesse,\n\nI'd like to hear more about the "${project.title}" project.\n\nThanks!`,
            )}`

            return (
              <Reveal key={project.title} delay={index * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_30px_60px_-30px_var(--shadow-heavy)]">
                  {/* Visual */}
                  <div className="relative h-44 overflow-hidden border-b border-line bg-bg-soft sm:h-48">
                    <div className="absolute inset-0 dot-bg opacity-70" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,212,0,0.16),transparent_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-soft via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="rounded-full border border-line bg-panel/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-fg backdrop-blur">
                        {project.category}
                      </span>
                      {project.featured ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-black">
                          <Sparkles className="size-2.5" />
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <span className="absolute right-5 top-4 font-mono text-xs text-fg-faint">
                      {project.year}
                    </span>

                    <span className="absolute right-5 bottom-3 font-display text-[4.5rem] font-extrabold leading-none text-fg/[0.035] transition-colors duration-500 group-hover:text-accent-ink/[0.07]">
                      0{index + 1}
                    </span>

                    <div className="absolute bottom-5 left-5 grid size-14 place-items-center rounded-2xl border border-accent/20 bg-gradient-to-br from-panel-2 to-panel-3 text-accent-ink shadow-lg shadow-black/40 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/50 group-hover:text-accent-ink">
                      <Icon name={project.icon} className="size-6" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-fg transition-colors group-hover:text-accent-ink">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-fg-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-line bg-panel px-2 py-1 font-mono text-[9.5px] text-fg-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={mailto}
                      className="mt-5 inline-flex items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-[11px] font-semibold text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent-ink"
                    >
                      Request case study
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={80}>
          <p className="mt-6 font-mono text-[11px] text-fg-faint">
            // Some projects are internal â€” happy to walk you through the details on a call.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/[0.09] via-panel to-transparent p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
              <span className="text-outline font-display text-6xl font-extrabold leading-none">
                LET&apos;S BUILD
              </span>
            </div>

            <div className="relative max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-ink">
                Got something in mind?
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-fg sm:text-3xl">
                Let&apos;s turn it into something people can use.
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-fg-muted">
                Tell me what you&apos;re building or what&apos;s slowing you down. I&apos;ll come
                back with a clear plan, a timeline and an honest opinion.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-semibold text-black transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_35px_-8px_rgba(255,212,0,0.6)]"
                >
                  Start a conversation
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[12px] font-medium text-fg-muted transition-colors hover:text-accent-ink"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
