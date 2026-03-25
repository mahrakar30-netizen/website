import React, { useState, useEffect } from 'react';
import './AdminBlog.css';

const AdminBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if(!title || !excerpt) return;

    const newPost = {
      id: Date.now(),
      title,
      tag: tag || 'Genel',
      excerpt,
      content,
      date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '5 dk'
    };

    const existingPosts = JSON.parse(localStorage.getItem('mahir_blogs') || '[]');
    localStorage.setItem('mahir_blogs', JSON.stringify([newPost, ...existingPosts]));

    setMessage('Blog yazınız başarıyla yayınlandı!');
    setTitle('');
    setTag('');
    setExcerpt('');
    setContent('');
    
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header fade-in-up">
          <h1 className="text-gradient">Blog Yönetimi</h1>
          <p className="subtitle">Yeni bir makale veya piyasa analizi yayınlayın.</p>
        </div>

        <div className="admin-form-container glass-panel fade-in-up stagger-1">
          {message && <div className="admin-alert success">{message}</div>}
          
          <form onSubmit={handlePublish}>
            <div className="form-group row">
              <div className="col" style={{flex: 3}}>
                <label>Başlık</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  placeholder="Makale başlığını girin"
                />
              </div>
              <div className="col" style={{flex: 1}}>
                <label>Kategori (Etiket)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={tag} 
                  onChange={(e) => setTag(e.target.value)} 
                  placeholder="Örn: Yatırım"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Kısa Özet (Liste Görünümü İçin)</label>
              <textarea 
                className="form-input" 
                rows={3} 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                required
                placeholder="Blog listesinde görünecek 1-2 cümlelik özet"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Makale İçeriği (Tam Metin)</label>
              <textarea 
                className="form-input" 
                rows={12} 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                required
                placeholder="Makalenizin tamamını buraya yazın..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Makaleyi Yayınla</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
