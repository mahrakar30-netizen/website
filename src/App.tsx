import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Evaluation from './pages/Evaluation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminBlog from './pages/AdminBlog';
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
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
