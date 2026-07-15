<script setup lang="ts">
import { ref, computed } from 'vue'
import { monuments } from '@/data/monuments'
import YearFilter from '@/components/YearFilter.vue'
import MonumentCard from '@/components/MonumentCard.vue'

const selectedYear = ref<number | null>(null)
const searchQuery = ref('')

const years = computed(() => monuments.map(m => m.year))

const filteredMonuments = computed(() => {
  let result = monuments

  if (selectedYear.value) {
    result = result.filter(m => m.year === selectedYear.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(m =>
      m.gran.title.toLowerCase().includes(query) ||
      m.gran.artist.toLowerCase().includes(query) ||
      m.infantil.title.toLowerCase().includes(query) ||
      m.infantil.artist.toLowerCase().includes(query)
    )
  }

  return result
})
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Monuments Fallers</div>
        <div class="text-h5 text-grey-8 q-mb-sm">La nostra tradició artística</div>
        <div class="text-subtitle1 text-grey-7">Monuments grans i infantils des de 1966</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- Filters -->
      <div class="row q-col-gutter-md q-mb-xl">
        <div class="col-12 col-md-4">
          <YearFilter
            v-model="selectedYear"
            :years="years"
            label="Filtra per any"
          />
        </div>
        <div class="col-12 col-md-4">
          <q-input
            v-model="searchQuery"
            label="Buscar per títol o artista"
            outlined
            dense
            clearable
            color="primary"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4">
          <q-btn
            v-if="selectedYear || searchQuery"
            flat
            color="primary"
            label="Netejar filtres"
            icon="filter_alt_off"
            class="full-width"
            @click="selectedYear = null; searchQuery = ''"
          />
        </div>
      </div>

      <!-- Stats -->
      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="q-pa-md">
            <div class="row items-center">
              <q-avatar color="primary" text-color="white" icon="architecture" size="48px" class="q-mr-md" />
              <div>
                <div class="text-h4 text-weight-bold text-secondary">{{ filteredMonuments.length }}</div>
                <div class="text-body2 text-grey-7">monuments trobats</div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered class="q-pa-md">
            <div class="row items-center">
              <q-icon name="emoji_events" color="accent" size="48px" class="q-mr-md" />
              <div>
                <div class="text-h4 text-weight-bold text-secondary">
                  {{ filteredMonuments.filter(m => m.gran.award.includes('1er') || m.infantil.award.includes('1er')).length }}
                </div>
                <div class="text-body2 text-grey-7">primers premis</div>
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <!-- Monument Grid -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="monument in filteredMonuments"
          :key="monument.year"
          class="col-12 col-sm-6 col-lg-4"
        >
          <MonumentCard :monument="monument" />
        </div>
      </div>

      <q-empty
        v-if="filteredMonuments.length === 0"
        icon="search_off"
        color="grey"
        title="No s'han trobat monuments"
        subtitle="Prova de canviar els filtres de cerca"
      />
    </div>
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
</style>
