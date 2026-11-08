import { useState } from 'react'
import { ArrowUpRight, Check, Copy, MapPin, Send } from 'lucide-react'
import { contactLinks, profile } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function copyToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value)
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  return Promise.resolve()
}

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    try {
      await copyToClipboard(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-panel text-fg-soft transition-all duration-200 hover:border-accent/40 hover:text-accent-ink"
    >
      {copied ? <Check className="size-3.5 text-accent-ink" /> : <Copy className="size-3.5" />}
    </button>
  )
}

const FIELDS = [
  { name: 'name', label: 'Your name', placeholder: 'Jane Doe', type: 'text' },
  { name: 'email', label: 'Email address', placeholder: 'jane@company.com', type: 'email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [opened, setOpened] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setOpened(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      form.subject.trim() || `Portfolio enquiry from ${form.name.trim() || 'a visitor'}`,
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[32rem] rounded-full bg-accent/[0.06] blur-[130px]" />

      <div className="container-x relative">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="gold-text">worth shipping.</span>
            </>
          }
          description="Have a project, a role or a tricky IT problem? My inbox is open. I usually reply within a day."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact details */}
          <div>
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => (
                  <div
                    key={link.label}
                    className="group relative flex items-start gap-3 rounded-2xl border border-line bg-panel p-4 transition-all duration-300 hover:border-accent/35 hover:bg-fg/[0.035]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                      <Icon name={link.icon} className="size-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-fg-faint">
                        {link.label}
                      </p>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="mt-1 block truncate text-[12.5px] font-medium text-fg transition-colors hover:text-accent-ink"
                      >
                        {link.value}
                      </a>
                    </div>

                    {link.copy ? (
                      <CopyButton value={link.copy} label={link.label} />
                    ) : (
                      <ArrowUpRight className="size-3.5 shrink-0 text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-panel to-transparent p-5">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-ink">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-accent/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {profile.availability}
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-fg-muted">
                  Based in {profile.location}, open to remote work and on-site opportunities. Whether
                  it&apos;s a full build or a second pair of hands, let&apos;s talk.
                </p>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-fg-faint">
                  <MapPin className="size-3 text-accent-ink/70" />
                  CAT / UTC+2 Â· Flexible hours
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={140}>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-panel-3 p-6 shadow-[0_30px_80px_-40px_var(--shadow-heavy)] sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent/[0.07] blur-3xl" />

              <div className="relative flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-fg">Send a message</h3>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fg-faint">
                  No backend Â· mailto
                </span>
              </div>

              <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {FIELDS.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-soft"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[13px] text-fg outline-none transition-all duration-200 placeholder:text-fg-faint focus:border-accent/50 focus:bg-fg/[0.04] focus:ring-2 focus:ring-accent/10"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-soft"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Website project, network support, job opportunityâ€¦"
                    className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[13px] text-fg outline-none transition-all duration-200 placeholder:text-fg-faint focus:border-accent/50 focus:bg-fg/[0.04] focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-soft"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about what you needâ€¦"
                    className="w-full resize-none rounded-xl border border-line bg-panel px-4 py-3 text-[13px] leading-relaxed text-fg outline-none transition-all duration-200 placeholder:text-fg-faint focus:border-accent/50 focus:bg-fg/[0.04] focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-[13px] font-bold text-black transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_40px_-10px_rgba(255,212,0,0.7)]"
                >
                  Send message
                  <Send className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

                <p className="text-center text-[10.5px] leading-relaxed text-fg-faint">
                  {opened
                    ? 'Your email app should open with the message ready. If it did not, email me directly at kleinthest@gmail.com.'
                    : 'This form opens your email client â€” no data is stored or sent anywhere else.'}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
