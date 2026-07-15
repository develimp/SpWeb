<script setup lang="ts">
import type { Event } from '@/data/events'

defineProps<{
  event: Event
}>()

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

const categoryIcons: Record<string, string> = {
  'Plantà': 'construction',
  'Cremà': 'local_fire_department',
  'Premi': 'emoji_events',
  'Assemblea': 'groups',
  'Pirotècnia': 'celebration',
  'Cultura': 'theater_comedy',
  'Gastronomia': 'restaurant',
  'Cavalcada del Ninot': 'directions_walk',
  'Festa': 'music_note',
  'Altres': 'event'
}

function getCategoryIcon(category: string): string {
  return categoryIcons[category] || 'event'
}
</script>

<template>
  <q-card class="event-card" flat bordered>
    <q-card-section class="q-pa-none">
      <div class="row">
        <div class="col-auto q-pa-md text-white text-center" :class="`bg-${getCategoryColor(event.category)}`" style="width: 100px;">
          <div class="text-h4 text-weight-bold">{{ new Date(event.date).getDate() }}</div>
          <div class="text-caption">
            {{ new Date(event.date).toLocaleDateString('ca-ES', { month: 'short' }) }}
          </div>
        </div>

        <div class="col q-pa-md">
          <div class="row justify-between items-start">
            <div>
              <q-badge
                :color="getCategoryColor(event.category)"
                class="q-mb-sm"
              >
                <q-icon :name="getCategoryIcon(event.category)" size="xs" class="q-mr-xs" />
                {{ event.category }}
              </q-badge>
              <div class="text-h6 text-weight-bold q-mb-xs">{{ event.title }}</div>
              <div class="text-body2 text-grey-8 q-mb-sm">{{ event.description }}</div>
            </div>
          </div>

          <div class="row items-center q-gutter-md">
            <div class="text-caption text-grey-7">
              <q-icon name="schedule" class="q-mr-xs" size="xs" />
              {{ event.time }}
            </div>
            <div class="text-caption text-grey-7">
              <q-icon name="place" class="q-mr-xs" size="xs" />
              {{ event.location }}
            </div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.event-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}
</style>
