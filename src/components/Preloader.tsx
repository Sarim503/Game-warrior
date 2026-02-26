'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const preloader = document.getElementById('preloder');
    const hide = () => {
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 400);
      }
    };
    const timer = setTimeout(hide, 600);
    window.addEventListener('load', hide);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', hide);
    };
  }, [mounted]);

  return (
    <div
      id="preloder"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-primary)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loader" />
    </div>
  );
}
