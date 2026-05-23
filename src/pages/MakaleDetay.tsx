import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { getArticleBySlug, generateHeadingId } from '../lib/articles';
import type { ContentBlock } from '../lib/articles';
import './MakaleDetay.css';

const ArticleRenderer: React.FC<{ blocks: ContentBlock[] }> = ({ blocks }) => {
  return (
    <div className="article-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const headingId = generateHeadingId(block.text);
            return (
              <h2 key={i} id={headingId} className="article-heading">
                {block.text}
              </h2>
            );
          }
          case 'paragraph':
            return <p key={i} className="article-paragraph">{block.text}</p>;
          case 'bulletList':
            return (
              <ul key={i} className="article-bullet-list">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <strong>{item.bold}</strong>{item.text}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

const MakaleDetay: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSEO({
    title: article ? `${article.title} | Mahir Akar` : 'Makale Bulunamadı | Mahir Akar',
    description: article?.excerpt || '',
    keywords: article?.keywords,
    canonical: article ? `https://mahirakarremax.com/makaleler/${article.slug}` : undefined,
    ogTitle: article?.title,
    ogDescription: article?.excerpt,
    ogType: 'article'
  });

  useEffect(() => {
    if (!article) return;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      author: {
        '@type': 'Person',
        name: article.author
      },
      datePublished: article.date,
      publisher: {
        '@type': 'Person',
        name: article.author
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/makaleler" replace />;
  }

  const formattedDate = new Date(article.date).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="makale-detay-page">
      <div className="container">
        <div className="makale-detay-back fade-in-up">
          <Link to="/makaleler" className="back-link">
            <ArrowLeft size={18} /> Tüm Makaleler
          </Link>
        </div>

        <article className="makale-detay-content fade-in-up">
          <header className="makale-detay-header">
            <div className="makale-detay-category">{article.category}</div>
            <h1 className="makale-detay-title">{article.title}</h1>
            <div className="makale-detay-meta">
              <span className="meta-item">
                <User size={15} /> {article.author}
              </span>
              <span className="meta-divider">•</span>
              <span className="meta-item">
                <Calendar size={15} /> {formattedDate}
              </span>
              <span className="meta-divider">•</span>
              <span className="meta-item">
                <Clock size={15} /> {article.readTime} okuma
              </span>
            </div>
          </header>

          <ArticleRenderer blocks={article.content} />
        </article>
      </div>
    </div>
  );
};

export default MakaleDetay;
