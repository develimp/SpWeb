<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types/event'
import { STORAGE_BASE_URL } from '@/utils/imagePlaceholders'

defineProps<{
  event: Event
}>()

const showImage = ref(false)

function getImageUrl(
  fallaYear: number,
  imageKey: string | null | undefined,
): string | undefined {
  const trimmedImageKey = imageKey?.trim()
  return trimmedImageKey
    ? `${STORAGE_BASE_URL}/events/${fallaYear}/${trimmedImageKey}`
    : undefined
}

const categoryColors: Record<string, string> = {
  'Nomenament': 'primary',
  'Presentació': 'primary',
  'Monument': 'negative',
  'Premi': 'accent',
  'Assemblea': 'positive',
  'Cultura': 'cyan',
  'Gastronomia': 'info',
  'Festa': 'warning',
  'Altres': 'grey'
}

function getCategoryColor(category: string): string {
  return categoryColors[category] || 'grey'
}

const categoryIcons: Record<string, string> = {
  'Nomenament': 'star',
  'Presentació': 'star',
  'Monument': 'local_fire_department',
  'Premi': 'emoji_events',
  'Assemblea': 'groups',
  'Cultura': 'theater_comedy',
  'Gastronomia': 'restaurant',
  'Festa': 'celebration',
  'Altres': 'event'
}

function getCategoryIcon(category: string): string {
  return categoryIcons[category] || 'event'
}

function formatTime(time: string | null): string {
  return time ? time.substring(0, 5) : ''
}
</script>

<template>
  <q-card class="event-card" flat bordered>
    <q-card-section class="q-pa-none">
      <div
        class="row event-row"
        :class="{ 'has-event-image': getImageUrl(event.fallaYear, event.imageKey) }"
      >
        <div class="col-auto q-pa-md text-white text-center" :class="`bg-${getCategoryColor(event.category)}`" style="width: 100px;">
          <div class="text-h4 text-weight-bold">{{ new Date(event.date).getUTCDate() }}</div>
          <div class="text-caption">
            {{ new Date(event.date).toLocaleDateString('ca-ES', { month: 'short', timeZone: 'UTC' }) }}
          </div>
        </div>

        <div class="col q-pa-md event-details">
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
              {{ formatTime(event.time) }}
            </div>
            <div class="text-caption text-grey-7">
              <q-icon name="place" class="q-mr-xs" size="xs" />
              {{ event.location }}
            </div>
          </div>
        </div>

        <div v-if="getImageUrl(event.fallaYear, event.imageKey)" class="event-image-column">
          <q-img
            :src="getImageUrl(event.fallaYear, event.imageKey)"
            :alt="`Poster de ${event.title}`"
            class="event-image cursor-pointer"
            fit="contain"
            @click="showImage = true"
          />
          <div class="event-image-hint" aria-hidden="true">
            <q-icon name="zoom_in" size="28px" />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="showImage">
    <q-card class="image-dialog-card">
      <q-img
        v-if="getImageUrl(event.fallaYear, event.imageKey)"
        :src="getImageUrl(event.fallaYear, event.imageKey)"
        :alt="`Poster de ${event.title}`"
        fit="contain"
        class="expanded-event-image"
      />
      <q-btn
        v-close-popup
        round
        dense
        flat
        icon="close"
        color="white"
        aria-label="Tanca la imatge"
        class="image-dialog-close"
      />
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.event-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.event-row {
  position: relative;
}

.has-event-image .event-details {
  padding-right: 196px !important;
}

.event-image-column {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 180px;
  overflow: hidden;
}

.event-image {
  width: 100%;
  height: 100%;
  background: #fff;
  transition: transform 0.25s ease;
}

.event-image-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: rgba(17, 17, 17, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.event-image-column:hover .event-image {
  transform: scale(1.04);
}

.event-image-column:hover .event-image-hint {
  opacity: 1;
}

.image-dialog-card {
  position: relative;
  width: min(90vw, 900px);
  max-width: 900px;
  background: #111;
}

.expanded-event-image {
  max-height: 85vh;
}

.image-dialog-close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.55);
}

@media (max-width: 599px) {
  .event-image-column {
    width: 110px;
  }

  .has-event-image .event-details {
    padding-right: 126px !important;
  }
}
</style>
