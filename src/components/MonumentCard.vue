<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MonumentView } from '@/types/monument'
import { resolveMonumentImageUrl } from '@/utils/imagePlaceholders'

const props = defineProps<{
  monument: MonumentView
}>()

const currentTab = ref('gran')
const dialogOpen = ref(false)

const getImageUrl = (
  monument: MonumentView['gran'] | MonumentView['infantil'] | null | undefined,
  type: 'gran' | 'infantil' = 'gran',
) => {
  return resolveMonumentImageUrl(monument, type)
}

const currentImage = computed(() => {
  return currentTab.value === 'gran'
    ? getImageUrl(props.monument.gran, 'gran')
    : getImageUrl(props.monument.infantil, 'infantil')
})

const currentTitle = computed(() => {
  return currentTab.value === 'gran'
    ? props.monument.gran?.title
    : props.monument.infantil?.title
})

const currentArtist = computed(() => {
  return currentTab.value === 'gran'
    ? props.monument.gran?.artist
    : props.monument.infantil?.artist
})

const getAwardLabel = (monument: MonumentView['gran']) => {
  if (!monument) return ''
  if (!monument.isCelebrated) return 'No celebrada'
  if (!monument.awardType || monument.award === null) {
    return monument.section ? `Secció ${monument.section}` : ''
  }

  const awardType =
    monument.awardType === 'accèssit' ? 'Accèssit' : `${monument.award}r Premi`
  return `${awardType}${monument.section ? ` Secció ${monument.section}` : ''}`
}
</script>

<template>
  <q-card class="monument-card" flat bordered>
    <q-card-section class="bg-secondary q-py-sm">
      <div class="row justify-between items-center">
        <div class="text-h5 text-white text-weight-bold">
          {{ props.monument.year }}
        </div>
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
      <q-tab
        name="infantil"
        label="Monument Infantil"
        class="text-weight-medium"
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="currentTab" animated>
      <q-tab-panel name="gran">
        <q-img
          :src="getImageUrl(props.monument.gran, 'gran')"
          :ratio="3 / 2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div v-if="props.monument.gran?.title" class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">
              {{ props.monument.gran?.title }}
            </div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ props.monument.gran?.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{
              props.monument.gran?.artist
            }}
          </div>
          <q-badge
            :color="!props.monument.gran?.isCelebrated ? 'grey' : 'accent'"
            class="q-mt-sm"
          >
            {{ getAwardLabel(props.monument.gran) }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ props.monument.gran?.description }}
          </p>
        </div>
      </q-tab-panel>

      <q-tab-panel name="infantil">
        <q-img
          :src="getImageUrl(props.monument.infantil, 'infantil')"
          :ratio="3 / 2"
          class="rounded-borders cursor-pointer"
          @click="dialogOpen = true"
        >
          <div v-if="props.monument.infantil?.title" class="absolute-bottom text-white">
            <div class="text-subtitle1 text-weight-bold">
              {{ props.monument.infantil?.title }}
            </div>
          </div>
        </q-img>

        <div class="q-mt-md">
          <div class="text-subtitle2 text-weight-bold text-primary q-mb-xs">
            {{ props.monument.infantil?.title }}
          </div>
          <div class="text-caption text-grey-8">
            <q-icon name="person" class="q-mr-xs" />{{
              props.monument.infantil?.artist
            }}
          </div>
          <q-badge
            :color="!props.monument.infantil?.isCelebrated ? 'grey' : 'accent'"
            class="q-mt-sm"
          >
            {{ getAwardLabel(props.monument.infantil) }}
          </q-badge>
          <p class="text-body2 text-grey-9 q-mt-sm">
            {{ props.monument.infantil?.description }}
          </p>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>

  <q-dialog v-model="dialogOpen">
    <q-card style="width: 85vw; max-width: 1000px; max-height: 85vh">
      <q-img :src="currentImage" contain style="min-height: 60vh" />
      <q-card-section class="bg-secondary text-white">
        <div class="text-h6">{{ currentTitle }}</div>
        <div class="text-subtitle2">{{ currentArtist }}</div>
      </q-card-section>
      <q-btn
        v-close-popup
        round
        color="primary"
        icon="close"
        class="absolute-top-right q-ma-md"
      />
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.monument-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}

.rounded-borders {
  border-radius: 8px;
}
</style>
