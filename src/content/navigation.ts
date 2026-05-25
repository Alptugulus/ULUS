import type { NavItem } from "@/types/content";

export const mainNav: NavItem[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "İşler", href: "/isler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const headerCta = {
  label: "Proje Başlat",
  href: "/iletisim",
};

export const footerNav = {
  services: [
    { label: "Web & Dijital", href: "/hizmetler/web-dijital" },
    { label: "Reklam & Büyüme", href: "/hizmetler/reklam-buyume" },
    { label: "Sosyal Medya & İçerik", href: "/hizmetler/sosyal-medya-icerik" },
    { label: "Marka & Tasarım", href: "/hizmetler/marka-tasarim" },
  ],
  company: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İşler", href: "/isler" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "İletişim", href: "/iletisim" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  ],
};

export const footerCta = {
  label: "Projenizi konuşalım",
  href: "/iletisim",
};
