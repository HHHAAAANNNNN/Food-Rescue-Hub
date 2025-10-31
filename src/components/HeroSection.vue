<template>
  <section class="hero-main">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          {{ t('heroMain.title') }}
        </h1>
        <p class="hero-subtitle">
          {{ t('heroMain.subtitle') }}
        </p>
        <div class="hero-cta">
          <button class="btn-primary" @click="handleSignup">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
            {{ t('heroMain.button') }}
          </button>
        </div>
        
        <!-- Impact Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">1,200+</div>
            <div class="stat-label">{{ t('heroMain.familiesHelped') }}</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">5,400kg</div>
            <div class="stat-label">{{ t('heroMain.foodRescued') }}</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">{{ t('heroMain.activeRegions') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gradient Transition to Next Section -->
    <div class="hero-gradient-blend"></div>
  </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const handleSignup = () => {
  // Scroll to contact section or show signup form
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Join NourishHub community! Contact us at info@nourishhub.com');
  }
};
</script>

<style scoped>
.hero-main {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px; /* Account for fixed navbar */
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/NourishHubActor.png');
  background-size: cover;
  background-position: center 28%;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(6, 95, 70, 0.85) 0%,
    rgba(16, 185, 129, 0.75) 50%,
    rgba(5, 150, 105, 0.8) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.375rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  background: white;
  color: #065f46;
  border-color: white;
}

.btn-primary svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: scale(1.1);
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 3rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
}

.hero-gradient-blend {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 250px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(4, 120, 87, 0.3) 20%,
    rgba(236, 253, 245, 0.7) 60%,
    #ffffff 100%
  );
  z-index: 1;
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

/* Tablet Styles */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-stats {
    gap: 2rem;
    padding: 1.5rem 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-main {
    min-height: 90vh;
    padding-top: 70px;
  }

  .hero-content {
    padding: 0 1.5rem;
  }

  .hero-title {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }

  .btn-primary {
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .stat-divider {
    width: 80%;
    height: 1px;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .hero-gradient-blend {
    height: 150px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.875rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .hero-stats {
    padding: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>
