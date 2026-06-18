import React, { useState } from 'react'
import { BsEnvelopeFill, BsTelephoneFill, BsGeoAltFill, BsClock } from 'react-icons/bs'
import useReveal from '../hooks/useReveal'

const INFO = [
  {
    icon: BsGeoAltFill,
    label: 'Address',
    lines: ['123 Raceway Blvd, Unit 4', 'Los Angeles, CA 90001', 'United States'],
  },
  {
    icon: BsTelephoneFill,
    label: 'Phone',
    lines: ['+1 (800) 555-RACE', '+1 (800) 555-7223'],
  },
  {
    icon: BsEnvelopeFill,
    label: 'Email',
    lines: ['support@letsrace.com', 'sales@letsrace.com'],
  },
  {
    icon: BsClock,
    label: 'Business Hours',
    lines: ['Mon – Fri: 9 AM – 6 PM', 'Sat: 10 AM – 4 PM', 'Sun: Closed'],
  },
]

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  useReveal()
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ══ HERO BANNER ══ */}
      <div className="px-4 sm:px-6 lg:px-8 pt-24 pb-10 text-center reveal">
        <p className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
          style={{ color: '#D4AF37' }}>
          We'd Love to Hear From You
        </p>
        <h1 className="font-black leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: '#1F2937' }}>
          Contact Us
        </h1>
        <div className="w-10 h-0.5 rounded-full mx-auto" style={{ background: '#D4AF37' }} />
      </div>

      {/* ══ ADDRESS + FORM ══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── LEFT: contact info ── */}
          <div className="space-y-8 reveal">
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1F2937' }}>
                Get in Touch
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                Have a question about a part, an order, or just want to talk shop?
                Reach out — our team responds within one business day.
              </p>
            </div>

            <div className="space-y-6">
              {INFO.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.10)' }}>
                    <Icon style={{ color: '#D4AF37', fontSize: '1.1rem' }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold mb-1"
                      style={{ color: '#D4AF37' }}>
                      {label}
                    </p>
                    {lines.map(l => (
                      <p key={l} className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div className="liquid-glass rounded-3xl p-8 reveal" style={{ transitionDelay: '0.15s' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                  style={{ background: 'rgba(212,175,55,0.12)' }}>
                  <span style={{ color: '#D4AF37', fontSize: '1.75rem' }}>✓</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#1F2937' }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  We'll get back to you within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="glass-btn mt-4 px-6 py-2.5 rounded-xl text-sm">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1F2937' }}>
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: '#6B7280' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: '#F8F9FA',
                        border: '1.5px solid rgba(31,41,55,0.10)',
                        color: '#1F2937',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = '#D4AF37'
                        e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.10)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(31,41,55,0.10)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: '#6B7280' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: '#F8F9FA',
                        border: '1.5px solid rgba(31,41,55,0.10)',
                        color: '#1F2937',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = '#D4AF37'
                        e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.10)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(31,41,55,0.10)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: '#6B7280' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    required
                    placeholder="Order inquiry, Part availability…"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: '#F8F9FA',
                      border: '1.5px solid rgba(31,41,55,0.10)',
                      color: '#1F2937',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#D4AF37'
                      e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.10)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(31,41,55,0.10)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: '#6B7280' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind…"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                    style={{
                      background: '#F8F9FA',
                      border: '1.5px solid rgba(31,41,55,0.10)',
                      color: '#1F2937',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#D4AF37'
                      e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.10)'
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(31,41,55,0.10)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <button type="submit"
                  className="glass-btn w-full py-3.5 rounded-xl text-sm font-semibold">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ══ GOOGLE MAP ══ */}
      <div className="w-full reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="border-t" style={{ borderColor: 'rgba(31,41,55,0.08)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-base uppercase tracking-[0.35em] font-semibold mb-4 text-center"
            style={{ color: '#D4AF37' }}>
            Find Us
          </p>
        </div>
        <div className="w-full" style={{ height: '420px' }}>
          <iframe
            title="LETSRACE Location"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Los+Angeles,+CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>

    </div>
  )
}
