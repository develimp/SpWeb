<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import type { Book } from '@/types/book'
import { STORAGE_BASE_URL } from '@/utils/imagePlaceholders'

const books = ref<Book[]>([])
const loadingBooks = ref(false)
const booksError = ref<string | null>(null)

const fetchBooks = async () => {
  loadingBooks.value = true
  booksError.value = null

  try {
    const response = await api.get<Book[]>('/books')
    books.value = response.data
  } catch (error) {
    console.error('Error obtenint els llibrets:', error)
    books.value = []
    booksError.value = 'No s\'han pogut carregar els llibrets. Torna-ho a provar més tard.'
  } finally {
    loadingBooks.value = false
  }
}

const sortedBooks = computed(() => [...books.value].sort((a, b) => b.fallaYear - a.fallaYear))

const getBookAssetUrl = (key: string) =>
  `${STORAGE_BASE_URL}/books/${encodeURIComponent(key.trim())}`

onMounted(() => {
  fetchBooks()
})
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Llibrets de la falla</div>
        <div class="text-h5 text-grey-8 q-mb-sm">La nostra història, any rere any</div>
        <div class="text-subtitle1 text-grey-7">Descobreix i consulta els llibrets de cada exercici</div>
      </div>
    </section>

    <div class="q-pa-lg container books-container">
      <div class="text-h5 text-weight-bold text-secondary q-mb-lg">
        <q-icon name="menu_book" color="primary" class="q-mr-sm" />
        Tots els llibrets
      </div>

      <div v-if="loadingBooks" class="text-center q-py-xl">
        <q-spinner color="primary" size="48px" />
      </div>

      <div v-else-if="booksError" class="text-center q-py-xl">
        <div class="text-body1 text-grey-7 q-mb-md">{{ booksError }}</div>
        <q-btn color="primary" label="Torna-ho a provar" icon="refresh" @click="fetchBooks" />
      </div>

      <div v-else-if="sortedBooks.length === 0" class="text-center q-py-xl">
        <q-icon name="menu_book" color="grey" size="64px" class="q-mb-md" />
        <div class="text-h6 text-grey-7">Encara no hi ha llibrets disponibles</div>
      </div>

      <div v-else class="row q-col-gutter-xl">
        <div
          v-for="book in sortedBooks"
          :key="book.fallaYear"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <a
            :href="getBookAssetUrl(book.fileKey)"
            :aria-label="`Obrir el llibre de l'exercici ${book.fallaYear} en PDF`"
            target="_blank"
            rel="noopener noreferrer"
            class="book-link"
          >
            <q-card flat bordered class="book-card">
              <q-img
                :src="getBookAssetUrl(book.imageKey)"
                :alt="`Portada del llibre de l'exercici ${book.fallaYear}`"
                :ratio="0.72"
                fit="contain"
                class="book-cover"
              >
                <div class="absolute-bottom book-overlay">
                  <q-icon name="picture_as_pdf" size="24px" class="q-mr-sm" />
                  <span>Obrir llibre</span>
                </div>
              </q-img>
              <q-card-section class="text-center">
                <div class="text-h6 text-weight-bold text-secondary">
                  Exercici {{ book.fallaYear }}
                </div>
                <div v-if="book.title?.trim()" class="text-subtitle1 text-grey-7 q-mt-xs">
                  {{ book.title }}
                </div>
              </q-card-section>
            </q-card>
          </a>
        </div>
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
    inset: 0;
    background:
      radial-gradient(circle at 50% 0%, rgba(232, 98, 26, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 10% 100%, rgba(59, 89, 152, 0.05) 0%, transparent 50%);
  }
}

.container {
  position: relative;
  z-index: 1;
}

.books-container {
  max-width: 1400px;
  margin: 0 auto;
}

.book-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.book-card {
  height: 100%;
  overflow: hidden;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(17, 17, 17, 0.14);
  }
}

.book-cover {
  background: #f5f5f5;
}

.book-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 17, 17, 0.72);
  font-weight: 700;
  opacity: 0;
  transition: opacity 180ms ease;
}

.book-link:hover .book-overlay,
.book-link:focus-visible .book-overlay {
  opacity: 1;
}
</style>
