import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './Contact.css';

const Contact: React.FC = () => {
  useSEO({
    title: 'İletişim | Mahir Akar',
    description: 'Tuzla, Pendik, Kartal gayrimenkul analizleri, mülk alım-satım talepleriniz ve iletişim bilgilerim.',
    keywords: 'Mahir Akar iletişim, Pendik ofis, Remax Balance'
  });

  return (
    <div className="contact-page">
      <div className="container contact-container">
        
        <div className="contact-info flex-1 split-col glass-panel fade-in-up">
          <h1 className="contact-title text-gradient">İletişime Geçin.</h1>
          <p className="contact-subtitle">Sizi dinlemeye ve mülkünüz için en değerli analizleri paylaşmaya hazırız.</p>
          
          <div className="info-list mt-8">
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Ofis Adresi</h4>
                <p className="text-muted mt-1">Çınardere, Akan Sokağı NO: 9 İÇ KAPI NO:1<br />34896 Pendik/İstanbul</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h4>Telefon</h4>
                <p className="text-muted mt-1">+90 (551) 981 73 09</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4>E-posta</h4>
                <p className="text-muted mt-1">mahira@remaxbalance.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h4>Çalışma Saatleri</h4>
                <p className="text-muted mt-1">Hafta içi: 09:00 - 19:00<br />Cumartesi: 10:00 - 19:00</p>
              </div>
            </div>
          </div>

          <div className="contact-vta mt-12 bg-secondary rounded-xl p-6">
            <h3 className="mb-4">Hemen Çözüm İstiyor musunuz?</h3>
            <p className="text-muted mb-6">Ofis saatlerimizi beklemeden WhatsApp üzerinden anlık danışmanlığa ulaşabilirsiniz.</p>
            <a href="https://wa.me/905519817309" className="btn btn-whatsapp w-full" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} className="mr-2" /> WhatsApp Destek Hattı
            </a>
          </div>
        </div>
        
        <div className="contact-form flex-1 glass-panel fade-in-up stagger-1">
          <h2>Hızlı Mesaj</h2>
          <form className="mt-8">
            <div className="form-group row">
              <div className="col">
                <label>Adınız Soyadınız</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="col">
                <label>Telefon Numaranız</label>
                <input type="tel" className="form-input" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>E-posta Adresiniz</label>
              <input type="email" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label>Konu</label>
              <select className="form-input" required>
                <option value="">Seçiniz</option>
                <option value="satis">Mülk Satışı</option>
                <option value="kiralama">Mülk Kiralama</option>
                <option value="alici">Mülk Arayışı (Alıcı/Kiracı)</option>
                <option value="danismanlik">Yatırım Danışmanlığı</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Mesajınız</label>
              <textarea className="form-input" rows={6} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-4">Gönder <ArrowRight size={18} /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
