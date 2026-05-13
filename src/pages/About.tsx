import React from 'react';
import { Target, FileSearch, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './About.css';

const About: React.FC = () => {
  useSEO({
    title: 'Hakkımda | Mahir Akar Gayrimenkul',
    description: 'Mahir Akar, Tuzla, Pendik ve Kartal bölgelerinde sosyoloji ve analiz destekli gayrimenkul danışmanlığı sağlar.',
    keywords: 'Mahir Akar kimdir, emlak uzmanı Pendik, sosyoloji ve emlak, Kartal gayrimenkul danışmanı'
  });

  return (
    <div className="about-page">
      <div className="about-header container fade-in-up">
        <h1 className="text-gradient">Gayrimenkule Analitik ve Sosyolojik Bir Yaklaşım</h1>
        <p className="subtitle">Mülk yönetimi yalnızca bir alışveriş değil; demografik hareketlerin, ekonomik trendlerin ve insan davranışlarının doğru okunması sürecidir.</p>
      </div>

      <div className="about-content container mt-8">
        <div className="about-grid">
          <div className="about-text glass-panel fade-in-up stagger-1">
            <h2>Mahir Akar Kimdir?</h2>
            <p className="mt-4">
              Sosyoloji temelli akademik formasyonumu ve sektördeki tecrübemi birleştirerek, gayrimenkul süreçlerine yapısal bir perspektif getiriyorum. Özellikle Anadolu Yakası'nın hızla değer kazanan bölgeleri olan <strong>Tuzla, Pendik ve Kartal</strong> ekseninde uzmanlaşarak, lokal pazar bilgimi sosyo-kültürel analizlerle harmanlıyorum. Her bölgenin kendi dinamiği ve her mülkün doğru bir hedef kitlesi vardır.
            </p>
            <p className="mt-4">
              Amacım, mülkünüzü piyasaya sunarken kişisel hislere veya piyasa söylentilerine değil; somut verilere, bölgesel değişim öngörülerine ve hedef kitle analizine dayalı stratejiler üretmektir.
            </p>
            <p className="mt-4">
              Sürecin başından sonuna kadar şeffaf, raporlanabilir ve sonuç odaklı bir yürütme taahhüt ediyorum. Çünkü doğru fiyatlandırma ve doğru pazarlama stratejisi, mülkünüzün gerçek değerini korumanın tek yoludur.
            </p>
          </div>

          <div className="about-highlights fade-in-up stagger-2">
            <div className="highlight-item glass-panel">
              <Target size={32} className="text-accent mb-4" />
              <h3>Doğru Hedef Kitle</h3 >
              <p className="mt-2 text-muted">Mülkün demografik alıcısını doğru tayin ederek, zaman kısıtlarını minimize ederiz.</p>
            </div>
            <div className="highlight-item glass-panel mt-4">
              <FileSearch size={32} className="text-accent mb-4" />
              <h3>Veri Odaklı Değerleme</h3>
              <p className="mt-2 text-muted">Aylık bölge raporları ve gerçekleşen satışların ortalamasını alarak fiyat analizi yaparız.</p>
            </div>
            <div className="highlight-item glass-panel mt-4">
              <ShieldCheck size={32} className="text-accent mb-4" />
              <h3>%100 Şeffaflık</h3>
              <p className="mt-2 text-muted">Tüm pazarlama sürecini haftalık istatistiklerle raporlar ve karar mekanizmasını açık tutarız.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
