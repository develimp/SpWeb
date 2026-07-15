<script setup lang="ts">
import { ref } from 'vue'
import type { Monument } from '@/data/monuments'

defineProps<{
  monument: Monument
}>()

const currentTab = ref('gran')
const dialogOpen = ref(false)
</script>

<template>
  <q-card class="monument-card" flat bordered>
    <q-card-section class="bg-secondary q-py-sm">
      <div class="row justify-between items-center">
        <div class="text-h5 text-white text-weight-bold">
          {{ monument.year }}
        </div>
        <q-badge color="primary" class="text-subtitle2">
          {{ monument.year === 2024 ? 'Actual' : `${monument.year}` }}
        </q-badge>
      </div>
    </q-card-section>

    <q-tabs
      v-model="currentTab"
      dense
      class="text-grey-8"
      active-color="primary"
      indicator-color="primary"
      narrow-indicator
    >
      <q-tab name="gran" label="Monument Gran" class="text-weight-medium" />
      <q-tab name="infantil" label="Monument Infantil" class="text-weight-medium" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="currentTab" animated>
      <q-tab-panel name="gran">
        <q-img
          :src="monument.gran.image"
          :ratio="3/2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">{{ monument.gran.title }}</div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ monument.gran.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{ monument.gran.artist }}
          </div>
          <q-badge :color="monument.gran.award === 'No celebrada' ? 'grey' : 'accent'" class="q-mt-sm">
            {{ monument.gran.award }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ monument.gran.description }}
          </p>
        </div>
      </q-tab-panel>

      <q-tab-panel name="infantil">
        <q-img
          :src="monument.infantil.image"
          :ratio="3/2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">{{ monument.infantil.title }}</div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ monument.infantil.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{ monument.infantil.artist }}
          </div>
          <q-badge :color="monument.infantil.award === 'No celebrada' ? 'grey' : 'accent'" class="q-mt-sm">
            {{ monument.infantil.award }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ monument.infantil.description }}
          </p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>

  <q-dialog v-model="dialogOpen">
    <q-card style="max-width: 90vw; max-height: 90vh;">
      <q-img
        :src="currentTab === 'gran' ? monument.gran.image : monument.infantil.image"
        contain
      />
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">{{ currentTab === 'gran' ? monument.gran.title : monument.infantil.title }}</div>
        <div class="text-subtitle2">{{ currentTab === 'gran' ? monument.gran.artist : monument.infantil.artist }}</div>
      </q-card-section>
      <q-btn v-close-popup round color="primary" icon="close" class="absolute-top-right q-ma-md" />
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.monument-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}

.rounded-borders {
  border-radius: 8px;
}
</style>
