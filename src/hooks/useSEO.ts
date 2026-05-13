import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  hreflang?: string;
}

export const useSEO = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, ogType, hreflang }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const cleanup = () => {
      document.querySelectorAll('[data-seo="true"]').forEach(el => el.remove());
    };
    cleanup();

    const upsertMeta = (name: string, attr: string, value: string) => {
      const selector = attr === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute('content', value);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        el.setAttribute('content', value);
        document.head.appendChild(el);
      }
    };

    const upsertLink = (rel: string, href: string, extra?: { attr: string; val: string }) => {
      let el = document.querySelector(`link[rel="${rel}"]${extra ? `[${extra.attr}="${extra.val}"]` : ''}`) as HTMLLinkElement | null;
      if (el) {
        el.setAttribute('href', href);
      } else {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('href', href);
        if (extra) el.setAttribute(extra.attr, extra.val);
        document.head.appendChild(el);
      }
    };

    upsertMeta('description', 'name', description);

    if (keywords) {
      upsertMeta('keywords', 'name', keywords);
    }

    upsertMeta('robots', 'name', 'index, follow');

    if (canonical) {
      upsertLink('canonical', canonical);
    }

    const ogT = ogTitle || title;
    const ogD = ogDescription || description;

    upsertMeta('og:title', 'property', ogT);
    upsertMeta('og:description', 'property', ogD);
    upsertMeta('og:type', 'property', ogType || 'website');

    if (ogUrl) {
      upsertMeta('og:url', 'property', ogUrl);
    }

    if (hreflang) {
      upsertLink('alternate', hreflang, { attr: 'hreflang', val: 'tr' });
    }

    return cleanup;

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, ogType, hreflang]);
};
