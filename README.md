# Chelsea Dewa Perfume - Website Parfum SEO Optimized

Website e-commerce parfum premium yang dioptimasi untuk SEO dengan Next.js 14, TypeScript, dan Tailwind CSS.

## 🌟 Fitur

- **SEO Optimized**: Metadata lengkap, sitemap otomatis, robots.txt, dan structured data
- **Responsive Design**: Tampilan sempurna di desktop, tablet, dan mobile
- **Hero Carousel**: Slider otomatis dengan indikator
- **Product Catalog**: Halaman produk dengan filter dan search
- **Product Detail**: Halaman detail produk dengan rating dan reviews
- **FAQ Section**: Accordion untuk pertanyaan umum
- **Contact Integration**: WhatsApp integration untuk customer service
- **Modern UI**: Design elegan dengan tema gold dan black

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasil.

### Build & Production

```bash
# Build untuk production
npm run build

# Start production server
npm start
```

## 📁 Struktur Project

```
src/
├── app/
│   ├── globals.css          # Global styles dengan CSS variables
│   ├── layout.tsx           # Root layout dengan SEO metadata
│   ├── page.tsx             # Homepage
│   ├── products/
│   │   ├── page.tsx         # Product listing
│   │   └── [slug]/page.tsx  # Product detail
│   ├── robots.ts            # Robots.txt otomatis
│   └── sitemap.ts           # Sitemap otomatis
├── components/
│   ├── HeroCarousel.tsx     # Hero section carousel
│   ├── Features.tsx         # Feature cards
│   ├── ProductCard.tsx      # Product card component
│   ├── FAQ.tsx              # FAQ accordion
│   └── Contact.tsx          # Contact section
```

## 🔧 SEO Features

### Metadata
- Open Graph tags untuk social media
- Twitter Card meta
- Structured data untuk produk
- Canonical URLs

### Sitemap & Robots
- Sitemap otomatis untuk semua halaman
- Robots.txt yang dioptimasi
- Dynamic sitemap untuk produk

### Performance
- Image optimization dengan Next.js Image
- Font optimization dengan Inter font
- CSS variables untuk konsistensi tema

## 🎨 Design System

### Colors
- Gold: `#d4af37` (primary)
- Ink: `#111111` (text)
- Paper: `#ffffff` (background)
- Muted: `#6b7280` (secondary text)

### Components
- Responsive grid system
- Custom button styles (btn-gold, btn-outline-gold)
- Card components dengan hover effects
- Accordion untuk FAQ

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **SEO**: Next.js built-in SEO features
- **Deployment**: Vercel (recommended)

## 📦 Dependencies

- `next`: React framework
- `react`: UI library
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS
- `lucide-react`: Icon library
- `next-sitemap`: Sitemap generation

## 🚀 Deployment

### Vercel (Recommended)

1. Push ke GitHub repository
2. Import ke Vercel
3. Set environment variables
4. Deploy otomatis

### Manual Deployment

```bash
# Build
npm run build

# Export static files (opsional)
npm run export
```

## 🔧 Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
GOOGLE_VERIFICATION_CODE=your-google-code
```

## 📈 SEO Tips

1. **Update Metadata**: Ganti `metadataBase` dan verification code
2. **Add Images**: Upload product images ke `/public/images/products/`
3. **Generate Sitemap**: Build otomatis generate sitemap
4. **Submit to Google**: Submit sitemap ke Google Search Console

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Open Pull Request

## 📄 License

MIT License - feel free to use for commercial projects.
