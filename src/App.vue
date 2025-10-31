<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isMainDashboard = computed(() => route.name === 'MainDashboard')
</script>

<template>
  <div id="app-container">
    <!-- Navigation Header -->
    <header class="app-header" v-if="!isMainDashboard">
      <div class="header-content">
        <div class="logo-section">
          <div class="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
          </div>
          <router-link to="/" class="logo-text">
            <h1>NourishHub</h1>
            <span>Food Rescue Platform</span>
          </router-link>
        </div>
        <nav class="main-nav">
          <router-link to="/" class="nav-link" active-class="active">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Dashboard
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>NourishHub</h3>
          <p>Membangun ekosistem pangan berkelanjutan untuk masa depan yang lebih baik.</p>
        </div>
        <div class="footer-section">
          <h4>Kontak</h4>
          <p>Email: info@nourishhub.com</p>
          <p>Instagram: @nourishhub.id</p>
        </div>
        <div class="footer-section">
          <h4>Tentang</h4>
          <p>Platform komunitas untuk mengurangi food waste dan membantu masyarakat yang membutuhkan.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 NourishHub. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  background: rgba(17, 24, 39, 0.95);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: var(--shadow-green);
}

.logo-text {
  text-decoration: none;
  color: var(--color-text-primary);
}

.logo-text h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  color: var(--color-text-primary);
}

.logo-text span {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: all var(--transition-base);
}

.nav-link:hover {
  background: var(--color-bg-secondary);
  color: var(--color-primary);
}

.nav-link.active {
  background: var(--color-primary);
  color: white;
}

/* Main Content */
.app-main {
  flex: 1;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Footer */
.app-footer {
  background: #121212;
  
  margin-top: 4rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.footer-section h4 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--color-primary-light);
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
}
</style>
