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

const districtData: Record<string, {
  heroSubtitle: string;
  stats: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  articleSlug: string;
}> = {
  Tuzla: {
    heroSubtitle: 'Mahir Akar Remax ile Tuzla gayrimenkul piyasasında profesyonel çözümler',
    stats: [
      { value: '35.000 - 45.000 ₺', label: 'Ortalama m² Satış Fiyatı', icon: <TrendingUp size={28} /> },
      { value: '14 - 16 Yıl', label: 'Konut Amortisman Süresi', icon: <TrendingUp size={28} /> },
      { value: '3 Güçlü Aks', label: 'Sanayi, Üniversite, Ulaşım', icon: <MapPin size={28} /> }
    ],
    features: [
      { title: 'Sanayi & Beyaz Yaka', description: 'OSB, serbest bölgeler ve tersaneler hattı, sürekli nitelikli konut talebi oluşturuyor.', icon: <Building2 size={24} /> },
      { title: 'Üniversite Aksı', description: '4 üniversitenin bölgedeki varlığı, Aydınlı-İçmeler hattında kalıcı kiralık talep yaratıyor.', icon: <GraduationCap size={24} /> },
      { title: 'Ulaşım Ağı', description: 'Marmaray, metro entegrasyonu ve Sabiha Gökçen Havalimanı yakınlığı ile merkeze tam bağlantı.', icon: <Train size={24} /> }
    ],
    ctaTitle: '2026 Tuzla Pazar Analizi',
    ctaDescription: 'Metrekare fiyatları, amortisman süreleri ve bölge bazlı yatırım fırsatlarının tam analizi için makalemizi okuyun.',
    articleSlug: 'tuzla-hala-gayrimenkul-yatirimi-icin-kazancli-mi-2026-yili-pazar-analizi'
  },
  Pendik: {
    heroSubtitle: 'Mahir Akar Remax ile Pendik gayrimenkul piyasasında profesyonel çözümler',
    stats: [
      { value: '38.000 - 55.000 ₺', label: 'Ortalama m² Satış Fiyatı', icon: <TrendingUp size={28} /> },
      { value: '15 - 17 Yıl', label: 'Konut Amortisman Süresi', icon: <TrendingUp size={28} /> },
      { value: '4 Güçlü Aks', label: 'Ulaşım, Teknoloji, Lojistik, Kentsel Dönüşüm', icon: <MapPin size={28} /> }
    ],
    features: [
      { title: 'Multimodal Ulaşım', description: 'Havalimanı, YHT, metro ve otoyol bağlantıları Pendik’i İstanbul’un en erişilebilir emlak merkezlerinden biri yapıyor.', icon: <Train size={24} /> },
      { title: 'Teknopark & Beyaz Yaka', description: 'Teknopark İstanbul ve çevresi, nitelikli iş gücünü kalıcı olarak bölgeye çekiyor.', icon: <Building2 size={24} /> },
      { title: 'Kentsel Dönüşüm', description: 'Yeni projeler ve dönüşüm alanları, Pendik’in likiditesini ve yatırım cazibesini güçlü tutuyor.', icon: <MapPin size={24} /> }
    ],
    ctaTitle: '2026 Pendik Pazar Analizi',
    ctaDescription: 'Pendik’in metrekare fiyatları, amortisman süreleri ve yatırım potansiyelini tamamıyla analiz eden makalemizi okuyun.',
    articleSlug: 'pendik-gayrimenkul-yatirimi-icin-hala-kazancli-mi-2026-yili-pazar-analizi'
  },
  Kartal: {
    heroSubtitle: 'Mahir Akar Remax ile Kartal gayrimenkul piyasasında profesyonel çözümler',
    stats: [
      { value: '35.000 - 45.000 ₺', label: 'Ortalama m² Satış Fiyatı', icon: <TrendingUp size={28} /> },
      { value: '14 - 16 Yıl', label: 'Konut Amortisman Süresi', icon: <TrendingUp size={28} /> },
      { value: '3 Güçlü Aks', label: 'Ulaşım, Eğitim, Konut', icon: <MapPin size={28} /> }
    ],
    features: [
      { title: 'Sanayi & Beyaz Yaka', description: 'OSB, serbest bölgeler ve tersaneler hattı, sürekli nitelikli konut talebi oluşturuyor.', icon: <Building2 size={24} /> },
      { title: 'Üniversite Aksı', description: '4 üniversitenin bölgedeki varlığı, Aydınlı-İçmeler hattında kalıcı kiralık talep yaratıyor.', icon: <GraduationCap size={24} /> },
      { title: 'Ulaşım Ağı', description: 'Marmaray, metro entegrasyonu ve Sabiha Gökçen Havalimanı yakınlığı ile merkeze tam bağlantı.', icon: <Train size={24} /> }
    ],
    ctaTitle: '2026 Kartal Pazar Analizi',
    ctaDescription: 'Kartal’ın emlak potansiyelini analiz eden güncel piyasa raporunu okuyun.',
    articleSlug: ''
  }
};

const DistrictPage: React.FC<DistrictPageProps> = ({ district, title, description, keywords, canonical, ogTitle, ogDescription }) => {
  const config = districtData[district] || districtData.Tuzla;

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
          <p className="dp-hero-subtitle">{config.heroSubtitle}</p>
        </div>
      </section>

      <section className="dp-section container">
        <div className="dp-stats-grid">
          {config.stats.map((stat, index) => (
            <div key={index} className="dp-stat-card glass-panel">
              <div className="dp-stat-icon">{stat.icon}</div>
              <div className="dp-stat-value">{stat.value}</div>
              <div className="dp-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="dp-section container">
        <h2 className="dp-section-title">{district}'da Yatırımı Güçlü Kılan Faktörler</h2>
        <div className="dp-features-grid">
          {config.features.map((feature, index) => (
            <div key={index} className="dp-feature-card glass-panel">
              <div className="dp-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dp-section container">
        <div className="dp-cta-card glass-panel">
          <h2>{config.ctaTitle}</h2>
          <p>{config.ctaDescription}</p>
          {config.articleSlug ? (
            <Link to={`/makaleler/${config.articleSlug}`} className="btn btn-primary">
              Tam Pazar Analizini Oku <ArrowRight size={18} />
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default DistrictPage;
