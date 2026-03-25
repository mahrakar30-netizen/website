import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = bgScrolledState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={toggleMenu}>Piyasa Analizi</Link></li>
            <li><Link to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''} onClick={toggleMenu}>İletişim</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="https://wa.me/905519817309" className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
             <MessageCircle size={16} /> WhatsApp
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menü">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
