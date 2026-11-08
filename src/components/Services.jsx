import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="pointer-events-none absolute right-10 top-1/3 size-[26rem] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading
          index="04"
          eyebrow="What I do"
          title={
            <>
              Services that connect <span className="gold-text">code to reality.</span>
            </>
          }
          description="Whether you need a polished web product, a dependable network, or someone who can handle both — here is where I can help."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:bg-fg/[0.04]">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-ink transition-all duration-300 group-hover:bg-accent group-hover:text-black">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] text-fg-faint transition-colors group-hover:text-accent-ink/50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[15px] font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-fg-muted">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-faint transition-colors duration-300 group-hover:text-accent-ink"
                >
                  Discuss this
                  <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
