<div align="center">

# 🌱 Food Rescue Hub (NourishHub)

### Building a Sustainable Food Ecosystem

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.5-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](LICENSE)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Food Rescue Hub (NourishHub)** is a community-driven platform that connects food donors with beneficiaries to build a **zero-waste food cycle**. This social enterprise platform tackles two critical issues simultaneously:

- 🥘 **Food Waste** - Rescuing surplus food from going to waste
- 🤝 **Food Insecurity** - Helping communities in need access nutritious food

The platform facilitates hyperlocal food rescue operations through community hubs, enabling dignified distribution, surplus processing, and measurable social impact tracking.

### 🎯 Mission

Create a sustainable food ecosystem where no food goes to waste and no one goes hungry, powered by community collaboration and technology.

### 🌍 UN Sustainable Development Goals

This project supports 5 key SDGs:

- **SDG 2**: Zero Hunger
- **SDG 8**: Decent Work and Economic Growth
- **SDG 11**: Sustainable Cities and Communities
- **SDG 12**: Responsible Consumption and Production
- **SDG 17**: Partnerships for the Goals

---

## ✨ Features

### 🏠 Main Dashboard
- **Interactive Hero Section** - Project overview with animated floating cards
- **SDG Integration** - Visual representation of supported UN SDGs
- **Regional Overview** - Horizontal scrollable cards for all active regions
- **Real-time Statistics** - Live data on donations, beneficiaries, and volunteers
- **Modern UI/UX** - Smooth animations and responsive design

### 📊 Regional Dashboards
- **Coordinator Information** - Contact details and region management
- **KPI Cards** - Key metrics (donations, beneficiaries, volunteers, active stock)
- **Trend Visualization** - Monthly donation trends with Chart.js
- **Food Distribution** - Categorized view of donated items
- **Interactive Charts** - Animated data visualizations

### 💻 Technical Features
- **MVC Architecture** - Clean separation of concerns
- **Vue 3 Composition API** - Modern reactive components
- **State Management** - Pinia for centralized state
- **Routing** - Vue Router for seamless navigation
- **Internationalization** - Multi-language support ready
- **Mock API** - Development-ready data layer

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Vue.js 3.5 (Composition API) |
| **Build Tool** | Vite 7.1 |
| **Routing** | Vue Router 4.6 |
| **State Management** | Pinia 3.0 |
| **Charts** | Chart.js 4.5 |
| **Styling** | Custom CSS with CSS Variables |
| **Package Manager** | pnpm |
| **Node.js** | ^20.19.0 or >=22.12.0 |

---

## 📦 Installation

### Prerequisites

- Node.js (v20.19.0+ or v22.12.0+)
- pnpm (recommended) or npm

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/HHHAAAANNNNN/Food-Rescue-Hub.git
   cd Food-Rescue-Hub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 🚀 Usage

### Development

```bash
# Start dev server with hot reload
pnpm dev

# Format code with Prettier
pnpm format
```

### Deployment

```bash
# Build and deploy to GitHub Pages
pnpm deploy
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm format` | Format source code |
| `pnpm deploy` | Deploy to GitHub Pages |

---

## 📁 Project Structure

```
Food-Rescue-Hub/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, styles, fonts
│   ├── components/     # Reusable Vue components
│   │   ├── charts/    # Chart components
│   │   ├── RegionCard.vue
│   │   ├── StatsCard.vue
│   │   └── SDGCard.vue
│   ├── composables/    # Vue composables
│   ├── controllers/    # Business logic layer
│   │   ├── dashboardController.js
│   │   └── regionController.js
│   ├── models/         # Data models & API
│   │   ├── Project.js
│   │   ├── Region.js
│   │   └── MockAPI.js
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   ├── views/          # Page components
│   │   ├── MainDashboard.vue
│   │   └── RegionDashboard.vue
│   ├── App.vue         # Root component
│   └── main.js         # Application entry
├── docs/               # Documentation
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

### MVC Architecture

```
User Interaction
    ↓
View (Vue Components)
    ↓
Controller (Business Logic)
    ↓
Model (Data Layer)
    ↓
Mock API / Backend
```

---

## 🎨 Design System

### Color Palette

```css
Primary Green:   #10b981
Primary Dark:    #059669
Primary Light:   #34d399
Background:      #f0fdf4
Text Primary:    #111827
Text Secondary:  #6b7280
Border:          #e5e7eb
```

### Typography

- **Font Family**: Inter, system-ui
- **Headings**: 700 weight
- **Body**: 400-500 weight

---

## 🔧 Development Guide

### Adding a New Region

Edit `src/models/Region.js`:

```javascript
{
  id: 4,
  name: "RT XX Kelurahan YYY",
  coordinator: "Coordinator Name",
  description: "Region description",
  stats: {
    donations: 100,
    receivers: 30,
    volunteers: 5,
    stock: 50
  },
  trends: {
    monthly: [5, 8, 12, 10, 14, 9],
    items: ["Rice", "Vegetables", "Canned Food"]
  }
}
```

### Customizing Colors

Edit CSS variables in `src/assets/base.css`:

```css
:root {
  --color-primary: #10b981;
  --color-primary-dark: #059669;
  /* ... */
}
```

### Adding New Routes

1. Create view component in `src/views/`
2. Add route in `src/router/index.js`
3. Update navigation in `App.vue`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes before submitting
- Update documentation as needed

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Vue - Official Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Recommended Browser Extensions

**Chrome/Edge:**
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

**Firefox:**
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

## 📸 Demo

<!-- Add screenshots here when available -->
Coming soon!

---

## 🗺️ Roadmap

- [ ] Backend API integration
- [ ] User authentication & authorization
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] PDF report generation
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Mobile app (React Native)

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 📧 Contact

- **Email**: info@nourishhub.com
- **Instagram**: [@nourishhub.id](https://instagram.com/nourishhub.id)
- **GitHub**: [@HHHAAAANNNNN](https://github.com/HHHAAAANNNNN)

---

## 🙏 Acknowledgments

- Vue.js Team for the amazing framework
- Chart.js for beautiful data visualizations
- All contributors and community members
- UN SDGs for guiding principles

---

<div align="center">

**Made with 💚 for a sustainable food ecosystem**

© 2025 NourishHub. All rights reserved.

</div>
