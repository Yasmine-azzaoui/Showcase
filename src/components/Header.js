import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about',    label: 'About'    },
    { href: '#projects', label: 'Projects' },
    { href: '#skills',   label: 'Skills'   },
    { href: '#contact',  label: 'Contact'  },
  ];

  return (
    <header
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header-inner container">
        {/* Skip-to-content for keyboard / screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <p className="site-title">
          <a href="#about" aria-label="Yasmine Azzaoui – go to top">
            Yasmine Azzaoui
          </a>
        </p>

        {/* Hamburger toggle – visible on mobile only */}
        <button
          className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="nav-item">
                <a
                  href={href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
