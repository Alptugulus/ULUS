# ULUS MEDIA

Premium dijital ajans web sitesi — Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcı: [http://127.0.0.1:3000](http://127.0.0.1:3000) (localhost ile aynı)

### Değişiklikler yansımıyorsa

1. Dosyayı **kaydedin** (Cmd+S).
2. Terminalde `npm run dev` açık kalsın — kayıt sonrası HMR yansır.
3. Takılırsa: `npm run dev:restart` veya `npm run dev:reset`.
4. Tarayıcıda **Cmd+Shift+R** (sert yenileme).

## Canlı site (Vercel)

GitHub’daki kod otomatik deploy olur. Ana adres repo **About** alanında:

**https://ulus-swart.vercel.app**

Deploy güncellenmediyse Vercel panelinde projeyi açıp **Redeploy** → **main** branch.

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
