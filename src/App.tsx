import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Evaluation from './pages/Evaluation';
import Blog from './pages/Blog';
import Makaleler from './pages/Makaleler';
import MakaleDetay from './pages/MakaleDetay';
import Contact from './pages/Contact';
import AdminBlog from './pages/AdminBlog';
import DistrictPage from './pages/DistrictPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function SchemaInjector() {
  const location = useLocation();

  useEffect(() => {
    const existing = document.querySelectorAll('[data-schema="global"]');
    existing.forEach(el => el.remove());

    const path = location.pathname;

    const breadcrumbItems = path.split('/').filter(Boolean);
    const breadcrumbSchemas = [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://mahirakarremax.com/' }
    ];
    let accumulated = '';
    breadcrumbItems.forEach((segment, i) => {
      accumulated += '/' + segment;
      const names: Record<string, string> = {
        'hakkimizda': 'Hakkımızda',
        'degerleme': 'Mülk Değerleme',
        'blog': 'Piyasa Analizi',
        'makaleler': 'Makaleler',
        'iletisim': 'İletişim',
        'tuzla.html': 'Tuzla Emlak',
        'pendik.html': 'Pendik Emlak',
        'kartal.html': 'Kartal Emlak'
      };
      breadcrumbSchemas.push({
        '@type': 'ListItem',
        position: i + 2,
        name: names[segment] || segment,
        item: `https://mahirakarremax.com${accumulated}`
      });
    });

    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Mahir Akar - Remax Balance',
        url: 'https://mahirakarremax.com',
        logo: 'https://mahirakarremax.com/logo.png',
        sameAs: [
          'https://tr.linkedin.com/in/mahir-akar-256302224',
          'https://www.instagram.com/mahirremax/'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-551-981-73-09',
          contactType: 'sales',
          availableLanguage: ['Turkish']
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Cınardere, Akan Sokagi NO:9 IC KAPI NO:1',
          addressLocality: 'Pendik',
          addressRegion: 'İstanbul',
          postalCode: '34896',
          addressCountry: 'TR'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mahir Akar',
        givenName: 'Mahir',
        familyName: 'Akar',
        jobTitle: 'Gayrimenkul Danışmanı',
        affiliation: {
          '@type': 'Organization',
          name: 'Remax Balance'
        },
        url: 'https://mahirakarremax.com',
        telephone: '+90-551-981-73-09',
        email: 'mahira@remaxbalance.com',
        sameAs: [
          'https://tr.linkedin.com/in/mahir-akar-256302224',
          'https://www.instagram.com/mahirremax/'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbSchemas
      }
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'global');
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas });
    document.head.appendChild(script);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <SchemaInjector />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/degerleme" element={<Evaluation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/makaleler" element={<Makaleler />} />
            <Route path="/makaleler/:slug" element={<MakaleDetay />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/admin" element={<AdminBlog />} />
            <Route path="/tuzla.html" element={<DistrictPage district="Tuzla" title="Tuzla Emlak | Mahira Kar Remax" description="Mahira Kar Remax olarak Tuzla'da profesyonel emlak hizmetleri sunuyoruz. Çok yakında hizmetinizdeyiz." keywords="Tuzla emlak, Tuzla gayrimenkul, Mahira Kar Remax, Tuzla satılık daire" canonical="https://mahirakarremax.com/tuzla.html" ogTitle="Tuzla Emlak | Mahira Kar Remax" ogDescription="Tuzla'da profesyonel emlak hizmetleri." />} />
            <Route path="/pendik.html" element={<DistrictPage district="Pendik" title="Pendik Emlak | Mahira Kar Remax" description="Mahira Kar Remax olarak Pendik'te profesyonel emlak hizmetleri sunuyoruz. Çok yakında hizmetinizdeyiz." keywords="Pendik emlak, Pendik gayrimenkul, Mahira Kar Remax, Pendik satılık daire" canonical="https://mahirakarremax.com/pendik.html" ogTitle="Pendik Emlak | Mahira Kar Remax" ogDescription="Pendik'te profesyonel emlak hizmetleri." />} />
            <Route path="/kartal.html" element={<DistrictPage district="Kartal" title="Kartal Emlak | Mahira Kar Remax" description="Mahira Kar Remax olarak Kartal'da profesyonel emlak hizmetleri sunuyoruz. Çok yakında hizmetinizdeyiz." keywords="Kartal emlak, Kartal gayrimenkul, Mahira Kar Remax, Kartal satılık daire" canonical="https://mahirakarremax.com/kartal.html" ogTitle="Kartal Emlak | Mahira Kar Remax" ogDescription="Kartal'da profesyonel emlak hizmetleri." />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
