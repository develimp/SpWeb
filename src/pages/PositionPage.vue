<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { api } from 'boot/axios'
import YearFilter from '@/components/YearFilter.vue'
import PositionCard from '@/components/PositionCard.vue'
import type { Position } from '@/types/position'

type YearPositions = {
  year: number
  members: Position[]
}

const positions = ref<Position[]>([])
const loadingPositions = ref(false)
const positionsError = ref<string | null>(null)

const selectedYear = ref<number | null>(null)
const searchQuery = ref('')
const selectedRole = ref<string | null>(null)

const fetchPositions = async () => {
  loadingPositions.value = true
  positionsError.value = null
  try {
    const response = await api.get('/positions')
    positions.value = response.data
  } catch (error) {
    console.error('Error obtenint els càrrecs:', error)
    positions.value = []
    positionsError.value = 'No s\'han pogut carregar els càrrecs. Torna-ho a provar més tard.'
  } finally {
    loadingPositions.value = false
  }
}

const groupedPositions = computed<YearPositions[]>(() => {
  const groups: Record<number, Position[]> = {}
  positions.value.forEach(position => {
    const year = position.fallaYear
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(position)
  })

  return Object.entries(groups)
    .map(([year, members]) => ({
      year: Number(year),
      members
    }))
    .sort((a, b) => b.year - a.year)
})

const years = computed(() => groupedPositions.value.map(group => group.year))

const roles = computed(() => {
  const roleSet = new Set<string>()
  positions.value.forEach(position => {
    roleSet.add(position.role)
  })
  return Array.from(roleSet)
})

const filteredPositions = computed(() => {
  let result = groupedPositions.value.map(yearGroup => {
    let filteredMembers = yearGroup.members

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filteredMembers = filteredMembers.filter(m => m.name.toLowerCase().includes(query))
    }

    if (selectedRole.value) {
      filteredMembers = filteredMembers.filter(m => m.role === selectedRole.value)
    }

    return {
      ...yearGroup,
      members: filteredMembers
    }
  })

  if (selectedYear.value) {
    result = result.filter(c => c.year === selectedYear.value)
  }

  return result.filter(c => c.members.length > 0)
})

const latestYearGroup = computed(() => groupedPositions.value[0] ?? null)
const latestYear = computed(() => latestYearGroup.value?.year ?? new Date().getFullYear())

onMounted(() => {
  fetchPositions()
})
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Els Càrrecs</div>
        <div class="text-h5 text-grey-8 q-mb-sm">La nostra família fallera</div>
        <div class="text-subtitle1 text-grey-7">Els màxims representants de cada exercici</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- Featured Current Year -->
      <section class="q-mb-xl">
        <div class="text-h5 text-weight-bold text-secondary q-mb-md">
          <q-icon name="stars" color="primary" class="q-mr-sm" />
          Exercici actual {{ latestYear }}
        </div>

        <template v-if="latestYearGroup">
          <PositionCard :year-positions="latestYearGroup" :is-latest="true" />
        </template>
        <div v-else class="text-center q-pa-xl">
          <q-spinner v-if="loadingPositions" color="primary" size="48px" />
          <div v-else-if="positionsError" class="text-grey-7">{{ positionsError }}</div>
          <div v-else class="text-grey-7">No hi ha dades de càrrecs disponibles.</div>
        </div>
      </section>

      <!-- Filters -->
      <q-separator class="q-my-lg" />
      <div class="text-h5 text-weight-bold text-secondary q-mb-md">
        Exercicis anteriors
      </div>

      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-3">
          <YearFilter
            v-model="selectedYear"
            :years="years"
            label="Filtra per any"
          />
        </div>
        <div class="col-12 col-md-3">
          <q-select
            v-model="selectedRole"
            :options="roles"
            label="Filtra per càrrec"
            outlined
            dense
            clearable
            emit-value
            map-options
            color="primary"
            class="full-width"
          >
            <template #prepend>
              <q-icon name="badge" />
            </template>
          </q-select>
        </div>
        <div class="col-12 col-md-4">
          <q-input
            v-model="searchQuery"
            label="Buscar per nom"
            outlined
            dense
            clearable
            color="primary"
            class="full-width"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-2">
          <q-btn
            v-if="selectedYear || searchQuery || selectedRole"
            flat
            color="primary"
            label="Netejar"
            icon="filter_alt_off"
            class="full-width"
            @click="selectedYear = null; searchQuery = ''; selectedRole = null"
          />
        </div>
      </div>

      <!-- Positions Grid -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="yearPositions in filteredPositions.filter(c => c.year !== latestYear)"
          :key="yearPositions.year"
          class="col-12 col-sm-6 col-lg-4"
        >
          <PositionCard :year-positions="yearPositions" />
        </div>
      </div>

      <div
        v-if="filteredPositions.filter(c => c.year !== latestYear).length === 0"
        class="text-center q-py-xl"
      >
        <q-icon name="search_off" color="grey" size="64px" class="q-mb-md" />
        <div class="text-h6 text-grey-7">No s'han trobat càrrecs</div>
        <div class="text-body2 text-grey-6">Prova de canviar els filtres</div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.hero-small {
  background: linear-gradient(135deg, #f5f5f5 0%, #f9f9f9 100%);
  position: relative;
  overflow: hidden;
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
