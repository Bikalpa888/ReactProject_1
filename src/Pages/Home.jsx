import { Link } from 'react-router-dom'
import {
  BsArrowRight, BsLightningFill, BsShieldCheck, BsTruck, BsHeadset,
} from 'react-icons/bs'
import { GiSteeringWheel, GiSpeedometer, GiGears } from 'react-icons/gi'
import { FaMicrochip } from 'react-icons/fa'
import MyCarousel from '../components/MyCarousel'
import useReveal from '../hooks/useReveal'

const categories = [
  { Icon: GiSpeedometer,   label: 'Performance Parts', desc: 'Turbos · Exhausts · Intakes', count: '120+' },
  { Icon: GiSteeringWheel, label: 'Wheels & Tyres',    desc: 'Forged · Flow-formed · OEM',  count: '85+'  },
  { Icon: GiGears,         label: 'Suspension',         desc: 'Coilovers · Bars · Arms',    count: '64+'  },
  { Icon: FaMicrochip,     label: 'Electronics & ECU',  desc: 'Tunes · Gauges · Sensors',   count: '47+'  },
]

const products = [
  { name: 'M3 Cold Air Intake',   brand: 'Eventuri',      price: '$289',   badge: 'Hot',  img: '/1.jpg' },
  { name: 'Sport Coilover Kit',   brand: 'KW Suspension', price: '$1,299', badge: 'New',  img: '/2.jpg' },
  { name: 'Carbon Rear Diffuser', brand: 'Vorsteiner',    price: '$599',   badge: 'Sale', img: '/3.jpg' },
  { name: 'Stage 2 ECU Flash',    brand: 'BM3',           price: '$449',   badge: '',     img: '/1.jpg' },
]

const badgeStyle = {
  Hot:  'bg-red-500/85 text-white',
  New:  'bg-emerald-500/85 text-white',
  Sale: 'bg-orange-500/85 text-white',
}

const features = [
  { Icon: BsLightningFill, title: 'Same-Day Dispatch', desc: 'In-stock orders ship the same day — zero delays.' },
  { Icon: BsShieldCheck,   title: 'Authentic Only',    desc: 'OEM and genuine aftermarket, zero knock-offs.' },
  { Icon: BsTruck,         title: 'Free Shipping',     desc: 'Complimentary delivery on all orders over $150.' },
  { Icon: BsHeadset,       title: 'Expert Support',    desc: 'Enthusiasts on the line, not bots.' },
]

const stats = [
  { value: '10K+',  label: 'Happy Customers' },
  { value: '500+',  label: 'Products' },
  { value: '5.0★',  label: 'Average Rating' },
  { value: '8 Yrs', label: 'Racing Experience' },
]

export default function Home() {
  useReveal()

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(18,18,18,0.72) 0%, rgba(18,18,18,0.55) 60%, rgba(18,18,18,0.80) 100%)' }}
        />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto" style={{ color: 'var(--c-hero-text)' }}>
          <p className="text-xs uppercase tracking-[0.4em] font-semibold mb-6"
            style={{ color: 'var(--c-accent)', letterSpacing: '0.35em' }}>
            Premium Performance Parts
          </p>

          <h1 className="font-black tracking-tight leading-[1.04] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>
            Built for Speed.<br />
            <span style={{ color: 'var(--c-accent)' }}>Engineered to Race.</span>
          </h1>

          <p className="text-lg max-w-lg mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(248,249,250,0.60)' }}>
            Curated performance parts for drivers who demand more.
            From street to track — every component matters.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="btn-light px-9 py-3.5 rounded-xl text-sm flex items-center gap-2">
              Shop Now <BsArrowRight />
            </button>
            <Link to="/about"
              className="btn-ghost px-9 py-3.5 rounded-xl text-sm">
              Our Story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint">
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1.5px solid rgba(248,249,250,0.30)' }}>
            <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(248,249,250,0.50)' }} />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────── */}
      <section style={{ background: 'var(--c-dark-section)' }}>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-9 px-4"
              style={{ borderRight: i < 3 ? '1px solid rgba(248,249,250,0.08)' : 'none' }}>
              <span className="text-2xl sm:text-3xl font-extrabold"
                style={{ color: 'var(--c-dark-section-text)' }}>{s.value}</span>
              <span className="text-[10px] uppercase tracking-widest mt-1.5"
                style={{ color: 'rgba(248,249,250,0.45)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────── */}
      <section style={{ background: 'var(--c-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold mb-2"
              style={{ color: 'var(--c-accent)' }}>Browse</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: 'var(--c-dark)' }}>Shop by Category</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(({ Icon, label, desc, count }, i) => (
              <div
                key={i}
                className="liquid-glass rounded-2xl p-6 cursor-pointer group"
                style={{ transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.transform = ''
                }}
              >
                <div className="glass-content">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--c-accent-soft)', border: '1px solid var(--c-accent-border)' }}>
                    <Icon className="text-xl" style={{ color: 'var(--c-accent)' }} />
                  </div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--c-dark)' }}>{label}</h3>
                  <p className="text-xs mb-3" style={{ color: 'var(--c-silver)' }}>{desc}</p>
                  <span className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: 'var(--c-accent)' }}>
                    {count} items <BsArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT DEALS ────────────────────────────────── */}
      <section style={{ background: 'var(--c-off-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] font-semibold mb-2"
                style={{ color: 'var(--c-accent)' }}>Curated Picks</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold"
                style={{ color: 'var(--c-dark)' }}>Hot Right Now</h2>
            </div>
            <button className="text-sm font-medium flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'var(--c-silver)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--c-dark)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--c-silver)'}>
              View all <BsArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="liquid-glass rounded-2xl overflow-hidden cursor-pointer group"
                style={{ transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                         transitionDelay: `${i * 0.07}s` }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.transform = ''
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {p.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeStyle[p.badge]}`}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="glass-content p-4">
                  <p className="text-[10px] uppercase tracking-wider mb-1 font-medium"
                    style={{ color: 'var(--c-accent)' }}>{p.brand}</p>
                  <h3 className="font-semibold text-sm mb-3 leading-snug"
                    style={{ color: 'var(--c-dark)' }}>{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-base" style={{ color: 'var(--c-dark)' }}>{p.price}</span>
                    <button className="glass-btn text-[11px] px-3 py-1.5 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────── */}
      <section style={{ background: 'var(--c-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-10 reveal">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold mb-2"
              style={{ color: 'var(--c-accent)' }}>Our Fleet</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: 'var(--c-dark)' }}>Battle-Tested Machines</h2>
          </div>
          <div className="liquid-glass rounded-3xl overflow-hidden reveal">
            <div className="glass-content">
              <MyCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LETSRACE ─────────────────────────────── */}
      <section style={{ background: 'var(--c-off-white)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold mb-2"
              style={{ color: 'var(--c-accent)' }}>The LETSRACE Difference</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: 'var(--c-dark)' }}>Why Drivers Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="liquid-glass rounded-2xl p-7 text-center group reveal"
                style={{
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  transitionDelay: `${i * 0.08}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.transform = ''
                }}
              >
                <div className="glass-content">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--c-accent-soft)', border: '1px solid var(--c-accent-border)' }}>
                    <Icon className="text-lg" style={{ color: 'var(--c-accent)' }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--c-dark)' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-silver)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--c-dark-section)' }}
      >
        <img
          src="/2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.12 }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-28 text-center reveal">
          <h2 className="text-4xl sm:text-5xl font-black mb-5 leading-tight"
            style={{ color: 'var(--c-dark-section-text)' }}>
            Ready to Upgrade<br />Your Ride?
          </h2>
          <p className="text-base mb-10 leading-relaxed"
            style={{ color: 'var(--c-dark-section-muted)' }}>
            Every second on the track counts. Get the parts that make the difference.
          </p>
          <button className="btn-light px-12 py-4 rounded-xl font-bold text-base inline-flex items-center gap-2.5">
            Start Shopping <BsArrowRight />
          </button>
        </div>
      </section>

    </div>
  )
}
