import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './Blog.css';

const Blog: React.FC = () => {
  useSEO({
    title: 'Piyasa Analizi ve Makaleler | Mahir Akar',
    description: 'Tuzla, Pendik ve Kartal bölgeleri başta olmak üzere, emlak pazar hareketleri ve yatırım stratejileri üzerine güncel makaleler.',
    keywords: 'emlak analizi, Pendik piyasa raporu, Kartal ev fiyatları, Tuzla yatırım'
  });

  const [localPosts, setLocalPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('mahir_blogs');
    if (saved) {
      setLocalPosts(JSON.parse(saved));
    }
  }, []);
  const posts = [
    {
      id: 1,
      tag: "Piyasa Analizi",
      title: "İstanbul Mahalle Dinamikleri ve Emlak Endeksi: Gelecek 5 Yılın Tespiti",
      excerpt: "Bölgesel gentrifikasyon ve demografik geçişlerin konut fiyatlarına kısa ve orta vadedeki etkileri üzerine makro-ekonomik inceleme.",
      date: "12 Kasım 2023",
      readTime: "8 dk"
    },
    {
      id: 2,
      tag: "Yatırım",
      title: "Enflasyonist Ortamlarda Gayrimenkul Stratejisi",
      excerpt: "Sermayeyi koruma ve düzenli pasif gelir yaratma modelleri. Konut yatırımı vs ticari yatırım arasındaki risk-getiri dengeleri.",
      date: "05 Kasım 2023",
      readTime: "6 dk"
    },
    {
      id: 3,
      tag: "Satış Stratejisi",
      title: "Hissiyata Değil Analize Dayalı Fiyatlandırma",
      excerpt: "Evinizi satarken yapılan en kritik 3 optimizasyon hatası ve pazarlama sürecini hızlandıran veri tabanlı fiyat modellemeleri.",
      date: "28 Ekim 2023",
      readTime: "5 dk"
    },
    {
      id: 4,
      tag: "Hukuk & İnsan",
      title: "Kiracılı Mülk Satışlarında Risk Yönetimi",
      excerpt: "Satıcı, alıcı ve kiracı arasındaki hukuki ve davranışsal denge nasıl kurulmalı? Karşılıklı mağduriyeti önleme rehberi.",
      date: "20 Ekim 2023",
      readTime: "10 dk"
    },
    {
      id: 5,
      tag: "Sosyoloji",
      title: "Yeni Nesil Alıcı Profili: Millennial Kuşağı ve Konut",
      excerpt: "Yeni nesil gayrimenkul yatırımcılarının satın alma alışkanlıkları ve beklentileri üzerine demografik bir araştırma.",
      date: "15 Ekim 2023",
      readTime: "7 dk"
    },
    {
      id: 6,
      tag: "Satış Stratejisi",
      title: "Sahibinden Ev Satmanın Riskleri ve Profesyonel Desteğin Sağladığı 5 Avantaj",
      excerpt: "Sahibinden ev satmak düşündüğünüz kadar avantajlı olmayabilir. Bu rehberde, bireysel satışın riskleri ve profesyonel emlak danışmanı ile çalışmanın sağladığı 5 kritik avantajı objektif verilerle inceliyoruz.",
      date: "30 Mayıs 2026",
      readTime: "7 dk"
    },
    {
      id: 7,
      tag: "Piyasa Analizi",
      title: "Tuzla Hala Gayrimenkul Yatırımı İçin Kazançlı mı? 2026 Pazar Analizi",
      excerpt: "Tuzla satılık daire ve arsa piyasası, 2026 yılında da o eski yüksek prim potansiyelini koruyor mu? Amortisman süreleri, metrekare fiyatları ve bölge bazlı fırsatlar.",
      date: "30 Mayıs 2026",
      readTime: "7 dk"
    },
    {
      id: 8,
      tag: "Gayrimenkul Rehberi",
      title: "Gayrimenkul Satışında Değer Artış Kazancı Vergisi Nasıl Hesaplanır?",
      excerpt: "Evini, arsasını veya iş yerini elden çıkaran mülk sahiplerinin karşılaştığı en önemli mali yükümlülüklerden biri olan değer artış kazancı vergisini adım adım inceliyoruz. 2026 güncel istisna tutarları ve hesaplama örneği.",
      date: "13 Haziran 2026",
      readTime: "8 dk"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-hero container fade-in-up">
        <h1 className="text-gradient">Sektörel Otorite Raporları ve Makaleler</h1>
        <p className="subtitle">Analitik bir zihinle gayrimenkul piyasasını okuyun.</p>
      </div>

      <div className="blog-container container mt-8">
        <div className="blog-grid">
          {[...localPosts, ...posts].map((post, index) => (
            <article 
              key={post.id} 
              className="blog-card glass-panel fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-tag">{post.tag}</div>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-excerpt">{post.excerpt}</p>
              
              <div className="card-footer">
                <div className="card-meta">
                  <span>{post.date}</span>
                  <span className="dot-divider">•</span>
                  <span><BookOpen size={14} className="inline-icon" /> {post.readTime}</span>
                </div>
                <a href="#" className="read-more">Makaleyi Oku <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>

        {/* Inline CTA for Strategy */}
        <div className="blog-cta glass-panel mt-12 fade-in-up">
          <div className="cta-text">
            <h2>Size Özel Bir Pazar Stratejisi Mi Lazım?</h2>
            <p className="text-muted">Bu analizlerin ışığında kendi mülkünüzün pazar durumunu öğrenmek istiyorsanız size özel rapor hazırlayabiliriz.</p>
          </div>
          <a href="/degerleme" className="btn btn-primary">Bana Özel Pazar Raporu İste</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
