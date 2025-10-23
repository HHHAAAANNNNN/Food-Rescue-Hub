<template>
  <div class="stats-card">
    <div class="icon-container">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </slot>
    </div>
    <h4>{{ title }}</h4>
    <p class="value">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({ title: String, value: [String, Number] });
</script>

<style scoped>
.stats-card {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.stats-card:hover::before {
  transform: scaleX(1);
}

.stats-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.15);
  border-color: #10b981;
}

.icon-container {
  width: 56px;
  height: 56px;
  margin: 0 auto 1rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
  transition: transform 0.3s ease;
}

.stats-card:hover .icon-container {
  transform: scale(1.1) rotate(5deg);
}

.stats-card h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value {
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
  margin: 0.5rem 0 0;
  line-height: 1;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
