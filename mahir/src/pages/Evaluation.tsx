import React, { useState } from 'react';
import './Evaluation.css';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const Evaluation: React.FC = () => {
  useSEO({
    title: 'Evinizin Değerini Öğrenin | Mahir Akar',
    description: 'Bilgisayar verileri, demografik raporlar ve emsal satışlar eşliğinde Kartal, Pendik veya Tuzla\'daki mülkünüzün bedelini uzman analizi ile keşfedin.',
    keywords: 'ücretsiz ekspertiz, mülk değerleme, Pendik ev fiyatları, Kartal konut analizi, Tuzla arsa eksperi'
  });

  const [step, setStep] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');

  const locations: Record<string, string[]> = {
    istanbul: ['Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'],
    ankara: ['Akyurt', 'Altındağ', 'Ayaş', 'Bala', 'Beypazarı', 'Çamlıdere', 'Çankaya', 'Çubuk', 'Elmadağ', 'Etimesgut', 'Evren', 'Gölbaşı', 'Güdül', 'Haymana', 'Kahramankazan', 'Kalecik', 'Keçiören', 'Kızılcahamam', 'Mamak', 'Nallıhan', 'Polatlı', 'Pursaklar', 'Sincan', 'Şereflikoçhisar', 'Yenimahalle'],
    izmir: ['Aliağa', 'Balçova', 'Bayındır', 'Bayraklı', 'Bergama', 'Beydağ', 'Bornova', 'Buca', 'Çeşme', 'Çiğli', 'Dikili', 'Foça', 'Gaziemir', 'Güzelbahçe', 'Karabağlar', 'Karaburun', 'Karşıyaka', 'Kemalpaşa', 'Kınık', 'Kiraz', 'Konak', 'Menderes', 'Menemen', 'Narlıdere', 'Ödemiş', 'Seferihisar', 'Selçuk', 'Tire', 'Torbalı', 'Urla'],
    yalova: ['Altınova', 'Armutlu', 'Çınarcık', 'Çiftlikköy', 'Termal', 'Yalova Merkez'],
    sakarya: ['Adapazarı', 'Akyazı', 'Arifiye', 'Erenler', 'Ferizli', 'Geyve', 'Hendek', 'Karapürçek', 'Karasu', 'Kaynarca', 'Kocaali', 'Pamukova', 'Sapanca', 'Serdivan', 'Söğütlü', 'Taraklı']
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="evaluation-page">
      <div className="eval-header-bg">
        <div className="container">
          <div className="eval-header fade-in-up">
            <h1 className="text-gradient">Bilimsel Fiyat Analizi Talep Edin</h1>
            <p className="text-muted">Mülkünüze dair detayları girin, piyasa verilerine ve demografik yapıya uygun profesyonel değerlememizi size ulaştıralım.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form-container glass-panel fade-in-up stagger-1">
          {/* Progress Bar */}
          {step < 5 && (
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
              </div>
              <div className="step-indicators">
                <span className={step >= 1 ? 'active' : ''}>Konum</span>
                <span className={step >= 2 ? 'active' : ''}>Fiziksel Veriler</span>
                <span className={step >= 3 ? 'active' : ''}>Statü ve Beklenti</span>
                <span className={step >= 4 ? 'active' : ''}>İletişim</span>
              </div>
            </div>
          )}

          <form className="multi-step-form" onSubmit={handleSubmit}>
            
            {/* Step 1: Konum */}
            {step === 1 && (
              <div className="form-step fade-in">
                <h3 className="step-title">1. Temel Konum Bilgisi</h3>
                <p className="step-subtitle">Mülkünüzün tam olarak nerede bulunduğunu belirtin.</p>
                
                <div className="form-group row">
                  <div className="col">
                    <label>İl</label>
                    <select className="form-input" required value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                      <option value="">İl Seçiniz</option>
                      <option value="istanbul">İstanbul</option>
                      <option value="ankara">Ankara</option>
                      <option value="izmir">İzmir</option>
                      <option value="yalova">Yalova</option>
                      <option value="sakarya">Sakarya</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>İlçe</label>
                    <select className="form-input" required disabled={!selectedCity}>
                      <option value="">İlçe Seçiniz</option>
                      {selectedCity && locations[selectedCity]?.map(district => (
                        <option key={district} value={district.toLowerCase()}>{district}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Mahalle</label>
                  <input type="text" className="form-input" placeholder="Mahalle adını giriniz" required />
                </div>

                <div className="form-group">
                  <label>Mülk Tipi</label>
                  <select className="form-input" required>
                    <option value="">Seçiniz</option>
                    <option value="daire">Daire</option>
                    <option value="villa">Villa</option>
                    <option value="ticari">Ticari</option>
                    <option value="arsa">Arsa</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Fiziksel Veriler */}
            {step === 2 && (
              <div className="form-step fade-in">
                <h3 className="step-title">2. Fiziksel Veriler</h3>
                <p className="step-subtitle">Değerlemeyi etkileyecek en önemli yapısal özellikler.</p>
                
                <div className="form-group row">
                  <div className="col">
                    <label>Brüt Metrekare</label>
                    <input type="number" className="form-input" placeholder="Örn: 120" required />
                  </div>
                  <div className="col">
                    <label>Net Metrekare</label>
                    <input type="number" className="form-input" placeholder="Örn: 100" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col">
                    <label>Oda Sayısı</label>
                    <select className="form-input" required>
                      <option value="">Seçiniz</option>
                      <option value="1+0">1+0</option>
                      <option value="1+1">1+1</option>
                      <option value="2+1">2+1</option>
                      <option value="3+1">3+1</option>
                      <option value="4+1">4+1 ve üzeri</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>Bina Yaşı</label>
                    <input type="number" className="form-input" placeholder="Örn: 5" required />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col">
                    <label>Bulunduğu Kat</label>
                    <input type="number" className="form-input" />
                  </div>
                  <div className="col">
                    <label>Toplam Kat</label>
                    <input type="number" className="form-input" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Statü ve Beklenti */}
            {step === 3 && (
              <div className="form-step fade-in">
                <h3 className="step-title">3. Statü ve Stratejik Kriterler</h3>
                <p className="step-subtitle">Mülkün mevcut durumunu ve hedeflerinizi anlayalım.</p>
                
                <div className="form-group">
                  <label>Mülkün Kullanım Durumu</label>
                  <select className="form-input" required>
                    <option value="">Seçiniz</option>
                    <option value="bos">Boş</option>
                    <option value="kiracili">Kiracılı</option>
                    <option value="mulk_sahibi">Mülk Sahibi Oturuyor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Talep Edilen / Düşünülen Tutar (TL)</label>
                  <input type="number" className="form-input" placeholder="Örn: 5000000" />
                  <span className="input-hint">Hedefinizi anlamamız için yön gösterici bir veri.</span>
                </div>

                <div className="form-group">
                  <label>Mülke Dair Ekstra Nitelikler</label>
                  <textarea className="form-input" rows={4} placeholder="Renovasyon durumu, site özellikleri, manzara vb. detayları belirtebilirsiniz."></textarea>
                </div>
              </div>
            )}

            {/* Step 4: İletişim */}
            {step === 4 && (
              <div className="form-step fade-in">
                <h3 className="step-title">4. İletişim Bilgileri</h3>
                <p className="step-subtitle">Analiz sonucunuzu size detaylıca aktarabilmemiz için bilgilerinizi giriniz.</p>
                
                <div className="form-group">
                  <label>Ad Soyad</label>
                  <input type="text" className="form-input" placeholder="Orhan Velikan" required />
                </div>

                <div className="form-group row">
                  <div className="col">
                    <label>Telefon Numarası</label>
                    <input type="tel" className="form-input" placeholder="05XX XXX XX XX" required />
                  </div>
                  <div className="col">
                    <label>E-posta Adresi</label>
                    <input type="email" className="form-input" placeholder="orhan@ornek.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>En Uygun İletişim Zamanı</label>
                  <select className="form-input">
                    <option value="sabah">Sabah (09:00 - 12:00)</option>
                    <option value="ogle">Öğle (12:00 - 15:00)</option>
                    <option value="aksam">Akşam (15:00 - 19:00)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="form-step fade-in success-step text-center">
                <div className="success-icon">
                  <CheckCircle2 size={64} className="text-success" />
                </div>
                <h2>Talebiniz Alındı!</h2>
                <p className="text-muted">Analiziniz en kısa sürede hazırlanacak ve sizinle belirttiğiniz saat aralığında iletişime geçeceğiz. Bizimle iletişime geçtiğiniz için teşekkür ederiz.</p>
                <div className="mt-6">
                  <a href="/" className="btn btn-primary">Ana Sayfaya Dön</a>
                </div>
              </div>
            )}

            {/* Form Actions */}
            {step < 5 && (
              <div className="form-actions">
                {step > 1 ? (
                  <button type="button" className="btn btn-secondary" onClick={prevStep}>
                    <ArrowLeft size={16} /> Geri
                  </button>
                ) : <div></div>}
                
                {step < 4 ? (
                  <button type="button" className="btn btn-primary" onClick={nextStep}>
                    İleri <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Talebi Gönder <CheckCircle2 size={16} />
                  </button>
                )}
              </div>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
