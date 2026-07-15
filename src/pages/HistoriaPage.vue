<script setup lang="ts">
import { ref, computed } from 'vue'
import { historia } from '@/data/historia'
import TimelineItem from '@/components/TimelineItem.vue'

const activeDecade = ref<string | null>(null)

const decades = computed(() => historia.map(h => h.decade))

const scrollToDecade = (decade: string) => {
  activeDecade.value = decade
  const el = document.getElementById(`decade-${decade}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">La nostra història</div>
        <div class="text-h5 text-grey-8 q-mb-sm">Més de 60 anys de festa, foc i tradició</div>
        <div class="text-subtitle1 text-grey-7">Fundada el 1964 a Alzira, València</div>
      </div>
    </section>

    <div class="row q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- Sidebar -->
      <div class="col-12 col-md-3 gt-sm">
        <div class="sidebar-nav">
          <div class="text-subtitle1 text-weight-bold text-secondary q-mb-md">
            Dècades
          </div>
          <q-list dense>
            <q-item
              v-for="decade in decades"
              :key="decade"
              clickable
              v-ripple
              :active="activeDecade === decade"
              active-class="bg-primary text-white"
              class="rounded-borders q-mb-xs"
              @click="scrollToDecade(decade)"
            >
              <q-item-section>
                <q-item-label class="text-weight-medium">{{ decade }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <!-- Timeline -->
      <div class="col-12 col-md-9">
        <q-timeline color="primary">
          <div
            v-for="(decade, index) in historia"
            :id="`decade-${decade.decade}`"
            :key="decade.decade"
            class="timeline-section"
          >
            <TimelineItem
              :decade="decade"
              :position="index % 2 === 0 ? 'left' : 'right'"
            />
          </div>
        </q-timeline>
      </div>
    </div>

    <!-- Call to Action -->
    <section class="bg-secondary text-white q-py-xl q-mt-xl">
      <div class="container text-center">
        <div class="text-h4 q-mb-md">Vols conèixer tots els detalls?</div>
        <div class="text-body1 text-grey-4 q-mb-lg">
          Visita la nostra galeria fotogràfica per veure moments de les sis dècades d'història.
        </div>
        <q-btn
          color="primary"
          label="Veure galeria"
          icon="photo_library"
          to="/galeria"
          size="lg"
          unelevated
        />
      </div>
    </section>
  </q-page>
</template>

<style lang="scss" scoped>
.hero-small {
  background: linear-gradient(135deg, #f5f5f5 0%, #f9f9f9 100%);
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(232, 98, 26, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 10% 100%, rgba(59, 89, 152, 0.05) 0%, transparent 50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(232, 98, 26, 0.03) 0%, transparent 70%);
    border-radius: 50%;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.sidebar-nav {
  position: sticky;
  top: 100px;
}

.timeline-section {
  margin-bottom: 2rem;
}

.rounded-borders {
  border-radius: 8px;
}
</style>
