<template>
  <div class="main-dashboard">
    <!-- Navbar -->
    <NavBar />

    <!-- Hero Section with Background Image -->
    <HeroSection />

    <!-- Project Profile Section -->
    <section id="about" class="profile-section">
      <div class="hero-content">
        <div class="hero-badges">
          <div class="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span>Social Enterprise Platform</span>
          </div>
          <div class="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Empowering Local Communities</span>
          </div>
          <div class="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
            <span>Food Waste Management Program</span>
          </div>
          <div class="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span>ASEAN Sustainable Initiative</span>
          </div>
        </div>
        <h1 class="hero-title">{{ profile.title }}</h1>
        <p class="hero-description">{{ profile.description }}</p>
        <blockquote class="hero-vision">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>{{ profile.vision }}</span>
        </blockquote>
        <div id="contact" class="hero-contact">
          <a :href="`mailto:${profile.contact?.email}`" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            {{ profile.contact?.email }}
          </a>
          <a :href="`https://instagram.com/${profile.contact?.instagram?.replace('@', '')}`" target="_blank" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            {{ profile.contact?.instagram }}
          </a>
          <a :href="`https://wa.me/${profile.contact?.whatsapp?.replace(/[^0-9]/g, '')}`" target="_blank" class="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M16 10h.01"></path>
            </svg>
            {{ profile.contact?.whatsapp }}
          </a>
        </div>
      </div>
      <div class="hero-illustration">
        <!-- SDG 2: Zero Hunger -->
        <div class="floating-card card-1 sdg-theme">
          <div class="card-badge">SDG 2</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
            <path d="M12 3v6"></path>
          </svg>
          <span>Zero Hunger</span>
        </div>

        <!-- SDG 12: Responsible Consumption -->
        <div class="floating-card card-2 sdg-theme">
          <div class="card-badge">SDG 12</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
          <span>Reduce Waste</span>
        </div>

        <!-- SDG 11: Sustainable Cities -->
        <div class="floating-card card-3 sdg-theme">
          <div class="card-badge">SDG 11</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18"></path>
            <path d="M9 8h1"></path>
            <path d="M9 12h1"></path>
            <path d="M9 16h1"></path>
            <path d="M14 8h1"></path>
            <path d="M14 12h1"></path>
            <path d="M14 16h1"></path>
            <path d="M6 3h12a2 2 0 0 1 2 2v16H4V5a2 2 0 0 1 2-2z"></path>
          </svg>
          <span>Green Cities</span>
        </div>

        <!-- SDG 8: Decent Work -->
        <div class="floating-card card-4 sdg-theme">
          <div class="card-badge">SDG 8</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Fair Work</span>
        </div>

        <!-- SDG 17: Partnerships -->
        <div class="floating-card card-5 sdg-theme">
          <div class="card-badge">SDG 17</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          <span>Partnership</span>
        </div>
      </div>
    </section>

    <!-- SDGs Section -->
    <section id="sdgs" class="sdgs-section" v-if="profile.sdgs && profile.sdgs.length > 0">
      <div class="sdgs-header">
        <h2>Sustainable Development Goals</h2>
        <p>NourishHub berkontribusi langsung terhadap pencapaian SDGs berikut:</p>
      </div>
      <div class="sdgs-grid">
        <SDGCard
          v-for="sdg in profile.sdgs"
          :key="sdg.number"
          :sdg="sdg"
        />
      </div>
    </section>

    <!-- Region Section -->
    <section id="regions" class="region-section">
      <div class="section-header">
        <div>
          <h2>Daerah Kontributor Komunitas</h2>
          <p>Jelajahi berbagai wilayah yang aktif berkontribusi dalam ekosistem pangan berkelanjutan</p>
        </div>
        <div class="region-count">
          <span class="count">{{ regions.length }}</span>
          <span class="label">Wilayah Aktif</span>
        </div>
      </div>
      <div class="region-list-wrapper">
        <button class="scroll-btn scroll-left" @click="scrollRegions('left')" v-if="showScrollButtons">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <div class="region-list" ref="regionList">
          <RegionCard
            v-for="region in regions"
            :key="region.id"
            :region="region"
            @click="goToRegion(region.id)"
          />
        </div>
        <button class="scroll-btn scroll-right" @click="scrollRegions('right')" v-if="showScrollButtons">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
      <p>Memuat data dashboard...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getDashboardData } from "@/controllers/dashboardController";
import RegionCard from "@/components/RegionCard.vue";
import SDGCard from "@/components/SDGCard.vue";
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const profile = ref({});
const regions = ref([]);
const isLoading = ref(true);
const regionList = ref(null);
const showScrollButtons = ref(false);

onMounted(async () => {
  try {
    const data = await getDashboardData();
    profile.value = data.projectProfile || {};
    regions.value = data.regions || [];
    
    // Check if scroll buttons are needed
    setTimeout(() => {
      if (regionList.value) {
        showScrollButtons.value = regionList.value.scrollWidth > regionList.value.clientWidth;
      }
    }, 100);
  } catch (error) {
    console.error('Error loading dashboard:', error);
  } finally {
    isLoading.value = false;
  }
});

const goToRegion = (id) => {
  router.push({ name: "RegionDashboard", params: { id } });
};

const scrollRegions = (direction) => {
  if (!regionList.value) return;
  const scrollAmount = 300;
  const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
  regionList.value.scrollBy({ left: scrollLeft, behavior: 'smooth' });
};
</script>

<style scoped>
.main-dashboard {
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 50%, #f0fdf4 100%);
}

/* Profile Section (formerly Hero Section) */
.profile-section {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  background: white;
  border-radius: 24px;
  margin-top: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
}

.hero-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #065f46 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-title::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: linear-gradient(135deg, #065f46 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: blur(8px);
  opacity: 0.3;
}

.hero-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.8;
  margin: 0 0 2rem;
}

.hero-vision {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-left: 4px solid #10b981;
  border-radius: 12px;
  margin: 2rem 0;
  font-style: italic;
  color: #065f46;
  font-weight: 500;
}

.hero-vision svg {
  flex-shrink: 0;
  color: #10b981;
  margin-top: 0.25rem;
}

.hero-contact {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: #10b981;
  color: white;
  border-color: #10b981;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.contact-link svg {
  flex-shrink: 0;
}

/* Hero Illustration */
.hero-illustration {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  color: #10b981;
  font-weight: 600;
  font-size: 0.875rem;
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.floating-card:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 12px 32px rgba(16, 185, 129, 0.25);
  border-color: #10b981;
  z-index: 10;
}

.floating-card.sdg-theme {
  background: linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%);
}

.floating-card.impact-theme {
  background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
  border: 2px solid #10b981;
}

.card-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.floating-card svg {
  color: #10b981;
  filter: drop-shadow(0 2px 4px rgba(16, 185, 129, 0.2));
}

.floating-card.impact-theme svg {
  color: #059669;
}

/* Positioning untuk 5 floating cards - arranged in a balanced layout */
.card-1 {
  top: 8%;
  left: 12%;
  animation-delay: 0s;
}

.card-2 {
  top: 12%;
  right: 15%;
  animation-delay: 0.6s;
}

.card-3 {
  top: 50%;
  left: 5%;
  animation-delay: 1.2s;
}

.card-4 {
  top: 48%;
  right: 8%;
  animation-delay: 1.8s;
}

.card-5 {
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 2.4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(-8px) rotate(-2deg);
  }
}

/* SDGs Section */
.sdgs-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.sdgs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.sdgs-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sdgs-header p {
  color: #6b7280;
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
}

.sdgs-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  animation: fadeInUp 0.8s ease-out;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.sdgs-grid > * {
  flex: 0 1 calc(33.333% - 1.35rem);
  min-width: 280px;
  max-width: 350px;
}

.sdgs-grid > :nth-child(n+4) {
  flex: 0 1 calc(50% - 1rem);
  max-width: 350px;
}

/* Region Section */
.region-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 2rem;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem;
}

.section-header p {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.region-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.region-count .count {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.region-count .label {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  opacity: 0.9;
}

.region-list-wrapper {
  position: relative;
}

.region-list {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: #10b981 #f3f4f6;
}

.region-list::-webkit-scrollbar {
  height: 8px;
}

.region-list::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 10px;
}

.region-list::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 10px;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.scroll-btn:hover {
  background: #10b981;
  color: white;
  border-color: #10b981;
  transform: translateY(-50%) scale(1.1);
}

.scroll-left {
  left: -24px;
}

.scroll-right {
  right: -24px;
}

/* Loading State */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1000;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .profile-section {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 2rem;
    margin: 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-illustration {
    height: 350px;
  }

  /* Adjust floating cards for mobile - 5 cards balanced layout */
  .floating-card {
    padding: 1rem;
    font-size: 0.75rem;
  }

  .floating-card svg {
    width: 24px;
    height: 24px;
  }

  .card-1 {
    top: 8%;
    left: 5%;
  }

  .card-2 {
    top: 8%;
    right: 5%;
  }

  .card-3 {
    top: 40%;
    left: 5%;
  }

  .card-4 {
    top: 40%;
    right: 5%;
  }

  .card-5 {
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
  }

  .section-header {
    flex-direction: column;
  }

  .scroll-btn {
    display: none;
  }

  .sdgs-section {
    padding: 2rem 1rem;
  }

  .sdgs-header h2 {
    font-size: 1.75rem;
  }

  .sdgs-grid > * {
    flex: 0 1 100%;
    max-width: 100%;
  }

  .sdgs-grid > :nth-child(n+4) {
    flex: 0 1 100%;
  }
}

/* Tablet responsiveness for SDGs */
@media (max-width: 1024px) and (min-width: 769px) {
  .sdgs-grid > * {
    flex: 0 1 calc(50% - 1rem);
  }

  .sdgs-grid > :nth-child(n+4) {
    flex: 0 1 calc(50% - 1rem);
  }
}
</style>
