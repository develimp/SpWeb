<script setup lang="ts">
import { ref, computed } from 'vue'
import { events } from '@/data/events'
import EventCard from '@/components/EventCard.vue'

const selectedMonth = ref<string | null>(null)
const selectedCategory = ref<string | null>(null)
const viewMode = ref<'cards' | 'list'>('cards')

const months = [
  { label: 'Gener', value: '01' },
  { label: 'Febrer', value: '02' },
  { label: 'Març', value: '03' },
  { label: 'Abril', value: '04' },
  { label: 'Maig', value: '05' },
  { label: 'Juny', value: '06' },
  { label: 'Juliol', value: '07' },
  { label: 'Agost', value: '08' },
  { label: 'Setembre', value: '09' },
  { label: 'Octubre', value: '10' },
  { label: 'Novembre', value: '11' },
  { label: 'Desembre', value: '12' }
]

const categories = computed(() => {
  const catSet = new Set(events.map(e => e.category))
  return Array.from(catSet).map(cat => ({ label: cat, value: cat }))
})

const filteredEvents = computed(() => {
  let result = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  if (selectedMonth.value) {
    result = result.filter(e => e.date.substring(5, 7) === selectedMonth.value)
  }

  if (selectedCategory.value) {
    result = result.filter(e => e.category === selectedCategory.value)
  }

  return result
})

const categoryColors: Record<string, string> = {
  'Plantà': 'primary',
  'Cremà': 'negative',
  'Premi': 'accent',
  'Assemblea': 'positive',
  'Pirotècnia': 'warning',
  'Cultura': 'cyan',
  'Gastronomia': 'info',
  'Cavalcada del Ninot': 'deep-orange',
  'Festa': 'secondary',
  'Altres': 'grey'
}

function getCategoryColor(category: string): string {
  return categoryColors[category] || 'grey'
}
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Esdeveniments</div>
        <div class="text-h5 text-grey-8 q-mb-sm">Calendari de festes {{ new Date().getFullYear() }}</div>
        <div class="text-subtitle1 text-grey-7">Tots els actes de la temporada fallera</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- View Toggle -->
      <div class="row justify-between items-center q-mb-lg">
        <div class="text-h5 text-weight-bold text-secondary">
          <q-icon name="event_note" color="primary" class="q-mr-sm" />
          Pròxims esdeveniments
        </div>

        <q-btn-toggle
          v-model="viewMode"
          toggle-color="primary"
          :options="[
            { value: 'cards', icon: 'grid_view', label: 'Targetes' },
            { value: 'list', icon: 'view_list', label: 'Llista' }
          ]"
          unelevated
        />
      </div>

      <!-- Filters -->
      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-4">
          <q-select
            v-model="selectedMonth"
            :options="months"
            label="Filtra per mes"
            outlined
            dense
            clearable
            emit-value
            map-options
            color="primary"
            class="full-width"
          >
            <template #prepend>
              <q-icon name="calendar_month" />
            </template>
          </q-select>
        </div>
        <div class="col-12 col-md-4">
          <q-select
            v-model="selectedCategory"
            :options="categories"
            label="Filtra per tipus"
            outlined
            dense
            clearable
            emit-value
            map-options
            color="primary"
            class="full-width"
          >
            <template #prepend>
              <q-icon name="category" />
            </template>
          </q-select>
        </div>
        <div class="col-12 col-md-4">
          <q-btn
            v-if="selectedMonth || selectedCategory"
            flat
            color="primary"
            label="Netejar filtres"
            icon="filter_alt_off"
            class="full-width"
            @click="selectedMonth = null; selectedCategory = null"
          />
        </div>
      </div>

      <!-- Category Legend -->
      <div class="q-mb-lg">
        <div class="text-subtitle2 text-grey-8 q-mb-sm">Categories:</div>
        <div class="row q-gutter-sm">
          <q-badge
            v-for="cat in categories"
            :key="cat.value"
            :color="getCategoryColor(cat.value)"
            class="text-caption cursor-pointer"
            @click="selectedCategory = selectedCategory === cat.value ? null : cat.value"
          >
            {{ cat.label }}
          </q-badge>
        </div>
      </div>

      <!-- Cards View -->
      <div v-if="viewMode === 'cards'" class="row q-col-gutter-md">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="col-12 col-md-6"
        >
          <EventCard :event="event" />
        </div>
      </div>

      <!-- List View -->
      <q-list v-else-if="viewMode === 'list'" bordered separator class="rounded-borders">
        <q-item v-for="event in filteredEvents" :key="event.id" class="q-py-md">
          <q-item-section avatar>
            <q-avatar
              :color="getCategoryColor(event.category)"
              text-color="white"
              :icon="event.category === 'Cremà' ? 'local_fire_department' : event.category === 'Plantà' ? 'construction' : 'event'"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold text-subtitle1">{{ event.title }}</q-item-label>
            <q-item-label caption>{{ event.description }}</q-item-label>
            <q-item-label caption class="q-mt-xs">
              <q-icon name="place" size="xs" class="q-mr-xs" />
              {{ event.location }} · <q-icon name="schedule" size="xs" class="q-ml-sm q-mr-xs" />
              {{ event.time }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="text-right">
              <div class="text-h5 text-weight-bold text-secondary">
                {{ new Date(event.date).getDate() }}
              </div>
              <div class="text-caption text-grey-7">
                {{ new Date(event.date).toLocaleDateString('ca-ES', { month: 'short' }) }}
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <div v-if="filteredEvents.length === 0" class="text-center q-py-xl">
        <q-icon name="event_busy" color="grey" size="64px" class="q-mb-md" />
        <div class="text-h6 text-grey-7">No s'han trobat esdeveniments</div>
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

.rounded-borders {
  border-radius: 12px;
}
</style>
