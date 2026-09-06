<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { api } from 'boot/axios'
import PhotoGallery from '@/components/PhotoGallery.vue'
import type { GalleryAlbum, GalleryAlbumView } from '@/types/gallery'
import { resolveImageUrl, STORAGE_BASE_URL } from '@/utils/imagePlaceholders'

const galleryAlbums = ref<GalleryAlbumView[]>([])
const loadingAlbums = ref(false)
const albumsError = ref<string | null>(null)
const selectedYear = ref<number | null>(null)
const selectedCategory = ref<string | null>(null)
const expandedAlbums = ref<Set<number>>(new Set())

const getImageUrl = (album: GalleryAlbum, imageKey: string | null | undefined) => {
  const trimmedImageKey = imageKey?.trim()
  return trimmedImageKey
    ? `${STORAGE_BASE_URL}/gallery/${album.fallaYear}/${trimmedImageKey}`
    : resolveImageUrl(imageKey)
}

const mapAlbum = (
  album: GalleryAlbum,
  photos: GalleryAlbum['photos'],
  albumIndex: number,
): GalleryAlbumView => ({
  ...album,
  id: album.id ?? albumIndex,
  photos: (photos ?? []).map((photo, photoIndex) => ({
    id: photo.id ?? photoIndex,
    src: getImageUrl(album, photo.imageKey),
    title: '',
  })),
})

const fetchGalleryAlbums = async () => {
  loadingAlbums.value = true
  albumsError.value = null

  try {
    const albumsResponse = await api.get<GalleryAlbum[]>('/gallery-albums')
    const albumsWithPhotos = await Promise.all(
      albumsResponse.data.map(async (album, albumIndex) => {
        if (album.id === undefined) {
          return mapAlbum(album, [], albumIndex)
        }

        const photosResponse = await api.get<NonNullable<GalleryAlbum['photos']>>(
          '/gallery-photos',
          {
            params: {
              filter: JSON.stringify({
                where: { albumFk: album.id },
              }),
            },
          },
        )
        return mapAlbum(album, photosResponse.data, albumIndex)
      }),
    )

    galleryAlbums.value = albumsWithPhotos
  } catch (error) {
    console.error('Error obtenint la galeria:', error)
    galleryAlbums.value = []
    albumsError.value = 'No s\'han pogut carregar les imatges. Torna-ho a provar més tard.'
  } finally {
    loadingAlbums.value = false
  }
}

onMounted(() => {
  fetchGalleryAlbums()
})

const years = computed(() => {
  const yearSet = new Set(galleryAlbums.value.map(album => album.fallaYear))
  return Array.from(yearSet).sort((a, b) => b - a)
})

const categories = computed(() => {
  const catSet = new Set(galleryAlbums.value.map(album => album.category))
  return Array.from(catSet).sort()
})

const filteredAlbums = computed(() => {
  let result = [...galleryAlbums.value]

  if (selectedYear.value) {
    result = result.filter(album => album.fallaYear === selectedYear.value)
  }

  if (selectedCategory.value) {
    result = result.filter(album => album.category === selectedCategory.value)
  }

  return result.sort((a, b) => {
    const dateDifference = new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
    return dateDifference || b.fallaYear - a.fallaYear
  })
})

const totalPhotos = computed(() => {
  return filteredAlbums.value.reduce((sum, album) => sum + (album.photos?.length ?? 0), 0)
})

const toggleAlbum = (albumId: number) => {
  if (expandedAlbums.value.has(albumId)) {
    expandedAlbums.value.delete(albumId)
  } else {
    expandedAlbums.value.add(albumId)
  }
}

const isAlbumExpanded = (albumId: number) => {
  return expandedAlbums.value.has(albumId)
}

const formatDate = (date: string | null | undefined) => {
  if (!date) return ''
  const [year, month, day] = date.substring(0, 10).split('-')
  return `${day}/${month}/${year}`
}

const categoryColors: Record<string, string> = {
  'Monuments': 'negative',
  'Actes': 'primary',
  'Festes': 'warning',
  'Arxiu històric': 'brown'
}

const getCategoryColor = (category: string) => {
  return categoryColors[category] || 'grey'
}
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Galeria</div>
        <div class="text-h5 text-grey-8 q-mb-sm">Moments inoblidables</div>
        <div class="text-subtitle1 text-grey-7">60 anys d'història en imatges</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <!-- Filters -->
      <div class="row q-col-gutter-md q-mb-lg">
        <div class="col-12 col-md-3">
          <q-select
            v-model="selectedYear"
            :options="years"
            label="Filtra per any"
            outlined
            dense
            clearable
            emit-value
            map-options
            color="primary"
            class="full-width"
          >
            <template #prepend>
              <q-icon name="calendar_today" />
            </template>

            <template #option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>

        <div class="col-12 col-md-3">
          <q-select
            v-model="selectedCategory"
            :options="categories"
            label="Filtra per categoria"
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

        <div class="col-12 col-md-3">
          <q-btn
            v-if="selectedYear || selectedCategory"
            flat
            color="primary"
            label="Netejar filtres"
            icon="filter_alt_off"
            class="full-width"
            @click="selectedYear = null; selectedCategory = null"
          />
        </div>

        <div class="col-12 col-md-3">
          <q-card flat bordered class="bg-grey-2 q-pa-sm">
            <div class="row items-center justify-center">
              <q-icon name="photo_library" color="primary" size="24px" class="q-mr-sm" />
              <span class="text-subtitle2">
                <strong class="text-secondary">{{ totalPhotos }}</strong> fotos
              </span>
            </div>
          </q-card>
        </div>
      </div>

      <!-- Category Chips -->
      <div class="q-mb-lg">
        <q-chip
          v-for="cat in categories"
          :key="cat"
          clickable
          :color="getCategoryColor(cat)"
          text-color="white"
          :class="['q-mr-sm', 'category-chip', selectedCategory !== cat ? 'category-chip--inactive' : '']"
          @click="selectedCategory = selectedCategory === cat ? null : cat"
        >
          {{ cat }}
          <q-icon
            v-if="selectedCategory === cat"
            name="close"
            size="xs"
            class="q-ml-xs"
          />
        </q-chip>
      </div>

      <q-separator class="q-my-lg" />

      <!-- Albums -->
      <div v-if="loadingAlbums" class="text-center q-py-xl">
        <q-spinner color="primary" size="48px" />
      </div>

      <div v-else-if="albumsError" class="text-center q-py-xl text-grey-7">
        {{ albumsError }}
      </div>

      <div v-else-if="filteredAlbums.length > 0" class="q-gutter-md">
        <div v-for="album in filteredAlbums" :key="album.id" class="album-card">
          <q-card flat bordered class="album-header" @click="toggleAlbum(album.id)">
            <q-card-section class="row items-center justify-between cursor-pointer q-pa-md">
              <div class="row items-center">
                <q-icon
                  :name="isAlbumExpanded(album.id) ? 'expand_less' : 'expand_more'"
                  :color="getCategoryColor(album.category)"
                  size="28px"
                  class="q-mr-md"
                />
                <div>
                  <div class="text-h6 text-weight-bold" :class="`text-${getCategoryColor(album.category)}`">{{ album.category }}</div>
                  <div class="text-caption text-grey-7">
                    {{ album.fallaYear }}
                    <span v-if="album.date"> · {{ formatDate(album.date) }}</span>
                    <span v-if="album.description"> · {{ album.description }}</span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <q-badge :color="getCategoryColor(album.category)" class="text-caption">
                  {{ album.photos.length }} foto{{ album.photos.length !== 1 ? 's' : '' }}
                </q-badge>
              </div>
            </q-card-section>
          </q-card>

          <q-expand-item
            :model-value="isAlbumExpanded(album.id)"
            @update:model-value="toggleAlbum(album.id)"
          >
            <q-card flat bordered class="q-mt-sm">
              <q-card-section>
                <PhotoGallery :images="album.photos" />
              </q-card-section>
            </q-card>
          </q-expand-item>
        </div>
      </div>

      <div v-else class="text-center q-py-xl">
        <q-icon name="photo_camera_off" color="grey" size="64px" class="q-mb-md" />
        <div class="text-h6 text-grey-7">No s'han trobat imatges</div>
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

.album-card {
  margin-bottom: 0;
}

.album-header {
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.category-chip {
  transition: opacity 0.2s ease;

  &--inactive {
    opacity: 0.45;
  }

  &:hover {
    opacity: 1;
  }
}
</style>
