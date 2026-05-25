# ULUS MEDIA

Premium dijital ajans web sitesi — Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcı: [http://127.0.0.1:3000](http://127.0.0.1:3000) (localhost ile aynı)

### Değişiklikler yansımıyorsa

1. Dosyayı **kaydedin** (Cmd+S) — kayıtsız düzenleme tarayıcıya gitmez.
2. Terminalde `npm run dev` çalışıyor olmalı; her `npm run dev` sunucuyu **yeniden başlatır**.
3. Hâlâ eski görünüm: `npm run dev:reset` (.next önbelleğini siler, temiz başlar).
4. Tarayıcıda **Cmd+Shift+R** (sert yenileme).
5. Metin için `src/content/`, stil için `src/styles/` — doğru dosyayı düzenleyin.
6. Son çare: `npm run dev:webpack` (Turbopack yerine webpack HMR).

## Logo

Logoyu şu konuma ekleyin:

```
public/images/ulusmedia-logo.png
```

## Proje yapısı

| Klasör | Açıklama |
|--------|----------|
| `src/content/` | Tüm site metinleri (data-driven) |
| `src/components/sections/home/` | Ana sayfa section'ları |
| `src/components/ui/` | Design system primitives |
| `src/motion/` | Animasyon preset'leri |
| `src/styles/tokens.css` | Renk ve glow token'ları |

## Build

```bash
npm run build
npm start
```
