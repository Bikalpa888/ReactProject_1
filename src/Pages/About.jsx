import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import useReveal from '../hooks/useReveal'

export default function About() {
  useReveal()

  return (
    <div style={{ background: 'var(--c-white)' }}>
      <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* ── LEFT: TEXT ── */}
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.35em] font-semibold mb-6"
                style={{ color: 'var(--c-accent)' }}>
                About Us
              </p>

              <h1 className="font-black leading-[1.08] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: 'var(--c-dark)' }}>
                We Live for<br />The Drive.
              </h1>

              <div className="w-10 h-0.5 rounded-full mb-8"
                style={{ background: 'var(--c-accent)' }} />

              <div className="space-y-5 leading-relaxed text-[15px]"
                style={{ color: 'var(--c-silver)' }}>
                <p>
                  LETSRACE was born from a single obsession — finding the best performance
                  parts without the dealership markup. What started as a passion project
                  between two track-day regulars grew into the region's most trusted car
                  parts platform.
                </p>
                <p>
                  Every product in our catalog has been tested by someone who actually
                  drives on the edge. We got tired of parts that underdelivered, so we
                  built the store we always wanted — curated, honest, and fast.
                </p>
                <p>
                  Today, over 10,000 drivers across the region trust LETSRACE to keep
                  their machines performing at their best. The garage is bigger now,
                  but the obsession hasn't changed one bit.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Link to="/"
                  className="glass-btn px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
                  Shop Now <BsArrowRight />
                </Link>
                <span className="text-sm" style={{ color: 'var(--c-muted)' }}>Est. 2016</span>
              </div>
            </div>

            {/* ── RIGHT: IMAGE ── */}
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/5] relative reveal"
              style={{ transitionDelay: '0.15s' }}>
              <img
                src="/4.jpg"
                alt="About LETSRACE"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(31,41,55,0.65) 0%, transparent 50%)' }}
              />

              {/* 10K+ badge */}
              <div className="absolute bottom-5 left-5 rounded-xl py-3 px-5 shadow-lg"
                style={{ background: 'var(--c-badge-bg)', backdropFilter: 'blur(8px)' }}>
                <p className="text-2xl font-black leading-none" style={{ color: 'var(--c-dark)' }}>10K+</p>
                <p className="text-xs mt-1" style={{ color: 'var(--c-silver)' }}>Happy Customers</p>
              </div>

              {/* 2016 badge */}
              <div className="absolute bottom-5 right-5 rounded-xl py-3 px-5 shadow-lg"
                style={{ background: 'var(--c-badge-bg)', backdropFilter: 'blur(8px)' }}>
                <p className="text-2xl font-black leading-none" style={{ color: 'var(--c-dark)' }}>2016</p>
                <p className="text-xs mt-1" style={{ color: 'var(--c-silver)' }}>Year Founded</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
