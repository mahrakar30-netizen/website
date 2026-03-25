import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const useSEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = title;
    
    // Description tag'ini bul veya oluştur
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Keywords tag'ini bul veya oluştur
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }
    
    // Open Graph Title (Sosyal medya önizlemeleri için)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
  }, [title, description, keywords]);
};
