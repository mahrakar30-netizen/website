import React from 'react';
import { ArrowRight, BookOpen, User } from 'lucide-react';
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
      id: 6,
      tag: "Satış Stratejisi",
      title: "Sahibinden Ev Satmanın Riskleri ve Profesyonel Desteğin Sağladığı 5 Avantaj",
      excerpt: "Sahibinden ev satmak düşündüğünüz kadar avantajlı olmayabilir. Bu rehberde, bireysel satışın riskleri ve profesyonel emlak danışmanı ile çalışmanın sağladığı 5 kritik avantajı objektif verilerle inceliyoruz.",
      date: "30 Mayıs 2026",
      readTime: "7 dk",
      slug: "sahibinden-ev-satmanin-riskleri-ve-profesyonel-destegin-sagladigi-5-avantaj",
      author: "Mahir Akar"
    },
    {
      id: 7,
      tag: "Piyasa Analizi",
      title: "Tuzla Hala Gayrimenkul Yatırımı İçin Kazançlı mı? 2026 Pazar Analizi",
      excerpt: "Tuzla satılık daire ve arsa piyasası, 2026 yılında da o eski yüksek prim potansiyelini koruyor mu? Amortisman süreleri, metrekare fiyatları ve bölge bazlı fırsatlar.",
      date: "30 Mayıs 2026",
      readTime: "7 dk",
      slug: "tuzla-hala-gayrimenkul-yatirimi-icin-kazancli-mi-2026-yili-pazar-analizi",
      author: "Mahir Akar"
    },
    {
      id: 8,
      tag: "Gayrimenkul Rehberi",
      title: "Gayrimenkul Satışında Değer Artış Kazancı Vergisi Nasıl Hesaplanır?",
      excerpt: "Evini, arsasını veya iş yerini elden çıkaran mülk sahiplerinin karşılaştığı en önemli mali yükümlülüklerden biri olan değer artış kazancı vergisini adım adım inceliyoruz. 2026 güncel istisna tutarları ve hesaplama örneği.",
      date: "13 Haziran 2026",
      readTime: "8 dk",
      slug: "gayrimenkul-satisinda-deger-artis-kazanci-vergisi-nasil-hesaplanir",
      author: "Mahir Akar"
    },
    {
      id: 9,
      tag: "Piyasa Analizi",
      title: "Pendik Gayrimenkul Yatırımı İçin Hala Kazançlı mı? 2026 Yılı Pazar Analizi",
      excerpt: "Pendik satılık daire ve arsa piyasası, 2026 yılında yatırımcısına hala yüksek getiri vaat ediyor mu? Metrekare fiyatları, amortisman süreleri ve bölge bazlı yatırım fırsatları.",
      date: "13 Haziran 2026",
      readTime: "9 dk",
      slug: "pendik-gayrimenkul-yatirimi-icin-hala-kazancli-mi-2026-yili-pazar-analizi",
      author: "Mahir Akar"
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
                  {post.author && <><span><User size={14} className="inline-icon" /> {post.author}</span><span className="dot-divider">•</span></>}
                  <span>{post.date}</span>
                  <span className="dot-divider">•</span>
                  <span><BookOpen size={14} className="inline-icon" /> {post.readTime}</span>
                </div>
                {post.slug ? (
                  <a href={`/makaleler/${post.slug}`} className="read-more">Makaleyi Oku <ArrowRight size={16} /></a>
                ) : (
                  <span className="read-more disabled">Makaleyi Oku <ArrowRight size={16} /></span>
                )}
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
