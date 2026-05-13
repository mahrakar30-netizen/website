import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Evaluation from './pages/Evaluation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminBlog from './pages/AdminBlog';
import DistrictPage from './pages/DistrictPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/degerleme" element={<Evaluation />} />
            <Route path="/blog" element={<Blog />} />
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
