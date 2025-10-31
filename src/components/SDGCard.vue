<template>
  <div :class="['sdg-card', `sdg-${sdg.number}`]">
    <div class="sdg-number">{{ sdg.number }}</div>
    <div class="sdg-content">
      <h3>{{ t(`sdgCards.sdg${sdg.number}.title`) }}</h3>
      <p>{{ t(`sdgCards.sdg${sdg.number}.description`) }}</p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

defineProps({
  sdg: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.sdg-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(16, 185, 129, 0.2);
  position: relative;
  overflow: hidden;
}

.sdg-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.sdg-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.08;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.sdg-card:hover::after {
  opacity: 0.12;
}

.sdg-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.sdg-card:hover::before {
  transform: scaleX(1);
}

.sdg-number {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
}

.sdg-number::after {
  content: 'SDG';
  position: absolute;
  bottom: -6px;
  right: -6px;
  font-size: 0.625rem;
  font-weight: 700;
  background: rgba(31, 41, 55, 0.95);
  color: #d1fae5;
  padding: 2px 6px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.sdg-content {
  position: relative;
  z-index: 1;
}

.sdg-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e5e7eb;
  margin: 0 0 0.75rem;
  line-height: 1.3;
}

.sdg-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9375rem;
}

/* SDG Specific Colors */
.sdg-2::after {
  background: linear-gradient(135deg, #E5243B 0%, #FF6B6B 100%);
}

.sdg-2 .sdg-number {
  background: linear-gradient(135deg, #DDA63A 0%, #C99326 100%);
}

.sdg-2::before {
  background: linear-gradient(90deg, #E5243B 0%, #DDA63A 100%);
}

.sdg-2:hover {
  border-color: #E5243B;
  box-shadow: 0 12px 32px rgba(229, 36, 59, 0.3);
}

.sdg-8::after {
  background: linear-gradient(135deg, #A21942 0%, #E91E7A 100%);
}

.sdg-8 .sdg-number {
  background: linear-gradient(135deg, #A21942 0%, #8E1538 100%);
}

.sdg-8::before {
  background: linear-gradient(90deg, #A21942 0%, #E91E7A 100%);
}

.sdg-8:hover {
  border-color: #A21942;
  box-shadow: 0 12px 32px rgba(162, 25, 66, 0.3);
}

.sdg-11::after {
  background: linear-gradient(135deg, #FD9D24 0%, #FFCD4D 100%);
}

.sdg-11 .sdg-number {
  background: linear-gradient(135deg, #FD9D24 0%, #E88A1F 100%);
}

.sdg-11::before {
  background: linear-gradient(90deg, #FD9D24 0%, #FFCD4D 100%);
}

.sdg-11:hover {
  border-color: #FD9D24;
  box-shadow: 0 12px 32px rgba(253, 157, 36, 0.3);
}

.sdg-12::after {
  background: linear-gradient(135deg, #8B4513 0%, #D4A574 100%);
}

.sdg-12 .sdg-number {
  background: linear-gradient(135deg, #BF8B2E 0%, #A87828 100%);
}

.sdg-12::before {
  background: linear-gradient(90deg, #8B4513 0%, #D4A574 100%);
}

.sdg-12:hover {
  border-color: #BF8B2E;
  box-shadow: 0 12px 32px rgba(191, 139, 46, 0.3);
}

.sdg-17::after {
  background: linear-gradient(135deg, #19486A 0%, #5AC8FA 100%);
}

.sdg-17 .sdg-number {
  background: linear-gradient(135deg, #19486A 0%, #14385A 100%);
}

.sdg-17::before {
  background: linear-gradient(90deg, #19486A 0%, #5AC8FA 100%);
}

.sdg-17:hover {
  border-color: #19486A;
  box-shadow: 0 12px 32px rgba(25, 72, 106, 0.3);
}
</style>
