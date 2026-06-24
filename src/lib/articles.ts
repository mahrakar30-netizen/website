export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bulletList'; items: { bold: string; text: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  keywords?: string;
  content: ContentBlock[];
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9çğüöış ]/g, '')
    .replace(/ /g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function generateHeadingId(heading: string): string {
  return generateSlug(heading);
}

function truncateExcerpt(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '...';
}

const articles: Article[] = [
  {
    slug: 'evimi-gayrimenkulumu-satarken-fiyati-nasil-belirlemeliyim',
    title: 'Evimi(Gayrimenkulümü) Satarken Fiyatı Nasıl Belirlemeliyim? Doğru Fiyatlandırma Rehberi',
    author: 'Mahir Akar',
    date: '2025-05-23',
    category: 'Satış Stratejisi',
    readTime: '5 dk',
    excerpt: 'Evinizi satarken doğru fiyatı nasıl belirlersiniz? Karşılaştırmalı piyasa analizi, bölgesel trendler ve gayrimenkul ekspertiz taktikleriyle hatalı fiyatlandırmadan kaçının. Profesyonel danışmanlıkla ücretsiz piyasa analizi.',
    keywords: 'gayrimenkul fiyatlandırma, ev fiyatı belirleme, konut metrekare fiyatı, gayrimenkul ekspertiz, piyasa analizi, ev satış stratejisi, doğru fiyatlandırma rehberi',
    content: [
      {
        type: 'paragraph',
        text: 'Gayrimenkul satış sürecinde mülk sahiplerinin yaptığı en büyük hata, duygusal bağlar veya kişisel ihtiyaçlar üzerinden fiyat belirlemektir. Pazarın gerçeklerinden uzak, hatalı fiyatlandırma ile satışa çıkan ilanlar, sitelerde uzun süre kalarak "eskir" ve alıcı gözünde değerini kaybeder. Evinizi hızlı ve değerinde satmanın yolu, bilimsel veriye dayalı bir fiyat stratejisinden geçer.'
      },
      {
        type: 'paragraph',
        text: 'İşte ev fiyatı belirleme sürecinde izlemeniz gereken adımlar ve kritik gayrimenkul ekspertiz taktikleri:'
      },
      {
        type: 'heading',
        text: '1. Karşılaştırmalı Piyasa Analizi (CMA) Yapın'
      },
      {
        type: 'paragraph',
        text: 'Doğru bir konut metrekare fiyatı hesaplama işlemi için bölgenizdeki benzer mülkleri incelemelisiniz.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Aktif İlanlar: ',
            text: 'Rakibiniz olan güncel ilanların fiyatlarını analiz edin. Ancak unutmayın; ilan sitelerindeki fiyatlar "istenen" fiyatlardır, "satılan" fiyatlar değil.'
          },
          {
            bold: 'Satılmış Mülkler: ',
            text: 'Son 3 ila 6 ay içinde bölgenizde gerçekten satılmış benzer evlerin kapanış fiyatlarını öğrenin. Pazarın tabanını ve tavanını bu veriler belirler.'
          }
        ]
      },
      {
        type: 'heading',
        text: '2. Bölgesel Faktörleri ve Trendleri Değerlendirin'
      },
      {
        type: 'paragraph',
        text: 'Evinizin fiziki durumu kadar, yer aldığı konumun sunduğu dinamikler de fiyatı doğrudan etkiler.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Ulaşım ve Altyapı: ',
            text: 'Metroya, ana yollara veya köprü bağlantılarına yakınlık metrekare değerini yukarı taşır.'
          },
          {
            bold: 'Amortisman ve Arz-Talep Dengesi: ',
            text: 'Bölgedeki kiralık/satılık oranları ve bölgenin geri dönüş (amortisman) süresi yatırımcının ilk bakacağı verilerdir. Bölgede benzer nitelikte çok fazla konut arzı varsa, fiyatı daha rekabetçi tutmak zorundasınız.'
          }
        ]
      },
      {
        type: 'heading',
        text: '3. Hatalı Fiyatlandırma Tuzaklarından Kaçının'
      },
      {
        type: 'paragraph',
        text: '"Fiyatı yüksekten açalım, nasıl olsa pazarlıkla düşeriz" düşüncesi en yaygın hatalı fiyatlandırma tuzağıdır. Doğru fiyatın üzerindeki mülkler, pazardaki ilk ve en heyecanlı alıcı kitlesini kaçırır. İlanın yayında kaldığı süre uzadıkça, alıcılar mülkte teknik veya hukuki bir sorun olduğunu düşünerek uzaklaşır. En nihayetinde mülk, hak ettiği değerin de altına satılmak zorunda kalabilir.'
      },
      {
        type: 'paragraph',
        text: 'Profesyonel İpucu: Bölgenizdeki gerçek satış rakamlarına, tapu verilerine ve doğru endeks analizlerine ulaşmak uzmanlık gerektirir. Süreci riske atmamak, zaman ve nakit kaybetmemek adına bölgenizde aktif çalışan profesyonel bir gayrimenkul danışmanından destek alarak ücretsiz piyasa analizi talep edebilirsiniz.'
      }
    ]
  },
  {
    slug: 'satis-oncesi-ev-degerini-artiran-7-kucuk-dokunus',
    title: 'Satış Öncesi Ev Değerini Artıran En Etkili 7 Küçük Dokunuş',
    author: 'Mahir Akar',
    date: '2025-05-12',
    category: 'Gayrimenkul Rehberi',
    readTime: '6 dk',
    excerpt: '',
    content: [
      {
        type: 'paragraph',
        text: 'Gayrimenkul piyasasında bir mülkün satış hızı ve nihai satış bedeli, yalnızca onun metrekaresine veya konumuna bağlı değildir. Alıcının mülke adım attığı ilk andan itibaren hissettiği "ev hissi" ve mülkün genel sunumu, kararı doğrudan etkiler. Evinizi satmaya karar verdiğinizde, büyük ve maliyetli tadilatlara girişmeden de mülkünüzün algılanan değerini yukarı çekmeniz mümkündür.'
      },
      {
        type: 'paragraph',
        text: 'Doğru stratejilerle yapılan küçük ve düşük bütçeli müdahaleler, gayrimenkul pazarında evinizin öne çıkmasını sağlar. Bu rehberde, satış öncesi ev değerini artıran ve potansiyel alıcıların mülkünüze olan ilgisini maksimuma çıkaracak en etkili 7 küçük dokunuşu, nedenleriyle birlikte inceledik.'
      },
      {
        type: 'heading',
        text: '1. İlk İzlenim ve Giriş (Giriş Cephesi Geliştirme)'
      },
      {
        type: 'paragraph',
        text: 'Bir gayrimenkul alıcısı, mülk hakkında ilk kararı genellikle binaya yaklaştığı ve kapıdan içeri girdiği ilk 15-30 saniye içinde verir. Psikolojide "ilk izlenim etkisi" olarak adlandırılan bu durum, ev satış sürecinin en kritik aşamasıdır.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Dış Kapı ve Giriş Alanı: ',
            text: 'Evinizin dış kapısı eski, çizilmiş veya solmuşsa, alıcıda evin bakımsız olduğu algısı uyanır. Kapıyı modern, nötr bir renge boyamak veya gerekirse ekonomik ama şık bir çelik kapı kaplaması yaptırmak ilk izlenimi tamamen değiştirir.'
          },
          {
            bold: 'Aydınlatma ve Aksesuarlar: ',
            text: 'Giriş holünün aydınlık olması gerekir. Loş bir antre, evi olduğundan daha küçük ve basık gösterir. Girişe eklenecek şık bir ayna, alanı hem geniş gösterir hem de ışığı yansıtır. Kapı numarasının yenilenmesi ve temiz bir paspas kullanımı basit ama etkili detaylardır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '2. Nötr Renklerle Duvar Boyası ve Duvar Bakımı'
      },
      {
        type: 'paragraph',
        text: 'Kişisel zevkler gayrimenkul satışında risk taşır. Sizin çok sevdiğiniz koyu kırmızı, fıstık yeşili veya iddialı duvar kağıtları, potansiyel alıcı için boya masrafı ve ekstra iş anlamına gelir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Nötr Renklerin Gücü: ',
            text: 'Duvarlarda kırık beyaz, bej, açık gri veya şampanya tonları gibi nötr renkleri tercih etmek alanı geniş, temiz ve ferah gösterir. Nötr renkler, alıcının kendi eşyalarını o eve daha rahat hayal etmesini (görselleştirmesini) sağlar.'
          },
          {
            bold: 'Kusurların Kapatılması: ',
            text: 'Duvarlardaki çatlaklar, çivi delikleri ve rutubet izleri mutlaka tamir edilmelidir. Alıcı, duvardaki bir rutubet lekesini gördüğünde bunu basit bir havalandırma probleminden ziyade, binanın temelinde büyük bir izolasyon sorunu olarak yorumlama eğilimindedir. Ev satış taktikleri arasında en yüksek yatırım getirisi (ROI) sağlayan kalem her zaman boyadır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '3. Aydınlatma Stratejisi ve Doğal Işık Optimizasyonu'
      },
      {
        type: 'paragraph',
        text: 'Işık, bir mekanın hacmini ve atmosferini belirleyen en temel unsurdur. Karanlık ve iyi aydınlatılmamış odalar, metrekare bazında büyük olsa bile alıcıya kasvetli ve küçük gelir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Ampul Seçimi ve Lümen Değeri: ',
            text: 'Evdeki tüm eski, sararmış veya gücü zayıflamış ampulleri yüksek lümenli, enerji tasarruflu LED ampullerle değiştirin. Odaların işlevine göre doğru ışık rengini seçin (örneğin oturma odası ve antre için sıcak beyaz/doğal beyaz).'
          },
          {
            bold: 'Doğal Işığı Maksimuma Çıkarma: ',
            text: 'Ev gösterimleri (open house) öncesinde tüm perdeleri sonuna kadar açın. Camların temiz olması, içeri giren ışık miktarını artırır. Pencerelerin önünü kapatan büyük mobilyalar veya bitkiler varsa bunların yerini değiştirerek ışık koridorları oluşturun.'
          }
        ]
      },
      {
        type: 'heading',
        text: '4. Mutfak ve Banyolarda Ekonomik Yenilemeler (Mini Remodeling)'
      },
      {
        type: 'paragraph',
        text: 'Mutfak ve banyo, bir evin değerini belirleyen ve alıcıların tadilat masrafından en çok çekindiği iki ana alandır. Bu alanları tamamen yıkıp yapmak çok maliyetlidir, ancak küçük dokunuşlarla "yenilenmiş" hissi vermek mümkündür.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Dolap Kapakları ve Kulplar: ',
            text: 'Mutfak dolaplarının gövdeleri sağlamsa, sadece kapakları boyamak veya folyo ile kaplamak alanı tamamen modernize eder. Dolap kulplarını mat siyah, krom veya dore gibi modern seçeneklerle değiştirmek, çok düşük bir maliyetle lüks bir görünüm kazandırır.'
          },
          {
            bold: 'Batarya ve Armatürler: ',
            text: 'Mutfak ve banyo bataryalarındaki su lekeleri, kireçlenmeler veya eski tasarımlar evi yaşlı gösterir. Paslanmaz çelik veya modern tasarımlı yeni armatürler monte etmek, banyo ve mutfağın havasını anında değiştirir.'
          },
          {
            bold: 'Derz Temizliği: ',
            text: 'Fayans aralarındaki kararmış derzleri derz kalemi veya derz temizleyicilerle beyazlatmak, hijyen algısını maksimuma çıkarır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '5. Depolama Alanlarının Düzenlenmesi ve Alan Boşaltma (Decluttering)'
      },
      {
        type: 'paragraph',
        text: 'Alıcılar ev bakarken sadece odaların genişliğine değil, dolapların ve depolama alanlarının yeterliliğine de bakar. Tıklım tıklım dolu bir gardırop veya gömme dolap, evde depolama alanı yetersizliği olduğu izlenimini verir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Eşyaların Azaltılması: ',
            text: 'Evdeki fazla mobilyaları, büyük bibloları ve her odadaki gereksiz kalabalığı ortadan kaldırın. Odalardaki zemin alanının ne kadar çok kısmı görünür olursa, oda o kadar büyük algılanır.'
          },
          {
            bold: 'Dolap İçi Düzen: ',
            text: 'Potansiyel alıcıların gömme dolap kapaklarını, mutfak çekmecelerini veya kiler kapısını açacağını unutmayın. Dolap içlerinin düzenli ve yarı boş olması, "bu evde her şey için yeterli yer var" mesajını bilinçaltına iletir.'
          }
        ]
      },
      {
        type: 'heading',
        text: '6. Zeminlerin Bakımı ve Kusursuzlaştırılması'
      },
      {
        type: 'paragraph',
        text: 'Zemin, duvarlardan sonra evde en çok yer kaplayan ve göze batan alandır. Yıpranmış bir zemin, mülkün değerini doğrudan aşağı çeker.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Parke ve Ahşap Bakımı: ',
            text: 'Çizilmiş, cilası gitmiş parkeler için lokal sistre cila uygulaması yapılabilir. Kabarmış veya kırılmış parke çıtaları mutlaka yenilenmelidir. Süpürgeliklerin temiz ve duvara tam oturmuş olması da dikkat edilen detaylar arasındadır.'
          },
          {
            bold: 'Halı ve Seramikler: ',
            text: 'Eğer evde sabit halılar varsa, profesyonel bir yıkama firmasından destek alınarak lekelerden ve kokulardan arındırılmalıdır. Seramik zeminlerdeki çatlak karolar, bütçeyi sarsmayacak şekilde benzer bir karo ile değiştirilmelidir.'
          }
        ]
      },
      {
        type: 'heading',
        text: '7. Koku Yönetimi ve Duyusal Pazarlama'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul pazarlamasında sadece görsellik değil, duyular da rol oynar. İnsan beyni kokuları doğrudan hafıza ve duygularla eşleştirir. Ev ne kadar güzel görünürse görünsün, içerideki kötü bir koku satışı engelleyebilir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Kötü Kokuların Eliminasyonu: ',
            text: 'Evcil hayvan kokuları, sigara sinmiş döşemeler, kızartma kokusu veya tesisattan gelen gider kokuları ev gösterimi öncesinde tamamen yok edilmelidir. Ev gösterilmeden en az 2 saat önce ev derinlemesine havalandırılmalıdır.'
          },
          {
            bold: 'Pozitif Kokuların Kullanımı: ',
            text: 'Ağır, yapay oda parfümleri alıcıda "bir kokuyu gizlemeye çalışıyorlar" şüphesi uyandırabilir. Bunun yerine, evde hafif vanilya, tarçın veya taze kahve kokusu olması tercih edilir. Gösterimden hemen önce hafif bir kahve demlemek veya fırına vanilyalı bir kurabiye vermek, alıcılara ev sıcaklığı hissi yaşatan klasik ve profesyonel bir gayrimenkul değerleme ve sunum taktiğidir.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Özet: Küçük Yatırım, Yüksek Getiri'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkulünüzü pazara sunmadan önce yukarıda belirtilen 7 küçük dokunuşu uygulamak, size binlerce liralık büyük tadilat masraflarından tasarruf ettirirken, mülkünüzün satış değerini %5 ile %10 arasında optimize edebilir. Masrafsız ev yenileme yaklaşımları, alıcıların mülke yönelik pazarlık marjını daraltır; çünkü karşılarında itiraz edebilecekleri, fiyat kırmak için kullanabilecekleri "kusurlar" bulamazlar.'
      },
          {
            type: 'paragraph',
            text: 'Evinizi doğru fiyatlandırma stratejisiyle ve bu estetik dokunuşlarla destekleyerek pazara sunduğunuzda, hem daha kısa sürede alıcı bulacak hem de mülkünüzün hak ettiği gerçek değeri masada korumuş olacaksınız. Gayrimenkul satış sürecinde profesyonel bir pazarlama planı ve doğru pazar analizi için her zaman bölgenizde uzman bir gayrimenkul danışmanından destek almanız sürecinizi hızlandıracaktır.'
          }
        ]
      },
  {
    slug: 'sahibinden-ev-satmanin-riskleri-ve-profesyonel-destegin-sagladigi-5-avantaj',
    title: 'Sahibinden Ev Satmanın Riskleri ve Profesyonel Desteğin Sağladığı 5 Avantaj',
    author: 'Mahir Akar',
    date: '2026-05-30',
    category: 'Satış Stratejisi',
    readTime: '7 dk',
    excerpt: 'Sahibinden ev satmak düşündüğünüz kadar avantajlı olmayabilir. Bu rehberde, bireysel satışın riskleri ve profesyonel emlak danışmanı ile çalışmanın sağladığı 5 kritik avantajı objektif verilerle inceliyoruz.',
    keywords: 'sahibinden ev satmak, sahibinden ev satma riskleri, emlak danışmanı avantajları, profesyonel gayrimenkul danışmanı, ev satarken dikkat edilmesi gerekenler, gayrimenkul satış süreci',
    content: [
      {
        type: 'paragraph',
        text: 'Gayrimenkul satışı, bir bireyin hayatı boyunca gerçekleştirebileceği en yüksek finansal hacme sahip işlemlerden biridir. Günümüzde birçok mülk sahibi, emlak danışmanlık hizmeti bedelinden tasarruf etmek amacıyla mülkünü "sahibinden" unvanıyla pazara sunmayı tercih etmektedir. İlk bakışta ekonomik bir yöntem gibi görünen bu karar, gayrimenkul hukukuna, pazar dinamiklerine ve pazarlık süreçlerine tam anlamıyla hakim olunmadığında ciddi finansal zararlara, zaman kayıplarına ve hatta hukuki krizlere yol açabilmektedir.'
      },
      {
        type: 'paragraph',
        text: 'Bir mülkü profesyonel destek almadan satmaya çalışmak, modern gayrimenkul pazarında sadece bir ilan sitesine fotoğraf yüklemekten çok daha karmaşık bir süreci tek başına göğüslemek anlamına gelir. Bu rehberde, sahibinden ev satmanın riskleri ve uzman bir gayrimenkul danışmanı ile çalışmanın mülk sahiplerine sağladığı 5 yapısal avantaj objektif verilerle ele alınmıştır.'
      },
      {
        type: 'heading',
        text: 'Sahibinden Ev Satış Sürecinde Karşılaşılan Temel Riskler'
      },
      {
        type: 'paragraph',
        text: 'Profesyonel bir filtreleme ve pazarlama mekanizması olmadan yürütülen bireysel satış süreçleri, mülk sahiplerini doğrudan açık pazarın getirdiği belirsizliklerle karşı karşıya bırakır. Bu süreçte en sık karşılaşılan risk faktörleri şunlardır:'
      },
      {
        type: 'heading',
        text: '1. Zaman Kaybı ve Niteliksiz Alıcı Trafiği'
      },
      {
        type: 'paragraph',
        text: 'Sahibinden verilen ilanların altına bırakılan telefon numaraları, günün her saatinde çalmaya başlar. Ancak bu arayanların çok küçük bir yüzdesi "gerçek ve nitelikli alıcı" profilindedir. Evini satmak isteyen kişi; sadece piyasayı yoklayan meraklılarla, kredi skoru ev almaya yetmeyen kişilerle, gayrimenkul ticareti yapan kayıt dışı aracılarla ve mülkü sadece gezmek isteyen insanlarla vakit kaybetmek zorunda kalır. Her telefon çağrısına cevap vermek ve evi her talep edene göstermek, mülk sahibi için ciddi bir operasyonel yük ve zaman kaybıdır.'
      },
      {
        type: 'heading',
        text: '2. Güvenlik ve Gizlilik Açıkları'
      },
      {
        type: 'paragraph',
        text: 'Mülk sahipleri, ilan sitelerine evlerinin açık adreslerini ve iç mekan fotoğraflarını yükleyerek kimliğini, finansal durumunu veya sosyal yaşantısını bilmedikleri onlarca yabancıyı yaşam alanlarına davet etmek durumunda kalırlar. Herhangi bir kimlik doğrulama veya ön eleme yapılmadan gerçekleştirilen ev gösterimleri, hırsızlık başta olmak üzere birçok güvenlik zafiyetine zemin hazırlar.'
      },
      {
        type: 'heading',
        text: '3. Hukuki ve Mevzuatsal Hatalar'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul mevzuatı; tapu süreçleri, borçlar kanunu, vergi hukuku ve imar durumları gibi oldukça teknik detaylar içerir. Tapu harçlarının eksik beyan edilmesi, değer artış kazancı vergisi hesaplamalarında yapılan hatalar, satış vaadi sözleşmelerindeki usulsüzlükler veya kapora alım süreçlerinde yaşanan uyuşmazlıklar, satış sonrasında mülk sahibine çok daha büyük cezalar ve davalar olarak geri dönebilir.'
      },
      {
        type: 'heading',
        text: 'Profesyonel Desteğin Sağladığı 5 Hayati Avantaj'
      },
      {
        type: 'paragraph',
        text: 'Mülk satış sürecini profesyonel bir gayrimenkul danışmanına devretmek, mülk sahibini yukarıda sayılan risklerden korurken, satışın hem finansal hem de operasyonel olarak en yüksek verimle tamamlanmasını sağlar. İşte kurumsal bir danışmanlık hizmetinin sunduğu 5 temel avantaj:'
      },
      {
        type: 'heading',
        text: '1. Doğru Fiyatlandırma ve Karşılaştırmalı Piyasa Analizi'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkulün hızlı ve değerinde satılmasını sağlayan en önemli unsur doğru fiyattır. Ulusal Emlakçılar Birliği (NAR, 2025) verilerine göre, profesyonel fiyatlandırma desteği alan mülkler, bireysel satışlara kıyasla ortalama %12 daha yüksek satış bedeline ulaşmaktadır. Mülk sahipleri genellikle kendi evlerine duygusal bağlar veya kişisel nakit ihtiyaçları üzerinden bir değer biçerler. Bu durum, mülkün ya çok yüksek fiyatlanarak pazarda "eskimesine" ya da çok düşük fiyatlanarak finansal zarar edilmesine yol açar.'
      },
      {
        type: 'paragraph',
        text: 'Profesyonel bir emlak danışmanı, gayrimenkul ekspertiz ve karşılaştırmalı piyasa analizi (CMA) yöntemlerini kullanarak bölgedeki gerçek satış verilerine ulaşır. Bölgenin amortisman sürelerini, güncel ekonomik trendleri ve rakip ilanları analiz ederek mülk için bilimsel, piyasa gerçekleriyle örtüşen ve alıcıyı kaçırmayacak en doğru satış fiyatını belirler.'
      },
      {
        type: 'heading',
        text: '2. Nitelikli Alıcı Filtreleme ve Veritabanı Yönetimi'
      },
      {
        type: 'paragraph',
        text: 'Profesyonel danışmanlar, mülkünüzü sadece ilan sitelerine koymakla kalmaz; ellerinde hazır bulunan, bütçesi onaylanmış, kredi altyapısı hazırlanmış ve aktif olarak ev arayan hazır alıcı veritabanını (CRM) devreye sokarlar.'
      },
      {
        type: 'paragraph',
        text: 'Evi göstermeden önce potansiyel alıcıların finansal yeterliliklerini, satın alma motivasyonlarını ve aciliyet durumlarını analiz ederler. Böylece evinize sadece "gerçek alıcılar" adım atar; gereksiz ev gösterme trafiği engellenmiş olur, mülk sahibinin zamanı ve mahremiyeti korunur.'
      },
      {
        type: 'heading',
        text: '3. İleri Düzey Pazarlama ve Hedef Kitle Reklamcılığı'
      },
      {
        type: 'paragraph',
        text: 'Sahibinden satılık ilanlar, genellikle standart telefon fotoğrafları ve yetersiz açıklamalarla sadece belirli platformlarda listelenir. Profesyonel bir gayrimenkul danışmanı ise mülk için özel bir pazarlama planı hazırlar:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Görsel Kalite: ',
            text: 'Geniş açılı profesyonel fotoğraf çekimleri, drone çekimleri ve video turları ile mülkün dijital sunumu en üst seviyeye çıkarılır.'
          },
          {
            bold: 'Dijital Reklamcılık: ',
            text: 'Sosyal medya algoritlamaları (Instagram, Facebook, LinkedIn ad süreçleri) kullanılarak, mülkün bulunabileceği fiyat segmentine uygun potansiyel alıcıların karşısına nokta atışı reklamlarla çıkılır.'
          },
          {
            bold: 'Ağ Paylaşımı: ',
            text: 'Mülk, diğer profesyonel gayrimenkul danışmanlarının ve emlak ofislerinin paylaşım ağlarına (MLS) açılarak satış ihtimali çarpan etkisiyle artırılır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '4. Profesyonel Pazarlık Yönetimi ve Objektiflik'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul pazarlıkları, doğası gereği çatışmaya ve duygusal gerilimlere açıktır. Alıcı tarafı fiyatı düşürmek için mülkün kusurlarını öne çıkardığında, mülk sahibi bunu kişisel bir eleştiri olarak algılayıp masadan kalkabilir. Ya da tam tersi, deneyimli alıcılar karşısında savunmasız kalarak fiyatı gereğinden fazla düşürebilir.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanı, süreçte tampon bölge görevi görür. Satış sürecini tamamen rasyonel, verilere dayalı ve profesyonel bir pazarlık stratejisi ile yönetir. Alıcının itirazlarını objektif argümanlarla çürütür ve mülk sahibinin finansal çıkarlarını masada sonuna kadar korur.'
      },
      {
        type: 'heading',
        text: '5. Hukuki Güvence, Sözleşme Altyapısı ve Güvenli Kapanış'
      },
      {
        type: 'paragraph',
        text: 'Satış kararı verildikten sonraki süreç, en az pazarlık kadar kritiktir. Kaporanın hukuki şartlara bağlanması, tarafların haklarını koruyan adil bir taşınmaz satış vaadi sözleşmesinin hazırlanması, Web Tapu sisteminin hatasız işletilmesi ve paranın transfer yöntemi (Bloke Çek, Tapu Takas Sistemi vb.) uzmanlık gerektirir.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanları, güncel mevzuata hakimiyetleri sayesinde tüm bu bürokratik süreci yönetir. Alıcı ve satıcı arasındaki tüm finansal ve hukuki adımların yasalara uygun, şeffaf ve güvenli bir şekilde tamamlanmasını sağlayarak olası dolandırıcılık vakalarının veya sonradan doğabilecek hukuki ihtilafların önüne geçer.'
      },
      {
        type: 'heading',
        text: 'Sonuç: Emlak Danışmanı Komisyonu Bir Masraf mıdır?'
      },
      {
        type: 'paragraph',
        text: 'Mülk sahiplerinin profesyonel destekten kaçınmasının arkasındaki temel motivasyon olan emlakçı komisyonu, aslında bir masraf değil; mülkün doğru fiyattan satılmasını sağlayan, finansal riskleri sıfırlayan ve mülk sahibine zaman kazandıran bir güvenlik ve optimizasyon yatırımıdır.'
      },
      {
        type: 'paragraph',
        text: 'Sahibinden yapılan hatalı fiyatlandırmalar, yanlış pazarlıklar ve uzayan satış süreleri, genellikle ödenecek hizmet bedelinden çok daha büyük finansal kayıplara yol açar. Gayrimenkulünüzü pazarın risklerine karşı korumak, yasal süreçleri sorunsuz atlatmak ve masadan maksimum kazançla ayrılmak için bölgenizde ve segmentinizde uzmanlaşmış kurumsal bir gayrimenkul danışmanı ile stratejik ortaklık kurmak en rasyonel ticari karardır.'
      }
    ]
  },
  {
    slug: 'tuzla-hala-gayrimenkul-yatirimi-icin-kazancli-mi-2026-yili-pazar-analizi',
    title: 'Tuzla Hala Gayrimenkul Yatırımı İçin Kazançlı mı? 2026 Yılı Pazar Analizi',
    author: 'Mahir Akar',
    date: '2026-05-30',
    category: 'Piyasa Analizi',
    readTime: '7 dk',
    excerpt: 'Tuzla satılık daire ve arsa piyasası, 2026 yılında da o eski yüksek prim potansiyelini koruyor mu, yoksa pazar doyum noktasına ulaştı mı? Amortisman süreleri, metrekare fiyatları ve bölge bazlı yatırım fırsatları.',
    keywords: 'Tuzla gayrimenkul, Tuzla yatırım, Tuzla emlak piyasası, Tuzla satılık daire, Tuzla konut fiyatları 2026, Tuzla amortisman süresi, Tuzla metrekare fiyatı',
    content: [
      {
        type: 'paragraph',
        text: 'İstanbul gayrimenkul piyasası, 2026 yılı itibarıyla finansmana erişim şartları, enflasyon dinamikleri ve değişen alıcı tercihleri doğrultusunda tam anlamıyla bir dengelenme ve ayrışma dönemi yaşamaktadır. Geçmiş yıllarda merkezi ilçelerin gölgesinde bir sahil ve sanayi kasabası olarak görülen Tuzla, bugün megakentin en stratejik büyüme akslarından biri haline gelmiştir.'
      },
      {
        type: 'paragraph',
        text: 'Yatırımcıların zihnindeki en kritik soru ise net: Tuzla satılık daire ve arsa piyasası, 2026 yılında da o eski yüksek prim potansiyelini koruyor mu, yoksa pazar doyum noktasına ulaştı mı? Bu analizde, Tuzla emlak piyasasının 2026 yılı güncel verilerini, amortisman sürelerini ve bölge bazlı yatırım fırsatlarını rasyonel bir çerçevede ele alacağız.'
      },
      {
        type: 'heading',
        text: '1. 2026 Yılı İtibarıyla Tuzla Makro Pazar Verileri'
      },
      {
        type: 'paragraph',
        text: '2026 yılının ilk yarısı itibarıyla İstanbul genelinde konut fiyat artış hızları nominal bazda dengeli bir seyir izlerken, Tuzla bu ortalamaların üzerinde bir direnç ve talep grafiği sergilemektedir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Metrekare Birim Fiyatları: ',
            text: 'Tuzla genelinde konut niteliğine ve mahallesine göre değişmekle birlikte, ortalama konut metrekare satış fiyatları 35.000 TL ile 45.000 TL bandında (merkezi ve lüks projelerde daha yüksek) seyretmektedir (Kaynak: İstanbul Gayrimenkul Değerleme Endeksi, 2026 Q1). Bu durum, Tuzla\'yı İstanbul genelindeki ortalama metrekare birim değerlerine kıyasla hala erişilebilir ve "giriş maliyeti düşük" bir pazar konumunda tutmaktadır.'
          },
          {
            bold: 'Amortisman (Geri Dönüş) Süreleri: ',
            text: 'İstanbul merkezinde 22-25 yıl bandına çıkan konut amortisman süreleri, Tuzla\'nın dinamik kiralık piyasası sayesinde 14 ila 16 yıl seviyelerine kadar düşmektedir (Kaynak: Türkiye Cumhuriyet Merkez Bankası Konut Fiyat Endeksi, Nisan 2026). Bu veri, nakit akışı odaklı gayrimenkul yatırımı yapmak isteyenler için Tuzla\'yı İstanbul\'un en rasyonel ilçelerinden biri yapmaktadır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '2. Tuzla\'yı 2026\'da Kazançlı Kılan Yapısal Güçler'
      },
      {
        type: 'paragraph',
        text: 'Tuzla emlak pazarının sadece spekülatif bir büyüme değil, organik bir talep üzerine kurulu olmasının arkasında üç temel lokomotif güç bulunmaktadır:'
      },
      {
        type: 'heading',
        text: 'Sanayi, Tersane ve Beyaz Yaka Göçü'
      },
      {
        type: 'paragraph',
        text: 'Tuzla; Organize Sanayi Bölgeleri (OSB), serbest bölgeler ve tersaneler hattı ile Türkiye ekonomisinin üretim kalbidir. Bu bölgelerde istihdam edilen mühendis, yönetici ve teknik uzman kadrosu, kaliteli konut segmenti için sürekli ve nitelikli bir iç talep oluşturmaktadır. İş yerine yakın yaşama arzusu, kiralık konutların el değiştirme hızını maksimuma çıkarmaktadır.'
      },
      {
        type: 'heading',
        text: 'Üniversiteler ve Öğrenci Popülasyonu'
      },
      {
        type: 'paragraph',
        text: 'Piri Reis Üniversitesi, Sabancı Üniversitesi, İstanbul Medeniyet Üniversitesi ve Okan Üniversitesi gibi köklü eğitim kurumlarının bölgedeki varlığı, özellikle Aydınlı ve İçmeler gibi mahallelerde 1+1 ve 2+1 daire tiplerine yönelik kalıcı bir kiralık konut talebi doğurmaktadır. Üniversite akslarına yakın mülkler, boş kalma riski en düşük yatırım enstrümanlarıdır.'
      },
      {
        type: 'heading',
        text: 'Ulaşım Entegrasyonunun Tamamlanması'
      },
      {
        type: 'paragraph',
        text: 'Marmaray hattının aktif gücü, metro projelerinin entegrasyonu, Sabiha Gökçen Havalimanı\'na olan yakınlık ve TEM/E-5 otoyol bağlantıları, Tuzla\'nın "merkeze uzaklık" algısını 2026 yılı itibarıyla tamamen kırmıştır. Ulaşım ağlarının ulaştığı her lokasyon, gayrimenkulde prim demektir.'
      },
      {
        type: 'heading',
        text: '3. Bölge Bazlı Tuzla Yatırım Haritası: Nereye, Ne Alınmalı?'
      },
      {
        type: 'paragraph',
        text: 'Tuzla tek bir pazar olarak okunmamalıdır. Yatırım stratejinize göre seçmeniz gereken mahalleler ve gayrimenkul türleri keskin farklılıklar gösterir:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Tepeören & Orhanlı — Villa / Müstakil Konut: ',
            text: 'Değer artışı ve üst segment yatırım hedefleyenler için pandemi sonrası başlayan yatay mimari ve müstakil yaşam talebinin 2026\'daki zirve noktası. Nitelikli site içi villa projeleri yüksek prim yapıyor.'
          },
          {
            bold: 'Aydınlı & İçmeler — 1+1 / 2+1 Rezidans ve Daire: ',
            text: 'Üniversite ve sanayi hatlarına yakınlığı sebebiyle amortisman süresi en kısa (14-15 yıl) olan bölge. Yüksek kira getirisi ve hızlı nakde çevirme imkanı sunuyor.'
          },
          {
            bold: 'Tuzla Merkez & Marina — 3+1 Geniş Daire & Ticari: ',
            text: 'Deniz ve sahil şeridi avantajıyla oturum amaçlı ailelerin ve üst gelir grubunun odağında. Likiditesi (nakde çevrilme hızı) oldukça yüksek, uzun vadeli değer koruma için ideal.'
          }
        ]
      },
      {
        type: 'heading',
        text: '4. 2026 Yılında Tuzla\'da Yatırım Yaparken Dikkat Edilmesi Gereken Riskler'
      },
      {
        type: 'paragraph',
        text: 'Tuzla pazarının sunduğu fırsatlar kadar, 2026 ekonomik konjonktürünün getirdiği riskleri de doğru yönetmek gerekir:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Doğru Fiyat Analizi: ',
            text: 'Kredi musluklarının daraldığı bu dönemde, pazar gerçeklerinin üzerinde "köpük" fiyatla satışa çıkan mülkler uzun süre ilanda kalarak değer kaybetmektedir. Alım yaparken mutlaka profesyonel bir gayrimenkul ekspertiz desteği alınmalı, mülk pazar değerinde veya altında yakalanmalıdır.'
          },
          {
            bold: 'Proje Güvenilirliği: ',
            text: 'Topraktan veya inşaat aşamasından yapılacak yatırımlarda, yüklenici firmanın finansal gücü ve geçmiş referansları titizlikle incelenmelidir. 2026 yılı, maliyet enflasyonu sebebiyle inşaat teslim sürelerinin sarktığı bir dönem olabilmektedir.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Sonuç: 2026\'da Tuzla Doğru Bir Yatırım mı?'
      },
      {
        type: 'paragraph',
        text: 'Tuzla, 2026 yılında da İstanbul genelinde gayrimenkul yatırımı için kazançlı ve güvenli limanlardan biri olma özelliğini korumaktadır. Ancak pazar artık "ne alırsan prim yapar" evresinden çıkmış, "doğru lokasyonda, doğru fiyata alınan mülkün kazandırdığı" seçici bir döneme girmiştir.'
      },
      {
        type: 'paragraph',
        text: 'Nakit akışı (kira getirisi) hedefleyen yatırımcılar için Aydınlı-İçmeler hattındaki küçük metrekareli konutlar; uzun vadeli yüksek sermaye kazancı ve değer artışı hedefleyenler için ise Tepeören-Orhanlı aksındaki arsa ve villa projeleri 2026 yılının en güçlü gayrimenkul hamleleri olarak öne çıkmaktadır. Süreci rasyonel verilerle ve pazar analiziyle yönetmek için bölgeyi iyi tanıyan profesyonel bir gayrimenkul danışmanıyla ilerlemek riskinizi sıfırlayacaktır.'
      }
    ]
  },
  {
    slug: 'gayrimenkul-satisinda-deger-artis-kazanci-vergisi-nasil-hesaplanir',
    title: 'Gayrimenkul Satışında Değer Artış Kazancı Vergisi Nasıl Hesaplanır?',
    author: 'Mahir Akar',
    date: '2026-06-13',
    category: 'Gayrimenkul Rehberi',
    readTime: '8 dk',
    excerpt: 'Evini, arsasını veya iş yerini elden çıkaran mülk sahiplerinin karşılaştığı en önemli mali yükümlülüklerden biri olan değer artış kazancı vergisini adım adım inceliyoruz. 2026 güncel istisna tutarları ve hesaplama örneği.',
    keywords: 'gayrimenkul değer artış kazancı, vergi hesaplama, Yİ-ÜFE endeksleme, gelir vergisi dilimleri, 5 yıl kuralı, istisna tutarı 2026, tapu harcı, gayrimenkul satış vergisi',
    content: [
      {
        type: 'paragraph',
        text: 'Değer artış kazancı vergisi, bir gayrimenkulün satın alma tarihinden itibaren 5 yıl içinde satılmasıyla elde edilen kar üzerinden hesaplanan bir gelir vergisi türüdür. Bu vergi, kısa vadeli gayrimenkul alım-satımlarından elde edilen ranta dayalı gelirin vergilendirilmesini amaçlar.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul sektöründe mülk satın almak kadar, sahip olunan mülkü doğru zamanda ve yasal yükümlülükleri eksiksiz yerine getirerek satmak da büyük önem taşır. Evini, arsasını veya iş yerini elden çıkaran mülk sahiplerinin karşılaştığı en önemli mali yükümlülüklerden biri değer artış kazancı vergisi uygulamasıdır.'
      },
      {
        type: 'paragraph',
        text: 'Piyasa gerçeklerine hakim olmadan yapılan satışlar, sonradan ciddi vergi cezaları ve gecikme faizleri ile karşılaşmanıza neden olabilir. Bu rehberde, gayrimenkul satışında değer artış kazancı vergisinin ne olduğunu, hangi şartlarda doğduğunu ve güncel verilerle nasıl hesaplandığını adım adım inceleyeceğiz.'
      },
      {
        type: 'heading',
        text: '1. Değer Artış Kazancı Vergisi Nedir?'
      },
      {
        type: 'paragraph',
        text: 'Bir gayrimenkulün satın alındığı (iktisap edildiği) tarihten itibaren belirli bir süre içinde satılması sonucu elde edilen kar, gelir vergisi kanununa göre "Diğer Kazanç ve İratlar" kapsamında vergilendirilir. Bu vergi türüne değer artış kazancı vergisi denir. Buradaki temel amaç, ticari bir organizasyon olmasa bile kısa vadeli gayrimenkul alım-satımlarından elde edilen ranta dayalı gelirin vergilendirilmesidir.'
      },
      {
        type: 'heading',
        text: '5 Yıl Kuralı Nedir?'
      },
      {
        type: 'paragraph',
        text: 'Gelir Vergisi Kanunu\'nun Mükerrer 80. maddesine göre, satılan taşınmaz edinme tarihinden itibaren 5 tam yıl (60 ay) geçtikten sonra elden çıkarılırsa değer artış kazancı vergisi doğmaz. 5 yıllık süre dolmadan yapılan satışlar ise elde edilen karın miktarı ne olursa olsun vergi hesaplamasına tabi tutulur. Bu, değer artış kazancı vergisinin doğmasındaki en kritik eşiktir.'
      },
      {
        type: 'heading',
        text: 'Önemli Muafiyet (Miras ve Bağış)'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul eğer miras (veraset) yoluyla kalmışsa veya ivazsız (bağış, hediye) olarak edinilmişse, bu mülklerin satışında 5 yıl kuralı aranmaz. Miras kalan bir evi ertesi gün bile satsanız değer artış kazancı vergisi ödemezsiniz.'
      },
      {
        type: 'heading',
        text: '2. Değer Artış Kazancı Vergisi Nasıl Hesaplanır?'
      },
      {
        type: 'paragraph',
        text: 'Hesaplama süreci sadece "satış fiyatından alış fiyatını çıkarmak" kadar basit değildir. Yüksek enflasyonist ortamlarda mükelleflerin haksız vergi ödemesini engellemek adına devlet, endeksleme adı verilen bir koruma mekanizması uygular.'
      },
      {
        type: 'paragraph',
        text: 'Hesaplama adımları şu şekilde ilerler:'
      },
      {
        type: 'heading',
        text: 'Adım 1: Enflasyon Endekslemesi (Yİ-ÜFE) Yapılması'
      },
      {
        type: 'paragraph',
        text: 'Mülkün geçmişteki alış bedeli, paranın bugünkü değerine getirilmek için Yurt İçi Üretici Fiyat Endeksi (Yİ-ÜFE) kullanılarak güncellenir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Şart: ',
            text: 'Endeksleme yapılabilmesi için alış tarihi ile satış tarihinden önceki ayların Yİ-ÜFE endeksleri arasındaki artış oranının en az %10 veya üzerinde olması gerekir.'
          },
          {
            bold: 'Formül: ',
            text: 'Alış bedeli, satıştan önceki ayın endeksinin alıştan önceki ayın endeksine bölünmesiyle çıkan katsayı ile çarpılır. Böylece "Endekslenmiş Maliyet" bulunur.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Adım 2: Safi Kazancın Bulunması'
      },
      {
        type: 'paragraph',
        text: 'Satış bedelinden; endekslenmiş alış maliyeti, satıcının ödediği tapu harcı ve varsa mülkün satışına yönelik doğrudan yapılan masraflar (ilan, ekspertiz giderleri vb.) düşülerek net kar (safi kazanç) elde edilir.'
      },
      {
        type: 'heading',
        text: 'Adım 3: Yıllık İstisna Tutarının Düşülmesi'
      },
      {
        type: 'paragraph',
        text: 'Her yıl devlet tarafından belirlenen yasal bir muafiyet sınırı vardır. Safi kazanç bu istisna tutarını aşmıyorsa beyanname verilmez. Aşıyorsa, istisna tutarı kardan düşülerek "Vergi Matrahı" hesaplanır. 2026 yılı için değer artış kazancı istisna tutarı 150.000 TL olarak belirlenmiştir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: '2026 Yılı İstisna Tutarı: ',
            text: '150.000 TL (2025 yılı satışları için bu tutar 120.000 TL olarak uygulanmıştır). (Kaynak: Gelir İdaresi Başkanlığı, 2026 Yılı Gelir Vergisi Tarifesi ve İstisna Tutarları Sirküleri)'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Adım 4: Gelir Vergisi Tarifesinin Uygulanması'
      },
      {
        type: 'paragraph',
        text: 'İstisna düşüldükten sonra kalan matrah, o yılın ücret dışı gelirler için geçerli olan artan oranlı gelir vergisi dilimlerine (%15\'ten başlayıp %40\'a varan oranlar) tabi tutularak ödenecek net vergi belirlenir.'
      },
      {
        type: 'heading',
        text: '3. Güncel Hesaplama Örneği'
      },
      {
        type: 'paragraph',
        text: 'Sürecin daha net anlaşılması için hipotetik bir senaryo üzerinden hesaplama yapalım:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Alış Tarihi ve Bedeli: ',
            text: 'Ocak 2022 / 2.000.000 TL'
          },
          {
            bold: 'Satış Tarihi ve Bedeli: ',
            text: 'Nisan 2026 / 8.000.000 TL'
          },
          {
            bold: 'Varsayım: ',
            text: 'İlgili dönemdeki Yİ-ÜFE artış oranının %100 olduğunu kabul edelim (Katsayı: 2.0).'
          }
        ]
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Gayrimenkul Satış Bedeli: ',
            text: '8.000.000 TL'
          },
          {
            bold: 'Endekslenmiş Maliyet Bedeli: ',
            text: '2.000.000 TL x 2.0 = 4.000.000 TL'
          },
          {
            bold: 'Ödenen Tapu Harcı ve Giderler (Örn): ',
            text: '100.000 TL'
          },
          {
            bold: 'Safi Kazanç (Net Kar): ',
            text: '8.000.000 - (4.000.000 + 100.000) = 3.900.000 TL'
          },
          {
            bold: '2026 Yılı Yasal İstisna Tutarı: ',
            text: '150.000 TL'
          },
          {
            bold: 'Vergiye Tabi Matrah: ',
            text: '3.900.000 - 150.000 = 3.750.000 TL'
          }
        ]
      },
      {
        type: 'paragraph',
        text: 'Bulunan 3.750.000 TL\'lik matrah, 2026 yılı gelir vergisi dilimlerine göre kademeli olarak vergilendirilir ve ödenecek nihai gelir vergisi ortaya çıkar.'
      },
      {
        type: 'heading',
        text: 'Beyan ve Ödeme Dönemi Ne Zamandır?'
      },
      {
        type: 'paragraph',
        text: 'Bir takvim yılı içinde (örneğin 2026 yılında) yapılan vergiye tabi gayrimenkul satışlarının beyannamesi, ertesi yılın Mart ayı (1-31 Mart 2027) sonuna kadar Gelir İdaresi Başkanlığı\'nın Hazır Beyan Sistemi üzerinden dijital olarak veya vergi dairesine elden verilir. Hesaplanan vergi genellikle Mart ve Temmuz aylarında iki eşit taksitte ödenir.'
      },
      {
        type: 'heading',
        text: 'Sonuç'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul alım-satım süreçlerinde tapu harcını düşük göstermek veya rayiç bedel oyunlarına başvurmak, idarenin geriye dönük banka kayıtları ve gayrimenkul ekspertiz raporları üzerinden yaptığı incelemelerle kolayca tespit edilmektedir. Satış öncesinde cezai yaptırımlarla karşılaşmamak ve yasal haklarınızı (endeksleme, gider indirimi vb.) doğru kullanabilmek adına, süreci bölgenizde uzman kurumsal bir gayrimenkul danışmanı ve mali müşavir ortaklığıyla yürütmeniz finansal güvenliğiniz açısından en doğru adımdır.'
      }
    ]
  },
  {
    slug: 'pendik-gayrimenkul-yatirimi-icin-hala-kazancli-mi-2026-yili-pazar-analizi',
    title: 'Pendik Gayrimenkul Yatırımı İçin Hala Kazançlı mı? 2026 Yılı Pazar Analizi',
    author: 'Mahir Akar',
    date: '2026-06-13',
    category: 'Piyasa Analizi',
    readTime: '9 dk',
    excerpt: 'Pendik satılık daire ve arsa piyasası, 2026 yılında yatırımcısına hala yüksek getiri vaat ediyor mu? Metrekare fiyatları, amortisman süreleri ve bölge bazlı yatırım fırsatları.',
    keywords: 'Pendik gayrimenkul, Pendik yatırım, Pendik emlak piyasası, Pendik satılık daire, Pendik konut fiyatları 2026, Pendik amortisman süresi, Pendik metrekare fiyatı, Kurtköy yatırım',
    content: [
      {
        type: 'paragraph',
        text: 'Pendik, İstanbul\'un Anadolu Yakası\'nda lojistik, ulaşım ve yaşam merkezlerinden birine dönüşen, 2026 yılında da gayrimenkul yatırımcıları için yüksek getiri potansiyeli sunan bir ilçedir. Geniş fiyat yelpazesi ve multimodal ulaşım ağı ile her bütçeden yatırımcıya hitap etmektedir.'
      },
      {
        type: 'paragraph',
        text: 'İstanbul\'un Anadolu Yakası\'nda son on yılda kabuk değiştiren, sanayi ve varoş kimliğinden sıyrılarak megakentin en büyük lojistik, ulaşım ve yaşam merkezlerinden birine dönüşen Pendik, 2026 yılında da gayrimenkul yatırımcılarının birincil radarı arasındadır. Kredi ve finansman şartlarının sıkılaştığı, alıcıların mülk seçiminde kılı kırk yardığı 2026 konjonktüründe Pendik, sunduğu çeşitlilikle öne çıkmaktadır.'
      },
      {
        type: 'paragraph',
        text: 'Peki, Pendik satılık daire, arsa ve ticari gayrimenkul piyasası 2026 yılında yatırımcısına hala yüksek getiri vaat ediyor mu? Hangi mahalleler prim potansiyeli taşıyor, hangileri doyuma ulaştı? Bu analizde, Pendik emlak pazarını rasyonel ve sayısal verilerle masaya yatırıyoruz.'
      },
      {
        type: 'heading',
        text: '1. 2026 Yılı İtibarıyla Pendik Makro Pazar Verileri'
      },
      {
        type: 'paragraph',
        text: '2026 yılı gayrimenkul endeksleri incelendiğinde Pendik, İstanbul\'un likiditesi (nakde çevrilme hızı) en yüksek ilçelerinden biri olarak dikkat çekmektedir. Pendik, 2026 yılı gayrimenkul endekslerinde İstanbul\'un likiditesi en yüksek ilçelerinden biri olarak öne çıkmaktadır.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Metrekare Birim Fiyatları: ',
            text: 'Pendik\'te konut metrekare satış fiyatları, sahil şeridi ile kuzey aksı (Kurtköy-Yenişehir) arasında ciddi bir makas göstermektedir. 2026 ortalamalarına göre metrekare fiyatları 38.000 TL ile 55.000 TL bandında yoğunlaşmaktadır (Kaynak: İstanbul Gayrimenkul Değerleme Endeksi, 2026 Q1).'
          },
          {
            bold: 'Amortisman (Geri Dönüş) Süreleri: ',
            text: 'Pendik\'te konut geri dönüş süreleri 15 ila 17 yıl arasında değişmektedir (Kaynak: Türkiye Cumhuriyet Merkez Bankası Konut Fiyat Endeksi, Nisan 2026). Bu oran, İstanbul ortalaması olan 22 yılın oldukça altındadır.'
          }
        ]
      },
      {
        type: 'heading',
        text: '2. Pendik Emlak Pazarını 2026\'da Dinamik Kılan Faktörler'
      },
      {
        type: 'paragraph',
        text: 'Pendik\'in yatırım değerini korumasının arkasında tesadüfler değil, devlet ve özel sektör eliyle tamamlanmış makro yatırımlar yer almaktadır:'
      },
      {
        type: 'heading',
        text: 'Multimodal Ulaşım Ağının Kalbi Olması'
      },
      {
        type: 'paragraph',
        text: 'Pendik; Sabiha Gökçen Havalimanı, Pendik Marinası (İDO), Yüksek Hızlı Tren (YHT) istasyonu, M4 Kadıköy-Sabiha Gökçen metrosu ve Kuzey Marmara Otoyolu bağlantılarının tamamına ev sahipliği yapmaktadır. Dünyada ve Türkiye\'de ulaşım akslarının kesiştiği lokasyonlarda gayrimenkul değer kaybı yaşanması yapısal olarak mümkün değildir.'
      },
      {
        type: 'heading',
        text: 'Teknopark İstanbul ve Beyaz Yaka İstihdamı'
      },
      {
        type: 'paragraph',
        text: 'Kurtköy bölgesinde yer alan Teknopark İstanbul, binlerce yüksek teknoloji mühendisine ve savunma sanayii çalışanına istihdam sağlamaktadır. 2026 yılı itibarıyla genişleme etapları devam eden bu merkez, üst ve orta-üst gelir grubundan oluşan nitelikli bir konut alıcı/kiracı kitlesini kalıcı olarak bölgeye çekmektedir.'
      },
      {
        type: 'heading',
        text: 'Kentsel Dönüşüm ve Likidite Gücü'
      },
      {
        type: 'paragraph',
        text: 'Pendik Merkez, Batı ve Doğu mahallelerinde eski yapı stokunun kentsel dönüşümle yenilenmesi, bölgenin çehresini değiştirmektedir. Deprem algısının yüksek olduğu bu dönemde, Pendik\'teki yeni ve deprem yönetmeliğine uygun projelere olan talep organik olarak artmaktadır.'
      },
      {
        type: 'heading',
        text: '3. Bölge Bazlı Pendik Yatırım Haritası: Nereye, Ne Alınmalı?'
      },
      {
        type: 'paragraph',
        text: 'Pendik yüzölçümü ve nüfus yapısı gereği homojen bir pazar değildir. Doğru yatırım için ilçeyi üç ana segmente ayırmak gerekir:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Kurtköy & Yenişehir — 1+1 / 2+1 Rezidans: ',
            text: 'Teknopark, havalimanı ve üniversite çalışanlarının birincil tercihi. Hızlı amortisman ve düzenli kira getirisi hedefleyenler için 2026\'da boş kalma riski en düşük bölge.'
          },
          {
            bold: 'Sahil Hattı (Batı, Doğu, Bahçelievler) — 3+1 / 4+1 Geniş Konut: ',
            text: 'Deniz manzarası, Marina ve YHT avantajı ile oturum amaçlı yüksek bütçeli alıcıların odağında. Prim oranı istikrarlı, likiditesi yüksektir.'
          },
          {
            bold: 'Güllübağlar, Velibaba, Yayalar — Gelişim Aksı: ',
            text: 'Metro hatlarının geçiş güzergahında olan ve kentsel dönüşümün yoğunlaştığı bölgeler. Maksimum sermaye kazancı hedefleyenler için ideal.'
          }
        ]
      },
      {
        type: 'heading',
        text: '4. 2026\'da Pendik\'te Yatırım Yaparken Yönetilmesi Gereken Riskler'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Fiyat Makası ve Köpük Analizi: ',
            text: 'Pendik\'te çok fazla proje alternatifi olması, bazı bölgelerde rayiç bedelin üzerinde agresif fiyatlamalara yol açabilmektedir. Alım yapmadan önce mülkün bölgedeki geçmiş ilanlarla ve gerçekleşen satış tonajlarıyla karşılaştırılması şarttır.'
          },
          {
            bold: 'Sosyal Altyapı Farklılıkları: ',
            text: 'Kuzey aksındaki (Kurtköy) planlı kentleşme ile güneydeki bazı eski mahallelerin plansız yapısı farklı prim grafikleri üretir. Sadece fiyata bakarak "ucuz" mülk almak yerine, gelişme trendi olan caddeler tercih edilmelidir.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Sonuç: 2026\'da Pendik Doğru Bir Yatırım mı?'
      },
      {
        type: 'paragraph',
        text: 'Pendik, 2026 yılında da değerini kaybetmeyecek, aksine İstanbul\'un ticari ve lojistik ağırlığı arttıkça yatırımcısına kazandırmaya devam edecek bir ilçedir.'
      },
      {
        type: 'paragraph',
        text: 'Eğer stratejiniz yüksek kira getirisi ve kısa amortisman süresi ise Kurtköy-Yenişehir aksındaki genç projelere; eğer stratejiniz kentsel dönüşüm avantajıyla alırken kazanmak ve orta vadede yüksek sermaye kazancı elde etmek ise Yayalar-Velibaba-Güllübağlar hattındaki yeni konut projelerine odaklanmalısınız. Pazardaki yoğun ilan kalabalığı arasında doğru mülkü, doğru fiyata ve hukuki pürüzleri ayıklayarak satın almak için Pendik bölgesine hakim profesyonel bir gayrimenkul danışmanı ile çalışmak yatırım başarınızı garantileyecektir.'
      }
    ]
  },
  {
    slug: 'gayrimenkul-ve-emlak-ayni-mi-kavramsal-farklar',
    title: 'Gayrimenkul ve Emlak Aynı Mı? Kavramsal Farklar ve Doğru Kullanım',
    author: 'Mahir Akar',
    date: '2026-06-17',
    category: 'Gayrimenkul Rehberi',
    readTime: '7 dk',
    excerpt: 'Gayrimenkul ve emlak kavramları günlük dilde sıklıkla birbirinin yerine kullanılsa da hukuk, ekonomi ve terminoloji açısından aralarında keskin farklar vardır. Her gayrimenkul bir emlak mıdır? İşte kavramsal ayrımın detaylı analizi.',
    keywords: 'gayrimenkul nedir, emlak nedir, gayrimenkul ve emlak farkı, taşınmaz nedir, mülk kavramı, Türk Medeni Kanunu, gayrimenkul hukuku, emlakçı gayrimenkul danışmanı farkı',
    content: [
      {
        type: 'paragraph',
        text: 'Günlük konuşma dilinde, televizyon haberlerinde, ilan sitelerinde ve hatta sektör profesyonellerinin anlatımlarında "emlak" ve "gayrimenkul" kelimeleri sıklıkla birbirinin yerine, eş anlamlıymış gibi kullanılır. "Emlak ofisi" ile "gayrimenkul danışmanlığı" ya da "emlak endeksi" ile "gayrimenkul yatırımı" ifadeleri zihnimizde aynı algıyı yaratır.'
      },
      {
        type: 'paragraph',
        text: 'Ancak hukuk, ekonomi ve terminoloji pazarında bu iki kavram arasında keskin ve yapısal farklar mevcuttur. Kelimelerin kökenine, yasal karşılıklarına ve kapsama alanlarına bakıldığında, her gayrimenkulün bir emlak olmadığı veya her emlak tanımının gayrimenkulü tam olarak karşılamadığı görülür. Bu rehberde, mülk alım-satım süreçlerinde terminolojiye doğru hakim olmanız adına bu iki kavramın farklarını rasyonel bir çerçevede ele alacağız.'
      },
      {
        type: 'heading',
        text: '1. Kelime Kökenleri ve Temel Tanımlar'
      },
      {
        type: 'paragraph',
        text: 'Kavramsal ayrımı netleştirmek için öncelikle kelimelerin etimolojik (kökenbilimsel) yapılarına ve sözlük karşılıklarına bakmak gerekir.'
      },
      {
        type: 'heading',
        text: 'Emlak Nedir?'
      },
      {
        type: 'paragraph',
        text: '"Emlak" kelimesi, Arapça kökenli bir sözcüktür ve "mülk" kelimesinin çoğuludur. Yani kelime anlamı olarak "mülkler" demektir. İnsanın sahipliği altında bulunan, tasarruf edebileceği, üzerinde hak iddia edebileceği varlıkların bütününü ifade eder. Geleneksel kullanımda toprak ve toprağa bağlı yapılar için kalıplaşmış olsa da, kelime yapısı gereği iyelik ve sahiplik odağı daha baskındır.'
      },
      {
        type: 'heading',
        text: 'Gayrimenkul Nedir?'
      },
      {
        type: 'paragraph',
        text: '"Gayrimenkul" kelimesi de Arapça kökenli bir birleşik sözcüktür. "Menkul" (nakledilebilir, taşınabilir) kelimesinin başına olumsuzluk eki olan "gayri" (olmayan) getirilerek türetilmiştir. Kelime anlamı tam olarak "taşınamaz varlık" demektir. Fiziksel olarak bir yerden bir yere nakledilmesi imkansız olan, sabit duran varlıkları tanımlar.'
      },
      {
        type: 'heading',
        text: '2. Hukuki ve Teknik Açıdan Farklar'
      },
      {
        type: 'paragraph',
        text: 'Türk Medeni Kanunu ve gayrimenkul hukuku çerçevesinde, bu iki kavramın ayrımı net bir şekilde çizilmiştir. Sektörde uzmanlaşmış bir profesyonelin bu ayrımları bilmesi, rasyonel analiz yeteneğinin bir göstergesidir.'
      },
      {
        type: 'heading',
        text: 'Taşınmazlık (Mobilite) Kriteri'
      },
      {
        type: 'paragraph',
        text: 'Bu iki kavram arasındaki en temel fark, taşınabilirlik yani mobilite kriteridir. Taşınmazlık kavramı, gayrimenkulün tanımını doğrudan belirlerken emlak kavramı daha geniş bir yelpazeyi kapsar.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Gayrimenkul (Taşınmaz): ',
            text: 'Fiziksel olarak taşınması mümkün olmayan unsurları kapsar. Türk Medeni Kanunu\'na göre gayrimenkulün tanımı; arazi, tapu kütüğünde ayrı sayfaya kaydedilen bağımsız ve sürekli haklar ile kat mülkiyeti kütüğüne kayıtlı bağımsız bölümlerdir (daire, dükkan vb.). Bir arsayı veya binayı fiziki olarak başka bir şehre taşıyamazsınız.'
          },
          {
            bold: 'Emlak (Mülk): ',
            text: 'Mülkler anlamına geldiği için, hukuki olarak bazen taşınabilir mülk yapısı arz eden unsurlarla da ilişkilendirilebilir. Örneğin, tescilli bir gemi ya da uçak, hukuki işlemleri bakımından (üzerine ipotek konulabilmesi, sicile kaydedilmesi) taşınmaz (gayrimenkul) hükümlerine tabi tutulsa da fiziki olarak taşınabilir bir mülktür (emlaktır).'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Kapsam ve Üst Küme İlişkisi'
      },
      {
        type: 'paragraph',
        text: 'Matematiksel bir küme mantığıyla yaklaşıldığında; gayrimenkul, emlak kavramının teknik, hukuki ve sınırları net çizilmiş bir alt kümesidir.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Temel Kural: ',
            text: 'Her gayrimenkul (taşınmaz) sahibinin bir mülkü olduğu için aynı zamanda bir emlaktır. Ancak kavramsal olarak her mülkiyet (emlak) yapısı, saf anlamda bir gayrimenkulün fiziksel özelliklerini taşımak zorunda değildir.'
          }
        ]
      },
      {
        type: 'heading',
        text: '3. Sektörel ve Ticari Kullanımdaki Algı Farkı'
      },
      {
        type: 'paragraph',
        text: 'Ticari pazarda ve mesleki unvanlarda bu iki kelimenin seçimi, sunulan hizmetin derinliğini ve vizyonunu da simgeler. Emlakçılık genellikle yerel pazar, anlık alım-satım ve kiralama aracılık işlemlerine odaklanırken, gayrimenkul danışmanlığı finansal analiz, yatırım geri dönüşü (amortisman), pazar trendleri ve hukuki süreç yönetimini kapsar.'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Odak Noktası: ',
            text: 'Emlakçılık genellikle yerel pazar ve anlık alım-satım işlemlerine odaklanır. Gayrimenkul danışmanlığı ise finansal analiz, yatırım geri dönüşü (amortisman), pazar trendleri ve hukuki süreç yönetimini kapsar.'
          },
          {
            bold: 'Mesleki Yaklaşım: ',
            text: 'Emlakçılık geleneksel portföy yönetimi ve fiziki pazarlama odaklıdır. Gayrimenkul danışmanlığı veriye dayalı gayrimenkul ekspertiz, pazar analizi ve uzun vadeli varlık yönetimi odaklıdır.'
          },
          {
            bold: 'Hukuki Zemin: ',
            text: 'Emlakçılık alıcı ve satıcıyı buluşturma (aracılık) sözleşmeleri ağırlıklıdır. Gayrimenkul danışmanlığı kat mülkiyeti, imar mevzuatı, değer artış kazancı vergisi gibi makro yasal süreçleri kapsar.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Sonuç: Hangisini Kullanmalıyız?'
      },
      {
        type: 'paragraph',
        text: 'Eğer bir arsa, daire, dükkan veya plaza gibi fiziksel olarak yere sabitlenmiş bir mülkün yatırım potansiyelinden, yasal statüsünden ve finansal değerlemesinden bahsediyorsak doğru teknik terim "gayrimenkul"dür. Finansal analizlerde, tapu süreçlerinde ve kurumsal raporlamalarda "gayrimenkul" kelimesinin kullanılması rasyonel ve profesyonel yaklaşımın bir gereğidir. "Emlak" kelimesi ise daha çok halk dilindeki genel mülkiyet durumunu ve geleneksel alım-satım operasyonlarını tanımlayan pratik bir karşılık olarak kalmaktadır.'
      },
      {
        type: 'heading',
        text: 'Emlakçı ile gayrimenkul danışmanı arasındaki fark nedir?'
      },
      {
        type: 'paragraph',
        text: 'Emlakçı genellikle alım-satım aracılığı odaklı çalışırken, gayrimenkul danışmanı veriye dayalı analiz, pazar araştırması ve yatırım danışmanlığı hizmeti sunar. Gayrimenkul danışmanı, müşterisine finansal analizler, bölgesel trend raporları ve hukuki süreç yönetimi gibi katma değerli hizmetler sağlar. Bu nedenle sektörde uzmanlaşmış bir gayrimenkul danışmanı, yalnızca aracılık değil, aynı zamanda stratejik varlık yönetimi hizmeti de vermektedir.'
      },
      {
        type: 'heading',
        text: 'Gayrimenkul alırken nelere dikkat etmeliyim?'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul alırken öncelikle mülkün tapu durumu, imar statüsü ve üzerinde herhangi bir haciz veya ipotek olup olmadığı kontrol edilmelidir. Ayrıca bölgenin amortisman süresi, ulaşım altyapısı ve sosyal donatı alanları gibi faktörler de uzun vadeli yatırım getirisi açısından değerlendirilmelidir. Profesyonel bir gayrimenkul danışmanından karşılaştırmalı piyasa analizi (CMA) almak, doğru fiyatı belirlemenin en güvenilir yoludur.'
      },
      {
        type: 'heading',
        text: 'Emlak ve gayrimenkul terimleri hukuken aynı şeyi mi ifade eder?'
      },
      {
        type: 'paragraph',
        text: 'Hayır, hukuken aynı şeyi ifade etmezler. Gayrimenkul, Türk Medeni Kanunu\'nda taşınmaz olarak tanımlanır ve fiziksel olarak taşınamayan varlıkları kapsar. Emlak ise mülkiyet kavramına odaklanır ve kapsamı gayrimenkule göre daha geniştir. Her gayrimenkul bir emlak iken, her emlak gayrimenkul olmayabilir. Bu ayrım, özellikle tapu işlemlerinde, vergi hesaplamalarında ve hukuki süreçlerde kritik önem taşır.'
      }
    ]
  },
  {
    slug: 'emlakci-ve-gayrimenkul-danismani-arasindaki-farklar',
    title: 'Emlakçı ve Gayrimenkul Danışmanı Arasındaki Farklar: Hangisini Tercih Etmelisiniz?',
    author: 'Mahir Akar',
    date: '2026-06-20',
    category: 'Gayrimenkul Rehberi',
    readTime: '8 dk',
    excerpt: 'Emlakçı ile gayrimenkul danışmanı arasındaki temel farkları keşfedin. İş yapış modeli, veri analizi, pazarlama gücü ve hukuki donanım açısından hangi profesyonel sizin için doğru seçim?',
    keywords: 'emlakçı ve gayrimenkul danışmanı farkı, emlakçı nedir, gayrimenkul danışmanı nedir, emlakçı gayrimenkul danışmanı karşılaştırması, profesyonel emlak hizmeti, gayrimenkul danışmanı avantajları, emlakçı komisyonu, gayrimenkul yatırım danışmanlığı',
    content: [
      {
        type: 'heading',
        text: 'Emlakçı ve Gayrimenkul Danışmanı: Temel Farklar'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul sektöründe "emlakçı" ve "gayrimenkul danışmanı" unvanları sıklıkla birbirinin yerine kullanılsa da, iş yapış modeli, veriye yaklaşım, pazarlama gücü ve hukuki donanım açısından aralarında çok ciddi yapısal farklar bulunur. Doğru unvanı ve doğru iş ortağını seçmek, binlerce liralık finansal kayıpların önüne geçmek ve zamanı doğru yönetmek anlamına gelir. Bu rehberde, geleneksel emlakçılık ile modern gayrimenkul danışmanlığı arasındaki temel farkları kapsamlı bir şekilde inceliyoruz.'
      },
      {
        type: 'heading',
        text: '1. İş Yapış Modeli: İşlem Odaklılık vs. İlişki ve Süreç Odaklılık'
      },
      {
        type: 'paragraph',
        text: 'İki unvan arasındaki en belirgin fark, müşteriye ve mülke bakış açısındaki felsefede yatar. Emlakçı genellikle işlem odaklı çalışır; temel amaç portföyündeki mülkü en hızlı şekilde bir alıcıyla buluşturup satmak veya kiralamak, ardından komisyonu alarak süreci kapatmaktır. İlişki, işlemin tamamlanmasıyla son bulma eğilimindedir.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanı ise süreç ve ilişki odaklı çalışır. Sadece anlık bir satış operasyonu yürütmez; müşterisinin varlık yönetimini üstlenir. Mülk sahibinin veya yatırımcının finansal hedeflerini analiz eder, onlara uzun vadeli bir gayrimenkul stratejisi sunar. İşlem bitse dahi hukuki, mali ve dönemsel analizlerle danışmanlık hizmetini sürdürür.'
      },
      {
        type: 'heading',
        text: '2. Veri, Analiz ve Ekspertiz Yaklaşımı'
      },
      {
        type: 'paragraph',
        text: 'Bir mülke fiyat biçilirken ve pazar analizi yapılırken iki tarafın kullandığı araçlar tamamen farklıdır. Emlakçı fiyat belirlerken genellikle bölgedeki diğer ilan sitelerine bakar ya da kişisel tecrübesine ve kulaktan dolma piyasa duyumlarına güvenir. Bu durum, mülkün ya çok yüksek fiyatlanarak pazarda eskiyen bir ilana dönüşmesine ya da değerinin altında satılarak mülk sahibinin zarar etmesine yol açar.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanı ise bilimsel ve verilere dayalı gayrimenkul ekspertiz yöntemlerini kullanır. Karşılaştırmalı Piyasa Analizi (CMA) raporları hazırlar. Bölgedeki sadece istenen fiyatları değil, tapuda gerçekleşen gerçek kapanış rakamlarını, bölgenin amortisman sürelerini ve arz-talep dengesini analiz ederek mülk için en rasyonel satış fiyatını belirler.'
      },
      {
        type: 'heading',
        text: '3. Pazarlama Gücü ve Teknoloji Kullanımı'
      },
      {
        type: 'paragraph',
        text: 'Bir mülkün ne kadar geniş bir kitleye, ne kadar kaliteli sunulduğu satış hızını ve nihai satış bedelini doğrudan etkiler. Emlakçı geleneksel pazarlama yöntemlerini kullanır; ofis camına ilan asmak, standart cep telefonu fotoğraflarıyla ilan sitelerine yükleme yapmak ve tanıdık çevresine haber vermekle sınırlı bir operasyon yürütür.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanı ise profesyonel ve çok kanallı bir pazarlama planı uygular. Geniş açılı lensler, drone çekimleri ve 3D sanal turlar ile mülkün dijital sunumunu en üst seviyeye çıkarır. Gelişmiş CRM veri tabanlarını kullanır, sosyal medya algoritmaları üzerinden hedef kitle reklamcılığı yapar ve mülkü diğer profesyonellerin de havuzuna açarak satış ihtimalini çarpan etkisiyle artırır.'
      },
      {
        type: 'heading',
        text: '4. Hukuki Mevzuat ve Finansal Donanım'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul ticareti; vergi hukuku, borçlar kanunu ve imar mevzuatları gibi oldukça teknik detaylar barındırır. Emlakçı genellikle standart, kırtasiye usulü sözleşmelerle süreci yürütür. Mevzuattaki anlık değişimleri, tapu süreçlerindeki dijital yenilikleri ya da karmaşık vergi yükümlülüklerini derinlemesine analiz etmekte yetersiz kalabilir.'
      },
      {
        type: 'paragraph',
        text: 'Gayrimenkul danışmanı sürekli mesleki eğitimlerden geçer. Güncel imar durumlarına, değer artış kazancı vergisi hesaplamalarına, tapu harcı muafiyetlerine ve doğru tahliye taahhütnamesi süreçlerine hakimdir. Alıcı ve satıcı arasındaki tüm finansal transfer yöntemlerini yasal mevzuata uygun, şeffaf ve güvenli bir şekilde yöneterek tarafları hukuki risklerden korur.'
      },
      {
        type: 'heading',
        text: 'Karşılaştırma Tablosu: Emlakçı vs. Gayrimenkul Danışmanı'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Temel Hedef — Emlakçı: ',
            text: 'Sadece mülkü satmak veya kiralamak. Gayrimenkul Danışmanı: Müşterinin varlığını ve kârını optimize etmek.'
          },
          {
            bold: 'Fiyatlandırma — Emlakçı: ',
            text: 'Tecrübeye veya hisse dayalı tahmini fiyat. Gayrimenkul Danışmanı: Veriye dayalı Karşılaştırmalı Piyasa Analizi (CMA).'
          },
          {
            bold: 'Pazarlama — Emlakçı: ',
            text: 'İlan siteleri ve ofis camı afişleri. Gayrimenkul Danışmanı: Dijital reklamcılık, drone çekimleri, hedef kitle analizi ve MLS ağı.'
          },
          {
            bold: 'Müşteri Filtreleme — Emlakçı: ',
            text: 'Arayan her adaya evi gösterme trafiği. Gayrimenkul Danışmanı: Findeks raporu ve bütçe analizi ile nitelikli alıcı veya kiracı seçimi.'
          },
          {
            bold: 'Hukuki Donanım — Emlakçı: ',
            text: 'Sektörel alışkanlıklara dayalı yönetim. Gayrimenkul Danışmanı: Güncel Borçlar Kanunu, Vergi Mevzuatı ve Tapu Hukuku hakimiyeti.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Sonuç: Hangisini Tercih Etmelisiniz?'
      },
      {
        type: 'paragraph',
        text: 'Emlakçılık, mülk ile alıcı arasında fiziksel bir köprü kurma işiyken; gayrimenkul danışmanlığı, finans, hukuk, pazarlama ve kriz yönetimi disiplinlerinin bir arada sunulduğu profesyonel bir hizmet bütünüdür. Mülkünüzü şansa bırakmamak, doğru alıcı veya kiracı profiliyle, hukuki altyapısı hatasız ve maksimum kazançla süreci tamamlamak istiyorsanız, geleneksel bir emlakçı yerine bölgenizde uzmanlaşmış kurumsal bir gayrimenkul danışmanı ile stratejik ortaklık kurmak en akılcı ticari karardır.'
      },
      {
        type: 'heading',
        text: 'Emlakçı ile gayrimenkul danışmanı arasındaki temel fark nedir?'
      },
      {
        type: 'paragraph',
        text: 'Emlakçı işlem odaklı çalışır ve temel hedefi mülkü en hızlı şekilde satmak veya kiralamaktır. Gayrimenkul danışmanı ise süreç ve ilişki odaklıdır; müşterisinin uzun vadeli varlık yönetimini üstlenir, finansal hedefleri analiz eder, veriye dayalı fiyatlandırma yapar ve işlem sonrasında da hukuki ve mali danışmanlık hizmeti sunmaya devam eder.'
      },
      {
        type: 'heading',
        text: 'Gayrimenkul danışmanına komisyon ödemek mantıklı mı?'
      },
      {
        type: 'paragraph',
        text: 'Evet, gayrimenkul danışmanına ödenen komisyon bir masraf değil, yatırımdır. Profesyonel bir danışman, doğru fiyatlandırma stratejisi ile mülkünüzün değerinin altında satılmasını engeller, geniş pazarlama ağı sayesinde satış süresini kısaltır ve hukuki süreçleri hatasız yöneterek olası cezai yaptırımların önüne geçer. Ulusal Emlakçılar Birliği (NAR) verilerine göre, profesyonel destek alan mülkler bireysel satışlara kıyasla ortalama %12 daha yüksek satış bedeline ulaşmaktadır.'
      },
      {
        type: 'heading',
        text: 'Hangi durumda emlakçı, hangi durumda gayrimenkul danışmanı tercih edilmelidir?'
      },
      {
        type: 'paragraph',
        text: 'Basit ve acil bir kiralama veya satış işlemi için yerel bir emlakçı yeterli olabilir. Ancak yatırım amaçlı gayrimenkul alım-satımı, yüksek bütçeli mülklerin pazarlanması, hukuki risklerin yönetilmesi veya uzun vadeli bir gayrimenkul portföyü oluşturulması söz konusu olduğunda mutlaka profesyonel bir gayrimenkul danışmanı ile çalışmak gerekir. Danışmanlık hizmeti, özellikle değer artış kazancı vergisi, imar mevzuatı ve kentsel dönüşüm gibi karmaşık konularda kritik önem taşır.'
      }
    ]
  },
  {
    slug: 'tarla-gayrimenkul-sayilir-mi-hukuki-ve-finansal-acidan-arsa-tarla-statusu',
    title: 'Tarla Gayrimenkul Sayılır Mı? Hukuki ve Finansal Açıdan Arsa-Tarla Statüsü',
    author: 'Mahir Akar',
    date: '2026-06-24',
    category: 'Gayrimenkul Rehberi',
    readTime: '7 dk',
    excerpt: 'Tarla, Türk Medeni Kanunu\'na göre gayrimenkul statüsündedir. TMK 704. madde kapsamında arazi olarak tanımlanan tarlanın arsadan farkı, yatırım avantajları ve risk yönetimi hakkında kapsamlı rehber.',
    keywords: 'tarla gayrimenkul sayılır mı, tarla gayrimenkul mü, tarla arsa farkı, tarla yatırımı, tarla tapusu, tarla hukuki statüsü, arsa tarla dönüşümü, imar kanunu 18. madde, tarla alırken dikkat edilecekler, TMK 704',
    content: [
      {
        type: 'paragraph',
        text: 'Gayrimenkul ve mülkiyet hukukuyla ilgili en çok kafa karışıklığı yaratan konulardan biri de toprak türlerinin yasal statüsüdür. Ev, dükkan, plaza veya apartman gibi insan eliyle yapılmış somut yapılar doğrudan "gayrimenkul" olarak kabul edilirken; üzerinde herhangi bir yapı bulunmayan, tarımsal faaliyetler için kullanılan boş bir tarla gayrimenkul sayılır mı? Bu sorunun cevabı hem hukuki literatürde hem de finansal piyasalarda çok net ve kesin bir şekilde evet, tarla bir gayrimenkuldür. Kavramın yasal dayanaklarını, arsa ile tarla arasındaki farkları ve bir yatırım enstrümanı olarak tarlanın gayrimenkul pazarındaki yerini rasyonel bir çerçevede inceleyelim.'
      },
      {
        type: 'heading',
        text: '1. Hukuki Açıdan Tarla Neden Gayrimenkuldür?'
      },
      {
        type: 'paragraph',
        text: 'Bir varlığın gayrimenkul (taşınmaz) statüsünde olup olmadığını belirleyen yegane merci Türk Medeni Kanunu\'dur (TMK). TMK\'nın 704. maddesinde taşınmaz mülkiyetinin (gayrimenkulün) konusu açıkça belirtilmiştir. Bu maddeye göre şu unsurlar yasal olarak gayrimenkul kabul edilir:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: '',
            text: 'Araziler'
          },
          {
            bold: '',
            text: 'Tapu kütüğünde ayrı sayfaya kaydedilen bağımsız ve sürekli haklar'
          },
          {
            bold: '',
            text: 'Kat mülkiyeti kütüğüne kayıtlı bağımsız bölümler'
          }
        ]
      },
      {
        type: 'paragraph',
        text: 'Tarla, özü itibarıyla sınırları hukuki ve teknik yöntemlerle belirlenmiş bir arazi parçasıdır. Fiziksel olarak bir yerden başka bir yere nakledilmesi (taşınması) imkansızdır. Kendine ait bir tapu kaydı bulunur ve mülkiyet hakları tapu sicili üzerinden devredilir. Dolayısıyla tarla, gayrimenkul hukukunun en temel ve yalın taşınmaz (gayrimenkul) örneklerinden biridir.'
      },
      {
        type: 'heading',
        text: '2. Tarla ile Arsa Arasındaki Gayrimenkul Farkı Nedir?'
      },
      {
        type: 'paragraph',
        text: 'Her ikisi de gayrimenkul kategorisinde yer alsa da, tarla ve arsa arasında imar hukuku ve kullanım amacı bakımından çok keskin yapısal farklar bulunur. Gayrimenkul piyasasında rasyonel bir yatırım yapmak isteyenlerin bu farkı iyi bilmesi gerekir:'
      },
      {
        type: 'table',
        headers: ['Özellik', 'Tarla (Geniş Arazi)', 'Arsa (İmarlı Toprak)'],
        rows: [
          ['Yasal Statü', 'İmar planı olmayan, tarımsal nitelikli arazidir.', 'Belediye tarafından imar planı sınırları içine alınmış topraktır.'],
          ['Yapılaşma İzni', 'Üzerine apartman, dükkan veya standart konut yapılamaz. Sadece belirli şartlarda (bağ evi, tarımsal depo vb.) çok sınırlı izin verilir.', 'İmar durum belgesine göre (konut, ticari, sanayi) üzerine yasal olarak bina inşa edilebilir.'],
          ['Tapu Türü', 'Genellikle "Hisse Tapu" veya "Müstakil Tarla Tapusu" olarak geçer.', '"Arsa Tapusu" veya kat irtifakı kurulmuşsa "Arsa Paylı" tapu olarak geçer.'],
          ['Değer Oranı', 'Giriş maliyeti düşüktür, uzun vadeli yatırım için uygundur.', 'Metrekare birim fiyatı yüksektir, likiditesi (nakde çevrilme hızı) daha fazladır.']
        ]
      },
      {
        type: 'paragraph',
        text: 'Önemli Dönüşüm: Bir tarlanın belediye sınırları ve kentsel gelişim aksı dahilinde imar uygulamasına (3194 sayılı İmar Kanunu\'nun 18. maddesi) tabi tutulmasıyla, o tarla artık arsa statüsüne kavuşur. Bu dönüşüm, gayrimenkulün değerini çarpan etkisiyle artıran en büyük etkendir.'
      },
      {
        type: 'heading',
        text: '3. Bir Yatırım Enstrümanı Olarak Tarlanın Avantajları'
      },
      {
        type: 'paragraph',
        text: 'Tarlanın yasal bir gayrimenkul olması, onu özellikle uzun vadeli sermaye kazancı (prim) hedefleyen yatırımcılar için çok güçlü bir araç haline getirir:'
      },
      {
        type: 'bulletList',
        items: [
          {
            bold: 'Düşük Giriş Maliyeti: ',
            text: 'Bitmiş bir konut veya imarlı bir arsa almaya bütçesi yetmeyen yatırımcılar için tarla, gayrimenkul pazarına giriş biletidir.'
          },
          {
            bold: 'Yüksek Prim Potansiyeli: ',
            text: 'Şehrin büyüme yönünde, gelecekte imara açılma potansiyeli olan stratejik bir lokasyondan alınan tarla, imar planı geldiği andan itibaren arsa statüsü kazanarak sahibine çok yüksek sermaye kazançları sunabilir.'
          },
          {
            bold: 'Vergi Avantajları: ',
            text: 'Yapılı mülklere veya kentsel arsalara kıyasla yıllık emlak vergisi oranları oldukça düşüktür.'
          }
        ]
      },
      {
        type: 'heading',
        text: 'Sonuç: Tarla Alırken Risk Yönetimi'
      },
      {
        type: 'paragraph',
        text: 'Tarla kesinlikle bir gayrimenkuldür ve doğru seçildiğinde en kazançlı taşınmaz yatırımlarından biridir. Ancak tarla yatırımı yaparken mülkün üzerinde sit alanı şerhi, tapu kaydında rehin/haciz olup olmadığı, kadastral (resmi) yola cephesinin bulunup bulunmadığı gibi teknik detaylar mutlaka incelenmelidir.'
      },
      {
        type: 'paragraph',
        text: 'Alım satım süreçlerinde finansal kayıplar yaşamamak ve doğru bölge analiziyle geleceğe yönelik kazançlı bir projeksiyon oluşturmak için, bölgedeki arazi piyasasına hakim profesyonel bir gayrimenkul danışmanından gayrimenkul ekspertiz desteği almak en doğru ticari adımdır.'
      }
    ]
  }
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articles.map(a => a.slug);
}

articles.forEach(a => {
  if (!a.excerpt) {
    const firstTextBlock = a.content.find(b => b.type === 'paragraph');
    a.excerpt = firstTextBlock ? truncateExcerpt(firstTextBlock.text) : '';
  }
});
