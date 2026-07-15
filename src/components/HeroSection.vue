<script setup lang="ts">
import { onMounted, ref } from 'vue'

const showContent = ref(false)

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 100)
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="gradient-overlay"></div>
      <div class="spark-particles"></div>
    </div>

    <div class="hero-content">
      <transition
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
      >
        <div v-show="showContent" class="text-container">
          <h1 class="hero-title">
            Falla Sants Patrons
          </h1>
          <div class="hero-subtitle">Alzira · València</div>
          <div class="hero-tagline">
            Més de 60 anys de festa, foc i tradició
          </div>
          <div class="hero-year-badge">
            <q-badge color="white" text-color="primary" class="q-pa-sm text-subtitle1">
              <q-icon name="whatshot" class="q-mr-xs" />
              Des de 1964
            </q-badge>
          </div>

          <div class="hero-cta q-mt-lg">
            <q-btn
              color="primary"
              text-color="white"
              label="Descobreix la nostra història"
              icon="arrow_forward"
              to="/historia"
              size="lg"
              class="q-mr-md q-mb-md"
              unelevated
            />
            <q-btn
              color="primary"
              text-color="white"
              label="Viu els nostres esdeveniments"
              icon="event"
              to="/eventos"
              size="lg"
              class="q-mb-md"
              unelevated
            />
          </div>
        </div>
      </transition>
    </div>

    <div class="hero-scroll-indicator" @click="$emit('scroll')">
      <q-icon name="keyboard_arrow_down" size="xl" color="white" class="scroll-arrow" />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  emits: ['scroll']
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff8a50 0%, #E8621A 40%, #c75010 100%);
  z-index: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 60% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 40%);
  z-index: 1;
  animation: gradientPulse 4s ease-in-out infinite;
}

@keyframes gradientPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.spark-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.9) 0%, transparent 2%),
    radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.7) 0%, transparent 1.5%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 2%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 1%),
    radial-gradient(circle at 20% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 1.5%);
  animation: particleFloat 8s ease-in-out infinite;
  z-index: 1;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-container {
  max-width: 900px;
  width: 100%;
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.15em;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.hero-tagline {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.hero-year-badge {
  margin: 1rem 0 1.5rem 0;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;

    :deep(.q-btn) {
      width: 100%;
    }
  }
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
</style>
