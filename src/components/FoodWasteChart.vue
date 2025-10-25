<template>
  <div class="chart-section">
    <!-- Hook Header Section -->
    <div class="hook-header">
      <div class="hook-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        <span>Regional Data Insights</span>
      </div>
      <h2 class="hook-title">
        Siapa Penyumbang Terbesar Limbah Makanan di ASEAN?
      </h2>
      <p class="hook-description">
        Dari 10 negara ASEAN, distribusi food waste sangat tidak merata. <br>
        <strong>Satu negara berkontribusi hampir setengah dari total limbah makanan regional</strong>. <br> 
        Visualisasi interaktif di bawah mengungkap proporsi sebenarnya dari setiap negara.
      </p>
    </div>

    <div class="chart-container">
      <div class="chart-header">
        <div class="chart-title-group">
          <h3 class="chart-title">Ranking by Total Food Waste</h3>
          <p class="chart-subtitle" :key="selectedCountry">
            <template v-if="selectedCountry">
              <strong>{{ selectedCountry }}</strong> menghasilkan <strong>{{ getCountryData(selectedCountry)?.waste }} juta ton</strong> 
              (<strong>{{ getPercentage(getCountryData(selectedCountry)?.waste) }}%</strong> dari total ASEAN) 
              dengan <strong>{{ getCountryData(selectedCountry)?.perCapita }} kg/kapita</strong> per tahun
            </template>
            <template v-else>
              Total <strong>{{ totalWaste.toFixed(2) }} juta ton</strong> food waste di ASEAN. 
              Indonesia berkontribusi <strong>{{ getPercentage(20.93) }}%</strong>. 
              <br>Klik bar untuk detail negara.
            </template>
          </p>
        </div>
      </div>
      <div class="chart-wrapper">
        <canvas ref="chartCanvas"></canvas>
      </div>
      <div class="chart-footer">
        <p class="data-source">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          Data Source: UNEP Food Waste Index 2024 | Click bars to view country details
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const chartCanvas = ref(null);
const selectedCountry = ref(null);
let chartInstance = null;

// Data ASEAN sorted by waste amount (highest to lowest)
const aseanData = [
  { country: 'Indonesia', year: 1967, waste: 20.93, perCapita: 116, color: '#dc2626' },
  { country: 'Vietnam', year: 1995, waste: 7.08, perCapita: 72, color: '#14b8a6' },
  { country: 'Thailand', year: 1967, waste: 6.18, perCapita: 86, color: '#ea580c' },
  { country: 'Myanmar', year: 1997, waste: 4.22, perCapita: 78, color: '#0ea5e9' },
  { country: 'Malaysia', year: 1967, waste: 2.75, perCapita: 81, color: '#eab308' },
  { country: 'Philippines', year: 1967, waste: 2.48, perCapita: 89, color: '#f59e0b' },
  { country: 'Cambodia', year: 1999, waste: 1.42, perCapita: 85, color: '#3b82f6' },
  { country: 'Laos', year: 1997, waste: 0.674, perCapita: 89, color: '#06b6d4' },
  { country: 'Singapore', year: 1967, waste: 0.636, perCapita: 99, color: '#84cc16' },
  { country: 'Brunei', year: 1984, waste: 0.034, perCapita: 76, color: '#10b981' },
];

const getCountryData = (countryName) => {
  return aseanData.find(c => c.country === countryName);
};

// Calculate total and percentages
const totalWaste = computed(() => aseanData.reduce((sum, d) => sum + d.waste, 0));

const getPercentage = (waste) => {
  return ((waste / totalWaste.value) * 100).toFixed(1);
};

onMounted(() => {
  if (!chartCanvas.value) return;

  const ctx = chartCanvas.value.getContext('2d');

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: aseanData.map(d => d.country),
      datasets: [{
        label: 'Food Waste (Million Tons/Year)',
        data: aseanData.map(d => d.waste),
        backgroundColor: aseanData.map(d => d.color),
        borderColor: aseanData.map(d => d.color),
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 40,
      }]
    },
    options: {
      indexAxis: 'y', // Horizontal bars
      responsive: true,
      maintainAspectRatio: false,
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const clickedCountry = aseanData[index].country;
          
          // Toggle: if same country clicked, reset to null
          if (selectedCountry.value === clickedCountry) {
            selectedCountry.value = null;
          } else {
            selectedCountry.value = clickedCountry;
          }
        } else {
          // Clicked on empty space, reset
          selectedCountry.value = null;
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: 16,
          titleFont: {
            size: 16,
            weight: 'bold'
          },
          bodyFont: {
            size: 14
          },
          bodySpacing: 8,
          callbacks: {
            title: (context) => {
              const index = context[0].dataIndex;
              return `${aseanData[index].country} (Since ${aseanData[index].year})`;
            },
            label: (context) => {
              const index = context.dataIndex;
              const waste = aseanData[index].waste;
              const percentage = getPercentage(waste);
              return [
                `Total: ${waste} million tons/year`,
                `Percentage: ${percentage}% of ASEAN total`,
                `Per Capita: ${aseanData[index].perCapita} kg/year`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: 'rgba(209, 250, 229, 0.1)',
            drawBorder: false
          },
          ticks: {
            color: '#d1fae5',
            font: {
              size: 12,
              weight: '600'
            },
            callback: function(value) {
              return value + 'M';
            }
          },
          title: {
            display: true,
            text: 'Food Waste (Million Tons/Year)',
            color: '#6ee7b7',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            color: '#d1fae5',
            font: {
              size: 13,
              weight: '700'
            }
          }
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1000,
        easing: 'easeInOutQuart'
      }
    }
  });
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
.chart-section {
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Hook Header Styling */
.hook-header {
  text-align: center;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.8s ease-out;
}

.hook-badge {
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

.hook-badge svg {
  color: #10b981;
}

.hook-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hook-description {
  font-size: 1.25rem;
  color: #d1fae5;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.hook-description strong {
  color: #fca5a5;
  font-weight: 700;
}

.chart-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.chart-header {
  margin-bottom: 3rem;
  text-align: center;
}

.chart-title-group {
  max-width: 900px;
  margin: 0 auto;
}

.chart-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, #fca5a5 0%, #f87171 50%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chart-subtitle {
  font-size: 1.125rem;
  color: #d1fae5;
  line-height: 1.6;
  margin: 0;
  min-height: 3rem;
  transition: all 0.3s ease;
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

.chart-subtitle strong {
  color: #6ee7b7;
  font-weight: 700;
}

.chart-wrapper {
  height: 600px;
  position: relative;
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  cursor: pointer;
}

.chart-footer {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.data-source {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #a7f3d0;
  font-style: italic;
  margin: 0;
}

.data-source svg {
  color: #34d399;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .chart-section {
    padding: 3rem 1rem;
  }

  .hook-header {
    margin-bottom: 3rem;
  }

  .hook-badge {
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
  }

  .hook-title {
    font-size: 2rem;
  }

  .hook-description {
    font-size: 1rem;
  }

  .chart-container {
    padding: 2rem 1.5rem;
  }

  .chart-header {
    flex-direction: column;
  }

  .chart-title {
    font-size: 1.5rem;
  }

  .chart-subtitle {
    font-size: 1rem;
    min-height: 4rem;
  }

  .chart-wrapper {
    height: 450px;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hook-title {
    font-size: 1.75rem;
  }

  .hook-description {
    font-size: 0.95rem;
  }

  .chart-wrapper {
    height: 400px;
  }

  .chart-title {
    font-size: 1.25rem;
  }

  .chart-subtitle {
    font-size: 0.9rem;
  }
}
</style>
