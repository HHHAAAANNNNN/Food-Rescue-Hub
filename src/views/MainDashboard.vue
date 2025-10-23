<template>
  <div class="main-dashboard">
    <!-- Hero Section with Project Profile -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          <span>Social Enterprise Platform</span>
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
        <div class="hero-contact">
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
        </div>
      </div>
      <div class="hero-illustration">
        <div class="floating-card card-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
            <path d="M12 3v6"></path>
          </svg>
          <span>Zero Waste</span>
        </div>
        <div class="floating-card card-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Community</span>
        </div>
        <div class="floating-card card-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20"></path>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span>Sustainable</span>
        </div>
      </div>
    </section>

    <!-- Region Section -->
    <section class="region-section">
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
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
}

/* Hero Section */
.hero-section {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
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
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #111827 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  height: 400px;
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
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  color: #10b981;
  font-weight: 600;
  animation: float 3s ease-in-out infinite;
}

.floating-card svg {
  color: #10b981;
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 10%;
  animation-delay: 1s;
}

.card-3 {
  bottom: 10%;
  left: 30%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
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
  .hero-section {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-illustration {
    height: 300px;
  }

  .section-header {
    flex-direction: column;
  }

  .scroll-btn {
    display: none;
  }
}
</style>
