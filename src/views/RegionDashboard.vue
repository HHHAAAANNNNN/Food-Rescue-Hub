<template>
  <div class="region-dashboard">
    <!-- Navigation -->
    <div class="back-navigation">
      <button @click="goBack" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Kembali ke Dashboard Utama
      </button>
    </div>

    <!-- Region Header -->
    <section class="region-header">
      <div class="header-content">
        <div class="region-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div class="header-text">
          <h1>{{ region.name }}</h1>
          <p class="region-description">{{ region.description }}</p>
          <div class="coordinator-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Koordinator: <strong>{{ region.coordinator }}</strong></span>
          </div>
        </div>
      </div>
      <div class="header-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </section>

    <!-- Statistics Cards -->
    <section class="stats-section">
      <StatsCard title="Total Donasi" :value="region.stats?.donations + ' kg'">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
            <path d="M12 3v6"></path>
          </svg>
        </template>
      </StatsCard>
      
      <StatsCard title="Penerima Manfaat" :value="region.stats?.receivers">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </template>
      </StatsCard>
      
      <StatsCard title="Relawan Aktif" :value="region.stats?.volunteers">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </template>
      </StatsCard>
      
      <StatsCard title="Stok Aktif" :value="region.stats?.stock + ' kg'">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </template>
      </StatsCard>
    </section>

    <!-- Items Distribution -->
    <section class="items-section">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        Distribusi Bahan Pangan
      </h3>
      <div class="items-list">
        <div v-for="item in region.trends?.items" :key="item" class="item-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {{ item }}
        </div>
      </div>
    </section>

    <!-- Trend Chart -->
    <DonasiTrendChart :data="region.trends?.monthly || []" />

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
      <p>Memuat data wilayah...</p>
    </div>

    <!-- Error State -->
    <div v-if="error" class="error-state">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <h3>Data tidak ditemukan</h3>
      <p>Wilayah yang Anda cari tidak tersedia.</p>
      <button @click="goBack" class="error-button">Kembali ke Dashboard</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getRegionDashboard } from "@/controllers/regionController";
import StatsCard from "@/components/StatsCard.vue";
import DonasiTrendChart from "@/components/charts/DonasiTrendChart.vue";

const route = useRoute();
const router = useRouter();
const region = ref({});
const isLoading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const data = await getRegionDashboard(route.params.id);
    if (data) {
      region.value = data;
      error.value = false;
    } else {
      error.value = true;
    }
  } catch (err) {
    console.error('Error loading region:', err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
});

const goBack = () => {
  router.push({ name: 'MainDashboard' });
};
</script>

<style scoped>
.region-dashboard {
  min-height: 100vh;
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Navigation */
.back-navigation {
  margin-bottom: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #10b981;
  color: white;
  border-color: #10b981;
  transform: translateX(-4px);
}

/* Region Header */
.region-header {
  position: relative;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.region-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  flex-shrink: 0;
}

.header-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.region-description {
  font-size: 1.125rem;
  margin: 0 0 1.5rem;
  opacity: 0.95;
  line-height: 1.6;
}

.coordinator-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  width: fit-content;
}

.coordinator-info strong {
  font-weight: 700;
}

.header-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  right: -50px;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 100px;
  right: 100px;
}

.circle-3 {
  width: 100px;
  height: 100px;
  bottom: 50px;
  right: 50px;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Items Section */
.items-section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.items-section h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem;
}

.items-section h3 svg {
  color: #10b981;
}

.items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 1px solid #10b981;
  border-radius: 50px;
  color: #065f46;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: capitalize;
  transition: all 0.3s ease;
}

.item-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.item-badge svg {
  width: 16px;
  height: 16px;
  color: #10b981;
}

/* Loading & Error States */
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

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.error-state svg {
  color: #ef4444;
  margin-bottom: 1rem;
}

.error-state h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem;
}

.error-state p {
  color: #6b7280;
  margin: 0 0 2rem;
}

.error-button {
  padding: 0.75rem 1.5rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.error-button:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .region-dashboard {
    padding: 1rem;
  }

  .region-header {
    padding: 2rem;
  }

  .header-content {
    flex-direction: column;
  }

  .header-text h1 {
    font-size: 1.75rem;
  }

  .stats-section {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}
</style>
