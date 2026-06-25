import { useState, useRef, useEffect, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsCart, BsMoonStars, BsPersonPlus, BsSearch, BsSun } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'
import { MyThemeContext } from '../hooks/MyThemeContext'

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact'  },
]

const Header = () => {
  const { theme, toggleTheme } = useContext(MyThemeContext)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setSearchOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="liquid-glass glass-header sticky top-0 z-50"
      style={{
        boxShadow: scrolled ? 'var(--shadow-header-scrolled)' : 'var(--shadow-header)',
        borderBottom: scrolled ? '1px solid var(--c-border-strong)' : '1px solid var(--c-border)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="glass-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">

          {/* Logo */}
          <Link to="/" className="shrink-0 select-none">
            <span className="text-xl font-extrabold tracking-widest"
              style={{ color: 'var(--c-dark)' }}>
              LETS<span style={{ color: 'var(--c-accent)' }}>RACE</span>
            </span>
          </Link>

          {/* Search — small pill, expands on focus */}
          <div
            className="flex items-center rounded-full overflow-hidden shrink-0"
            style={{
              background: 'var(--c-off-white)',
              border: `1.5px solid ${searchOpen ? 'var(--c-accent)' : 'var(--c-input-border)'}`,
              boxShadow: searchOpen ? '0 0 0 3px rgba(212,175,55,0.10)' : 'none',
              width: searchOpen ? '220px' : '130px',
              transition: 'width 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease',
            }}>
            <BsSearch className="ml-3 shrink-0 text-xs" style={{ color: searchOpen ? 'var(--c-accent)' : 'var(--c-muted)' }} />
            <input
              ref={inputRef}
              type="search"
              placeholder="Search..."
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className="flex-1 bg-transparent px-2 py-1.5 text-xs outline-none"
              style={{ color: 'var(--c-dark)' }}
            />
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `theme-nav-link text-sm font-medium transition-colors duration-200 ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0 ml-auto">
            <button title="Login"
              className="glass-action-btn flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: 'var(--c-silver)' }}>
              <RiLoginBoxFill className="text-xl" />
              <span className="text-[10px] font-medium">Login</span>
            </button>
            <button title="Sign Up"
              className="glass-action-btn flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: 'var(--c-silver)' }}>
              <BsPersonPlus className="text-xl" />
              <span className="text-[10px] font-medium">Sign Up</span>
            </button>
            <button title="Cart"
              className="glass-action-btn relative flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: 'var(--c-silver)' }}>
              <BsCart className="text-xl" />
              <span className="absolute top-1 right-1.5 text-[9px] font-bold
                               w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: 'var(--c-accent)', color: '#1F2937' }}>
                0
              </span>
              <span className="text-[10px] font-medium">Cart</span>
            </button>
            <button
              type="button"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              onClick={toggleTheme}
              className="glass-action-btn w-10 h-10 flex items-center justify-center"
              style={{
                color: 'var(--c-dark)',
                background: 'var(--c-off-white)',
                border: '1px solid var(--c-border)',
              }}
            >
              {theme === 'light' ? <BsMoonStars className="text-lg" /> : <BsSun className="text-lg" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
