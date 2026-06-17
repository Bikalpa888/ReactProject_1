import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsCart, BsPersonPlus, BsSearch } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'

const navLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
]

const Header = () => {
  return (
    <header className="liquid-glass glass-header sticky top-0 z-50">
      <div className="glass-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">

          {/* Logo */}
          <Link to="/" className="shrink-0 select-none">
            <span className="text-xl font-extrabold tracking-widest"
              style={{ color: '#1F2937' }}>
              LETS<span style={{ color: '#D4AF37' }}>RACE</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 shrink-0">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-[#6B7280] hover:text-[#1F2937]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className="glass-input flex items-center overflow-hidden">
              <BsSearch className="ml-4 shrink-0" style={{ color: 'rgba(107,114,128,0.55)' }} />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                style={{ color: '#1F2937' }}
              />
              <button className="glass-btn px-5 py-[0.45rem] text-sm rounded-full mr-1">
                Search
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0">
            <button title="Login"
              className="glass-action-btn flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: '#6B7280' }}>
              <RiLoginBoxFill className="text-xl" />
              <span className="text-[10px] font-medium">Login</span>
            </button>
            <button title="Sign Up"
              className="glass-action-btn flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: '#6B7280' }}>
              <BsPersonPlus className="text-xl" />
              <span className="text-[10px] font-medium">Sign Up</span>
            </button>
            <button title="Cart"
              className="glass-action-btn relative flex flex-col items-center gap-0.5 px-3 py-2"
              style={{ color: '#6B7280' }}>
              <BsCart className="text-xl" />
              <span className="absolute top-1 right-1.5 text-[#1F2937] text-[9px] font-bold
                               w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: '#D4AF37' }}>
                0
              </span>
              <span className="text-[10px] font-medium">Cart</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
