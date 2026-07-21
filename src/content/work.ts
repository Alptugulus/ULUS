import type { CaseStudy } from "@/types/content";
import sencanAydinlatmaImg from "@/assets/work/sencan-aydinlatma.jpg";
import sensoryaImg from "@/assets/work/sensorya.jpg";
import aryGrupImg from "@/assets/work/ary-grup-terra-baglica.jpg";
import demirVidanjorImg from "@/assets/work/demir-vidanjor.jpg";
import pedaAtolyeImg from "@/assets/work/peda-atolye.jpg";
import flasKibrisImg from "@/assets/work/flas-kibris.jpg";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sencan-aydinlatma",
    title: "Aydınlatmada dijital vitrin, sürdürülen büyüme",
    client: "Şencan Aydınlatma",
    sector: "Aydınlatma & Elektrik",
    projectType: "Kurumsal Web & Dijital Pazarlama",
    scope: "Web + Reklam + Sosyal Medya",
    services: ["Kurumsal Web Sitesi", "Reklam Yönetimi", "Sosyal Medya Yönetimi"],
    excerpt:
      "LED ve dış mekân aydınlatma ürünleri için sıfırdan kurulan kurumsal web sitesi — reklam yönetimi ve sosyal medya ile birlikte sürdürülüyor.",
    caseNote: "Perakende alıcıları ve proje bazlı B2B taleplerini aynı sitede karşılıyor.",
    coverImage: sencanAydinlatmaImg,
    liveUrl: "https://www.sencanaydinlatma.com/",
    preview: "website",
    layout: "featured",
    year: "2025",
    theme: { accent: "#d97a3f", surface: "#171310" },
  },
  {
    slug: "sensorya",
    title: "Ergoterapi merkezine güven veren dijital yüz",
    client: "Sensorya",
    sector: "Sağlık & Terapi Merkezi",
    projectType: "Kurumsal Web & Dijital Pazarlama",
    scope: "Web + Reklam + Sosyal Medya",
    services: ["Kurumsal Web Sitesi", "Reklam Yönetimi", "Sosyal Medya Yönetimi"],
    excerpt:
      "Ergoterapi ve dil-konuşma terapisi hizmeti veren merkez için sıfırdan kurulan, sıcak ve güven veren bir kurumsal site.",
    caseNote: "Aile odaklı ton ve randevu adımını öne çıkaran sade bir akışla kuruldu.",
    coverImage: sensoryaImg,
    liveUrl: "https://www.sensorya.com.tr/",
    preview: "social",
    layout: "tall",
    year: "2025",
    theme: { accent: "#8fb39c", surface: "#10140f" },
  },
  {
    slug: "ary-grup-terra-baglica",
    title: "Lüks konut projesine sinematik dijital sunum",
    client: "ARY Grup",
    sector: "Gayrimenkul Geliştirme",
    projectType: "Kurumsal Web & Dijital Pazarlama",
    scope: "Web + Reklam + Sosyal Medya",
    services: ["Kurumsal Web Sitesi", "Reklam Yönetimi", "Sosyal Medya Yönetimi"],
    excerpt:
      "Ankara Bağlıca'daki Terra Bağlıca rezidans projesi için sıfırdan kurulan, görsel ağırlıklı bir tanıtım sitesi.",
    caseNote: "Galeri ve proje detaylarıyla satış sürecini uzaktan da ikna edici anlatıyor.",
    coverImage: aryGrupImg,
    liveUrl: "https://www.arygrup.com.tr/",
    preview: "device",
    layout: "tall",
    year: "2025",
    theme: { accent: "#c9a962", surface: "#14120c" },
  },
  {
    slug: "demir-vidanjor",
    title: "7/24 acil hizmete hızlı dijital erişim",
    client: "Demir Vidanjör",
    sector: "Altyapı & Vidanjör Hizmetleri",
    projectType: "Kurumsal Web & Dijital Pazarlama",
    scope: "Web + Reklam + Sosyal Medya",
    services: ["Kurumsal Web Sitesi", "Reklam Yönetimi", "Sosyal Medya Yönetimi"],
    excerpt:
      "İstanbul Avrupa Yakası'nda 7/24 hizmet veren vidanjör firması için sıfırdan kurulan, arama ve WhatsApp'a hızlı erişimi önceliklendiren bir site.",
    caseNote: "Acil ihtiyaç anında en kısa yoldan iletişime geçilebilmesi öncelikli tasarlandı.",
    coverImage: demirVidanjorImg,
    liveUrl: "https://www.demirvidanjor.com/",
    preview: "dashboard",
    layout: "wide",
    year: "2025",
    theme: { accent: "#e0453a", surface: "#120c0c" },
  },
  {
    slug: "peda-atolye",
    title: "Çocuk gelişim atölyesine sıcak bir marka yüzü",
    client: "Peda Atölye",
    sector: "Çocuk & Yetişkin Gelişimi",
    projectType: "Kurumsal Web & Dijital Pazarlama",
    scope: "Web + Reklam + Sosyal Medya",
    services: ["Kurumsal Web Sitesi", "Reklam Yönetimi", "Sosyal Medya Yönetimi"],
    excerpt:
      "Oyun, dil ve danışmanlık atölyeleri sunan merkez için sıfırdan kurulan, oyuncu ve güven veren bir kurumsal site.",
    caseNote: "Ebeveyni ve çocuğu aynı anda düşünen sıcak bir görsel dil kuruldu.",
    coverImage: pedaAtolyeImg,
    liveUrl: "https://www.pedaatolye.com/tr",
    preview: "ads",
    layout: "compact",
    year: "2025",
    theme: { accent: "#f2b134", surface: "#161208" },
  },
  {
    slug: "flas-kibris",
    title: "KKTC'nin haber trafiğini taşıyan altyapıya sürekli destek",
    client: "Flaş Kıbrıs",
    sector: "Haber Medyası",
    projectType: "Yazılım Desteği",
    scope: "Sürekli Geliştirme + Bakım",
    services: ["Yazılım Geliştirme", "Bakım & Destek"],
    excerpt:
      "KKTC odaklı haber portalına sürekli yazılım geliştirme ve bakım desteği veriyoruz — günlük yüksek trafiği kesintisiz karşılayan bir altyapı.",
    caseNote: "Haber akışı, kategori yönetimi ve canlı veri modülleri sürekli güncelleniyor.",
    coverImage: flasKibrisImg,
    liveUrl: "https://flaskibris.com/",
    preview: "website",
    layout: "compact",
    year: "Sürüyor",
    theme: { accent: "#eb5757", surface: "#120d0a" },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
