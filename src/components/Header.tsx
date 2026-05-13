import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled] = bgScrolledState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const isDistrictActive = location.pathname === '/tuzla.html' || location.pathname === '/pendik.html' || location.pathname === '/kartal.html';

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          Mahir Akar
        </Link>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleMenu}>Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''} onClick={toggleMenu}>Hakkımızda</Link></li>
            <li className={`nav-item-dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}>
              <span
                className={`nav-dropdown-trigger ${isDistrictActive ? 'active' : ''}`}
                onClick={toggleDropdown}
                onMouseEnter={() => {}}
              >
                Hizmet Verdiğimiz Bölgeler
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? 'dropdown-show' : ''}`}>
                <li><Link to="/tuzla.html" className={location.pathname === '/tuzla.html' ? 'active' : ''} onClick={() => { closeDropdown(); toggleMenu(); }}>Tuzla</Link></li>
                <li><Link to="/pendik.html" className={location.pathname === '/pendik.html' ? 'active' : ''} onClick={() => { closeDropdown(); toggleMenu(); }}>Pendik</Link></li>
                <li><Link to="/kartal.html" className={location.pathname === '/kartal.html' ? 'active' : ''} onClick={() => { closeDropdown(); toggleMenu(); }}>Kartal</Link></li>
              </ul>
            </li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={toggleMenu}>Piyasa Analizi</Link></li>
            <li><Link to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''} onClick={toggleMenu}>İletişim</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="https://wa.me/905519817309" className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
             <MessageCircle size={16} /> WhatsApp
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menü">
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

function bgScrolledState() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return [scrolled, setScrolled] as const;
}

export default Header;
