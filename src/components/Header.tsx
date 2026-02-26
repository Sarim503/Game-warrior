'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/review', label: 'Games' },
  { href: '/categories', label: 'Blog' },
  { href: '/community', label: 'Forums' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="container">
        <Link href="/" className="site-logo">
          <Image src="/img/logo.png" alt="Game Warrior" width={120} height={40} />
        </Link>
        <div className="user-panel">
          <Link href="#">Login</Link> / <Link href="#">Register</Link>
        </div>
        <button
          className="nav-switch"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .header-section {
          background: var(--bg-secondary);
          padding: 18px 0;
          border-bottom: 1px solid var(--accent);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .site-logo {
          display: flex;
          align-items: center;
        }
        .user-panel {
          font-weight: 500;
          background: var(--accent);
          padding: 8px 28px;
          border-radius: 30px;
          color: var(--bg-primary);
        }
        .user-panel a {
          color: var(--bg-primary);
          font-size: 14px;
        }
        .nav-switch {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
        }
        .main-menu ul {
          list-style: none;
          display: flex;
          gap: 0 35px;
          margin: 0;
          padding: 0;
        }
        .main-menu ul li a {
          font-size: 16px;
          color: white;
          font-weight: 500;
          padding: 10px 5px;
        }
        .main-menu ul li a:hover {
          color: var(--accent);
        }
        @media (max-width: 991px) {
          .nav-switch { display: block; }
          .main-menu {
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .main-menu.open {
            max-height: 300px;
          }
          .main-menu ul {
            flex-direction: column;
            padding: 20px 0;
            gap: 0;
          }
          .main-menu ul li a {
            display: block;
            padding: 12px 0;
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
    </header>
  );
}
