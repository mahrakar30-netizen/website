import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { getAllArticles } from '../lib/articles';
import './Makaleler.css';

const Makaleler: React.FC = () => {
  useSEO({
    title: 'Gayrimenkul Rehberi | Mahir Akar - Pendik Kartal Tuzla Emlak',
    description: 'Pendik, Kartal ve Tuzla bölgelerinde gayrimenkul alım satım rehberleri. Uzman danışman Mahir Akar\'dan profesyonel emlak tavsiyeleri.',
    keywords: 'gayrimenkul rehberi, emlak tavsiyeleri, ev satış taktikleri, Pendik emlak, Kartal gayrimenkul, Tuzla emlak danışmanı',
    canonical: 'https://mahirakarremax.com/makaleler',
    ogTitle: 'Gayrimenkul Rehberi | Mahir Akar - Pendik Kartal Tuzla Emlak',
    ogDescription: 'Pendik, Kartal ve Tuzla bölgelerinde gayrimenkul alım satım rehberleri. Uzman danışman Mahir Akar\'dan profesyonel emlak tavsiyeleri.',
    ogType: 'website'
  });

  const articles = getAllArticles();

  return (
    <div className="makaleler-page">
      <div className="makaleler-hero container fade-in-up">
        <h1 className="text-gradient">Gayrimenkul Rehberi</h1>
        <p className="subtitle">Uzman danışman Mahir Akar'dan profesyonel emlak tavsiyeleri ve güncel rehberler.</p>
      </div>

      <div className="makaleler-container container mt-8">
        <div className="makaleler-grid">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="makale-card glass-panel fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-tag">{article.category}</div>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-excerpt">{article.excerpt}</p>

              <div className="card-footer">
                <div className="card-meta">
                  <span>{new Date(article.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="dot-divider">•</span>
                  <span><BookOpen size={14} className="inline-icon" /> {article.readTime}</span>
                </div>
                <Link to={`/makaleler/${article.slug}`} className="read-more">
                  Makaleyi Oku <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Makaleler;
