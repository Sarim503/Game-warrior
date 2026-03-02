'use client';

import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/review', label: 'Games' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <ul className="footer-menu">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <p className="copyright">
  Copyright &copy; {new Date().getFullYear()} All rights reserved {' '}

   Developed by Rukh3d@
</p>
      </div>
      <style jsx>{`
        .footer-section {
          background: var(--bg-secondary);
          padding: 40px 0;
          border-top: 1px solid var(--border);
        }
        .footer-menu {
          list-style: none;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px 40px;
          margin: 0 0 20px 0;
          padding: 0;
        }
        .footer-menu a {
          color: var(--text-secondary);
        }
        .footer-menu a:hover {
          color: var(--accent);
        }
        .copyright {
          text-align: center;
          font-size: 14px;
          color: var(--text-muted);
          margin: 0;
        }
        .copyright a {
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
}