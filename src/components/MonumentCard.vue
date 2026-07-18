<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Monument } from '@/data/monuments'

const props = defineProps<{
  monument: Monument
}>()

const currentTab = ref('gran')
const dialogOpen = ref(false)

const currentImage = computed(() => {
  return currentTab.value === 'gran' ? props.monument.gran.image : props.monument.infantil.image
})

const currentTitle = computed(() => {
  return currentTab.value === 'gran' ? props.monument.gran.title : props.monument.infantil.title
})

const currentArtist = computed(() => {
  return currentTab.value === 'gran' ? props.monument.gran.artist : props.monument.infantil.artist
})

const noPhoto = computed(() => {
  return currentImage.value === '/no-photo.svg'
})
</script>

<template>
  <q-card class="monument-card" flat bordered>
    <q-card-section class="bg-secondary q-py-sm">
      <div class="row justify-between items-center">
        <div class="text-h5 text-white text-weight-bold">
          {{ props.monument.year }}
        </div>
        <q-badge color="primary" class="text-subtitle2">
          {{ props.monument.year === 2024 ? 'Actual' : `${props.monument.year}` }}
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
          :src="props.monument.gran.image"
          :ratio="3/2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div v-if="noPhoto" class="absolute-full flex flex-center column text-center bg-grey-2 text-grey-7">
            <q-icon name="image_not_supported" size="48px" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold">Pròximament</div>
            <div class="text-caption">Foto disponible en breu</div>
          </div>
          <div v-else class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">{{ props.monument.gran.title }}</div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ props.monument.gran.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{ props.monument.gran.artist }}
          </div>
          <q-badge :color="props.monument.gran.award === 'No celebrada' ? 'grey' : 'accent'" class="q-mt-sm">
            {{ props.monument.gran.award }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ props.monument.gran.description }}
          </p>
        </div>
      </q-tab-panel>

      <q-tab-panel name="infantil">
        <q-img
          :src="props.monument.infantil.image"
          :ratio="3/2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div v-if="noPhoto" class="absolute-full flex flex-center column text-center bg-grey-2 text-grey-7">
            <q-icon name="image_not_supported" size="48px" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold">Pròximament</div>
            <div class="text-caption">Foto disponible en breu</div>
          </div>
          <div v-else class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">{{ props.monument.infantil.title }}</div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ props.monument.infantil.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{ props.monument.infantil.artist }}
          </div>
          <q-badge :color="props.monument.infantil.award === 'No celebrada' ? 'grey' : 'accent'" class="q-mt-sm">
            {{ props.monument.infantil.award }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ props.monument.infantil.description }}
          </p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>

  <q-dialog v-model="dialogOpen">
    <q-card style="width: 85vw; max-width: 1000px; max-height: 85vh;">
      <q-img
        :src="currentImage"
        contain
        style="min-height: 60vh;"
      />
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">{{ currentTitle }}</div>
        <div class="text-subtitle2">{{ currentArtist }}</div>
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
