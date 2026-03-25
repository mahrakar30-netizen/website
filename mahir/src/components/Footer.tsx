import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="logo" style={{ fontSize: '21px', fontWeight: 700, color: '#1D1D1F' }}>
            Mahir Akar
          </Link>
          <p className="footer-bio mt-4">
            Tahminlere değil; özellikle Tuzla, Pendik ve Kartal bölgesinin dinamiklerine ve sosyolojik verilere dayanan stratejilerle gayrimenkulünüzü yönetiyoruz. Şeffaf, analitik, profesyonel.
          </p>
          <div className="social-links mt-6">
            <a href="https://tr.linkedin.com/in/mahir-akar-256302224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/mahirremax/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Hızlı Linkler</h4>
          <ul className="footer-links mt-4">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/degerleme">Mülk Değerleme</Link></li>
            <li><Link to="/blog">Piyasa Raporları</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Analiz & Rapor</h4>
          <ul className="footer-links mt-4">
            <li><Link to="/blog">Bölgesel Emlak Endeksi</Link></li>
            <li><Link to="/blog">Yatırım Stratejileri</Link></li>
            <li><Link to="/blog">Demografik Raporlama</Link></li>
            <li><Link to="/blog">Risk Yönetimi</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Bize Ulaşın</h4>
          <ul className="mt-4 contact-list">
            <li>
              <MessageCircle size={16} className="text-secondary" color="#25D366" />
              <a href="https://wa.me/905519817309" target="_blank" rel="noopener noreferrer">WhatsApp Destek Hattı</a>
            </li>
            <li>
              <Phone size={16} className="text-secondary" />
              <a href="tel:+905519817309">+90 (551) 981 73 09</a>
            </li>
            <li>
              <Mail size={16} className="text-secondary" />
              <a href="mailto:mahira@remaxbalance.com">mahira@remaxbalance.com</a>
            </li>
            <li>
              <MapPin size={16} className="text-secondary" />
              <span className="text-muted">Pendik / İstanbul</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom container mt-8">
        <p className="text-muted text-sm">© {new Date().getFullYear()} Mahir Gayrimenkul Analitiği. Tüm hakları saklıdır.</p>
        <div className="footer-legal">
          <Link to="#">KVKK Aydınlatma Metni</Link>
          <Link to="#">Gizlilik Politikası</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
