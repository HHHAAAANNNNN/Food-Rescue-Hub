<template>
  <section id="how-it-works" class="how-it-works-section">
    <div class="section-container">
      <!-- Header -->
      <div class="section-header">
        <span class="header-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>{{ t('howItWorks.badge') }}</span>
        </span>
        <h2 class="section-title">{{ t('howItWorks.title') }}</h2>
        <p class="section-description">
          {{ t('howItWorks.subtitle') }}
        </p>
      </div>

      <!-- Process Steps -->
      <div class="process-timeline">
        <!-- Step 1 -->
        <div class="process-step" data-step="1">
          <div class="step-card">
            <div class="step-number">01</div>
            <div class="step-icon collection">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                <path d="M12 3v6"></path>
              </svg>
            </div>
            <div class="step-content">
              <h3 class="step-title">{{ t('howItWorks.step1Title') }}</h3>
              <p class="step-description">
                {{ t('howItWorks.step1Desc') }}
              </p>
              <div class="step-tags">
                <span class="tag">Household</span>
                <span class="tag">Restaurant</span>
                <span class="tag">Hotel</span>
              </div>
            </div>
          </div>
          <div class="step-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="process-step" data-step="2">
          <div class="step-card">
            <div class="step-number">02</div>
            <div class="step-icon sorting">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3h18v18H3z"></path>
                <path d="M9 3v18"></path>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
              </svg>
            </div>
            <div class="step-content">
              <h3 class="step-title">{{ t('howItWorks.step2Title') }}</h3>
              <p class="step-description">
                {{ t('howItWorks.step2Desc') }}
              </p>
              <div class="step-tags">
                <span class="tag">Quality Check</span>
                <span class="tag">Categorization</span>
              </div>
            </div>
          </div>
          <div class="step-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="process-step" data-step="3">
          <div class="step-card">
            <div class="step-number">03</div>
            <div class="step-icon processing">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4"></path>
                <path d="m16.2 7.8 2.9-2.9"></path>
                <path d="M18 12h4"></path>
                <path d="m16.2 16.2 2.9 2.9"></path>
                <path d="M12 18v4"></path>
                <path d="m4.9 19.1 2.9-2.9"></path>
                <path d="M2 12h4"></path>
                <path d="m4.9 4.9 2.9 2.9"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div class="step-content">
              <h3 class="step-title">{{ t('howItWorks.step3Title') }}</h3>
              <p class="step-description">
                {{ t('howItWorks.step3Desc') }}
              </p>
              <div class="step-tags">
                <span class="tag">Processing</span>
                <span class="tag">Packaging</span>
              </div>
            </div>
          </div>
          <div class="step-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="process-step" data-step="4">
          <div class="step-card">
            <div class="step-number">04</div>
            <div class="step-icon distribution">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="step-content">
              <h3 class="step-title">{{ t('howItWorks.step4Title') }}</h3>
              <p class="step-description">
                {{ t('howItWorks.step4Desc') }}
              </p>
              <div class="step-tags">
                <span class="tag">{{ t('howItWorks.rtRw') }}</span>
                <span class="tag">{{ t('howItWorks.communities') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

let observer = null;

onMounted(() => {
  // Intersection Observer for scroll animation
  const observerOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all process steps
  const steps = document.querySelectorAll('.process-step');
  steps.forEach((step) => {
    observer.observe(step);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.how-it-works-section {
  padding: 4rem 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
  border: 2px solid rgba(16, 185, 129, 0.4);
  border-radius: 50px;
  color: #6ee7b7;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
}

.header-badge svg {
  color: #10b981;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0 0 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.125rem;
  color: #d1fae5;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Process Timeline */
.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  max-width: 900px;
  margin: 0 auto 3rem;
  padding-left: 60px;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 60px;
  bottom: 60px;
  width: 4px;
  background: linear-gradient(180deg, 
    rgba(16, 185, 129, 0.8) 0%,
    rgba(16, 185, 129, 0.6) 25%,
    rgba(16, 185, 129, 0.6) 75%,
    rgba(16, 185, 129, 0.8) 100%
  );
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.process-step {
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.process-step.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.process-step[data-step="1"].animate-in {
  transition-delay: 0.1s;
}

.process-step[data-step="2"].animate-in {
  transition-delay: 0.3s;
}

.process-step[data-step="3"].animate-in {
  transition-delay: 0.5s;
}

.process-step[data-step="4"].animate-in {
  transition-delay: 0.7s;
}

.process-step::before {
  content: '';
  position: absolute;
  left: -30px;
  top: 40px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border: 4px solid rgba(6, 78, 59, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2),
              0 0 20px rgba(16, 185, 129, 0.6);
  z-index: 10;
  transition: all 0.3s ease;
}

.process-step:hover::before {
  transform: scale(1.3);
  box-shadow: 0 0 0 8px rgba(16, 185, 129, 0.3),
              0 0 30px rgba(16, 185, 129, 0.8);
}

/* Step Card */
.step-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
}

.step-card:hover {
  transform: translateX(8px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.2);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 15px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  border: 3px solid rgba(6, 78, 59, 1);
}

.step-icon {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.step-icon svg {
  z-index: 2;
  position: relative;
}

.step-icon.collection {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
  border: 2px solid rgba(239, 68, 68, 0.4);
}

.step-icon.collection svg {
  color: #fca5a5;
}

.step-icon.sorting {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%);
  border: 2px solid rgba(59, 130, 246, 0.4);
}

.step-icon.sorting svg {
  color: #93c5fd;
}

.step-icon.processing {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%);
  border: 2px solid rgba(245, 158, 11, 0.4);
}

.step-icon.processing svg {
  color: #fcd34d;
}

.step-icon.distribution {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
  border: 2px solid rgba(16, 185, 129, 0.4);
}

.step-icon.distribution svg {
  color: #6ee7b7;
}

.step-card:hover .step-icon {
  transform: scale(1.1) rotate(-5deg);
}

.step-content {
  flex: 1;
  padding-top: 0.5rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #d1fae5;
  margin: 0 0 0.75rem;
}

.step-description {
  font-size: 1rem;
  color: #a7f3d0;
  line-height: 1.6;
  margin: 0 0 1rem;
}

.step-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 20px;
  color: #6ee7b7;
  font-weight: 600;
}

/* Step Arrow - Now pointing down */
.step-arrow {
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translateX(-50%) rotate(90deg);
  z-index: 5;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  animation: bounce-arrow 2s ease-in-out infinite;
}

@keyframes bounce-arrow {
  0%, 100% {
    transform: translateX(-50%) rotate(90deg) translateY(0);
  }
  50% {
    transform: translateX(-50%) rotate(90deg) translateY(8px);
  }
}

.step-arrow svg {
  width: 60px;
  height: 60px;
  color: #10b981;
  filter: drop-shadow(0 4px 12px rgba(16, 185, 129, 0.8));
  stroke-width: 3;
}

.process-step:last-child .step-arrow {
  display: none;
}

.step-card:hover ~ .step-arrow {
  animation-play-state: paused;
  transform: translateX(-50%) rotate(90deg) translateY(12px) scale(1.1);
  filter: brightness(1.2);
}

/* Bottom Info */
.bottom-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 16px;
  max-width: 900px;
  margin: 0 auto;
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon svg {
  color: white;
}

.bottom-info p {
  margin: 0;
  color: #d1fae5;
  font-size: 1rem;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .process-timeline {
    padding-left: 50px;
    gap: 3.5rem;
  }

  .process-timeline::before {
    left: 25px;
  }

  .process-step::before {
    left: -25px;
  }

  .step-arrow {
    left: 50%;
    bottom: -60px;
  }
}

@media (max-width: 768px) {
  .how-it-works-section {
    padding: 3rem 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .process-timeline {
    padding-left: 40px;
    gap: 3rem;
  }

  .process-timeline::before {
    left: 20px;
  }

  .process-step::before {
    left: -20px;
    width: 16px;
    height: 16px;
  }

  .step-arrow {
    left: 50%;
    width: 50px;
    height: 50px;
    bottom: -55px;
  }

  .step-arrow svg {
    width: 50px;
    height: 50px;
  }

  .step-card {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  .step-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto;
  }

  .step-content {
    text-align: center;
  }

  .step-tags {
    justify-content: center;
  }

  .bottom-info {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .bottom-info p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 0.875rem;
  }

  .step-icon {
    width: 56px;
    height: 56px;
  }

  .step-icon svg {
    width: 32px;
    height: 32px;
  }

  .step-title {
    font-size: 1.25rem;
  }

  .step-description {
    font-size: 0.9rem;
  }

  .process-timeline {
    padding-left: 30px;
    gap: 2.5rem;
  }

  .process-timeline::before {
    left: 15px;
  }

  .process-step::before {
    left: -15px;
  }

  .step-arrow {
    left: 50%;
    bottom: -50px;
  }
}
</style>
