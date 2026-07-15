<script setup lang="ts">
import type { Decade } from '@/data/historia'

defineProps<{
  decade: Decade
  position: 'left' | 'right'
}>()
</script>

<template>
  <q-timeline-entry
    :title="decade.title"
    :subtitle="decade.years"
    :side="position"
    :icon="decade.decade === '2020s' ? 'stars' : 'history_edu'"
    :color="decade.decade === '2020s' ? 'primary' : 'grey-7'"
  >
    <div class="q-gutter-md">
      <q-img
        :src="decade.image"
        :ratio="16/9"
        class="rounded-borders"
        style="max-height: 220px;"
      >
        <div class="absolute-bottom-right bg-primary text-white q-pa-sm">
          {{ decade.milestone }}
        </div>
      </q-img>

      <p class="text-body1">
        {{ decade.description }}
      </p>
    </div>
  </q-timeline-entry>
</template>

<style lang="scss" scoped>
.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}
</style>
