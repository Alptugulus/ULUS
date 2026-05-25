import type { ServiceCategory, SectionContent } from "@/types/content";

export const servicesHub: SectionContent = {
  overline: "HİZMETLER",
  title: "Markanız için uçtan uca dijital çözümler",
  description:
    "Dört uzmanlık alanında strateji, üretim ve performansı tek elde sunuyoruz. İhtiyacınıza göre tek hizmet veya entegre paket seçebilirsiniz.",
  cta: { label: "Proje Başlat", href: "/iletisim" },
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "web-dijital",
    title: "Web & Dijital Altyapı",
    shortDescription:
      "Hızlı, güvenilir ve dönüşüm odaklı dijital temeller.",
    card: {
      lead:
        "Kurumsal webden e-ticarete, kampanya landing page'lerinden QR menüye — markanızın dijital vitrinini hız, SEO ve dönüşüm odaklı kuruyoruz.",
      tags: ["Kurumsal web", "E-ticaret", "Landing page", "QR menü", "Özel yazılım"],
      highlights: [
        "Mobil öncelikli, Core Web Vitals uyumlu altyapı",
        "CMS ve entegrasyonlarla yönetilebilir yapı",
        "Reklam trafiğine hazır dönüşüm hunisi",
      ],
      metric: { value: "2.4 sn", label: "hedef LCP süresi" },
    },
    heroTitle: "Güçlü dijital altyapı, güçlü ilk izlenim",
    heroDescription:
      "Kurumsal kimliğinizi yansıtan web sitelerinden e-ticarete, landing page'lerden özel dijital çözümlere — teknik altyapı ve tasarımı birlikte kurguluyoruz.",
    audience:
      "Kurumsal firmalar, KOBİ'ler, e-ticaret markaları, restoran ve hizmet sektörü.",
    cta: { label: "Web Projeni Konuşalım", href: "/iletisim" },
    services: [
      {
        title: "Kurumsal web siteleri",
        description:
          "Markanıza özel, ölçeklenebilir ve yönetilebilir kurumsal web deneyimi.",
      },
      {
        title: "One page web siteleri",
        description:
          "Tek sayfada net mesaj, hızlı yükleme ve güçlü dönüşüm akışı.",
      },
      {
        title: "E-ticaret siteleri",
        description:
          "Satış odaklı mağaza yapısı, ödeme entegrasyonu ve mobil uyum.",
      },
      {
        title: "Landing page tasarımları",
        description:
          "Kampanya ve reklam trafiği için optimize edilmiş dönüşüm sayfaları.",
      },
      {
        title: "QR menü sistemleri",
        description:
          "Restoran ve kafe işletmeleri için modern, güncellenebilir dijital menü.",
      },
      {
        title: "Özel dijital çözümler",
        description:
          "İhtiyaca özel panel, entegrasyon ve dijital araç geliştirme.",
      },
    ],
    seo: {
      title: "Web & Dijital Altyapı",
      description:
        "Kurumsal web, e-ticaret, landing page ve özel dijital çözümler. ULUS MEDIA ile güçlü dijital altyapı.",
    },
  },
  {
    slug: "reklam-buyume",
    title: "Reklam & Büyüme",
    shortDescription: "Doğru kanal, doğru bütçe, ölçülebilir büyüme.",
    card: {
      lead:
        "Google ve Meta'da hedef kitle, kreatif ve bütçeyi veriye dayalı yönetiyoruz; her kampanyayı ROAS ve lead maliyetine göre sürekli optimize ediyoruz.",
      tags: ["Google Ads", "Meta Ads", "Performans", "CRO", "Remarketing"],
      highlights: [
        "Kanal ve bütçe karması için net büyüme planı",
        "Haftalık optimizasyon ve şeffaf raporlama",
        "Landing page + form hunisi ile birlikte çalışma",
      ],
      metric: { value: "3.2×", label: "ortalama ROAS hedefi" },
    },
    heroTitle: "Reklam bütçenizi sonuca dönüştürün",
    heroDescription:
      "Google ve Meta reklamlarından dönüşüm optimizasyonuna — veriye dayalı kampanyalarla görünürlüğünüzü ve satışlarınızı artırıyoruz.",
    audience:
      "E-ticaret, hizmet sektörü, yerel işletmeler, büyüme hedefli markalar.",
    cta: { label: "Reklam Stratejisi Al", href: "/iletisim" },
    services: [
      {
        title: "Google Ads yönetimi",
        description:
          "Arama ve display ağlarında hedefli, ölçülebilir kampanyalar.",
      },
      {
        title: "Meta Ads yönetimi",
        description: "Instagram ve Facebook'ta doğru kitle, doğru kreatif.",
      },
      {
        title: "Performans reklamları",
        description:
          "CPA, ROAS ve dönüşüm metriklerine odaklı sürekli optimizasyon.",
      },
      {
        title: "Dönüşüm optimizasyonu",
        description:
          "Landing page, form ve huni iyileştirmeleriyle daha fazla lead.",
      },
      {
        title: "Remarketing stratejileri",
        description:
          "Ziyaretçiyi geri kazanın, satın alma kararını hızlandırın.",
      },
    ],
    seo: {
      title: "Reklam & Büyüme",
      description:
        "Google Ads, Meta Ads ve performans reklamları. Ölçülebilir dijital büyüme.",
    },
  },
  {
    slug: "sosyal-medya-icerik",
    title: "Sosyal Medya & İçerik",
    shortDescription:
      "Markanızı konuşturan içerik, tutarlı sosyal varlık.",
    card: {
      lead:
        "Sosyal medya yönetiminden Reels ve drone prodüksiyonuna — marka dilinize uygun, paylaşılabilir ve reklama hazır içerik üretiyoruz.",
      tags: ["Sosyal yönetim", "Reels", "Drone", "Kreatif", "İçerik planı"],
      highlights: [
        "Aylık editoryal takvim ve onay akışı",
        "Platforma özel format ve hook kurgusu",
        "Reklam kreatifi ile organik içerik uyumu",
      ],
      metric: { value: "12+", label: "aylık prodüksiyon çıktısı" },
    },
    heroTitle: "İçerikle görünür olun, etkileşimle büyüyün",
    heroDescription:
      "Sosyal medya yönetiminden Reels üretimine, drone çekimlerinden kreatif reklam içeriklerine — marka dilinize uygun, paylaşılabilir içerik üretiyoruz.",
    audience:
      "Perakende, restoran, etkinlik, kişisel marka ve kurumsal hesaplar.",
    cta: { label: "İçerik Planı Oluştur", href: "/iletisim" },
    services: [
      {
        title: "Sosyal medya yönetimi",
        description:
          "Planlama, yayın, topluluk yönetimi ve aylık raporlama.",
      },
      {
        title: "İçerik üretimi",
        description:
          "Markanıza özel görsel, metin ve kampanya içerikleri.",
      },
      {
        title: "Reels & kısa video",
        description:
          "Platform algoritmasına uygun, dikkat çeken kısa formatlar.",
      },
      {
        title: "Drone çekimleri",
        description:
          "Mekân, etkinlik ve tanıtım için profesyonel hava çekimleri.",
      },
      {
        title: "Kreatif reklam içerikleri",
        description: "Reklam performansını artıran özgün kreatifler.",
      },
    ],
    seo: {
      title: "Sosyal Medya & İçerik",
      description:
        "Sosyal medya yönetimi, içerik üretimi ve kreatif video. Markanızı dijitalde öne çıkarın.",
    },
  },
  {
    slug: "marka-tasarim",
    title: "Marka & Tasarım",
    shortDescription: "Akılda kalan kimlik, tutarlı görsel dil.",
    card: {
      lead:
        "Logo ve kurumsal kimlikten marka diline, sosyal şablonlardan sunum setine — tüm temas noktalarında tutarlı ve premium bir görünüm inşa ediyoruz.",
      tags: ["Logo", "Kurumsal kimlik", "Marka dili", "Sosyal şablon"],
      highlights: [
        "Kullanım kılavuzu ve dijital asset paketi",
        "Web ve reklam kanallarına uyumlu sistem",
        "Yenileme ve yeni marka lansman süreçleri",
      ],
      metric: { value: "360°", label: "marka dokunuş noktası" },
    },
    heroTitle: "Markanızı ilk bakışta tanınır kılın",
    heroDescription:
      "Logo'dan kurumsal kimliğe, marka dilinden sosyal medya tasarımlarına — dijital ve basılı tüm temas noktalarında tutarlı bir görünüm inşa ediyoruz.",
    audience:
      "Yeni markalar, yenilenen kurumsal kimlikler, franchise ve çok şubeli yapılar.",
    cta: { label: "Marka Kimliği Konuşalım", href: "/iletisim" },
    services: [
      {
        title: "Logo tasarımı",
        description: "Sade, akılda kalıcı ve ölçeklenebilir logo çözümleri.",
      },
      {
        title: "Kurumsal kimlik tasarımı",
        description:
          "Renk, tipografi, kullanım kılavuzu ve kurumsal set.",
      },
      {
        title: "Marka dili oluşturma",
        description:
          "Ton, mesaj ve iletişim çerçevenizin netleştirilmesi.",
      },
      {
        title: "Sosyal medya tasarımları",
        description:
          "Feed, story ve kampanya görsellerinde marka bütünlüğü.",
      },
    ],
    seo: {
      title: "Marka & Tasarım",
      description:
        "Logo, kurumsal kimlik ve marka dili. Tutarlı ve premium marka deneyimi.",
    },
  },
];

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
