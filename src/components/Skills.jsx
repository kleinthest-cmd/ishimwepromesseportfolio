import { Sparkles } from 'lucide-react'
import { proficiency, skillGroups } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function SkillBar({ label, value, delay }) {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-medium text-fg">{label}</span>
        <span className="font-mono text-[11px] text-accent-ink">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="bar-fill h-full rounded-full bg-gradient-to-r from-gold-600 via-accent to-gold-200"
          style={{ width: inView ? `${value}%` : 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/4 size-[24rem] rounded-full bg-accent/[0.04] blur-[110px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Skills & tools"
            title={
              <>
                A stack built for
                <br className="hidden sm:block" /> <span className="gold-text">both sides</span> of
                the screen.
              </>
            }
            description="From the first component to the last network cable — here is the toolkit I use to design, build and keep systems running."
          />
          <div className="hidden shrink-0 pb-2 md:block">
            <span className="text-outline font-display text-7xl font-extrabold leading-none lg:text-8xl">
              03
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-fg/[0.035]">
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/[0.06] blur-2xl transition-colors duration-500 group-hover:bg-accent/[0.14]" />

                <div className="relative flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-ink transition-transform duration-300 group-hover:scale-105">
                    <Icon name={group.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-fg">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-fg-muted">
                      {group.description}
                    </p>
                  </div>
                  <span className="ml-auto hidden font-mono text-[10px] text-fg-faint sm:block">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-[10px] text-fg-muted transition-colors duration-300 hover:border-accent/30 hover:text-accent-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-5 grid gap-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel to-transparent p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-ink">
                <Sparkles className="size-3.5" />
                Proficiency
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-fg">
                Honest levels, hands-on proof.
              </h3>
              <p className="mt-2.5 max-w-sm text-[13px] leading-relaxed text-fg-muted">
                These reflect where I spend most of my working hours — building interfaces, shipping
                APIs and keeping networks healthy.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[10px] text-fg-muted">
                <span className="size-1.5 rounded-full bg-accent" />
                2+ years of hands-on practice
              </span>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {proficiency.map((item, index) => (
                <SkillBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
