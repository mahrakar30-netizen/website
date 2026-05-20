export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bulletList'; items: { bold: string; text: string }[] };

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
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
  const firstTextBlock = a.content.find(b => b.type === 'paragraph');
  a.excerpt = firstTextBlock ? truncateExcerpt(firstTextBlock.text) : '';
});
