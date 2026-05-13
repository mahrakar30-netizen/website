import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, ShieldCheck, Home as HomeIcon, MessageCircle, Camera, Megaphone } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './Home.css';

const Home: React.FC = () => {
  useSEO({
    title: 'Mahir Akar | Pendik, Kartal, Tuzla Uzman Gayrimenkul Danışmanı',
    description: 'Anadolu Yakasının merkezi ilçeleri Kartal, Pendik ve Tuzla bölgelerinde uzman emlak değerleme ve pazarlama danışmanı Mahir Akar.',
    keywords: 'Pendik emlak, Kartal satılık daire, Tuzla gayrimenkul danışmanı, Mahir Akar, emlak değeri, konut pazarlama'
  });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Mülkünüzün gerçek değerini <br />verilerle keşfedin.
            </h1>
            <p className="hero-subtitle">
              Özellikle <strong style={{color:"#1D1D1F", fontWeight: 600}}>Tuzla, Pendik ve Kartal</strong> bölgelerinde tahminlere ve varsayımlara değil; rakamların gücüne, sosyolojik değerlemeye ve analitik pazarlama stratejilerine dayanarak hizmet veriyoruz.
            </p>
            <div className="hero-actions">
              <Link to="/degerleme" className="btn btn-primary">
                Pazar Analizi Alın
                <ChevronRight size={18} />
              </Link>
              <a href="https://wa.me/905519817309" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} style={{ marginRight: '6px' }} /> WhatsApp Danışma Hattı
              </a>
            </div>
            
            <div className="hero-links mt-4">
              <Link to="/hakkimizda" className="text-accent text-sm font-medium">Mahir'in Analitik Yaklaşımını İnceleyin <ChevronRight size={14} style={{display:'inline', verticalAlign:'middle'}} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCard value="%98" label="Satış Fiyatı İsabeti" desc="Gerçekleşen satış rakamının, tespit ettiğimiz ilk fiyata oranı." delay="0.1" />
            <StatCard value="45" label="Ortalama Gün" desc="Doğru fiyatlama stratejisiyle mülkün satılma ya da kiralama süresi." delay="0.2" />
            <StatCard value="Şeffaf" label="Süreç Yönetimi" desc="Haftalık düzenli dijital raporlamalar ile %100 süreç takibi." delay="0.3" />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Sadece aracı değil.<br/>Tam donanımlı yatırım danışmanı.</h2>
            <p className="section-subtitle">Piyasa öngörülemeyen dalgalanmalar yaşarken, veriler ve sosyoloji mülkünüzün değerini korur.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card fade-in-up stagger-1">
              <div className="feature-icon"><BarChart2 size={28} /></div>
              <h3>Algoritmik Piyasa Analizi</h3>
              <p>Kartal, Pendik ve Tuzla'nın mahalle bazlı fiyat dinamiklerini, son 5 yılın pazar hareketleri ve arz-talep eğilimleriyle analiz ederek kusursuz ekspertiz oluşturuyoruz.</p>
            </div>
            
            <div className="feature-card fade-in-up stagger-2">
              <div className="feature-icon"><ShieldCheck size={28} /></div>
              <h3>Sosyolojik Eşleştirme Sistemi</h3>
              <p>Mülk alıcı davranışlarını okumak salt iletişim değil, sosyal bir tespittir. Hedef demografik kitleye uygun pazarlama konsepti geliştiriyoruz.</p>
            </div>
            
            <div className="feature-card fade-in-up stagger-3">
              <div className="feature-icon"><HomeIcon size={28} /></div>
              <h3>Değer Koruma & Risk Yönetimi</h3>
              <p>Ekonomik enflasyonist dönemlerde mülkünüzü değer kaybetmeden satmanın veya en risksiz ve düzgün profilli kiracıyı bulmanın hukuki altyapısı.</p>
            </div>
            
            <div className="feature-card fade-in-up stagger-4">
              <div className="feature-icon"><Camera size={28} /></div>
              <h3>Profesyonel Fotoğraf Çekimi</h3>
              <p>Mülkünüzün alıcı tarafındaki ilk izlenimi her şeydir. Satış hızını artıran, kaliteli iç ve dış mekan profesyonel çekim hizmeti sunuyoruz.</p>
            </div>
            
            <div className="feature-card fade-in-up stagger-4" style={{ animationDelay: '0.25s'}}>
              <div className="feature-icon"><Megaphone size={28} /></div>
              <h3>Sosyal Medya Reklamları İle Hedef Kitle</h3>
              <p>Klasik portal ilanlarına ek olarak; meta algoritmalarını kullanarak mülkünüzün en doğrudan alıcılarına yönelik dijital ve sosyal medya reklam kampanyaları çıkıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (VTA) */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass-panel">
            <div className="cta-content">
              <h2>Evinizin bugünkü gerçek pazar değerini öğrenin.</h2>
              <p>Talebinizi ilettiğinizde, evinizin bulunduğu mahallenin verileriyle, emsal piyasa kıyaslamaları derlenip size bilimsel bir rapor sunulacaktır.</p>
              
              <div className="cta-buttons mt-6">
                <Link to="/degerleme" className="btn btn-primary">Değerleme Raporu İsteyin</Link>
                <a href="https://wa.me/905519817309" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} style={{marginRight: '6px'}}/> Hızlıca WhatsApp'tan Yazın
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ value, label, desc, delay }: { value: string, label: string, desc: string, delay: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`stat-card ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: `${delay}s` }}>
      <h3 className="stat-value">{value}</h3>
      <h4 className="stat-label">{label}</h4>
      <p className="stat-desc">{desc}</p>
    </div>
  );
};

export default Home;
