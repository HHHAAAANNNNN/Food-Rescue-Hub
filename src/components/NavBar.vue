<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo & Brand -->
      <div class="nav-brand">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
        <span class="brand-name">NourishHub</span>
      </div>

      <!-- Desktop Menu -->
      <div class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <a href="#about" class="nav-link" :class="{ 'active': activeSection === 'about' }" @click="handleNavClick">{{ t('navbar.aboutUs') }}</a>
        <a href="#why-matters" class="nav-link" :class="{ 'active': activeSection === 'why-matters' }" @click="handleNavClick">{{ t('navbar.whyMatters') }}</a>
        <a href="#chart" class="nav-link" :class="{ 'active': activeSection === 'chart' }" @click="handleNavClick">{{ t('navbar.dataInsights') }}</a>
        <a href="#how-it-works" class="nav-link" :class="{ 'active': activeSection === 'how-it-works' }" @click="handleNavClick">{{ t('navbar.howItWorks') }}</a>
        <a href="#sdgs" class="nav-link" :class="{ 'active': activeSection === 'sdgs' }" @click="handleNavClick">{{ t('navbar.sdgsImpact') }}</a>
        <a href="#regions" class="nav-link" :class="{ 'active': activeSection === 'regions' }" @click="handleNavClick">{{ t('navbar.ourRegions') }}</a>
      </div>

      <!-- CTA Button -->
      <div class="nav-actions">
        <!-- Language Selector -->
        <div class="language-selector" @click="toggleLanguageDropdown">
          <button class="btn-language">
            <span class="flag">{{ getCurrentLanguage.flag }}</span>
            <span class="lang-code">{{ getCurrentLanguage.code.toUpperCase() }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron" :class="{ 'open': isLanguageDropdownOpen }">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          <div class="language-dropdown" v-if="isLanguageDropdownOpen">
            <button 
              v-for="lang in languages" 
              :key="lang.code"
              class="lang-option"
              :class="{ 'active': currentLanguage === lang.code }"
              @click.stop="selectLanguage(lang.code)"
            >
              <span class="flag">{{ lang.flag }}</span>
              <span class="lang-name">{{ lang.name }}</span>
              <svg v-if="currentLanguage === lang.code" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </button>
          </div>
        </div>

        <button class="btn-signup" @click="handleSignup">
          {{ t('navbar.signUpCommunity') }}
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="hamburger" :class="{ 'active': isMobileMenuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { currentLanguage, languages, setLanguage, getCurrentLanguage, t, initLanguage } = useLanguage();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('');
const isLanguageDropdownOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Update active section based on scroll position
  const sections = ['about', 'why-matters', 'chart', 'how-it-works', 'sdgs', 'regions'];
  const scrollPosition = window.scrollY + 100;
  
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleNavClick = (event) => {
  event.preventDefault();
  closeMobileMenu();
  
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const navbarHeight = 80; // Approximate navbar height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const handleSignup = () => {
  // Navigate to signup section or form
  const signupSection = document.querySelector('#signup');
  if (signupSection) {
    signupSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert('Coming soon! Join the NourishHub community movement.');
  }
};

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
};

const selectLanguage = (langCode) => {
  setLanguage(langCode);
  isLanguageDropdownOpen.value = false;
};

// Close language dropdown when clicking outside
const handleClickOutside = (event) => {
  const languageSelector = document.querySelector('.language-selector');
  if (languageSelector && !languageSelector.contains(event.target)) {
    isLanguageDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  initLanguage();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(17, 24, 39, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
}

.navbar.scrolled {
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(16, 185, 129, 0.3);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  z-index: 1001;
}

.nav-brand svg {
  color: white;
  transition: all 0.3s ease;
}

.navbar.scrolled .nav-brand svg {
  color: #10b981;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.navbar.scrolled .brand-name {
  color: #d1fae5;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  white-space: nowrap;
}

.navbar.scrolled .nav-link {
  color: #d1d5db;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #10b981;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #10b981;
}

.navbar.scrolled .nav-link:hover {
  color: #10b981;
}

.nav-link.active {
  color: #10b981;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-selector {
  position: relative;
}

.btn-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-language:hover {
  background: rgba(16, 185, 129, 0.25);
  border-color: rgba(16, 185, 129, 0.5);
}

.navbar.scrolled .btn-language {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #10b981;
}

.navbar.scrolled .btn-language:hover {
  background: rgba(16, 185, 129, 0.2);
  border-color: #10b981;
}

.btn-language .flag {
  font-size: 1.25rem;
  line-height: 1;
}

.btn-language .lang-code {
  font-family: monospace;
}

.btn-language .chevron {
  transition: transform 0.3s ease;
}

.btn-language .chevron.open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 180px;
  background: rgba(31, 41, 55, 0.98);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1000;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: #d1d5db;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.lang-option:hover {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.lang-option.active {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.lang-option .flag {
  font-size: 1.25rem;
  line-height: 1;
}

.lang-option .lang-name {
  flex: 1;
}

.lang-option svg {
  color: #10b981;
}

.btn-signup {
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-signup:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.navbar.scrolled .btn-signup {
  background: #10b981;
  color: white;
}

.navbar.scrolled .btn-signup:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger {
  display: block;
  width: 25px;
  height: 2px;
  background: #d1d5db;
  position: relative;
  transition: all 0.3s ease;
}

.navbar.scrolled .hamburger {
  background: #d1fae5;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 2px;
  background: #d1d5db;
  transition: all 0.3s ease;
}

.navbar.scrolled .hamburger::before,
.navbar.scrolled .hamburger::after {
  background: #d1fae5;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .mobile-toggle {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(17, 24, 39, 0.98);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(16, 185, 129, 0.3);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu .nav-link {
    color: #d1d5db;
    font-size: 1.1rem;
    width: 100%;
    padding: 0.75rem 0;
  }

  .nav-actions {
    display: none;
  }

  .nav-menu.active .btn-signup {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }

  .brand-name {
    font-size: 1.25rem;
  }
}
</style>
