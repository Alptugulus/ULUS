import { site } from "@/content/site";

export const stickyBar = {
  call: "Ara",
  whatsapp: "WhatsApp",
  cta: "Teklif Al",
};

export const whatsappCtaLabel = "WhatsApp'tan Yaz";

export const whatsappMessage =
  "Merhaba ULUS MEDIA, web sitenizden ulaşıyorum. Projem hakkında bilgi almak istiyorum.";

export const whatsappHref = `https://wa.me/905352026006?text=${encodeURIComponent(
  "Merhaba ULUS MEDIA, web sitenizden ulaşıyorum. Projem hakkında bilgi almak istiyorum."
)}`;

export const contactPage = {
  title: "Projenizi konuşalım",
  description:
    "Ücretsiz ön görüşme ile hedefinizi, kapsamı ve önceliklerinizi netleştirelim. 48 saat içinde size dönüş yapıyoruz.",
  submit: "Görüşme Talebi Gönder",
  success:
    "Teşekkürler! Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.",
  error: `Bir sorun oluştu. Lütfen tekrar deneyin veya ${site.email} adresine yazın.`,
  kvkk: "Kişisel verilerimin KVKK Aydınlatma Metni kapsamında işlenmesini kabul ediyorum.",
};

export const formFields = {
  name: { label: "Ad Soyad", placeholder: "Adınız ve soyadınız" },
  company: { label: "Firma / Marka", placeholder: "Firma veya marka adı" },
  phone: { label: "Telefon", placeholder: "05XX XXX XX XX" },
  email: { label: "E-posta", placeholder: "ornek@firma.com" },
  service: { label: "İlgilendiğiniz hizmet", placeholder: "Seçiniz…" },
  budget: { label: "Tahmini bütçe (opsiyonel)", placeholder: "Seçiniz…" },
  message: {
    label: "Projeniz hakkında",
    placeholder: "Kısaca projenizi ve hedefinizi yazın",
  },
};

export const serviceOptions = [
  "Web & Dijital",
  "Reklam & Büyüme",
  "Sosyal Medya & İçerik",
  "Marka & Tasarım",
  "Birden fazla / Emin değilim",
];

export const notFound = {
  title: "Sayfa bulunamadı",
  description:
    "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.",
  cta: "Ana Sayfaya Dön",
};

export const privacyPage = {
  title: "Gizlilik Politikası",
  description:
    "ULUS MEDIA web sitesi ve iletişim kanalları üzerinden toplanan verilerin nasıl işlendiğini açıklar.",
  sections: [
    {
      title: "Toplanan veriler",
      body: "İletişim formu, e-posta ve telefon üzerinden paylaştığınız ad, firma, iletişim bilgileri ve proje notları; yalnızca talebinizi değerlendirmek ve size dönüş sağlamak amacıyla işlenir.",
    },
    {
      title: "Kullanım amacı",
      body: "Verileriniz teklif hazırlama, görüşme planlama, sözleşme süreçleri ve hizmet sunumu kapsamında kullanılır; pazarlama iletişimi için ayrı onayınız olmadan ticari ileti gönderilmez.",
    },
    {
      title: "Saklama ve güvenlik",
      body: "Veriler yetkisiz erişime karşı makul teknik ve idari önlemlerle korunur; yasal yükümlülükler sona erdiğinde veya talep üzerine silinir ya da anonimleştirilir.",
    },
    {
      title: "Haklarınız",
      body: `KVKK kapsamındaki erişim, düzeltme, silme ve itiraz haklarınızı ${site.email} adresine yazarak kullanabilirsiniz.`,
    },
  ],
};

export const kvkkPage = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla bilgilendirme metni.",
  sections: [
    {
      title: "Veri sorumlusu",
      body: "ULUS MEDIA (ulusmedia.com) kişisel verileriniz bakımından veri sorumlusudur.",
    },
    {
      title: "İşlenen veri kategorileri",
      body: "Kimlik ve iletişim bilgileri, müşteri işlem bilgileri, talep/şikâyet kayıtları ve dijital kanallardan elde edilen işlem güvenliği verileri.",
    },
    {
      title: "İşleme amaçları",
      body: "Hizmet sunumu, müşteri ilişkileri yönetimi, sözleşme süreçleri, mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi ve bilgi güvenliği.",
    },
    {
      title: "Aktarım",
      body: "Yalnızca hizmetin ifası için gerekli hallerde veya kanuni zorunluluk durumunda, gizlilik yükümlülüğü altındaki iş ortaklarına aktarılabilir.",
    },
    {
      title: "Başvuru",
      body: `KVKK m.11 kapsamındaki taleplerinizi ${site.email} üzerinden iletebilirsiniz; başvurularınız en geç 30 gün içinde sonuçlandırılır.`,
    },
  ],
};

export const aboutPage = {
  title: "Markayı düşünen, dijitalde büyüten ajans",
  description:
    "ULUS MEDIA; kurumsal web, performans reklamcılığı, sosyal içerik ve marka kimliğini tek çatı altında yöneten bir dijital ajans. Şablon çözüm üretmiyoruz — her marka için hedefe özel strateji, tasarım ve ölçüm kurguluyoruz.",
  cta: "Proje Başlat",
};

export const aboutHighlights = [
  {
    label: "Yaklaşım",
    title: "Strateji önce, üretim sonra",
    text: "Brief’ten lansmana kadar her adımda marka hedefi ve KPI net tutulur.",
  },
  {
    label: "Ekip",
    title: "Disiplinler arası üretim",
    text: "Tasarım, geliştirme, reklam ve içerik aynı masada — dil tutarlılığı korunur.",
  },
  {
    label: "Sonuç",
    title: "Ölçülebilir büyüme",
    text: "Web hızı, dönüşüm, ROAS ve marka algısı düzenli raporlanır, optimize edilir.",
  },
] as const;

export const placeholderPages = {
  services: {
    overline: "HİZMETLER",
    title: "Markanız için uçtan uca dijital çözümler",
    description:
      "Dört uzmanlık alanında strateji, üretim ve performansı tek elde sunuyoruz. İhtiyacınıza göre tek hizmet veya entegre paket seçebilirsiniz.",
  },
  work: {
    overline: "PORTFÖY",
    title: "Seçilmiş müşteri işleri",
    description:
      "Web, reklam ve sosyal medya projelerinden oluşan portföyümüz. Her proje; sektör ve kapsamıyla birlikte listelenir.",
  },
};
