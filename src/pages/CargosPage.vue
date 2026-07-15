<script setup lang="ts">
import { ref, computed } from 'vue'
import { cargos } from '@/data/cargos'
import YearFilter from '@/components/YearFilter.vue'
import CargoCard from '@/components/CargoCard.vue'

const selectedYear = ref<number | null>(null)
const searchQuery = ref('')
const selectedRole = ref<string | null>(null)

const years = computed(() => cargos.map(c => c.year))

const roles = computed(() => {
  const roleSet = new Set<string>()
  cargos.forEach(yearCargos => {
    yearCargos.members.forEach(member => {
      roleSet.add(member.role)
    })
  })
  return Array.from(roleSet)
})

const filteredCargos = computed(() => {
  let result = cargos.map(yearCargos => {
    let filteredMembers = yearCargos.members

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filteredMembers = filteredMembers.filter(m => m.name.toLowerCase().includes(query))
    }

    if (selectedRole.value) {
      filteredMembers = filteredMembers.filter(m => m.role === selectedRole.value)
    }

    return {
      ...yearCargos,
      members: filteredMembers
    }
  })

  if (selectedYear.value) {
    result = result.filter(c => c.year === selectedYear.value)
  }

  return result.filter(c => c.members.length > 0)
})

const latestYear = computed(() => cargos[0].year)
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Càrrecs Fallers</div>
        <div class="text-h5 text-grey-8 q-mb-sm">La nostra família fallera</div>
        <div class="text-subtitle1 text-grey-7">La Junta Directiva de cada any</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- Featured Current Year -->
      <section class="q-mb-xl">
        <div class="text-h5 text-weight-bold text-secondary q-mb-md">
          <q-icon name="stars" color="primary" class="q-mr-sm" />
          Any actual {{ latestYear }}
        </div>

        <CargoCard :year-cargos="cargos[0]" :is-latest="true" />
      </section>

      <!-- Filters -->
      <q-separator class="q-my-lg" />
      <div class="text-h5 text-weight-bold text-secondary q-mb-md">
        Anys anteriors
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

      <!-- Cargos Grid -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="yearCargos in filteredCargos.filter(c => c.year !== latestYear)"
          :key="yearCargos.year"
          class="col-12 col-sm-6 col-lg-4"
        >
          <CargoCard :year-cargos="yearCargos" />
        </div>
      </div>

      <div
        v-if="filteredCargos.filter(c => c.year !== latestYear).length === 0"
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
