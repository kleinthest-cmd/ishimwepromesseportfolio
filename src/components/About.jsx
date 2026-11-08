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
          <Reveal className="mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="lg:sticky lg:top-28">
              <div className="gold-ring relative overflow-hidden rounded-3xl bg-panel/60 p-2">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-line bg-panel-3">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={profile.photo.webpSrcSet}
                        sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, 92vw"
                      />
                      <img
                        src={profile.photo.src}
                        srcSet={profile.photo.jpgSrcSet}
                        sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, 92vw"
                        alt=""
                        width={profile.photo.width}
                        height={profile.photo.height}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 size-full object-cover object-top"
                      />
                    </picture>

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45"
                    />

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/75">
                        Portfolio · 2026
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        <span className="size-1.5 rounded-full bg-accent" />
                        Available
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/60">
                        developer / admin
                      </p>
                      <p className="mt-1 font-display text-xl font-bold text-white">
                        {profile.fullName}
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-white/70">
                        <MapPin className="size-3 text-accent" />
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
