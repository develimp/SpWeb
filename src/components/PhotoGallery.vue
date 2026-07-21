<script setup lang="ts">
import { ref, computed } from 'vue'
import type { GalleryImage } from '@/data/gallery'

const props = defineProps<{
  images: GalleryImage[]
}>()

const dialogOpen = ref(false)
const selectedImageIndex = ref(0)

const imageList = computed(() => props.images)

const openLightbox = (index: number) => {
  selectedImageIndex.value = index
  dialogOpen.value = true
}

const nextImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value + 1) % imageList.value.length
}

const prevImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value - 1 + imageList.value.length) % imageList.value.length
}
</script>

<template>
  <div class="photo-gallery">
    <div class="gallery-grid">
      <div
        v-for="(image, index) in imageList"
        :key="image.id"
        class="gallery-item"
        @click="openLightbox(index)"
      >
        <q-img
          :src="image.src"
          :alt="image.title"
          :ratio="4/3"
          fit="contain"
          class="gallery-image cursor-pointer"
        >
          <div class="gallery-overlay absolute-full flex column justify-end items-start q-pa-md">
            <div class="text-white text-subtitle1 text-weight-bold">{{ image.title }}</div>
          </div>
        </q-img>
      </div>
    </div>

    <q-dialog v-model="dialogOpen" class="image-dialog">
      <q-card class="bg-black dialog-card">
        <q-btn
          v-close-popup
          round
          color="primary"
          icon="close"
          class="absolute-top-right q-ma-md z-top"
        />

        <div class="dialog-content row items-center justify-center">
          <q-btn
            round
            flat
            icon="navigate_before"
            color="white"
            size="lg"
            class="q-mx-md"
            @click="prevImage"
          />

          <div class="image-wrapper flex flex-center">
            <q-img
              :src="imageList[selectedImageIndex].src"
              :alt="imageList[selectedImageIndex].title"
              fit="contain"
              class="modal-image"
            />
          </div>

          <q-btn
            round
            flat
            icon="navigate_next"
            color="white"
            size="lg"
            class="q-mx-md"
            @click="nextImage"
          />
        </div>

        <div class="absolute-bottom text-center text-white q-pa-md" style="background: rgba(0, 0, 0, 0.5);">
          <div class="text-h6">{{ imageList[selectedImageIndex].title }}</div>
          <div class="text-caption">{{ selectedImageIndex + 1 }} / {{ imageList.length }}</div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="scss" scoped>
.photo-gallery {
  width: 100%;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);

    .gallery-overlay {
      opacity: 1;
    }
  }
}

.gallery-image {
  border-radius: 12px;
  overflow: hidden;
  background: #000;
}

.gallery-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-pointer {
  cursor: pointer;
}

.image-dialog {
  .dialog-card {
    width: min(92vw, 1100px);
    max-width: 1100px;
    max-height: 90vh;
    border-radius: 12px;
    overflow: hidden;
  }
}

.dialog-content {
  min-height: 70vh;
  padding: 24px 16px 80px;
}

.image-wrapper {
  flex: 1;
  min-width: 0;
  height: 100%;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}
</style>
