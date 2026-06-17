import React from 'react'
import { GiSpeedometer, GiGears, GiRaceCar, GiMechanicGarage } from 'react-icons/gi'
import { BsTools, BsHeadset } from 'react-icons/bs'
import useReveal from '../hooks/useReveal'

const services = [
  {
    Icon: GiSpeedometer,
    title: 'Performance Tuning',
    desc: "ECU remapping and stage upgrades that unlock your engine's true potential. More power, better throttle response, optimised fuel maps.",
  },
  {
    Icon: GiGears,
    title: 'Suspension Setup',
    desc: 'Corner-weight balancing, coilover installation, and geometry alignment so your car handles exactly how it should — on the street or the track.',
  },
  {
    Icon: BsTools,
    title: 'Parts Installation',
    desc: 'From cold air intakes to full turbo kits, our technicians fit every component to the manufacturer spec. We only install what we sell.',
  },
  {
    Icon: GiRaceCar,
    title: 'Track Day Prep',
    desc: "Pre-event safety checks, brake bleeding, pad bedding, and data-logger setup. Arrive at the circuit confident your car won't let you down.",
  },
  {
    Icon: GiMechanicGarage,
    title: 'Full Vehicle Service',
    desc: 'Comprehensive servicing with performance-grade fluids and OEM-spec filters. Keep your machine reliable whether it sees daily use or track duty.',
  },
  {
    Icon: BsHeadset,
    title: 'Expert Consultation',
    desc: 'Not sure which upgrades suit your build? Our team of enthusiasts will map out the right path — matching parts, budget, and goals perfectly.',
  },
]

export default function Services() {
  useReveal()

  return (
    <div style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── PAGE HEADER ── */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
            style={{ color: '#D4AF37' }}>
            What We Offer
          </p>
          <h1 className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#1F2937' }}>
            Our Services
          </h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}>
            From bolt-on upgrades to full track builds — everything your car needs,
            handled by people who actually love cars.
          </p>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="liquid-glass rounded-2xl p-8 flex flex-col items-center text-center group reveal"
              style={{
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.transform = ''
              }}
            >
              <div className="glass-content flex flex-col items-center">

                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                             transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(212,175,55,0.09)',
                    border: '1px solid rgba(212,175,55,0.22)',
                  }}
                >
                  <Icon style={{ color: '#D4AF37', fontSize: '2.2rem' }} />
                </div>

                <h3 className="font-bold text-lg mb-3" style={{ color: '#1F2937' }}>{title}</h3>

                {/* Gold divider */}
                <div className="w-8 h-0.5 rounded-full mb-4"
                  style={{ background: '#D4AF37' }} />

                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
