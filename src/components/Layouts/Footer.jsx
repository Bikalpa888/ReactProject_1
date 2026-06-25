import { BsInstagram, BsTwitterX, BsFacebook, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="liquid-glass glass-footer" style={{ color: 'var(--c-silver)' }}>
      <div className="glass-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-xl font-extrabold tracking-widest"
              style={{ color: 'var(--c-dark)' }}>
              LETS<span style={{ color: 'var(--c-accent)' }}>RACE</span>
            </span>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for quality performance parts.
              Shop smart, drive harder.
            </p>
            <div className="flex gap-4 text-lg mt-1">
              {[BsInstagram, BsTwitterX, BsFacebook, BsGithub].map((Icon, i) => (
                <a key={i} href="#"
                  className="transition-colors duration-200 hover:text-[#D4AF37]">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'var(--c-dark)' }}>Shop</h3>
            {['New Arrivals', 'Best Sellers', 'Sale', 'All Products', 'Gift Cards'].map(l => (
              <a key={l} href="#"
                className="theme-link text-sm transition-colors duration-200">{l}</a>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'var(--c-dark)' }}>Support</h3>
            {['Help Center', 'Track Order', 'Returns & Refunds', 'Shipping Info', 'Contact Us'].map(l => (
              <a key={l} href="#"
                className="theme-link text-sm transition-colors duration-200">{l}</a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--c-dark)' }}>Stay Updated</h3>
            <p className="text-sm">Subscribe to get deals and new arrivals first.</p>
            <div className="glass-input flex overflow-hidden"
              style={{ background: 'var(--c-white)' }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                style={{ color: 'var(--c-dark)' }}
              />
              <button className="glass-btn px-4 py-2 text-sm rounded-full mr-1">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-muted)' }}>
          <span>&copy; {new Date().getFullYear()} LETSRACE. All rights reserved.</span>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(l => (
              <a key={l} href="#"
                className="theme-link transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
