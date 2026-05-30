'use client';

import { useState, useEffect, useCallback } from 'react';
import { navLinks } from '@/app/data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToBooking = () => {
    closeMenu();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        <a href="#" className={styles.logo}>
          <span>🐾</span> 爪爪洗护
        </a>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.btnBook} onClick={scrollToBooking}>立即预约</button>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
