import React from 'react';
import { useSEO } from '../hooks/useSEO';

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
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 60px',
    }}>
      <h1 style={{
        fontSize: 'clamp(32px, 6vw, 64px)',
        fontWeight: 700,
        color: '#1D1D1F',
        letterSpacing: '-0.03em',
        marginBottom: '20px',
      }}>
        {district} Emlak Hizmetleri
      </h1>
      <div style={{
        fontSize: 'clamp(48px, 10vw, 96px)',
        fontWeight: 700,
        color: '#0071E3',
        letterSpacing: '-0.03em',
        marginBottom: '24px',
      }}>
        Çok Yakında
      </div>
      <p style={{
        fontSize: '17px',
        color: '#6E6E73',
        maxWidth: '480px',
        lineHeight: 1.5,
      }}>
        Mahira Kar Remax olarak {district}'da profesyonel emlak hizmetlerimizle yakında hizmetinizdeyiz.
      </p>
    </div>
  );
};

export default DistrictPage;
