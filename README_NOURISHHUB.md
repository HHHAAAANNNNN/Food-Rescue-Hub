# 🌱 NourishHub - Ekosistem Pangan Berkelanjutan

![NourishHub Banner](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4.5-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

> Platform komunitas yang menghubungkan donatur bahan pangan dengan masyarakat penerima manfaat untuk membangun siklus pangan tanpa limbah (zero-waste food cycle) berbasis komunitas.

## 📋 Deskripsi Proyek

NourishHub adalah model social enterprise hibrida yang dirancang untuk mengatasi masalah **limbah pangan (food waste)** dan **kerawanan pangan (food insecurity)** secara simultan di tingkat hyperlocal. Platform ini memfasilitasi:

- 🏘️ **Hub Komunitas Fisik** - Pusat pengumpulan, penyortiran, dan kontrol kualitas makanan berlebih
- 🤝 **Distribusi Bermartabat** - Penyaluran makanan kepada keluarga pra-sejahtera melalui koordinator RT/RW
- ♻️ **Pengolahan Surplus** - Mengubah bahan sisa menjadi produk bernilai jual (selai, keripik, dll)
- 📊 **Data Dampak Terukur** - Dashboard analitik untuk tracking kontribusi dan impact

## ✨ Fitur Utama

### 1. Dashboard Utama Interaktif
- Hero section dengan profil proyek yang memukau
- Animasi floating cards menampilkan value proposition
- Horizontal scroll cards untuk navigasi antar wilayah
- Desain modern dengan gradient dan shadow effects

### 2. Dashboard Personal Wilayah
- Header dinamis dengan informasi koordinator
- 4 KPI cards dengan animasi hover interaktif
- Visualisasi tren donasi bulanan menggunakan Chart.js
- Distribusi bahan pangan dengan badge menarik

### 3. UX yang Memukau
- Smooth transitions dan animations
- Loading states yang elegan
- Error handling dengan friendly messages
- Responsive design untuk mobile & desktop
- Custom scrollbar dengan brand colors

## 🏗️ Arsitektur MVC

Proyek ini menggunakan arsitektur **Model-View-Controller (MVC)** yang terstruktur:

```
src/
├── models/              # Data models & API layer
│   ├── Project.js      # Project profile data
│   ├── Region.js       # Regions data model
│   └── MockAPI.js      # Mock API service
├── controllers/         # Business logic
│   ├── dashboardController.js
│   └── regionController.js
├── views/              # Page components
│   ├── MainDashboard.vue
│   └── RegionDashboard.vue
├── components/         # Reusable UI components
│   ├── RegionCard.vue
│   ├── StatsCard.vue
│   └── charts/
│       └── DonasiTrendChart.vue
└── router/             # Vue Router configuration
    └── index.js
```

## 🚀 Teknologi Stack

- **Framework**: Vue 3 (Composition API dengan `<script setup>`)
- **Build Tool**: Vite 7.1
- **Router**: Vue Router 4
- **State Management**: Pinia
- **Charts**: Chart.js 4.5
- **Styling**: Custom CSS dengan CSS Variables
- **Package Manager**: pnpm

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/HHHAAAANNNNN/Food-Rescue-Hub.git
cd Food-Rescue-Hub

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev

# Build untuk production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Design System

### Color Palette
```css
Primary Green: #10b981
Primary Dark: #059669
Primary Light: #34d399
Background: #f0fdf4
Text Primary: #111827
Text Secondary: #6b7280
Border: #e5e7eb
```

### Typography
- Font Family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI'
- Headings: 700 weight
- Body: 400-500 weight

### Spacing System
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

## 📱 Fitur Dashboard

### Main Dashboard (`/`)
1. **Hero Section**
   - Badge "Social Enterprise Platform"
   - Judul proyek dengan gradient text
   - Deskripsi lengkap
   - Vision statement dalam blockquote
   - Contact links (Email & Instagram)
   - 3 Floating cards animasi

2. **Region Section**
   - Header dengan counter jumlah wilayah aktif
   - Horizontal scrollable cards
   - Scroll buttons untuk navigasi
   - Hover effects pada setiap card

### Region Dashboard (`/region/:id`)
1. **Navigation**
   - Back button ke dashboard utama
   
2. **Region Header**
   - Icon lokasi besar
   - Nama wilayah
   - Deskripsi
   - Info koordinator
   - Background gradient dengan decoration circles

3. **Statistics Cards**
   - Total Donasi (kg)
   - Penerima Manfaat
   - Relawan Aktif
   - Stok Aktif (kg)

4. **Items Distribution**
   - Badge untuk setiap jenis bahan pangan

5. **Trend Chart**
   - Line chart 6 bulan terakhir
   - Interactive tooltips
   - Smooth animations

## 🔄 Data Flow (MVC)

```
User Action
    ↓
View (Component)
    ↓
Controller (Business Logic)
    ↓
Model (MockAPI)
    ↓
Return Data
    ↓
View Updates
```

### Example: Loading Main Dashboard
```javascript
// 1. View calls controller
const data = await getDashboardData();

// 2. Controller calls model
const response = await fetchMainDashboardData();

// 3. Model returns mock data
return { projectProfile, regions };

// 4. View updates with data
profile.value = data.projectProfile;
regions.value = data.regions;
```

## 🎯 Routing Structure

| Path | Component | Description |
|------|-----------|-------------|
| `/` | MainDashboard.vue | Homepage dengan profil proyek dan list wilayah |
| `/region/:id` | RegionDashboard.vue | Detail dashboard per wilayah |

## 🧩 Component Tree

```
App.vue
├── Header (conditional)
│   ├── Logo
│   └── Navigation
├── RouterView
│   ├── MainDashboard.vue
│   │   ├── RegionCard.vue (multiple)
│   │   └── Loading/Error states
│   └── RegionDashboard.vue
│       ├── StatsCard.vue (4x)
│       ├── DonasiTrendChart.vue
│       └── Loading/Error states
└── Footer
```

## 🛠️ Development Guide

### Adding New Region
Edit `src/models/Region.js`:
```javascript
{
  id: 4,
  name: "RT XX Kelurahan YYY",
  coordinator: "Nama Koordinator",
  description: "Deskripsi wilayah",
  stats: {
    donations: 100,
    receivers: 30,
    volunteers: 5,
    stock: 50
  },
  trends: {
    monthly: [5, 8, 12, 10, 14, 9],
    items: ["item1", "item2", "item3"]
  }
}
```

### Customizing Colors
Edit `src/assets/base.css` CSS variables:
```css
:root {
  --color-primary: #yourcolor;
  --color-primary-dark: #yourcolor;
  /* ... */
}
```

### Adding New Page
1. Create view in `src/views/YourView.vue`
2. Add route in `src/router/index.js`
3. Add controller if needed in `src/controllers/`
4. Update navigation in `App.vue`

## 📊 Mock Data Structure

### Project Profile
```javascript
{
  title: string,
  vision: string,
  description: string,
  contact: {
    email: string,
    instagram: string
  }
}
```

### Region Data
```javascript
{
  id: number,
  name: string,
  coordinator: string,
  description: string,
  stats: {
    donations: number,
    receivers: number,
    volunteers: number,
    stock: number
  },
  trends: {
    monthly: number[],
    items: string[]
  }
}
```

## 🎭 Animation Classes

Custom animation utilities tersedia:
- `.fade-in` - Fade in effect
- `.slide-in-up` - Slide from bottom
- `.slide-in-left` - Slide from left
- `.slide-in-right` - Slide from right
- `.loading` - Pulse animation

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Real-time notifications
- [ ] Advanced analytics
- [ ] Export reports to PDF
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)

## 👥 Contributors

- **Developer**: HHHAAAANNNNN
- **Project Type**: Social Enterprise Platform
- **Year**: 2025

## 📄 License

This project is private and proprietary.

## 📧 Contact

- **Email**: info@nourishhub.com
- **Instagram**: [@nourishhub.id](https://instagram.com/nourishhub.id)

---

Made with 💚 for a sustainable food ecosystem
