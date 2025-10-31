<template>
  <div class="region-card" @click="$emit('click')">
    <div class="card-header">
      <div class="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
      <h3>{{ region.name }}</h3>
    </div>
    <p class="description">{{ region.description }}</p>
    <div class="coordinator">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <small>{{ region.coordinator }}</small>
    </div>
    <div class="stats-preview">
      <div class="stat-item">
        <span class="stat-value">{{ region.stats.donations }}</span>
        <span class="stat-label">{{ t('regionCard.donations') }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ region.stats.receivers }}</span>
        <span class="stat-label">{{ t('regionCard.receivers') }}</span>
      </div>
    </div>
    <div class="card-footer">
      <span class="view-detail">{{ t('regionCard.viewDetail') }}</span>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

defineProps({ region: Object });
</script>

<style scoped>
.region-card {
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  min-width: 280px;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
  scroll-snap-align: start;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.region-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.region-card:hover::before {
  transform: scaleX(1);
}

.region-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
}

.region-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e5e7eb;
  margin: 0;
  line-height: 1.3;
}

.description {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0.75rem 0;
}

.coordinator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #10b981;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(16, 185, 129, 0.15);
  border-radius: 8px;
}

.coordinator svg {
  color: #10b981;
}

.coordinator small {
  font-size: 0.875rem;
  font-weight: 600;
}

.stats-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(55, 65, 81, 0.5);
  border-radius: 10px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.view-detail {
  font-size: 0.875rem;
  font-weight: 600;
  color: #10b981;
  transition: transform 0.2s ease;
  display: inline-block;
}

.region-card:hover .view-detail {
  transform: translateX(4px);
}
</style>
