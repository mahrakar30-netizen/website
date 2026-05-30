import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, GraduationCap, Train, MapPin } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './DistrictPage.css';

interface DistrictPageProps {
  district: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const DistrictPage: React.FC<DistrictPageProps> = ({ district, title, description, keywords, canonical, ogTitle, ogDescription }) => {
  useSEO({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl: canonical,
    ogType: 'website',
    hreflang: canonical,
  });

  return (
    <div className="district-page">
      <section className="dp-hero">
        <div className="container">
          <h1 className="dp-hero-title">{district} Emlak Hizmetleri</h1>
          <p className="dp-hero-subtitle">Mahir Akar Remax ile {district} gayrimenkul piyasasında profesyonel çözümler</p>
        </div>
      </section>

      <section className="dp-section container">
        <div className="dp-stats-grid">
          <div className="dp-stat-card glass-panel">
            <div className="dp-stat-icon"><TrendingUp size={28} /></div>
            <div className="dp-stat-value">35.000 - 45.000 ₺</div>
            <div className="dp-stat-label">Ortalama m² Satış Fiyatı</div>
          </div>
          <div className="dp-stat-card glass-panel">
            <div className="dp-stat-icon"><TrendingUp size={28} /></div>
            <div className="dp-stat-value">14 - 16 Yıl</div>
            <div className="dp-stat-label">Konut Amortisman Süresi</div>
          </div>
          <div className="dp-stat-card glass-panel">
            <div className="dp-stat-icon"><MapPin size={28} /></div>
            <div className="dp-stat-value">3 Güçlü Aks</div>
            <div className="dp-stat-label">Sanayi, Üniversite, Ulaşım</div>
          </div>
        </div>
      </section>

      <section className="dp-section container">
        <h2 className="dp-section-title">{district}'da Yatırımı Güçlü Kılan Faktörler</h2>
        <div className="dp-features-grid">
          <div className="dp-feature-card glass-panel">
            <div className="dp-feature-icon"><Building2 size={24} /></div>
            <h3>Sanayi & Beyaz Yaka</h3>
            <p>OSB, serbest bölgeler ve tersaneler hattı, sürekli nitelikli konut talebi oluşturuyor.</p>
          </div>
          <div className="dp-feature-card glass-panel">
            <div className="dp-feature-icon"><GraduationCap size={24} /></div>
            <h3>Üniversite Aksı</h3>
            <p>4 üniversitenin bölgedeki varlığı, Aydınlı-İçmeler hattında kalıcı kiralık talep yaratıyor.</p>
          </div>
          <div className="dp-feature-card glass-panel">
            <div className="dp-feature-icon"><Train size={24} /></div>
            <h3>Ulaşım Ağı</h3>
            <p>Marmaray, metro entegrasyonu ve Sabiha Gökçen Havalimanı yakınlığı ile merkeze tam bağlantı.</p>
          </div>
        </div>
      </section>

      <section className="dp-section container">
        <div className="dp-cta-card glass-panel">
          <h2>2026 Tuzla Pazar Analizi</h2>
          <p>Metrekare fiyatları, amortisman süreleri ve bölge bazlı yatırım fırsatlarının tam analizi için makalemizi okuyun.</p>
          <Link to="/makaleler/tuzla-hala-gayrimenkul-yatirimi-icin-kazancli-mi-2026-yili-pazar-analizi" className="btn btn-primary">
            Tam Pazar Analizini Oku <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DistrictPage;
