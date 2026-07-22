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
      <div class="hero-overlay"></div>
      <div class="spark-particles"></div>
    </div>

    <div class="hero-content">
      <transition
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
      >
        <div v-show="showContent" class="hero-layout">
          <div class="hero-copy">
            <div class="hero-label">Falla Sants Patrons</div>
            <h1 class="hero-title">
              Més de 60 anys de festa, foc i tradició
            </h1>
            <p class="hero-text">
              Uneix-te a la nostra família fallera i viu l'esperit de la festa en una de les comissions més importants d'Alzira.
            </p>

            <div class="hero-details">
              <q-badge color="white" text-color="black" class="hero-badge">
                <q-icon name="whatshot" class="q-mr-xs" />
                Des del 20 de març de 1965
              </q-badge>
              <span class="hero-status">Més de 60 anys de trajectòria</span>
            </div>

            <div class="hero-cta">
              <q-btn
                color="white"
                text-color="black"
                label="La nostra història"
                icon="arrow_forward"
                to="/historia"
                size="lg"
                unelevated
                class="btn-primary"
              />
              <q-btn
                color="black"
                text-color="white"
                label="Esdeveniments"
                icon="event"
                to="/eventos"
                size="lg"
                unelevated
                class="btn-secondary"
              />
            </div>
          </div>

          <div class="hero-visual">
            <q-img src="/logo falla web.png" ratio="1" class="shield-img" />
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
  min-height: 680px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.14), transparent 24%),
              radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.08), transparent 18%),
              linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 18%, #ff8a00 45%, #ff4500 100%);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.65));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 2rem 4rem;
}

.hero-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.hero-copy {
  flex: 1;
  max-width: 52rem;
  color: white;
  text-align: left;
}

.hero-label {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 700;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
}

.hero-title {
  font-size: clamp(3rem, 5vw, 5.5rem);
  line-height: 0.95;
  margin: 0;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.hero-text {
  font-size: 1.2rem;
  max-width: 38rem;
  margin-bottom: 1.75rem;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.75;
}

.hero-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-badge {
  padding: 0.9rem 1rem;
  font-weight: 700;
  border-radius: 999px;
}

.hero-status {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-primary {
  min-width: 240px;
  box-shadow: 0 18px 45px rgba(255, 138, 0, 0.28);
}

.btn-secondary {
  min-width: 240px;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.28) !important;
}

.hero-visual {
  width: min(420px, 45%);
  display: flex;
  justify-content: flex-end;
}

.shield-img {
  width: 100%;
  max-width: 420px;
  min-height: 320px;
  object-fit: contain;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@media (max-width: 1024px) {
  .hero-layout {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-visual {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 720px) {
  .hero-section {
    min-height: 760px;
  }

  .hero-content {
    padding: 1.5rem 1.2rem 3rem;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-cta {
    width: 100%;
    justify-content: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    min-width: unset;
  }
}
</style>
