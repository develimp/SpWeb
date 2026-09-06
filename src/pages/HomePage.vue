<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { api } from 'boot/axios'
import HeroSection from '@/components/HeroSection.vue'
import type { Monument } from '@/types/monument'
import type { Position } from '@/types/position'
import {
  resolveImageUrl,
  resolveMonumentImageUrl,
} from '@/utils/imagePlaceholders'

const currentYear = ref<number | null>(null)
const loadingYear = ref(true)
const yearError = ref<string | null>(null)
const totalAdultMembers = ref<number | null>(null)
const loadingAdultMembers = ref(true)
const adultMembersError = ref<string | null>(null)
const totalChildishMembers = ref<number | null>(null)
const loadingChildishMembers = ref(true)
const childishMembersError = ref<string | null>(null)
const positions = ref<Position[]>([])
const loadingPositions = ref(false)
const positionsError = ref<string | null>(null)
const monuments = ref<Monument[]>([])

function getMonumentImageUrl(monument: Monument | null | undefined, type: 'gran' | 'infantil' = 'gran') {
  return resolveMonumentImageUrl(monument, type)
}

function getPositionImageUrl(imageKey: string | null | undefined) {
  return resolveImageUrl(imageKey)
}

function getAwardLabel(monument: Monument | undefined) {
  if (!monument) return ''
  if (!monument.isCelebrated) return 'No celebrada'
  if (!monument.awardType || monument.award === null) {
    return monument.section ? `Secció ${monument.section}` : ''
  }

  const awardType =
    monument.awardType === 'accèssit' ? 'Accèssit' : `${monument.award}r Premi`
  return `${awardType}${monument.section ? ` Secció ${monument.section}` : ''}`
}

const fetchCurrentYear = async () => {
  loadingYear.value = true
  yearError.value = null
  try {
    const response = await api.get('/falla-years/current')
    currentYear.value = response.data.code
  } catch (error) {
        console.error('Error obtenint l\'exercici actual:', error)
    currentYear.value = null
    yearError.value =
         'No s\'ha pogut carregar l\'exercici actual. Torna-ho a provar més tard.'
  } finally {
    loadingYear.value = false
  }
}

const fetchCountAdultMembers = async () => {
  loadingAdultMembers.value = true
  adultMembersError.value = null

  try {
    const response = await api.get('members/count', {
      params: {
        where: {
          isRegistered: true,
          or: [{ categoryFk: 1 }, { categoryFk: 2 }],
        },
      },
    })
    totalAdultMembers.value = response.data.count
  } catch (error) {
        console.error('Error obtenint el nombre d\'adults:', error)
    totalAdultMembers.value = null
    adultMembersError.value =
         'No s\'ha pogut carregar el nombre d\'adults. Torna-ho a provar més tard.'
  } finally {
    loadingAdultMembers.value = false
  }
}

const fetchCountChildishMembers = async () => {
  loadingChildishMembers.value = true
  childishMembersError.value = null

  try {
    const response = await api.get('members/count', {
      params: {
        where: {
          isRegistered: true,
          or: [{ categoryFk: 3 }, { categoryFk: 4 }, { categoryFk: 5 }],
        },
      },
    })
    totalChildishMembers.value = response.data.count
  } catch (error) {
        console.error('Error obtenint el nombre de menors:', error)
    totalChildishMembers.value = null
    childishMembersError.value =
         'No s\'ha pogut carregar el nombre de menors. Torna-ho a provar més tard.'
  } finally {
    loadingChildishMembers.value = false
  }
}

const fetchPositions = async () => {
  loadingPositions.value = true
  positionsError.value = null
  try {
    const response = await api.get('/positions')
    positions.value = response.data
  } catch (error) {
        console.error('Error obtenint els càrrecs:', error)
    positions.value = []
    positionsError.value =
         'No s\'han pogut carregar els càrrecs. Torna-ho a provar més tard.'
  } finally {
    loadingPositions.value = false
  }
}

const fetchMonuments = async () => {
  try {
    const response = await api.get('/monuments')
    monuments.value = response.data
  } catch (error) {
    console.error('Error obtenint els monuments:', error)
    monuments.value = []
  }
}

onMounted(() => {
  fetchCurrentYear()
  fetchCountAdultMembers()
  fetchCountChildishMembers()
  fetchPositions()
  fetchMonuments()
})

const featuredYear = computed(() => {
  if (currentYear.value === null) return null

  const yearMonuments = monuments.value.filter(
    (monument) => monument.fallaYear === currentYear.value,
  )
  if (yearMonuments.length === 0) return null

  const getMonument = (type: Monument['type']) =>
    yearMonuments.find((monument) => monument.type === type)
  const gran = getMonument('gran')
  const infantil = getMonument('infantil')

  return {
    year: currentYear.value,
    gran: {
      title: gran?.title || '',
      artist: gran?.artist || '',
      award: getAwardLabel(gran),
      description: gran?.description || '',
      isCelebrated: gran?.isCelebrated ?? true,
      image: getMonumentImageUrl(gran, 'gran'),
    },
    infantil: {
      title: infantil?.title || '',
      artist: infantil?.artist || '',
      award: getAwardLabel(infantil),
      description: infantil?.description || '',
      isCelebrated: infantil?.isCelebrated ?? true,
      image: getMonumentImageUrl(infantil, 'infantil'),
    },
  }
})

const hasNumbersError = computed(
  () => !!adultMembersError.value || !!childishMembersError.value,
)
const isNumbersLoading = computed(
  () => loadingAdultMembers.value || loadingChildishMembers.value,
)

const currentYearPositions = computed(() => {
  if (currentYear.value === null) return []
  return positions.value
    .filter((position) => position.fallaYear === currentYear.value)
    .filter((position) =>
      [
        'President',
        'Fallera Major',
        'President Infantil',
        'Fallera Major Infantil',
      ].includes(position.role),
    )
})

const quickLinks = [
  {
    title: 'Història',
    desc: '60 anys de tradició',
    icon: 'history_edu',
    to: '/history',
    color: 'primary',
  },
  {
    title: 'Monuments',
    desc: 'Les nostres falles',
    icon: 'architecture',
    to: '/monuments',
    color: 'accent',
  },
  {
    title: 'Càrrecs',
    desc: 'La nostra família fallera',
    icon: 'groups',
    to: '/positions',
    color: 'secondary',
  },
  {
    title: 'Esdeveniments',
    desc: 'El calendari festiu',
    icon: 'event',
    to: '/events',
    color: 'info',
  },
  {
    title: 'Galeria',
    desc: 'Moments inoblidables',
    icon: 'photo_library',
    to: '/gallery',
    color: 'positive',
  },
  {
    title: 'Contacte',
    desc: 'Uneix-te a nosaltres',
    icon: 'mail',
    to: '/contact',
    color: 'warning',
  },
]

const scrollRef = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  scrollRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <q-page>
    <HeroSection @scroll="scrollToContent" />

    <div ref="scrollRef" class="q-pa-md q-py-xl container">
      <!-- Featured Year -->
      <section class="q-mb-xl">
        <!-- Loading state -->
        <div v-if="loadingYear" class="row justify-center q-pa-xl">
          <q-spinner color="primary" size="48px" />
        </div>

        <!-- Error state -->
        <div v-else-if="yearError" class="row justify-center q-pa-xl">
          <div class="col-12 col-md-8 text-center">
            <q-icon
              name="error_outline"
              color="negative"
              size="48px"
              class="q-mb-sm"
            />
            <div class="text-subtitle1 text-negative text-weight-bold q-mb-sm">
              {{ yearError }}
            </div>
            <q-btn
              color="primary"
              label="Tornar a intentar"
              icon="refresh"
              outline
              @click="fetchCurrentYear"
            />
          </div>
        </div>

        <!-- No data for the fetched year -->
        <div v-else-if="!featuredYear" class="row justify-center q-pa-xl">
          <div class="col-12 col-md-8 text-center text-grey-7">
            No s'han trobat dades de monuments per a l'any actual.
          </div>
        </div>

        <!-- Content -->
        <div v-else class="row justify-center">
          <div class="col-12 col-md-10">
            <div
              class="text-h3 text-center q-mb-lg text-secondary text-weight-bold"
            >
              Exercici {{ featuredYear.year }}
            </div>

            <!-- Main Positions Section -->
            <div class="q-mb-xl">
              <div
                class="text-h5 text-center q-mb-md text-grey-8 text-weight-bold"
              >
                Els nostres representants
              </div>
              <div class="row q-col-gutter-md">
                <div
                  v-for="position in currentYearPositions"
                  :key="position.name"
                  class="col-12 col-sm-6 col-md-3"
                >
                  <router-link to="/positions" class="text-decoration-none">
                    <q-card flat bordered class="position-card full-height">
                      <q-img :src="getPositionImageUrl(position.imageKey)" :ratio="1" />
                      <q-card-section class="text-center">
                        <div
                          class="text-h6 text-weight-bold text-secondary q-mb-xs"
                        >
                          {{ position.role }}
                        </div>
                        <div class="text-body2 text-grey-8">
                          {{ position.name }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </router-link>
                </div>
              </div>
            </div>

            <div
              class="text-h5 text-center q-mb-md text-grey-8 text-weight-bold"
            >
              Els nostres monuments
            </div>

            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <q-card flat bordered class="featured-monument full-height">
                  <q-img :src="featuredYear.gran.image" :ratio="16 / 9">
                    <div v-if="featuredYear.gran.title" class="absolute-bottom bg-secondary">
                      <div class="text-subtitle1 text-weight-bold">
                        Monument Gran
                      </div>
                      <div class="text-h5 text-primary q-mt-xs">
                        {{ featuredYear.gran.title }}
                      </div>
                    </div>
                  </q-img>
                  <q-card-section>
                    <div class="row items-center q-gutter-sm q-mb-sm">
                      <q-icon name="person" color="primary" />
                      <span class="text-body2">{{
                        featuredYear.gran.artist
                      }}</span>
                    </div>
                    <q-badge color="accent" class="q-mb-md">
                      {{ featuredYear.gran.award }}
                    </q-badge>
                    <p class="text-body2 text-grey-8 q-mb-none">
                      {{ featuredYear.gran.description }}
                    </p>
                    <q-btn
                      flat
                      color="primary"
                      label="Veure tots els monuments"
                      icon="arrow_forward"
                      to="/monuments"
                      class="q-mt-md"
                    />
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <q-card flat bordered class="featured-monument full-height">
                  <q-img :src="featuredYear.infantil.image" :ratio="16 / 9">
                    <div v-if="featuredYear.infantil.title" class="absolute-bottom bg-secondary">
                      <div class="text-subtitle1 text-weight-bold">
                        Monument Infantil
                      </div>
                      <div class="text-h5 text-primary q-mt-xs">
                        {{ featuredYear.infantil.title }}
                      </div>
                    </div>
                  </q-img>
                  <q-card-section>
                    <div class="row items-center q-gutter-sm q-mb-sm">
                      <q-icon name="person" color="primary" />
                      <span class="text-body2">{{
                        featuredYear.infantil.artist
                      }}</span>
                    </div>
                    <q-badge color="accent" class="q-mb-md">
                      {{ featuredYear.infantil.award }}
                    </q-badge>
                    <p class="text-body2 text-grey-8 q-mb-none">
                      {{ featuredYear.infantil.description }}
                    </p>
                    <q-btn
                      flat
                      color="primary"
                      label="Veure tots els monuments"
                      icon="arrow_forward"
                      to="/monuments"
                      class="q-mt-md"
                    />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Access -->
      <section class="q-mb-xl q-pt-lg">
        <div
          class="text-h4 text-center q-mb-lg text-secondary text-weight-bold"
        >
          Explora la nostra falla
        </div>

        <div class="row q-col-gutter-md justify-center">
          <div
            v-for="link in quickLinks"
            :key="link.to"
            class="col-12 col-sm-6 col-md-4"
          >
            <router-link :to="link.to" class="text-decoration-none">
              <q-card flat bordered class="quick-link-card full-height">
                <q-card-section class="text-center q-pa-lg">
                  <q-avatar
                    :color="link.color"
                    text-color="white"
                    :icon="link.icon"
                    size="56px"
                    class="q-mb-md"
                  />
                  <div class="text-h6 text-weight-bold text-grey-9 q-mb-xs">
                    {{ link.title }}
                  </div>
                  <div class="text-body2 text-grey-7">
                    {{ link.desc }}
                  </div>
                </q-card-section>
              </q-card>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Numbers Section -->
      <section class="q-mb-xl q-pt-lg">
        <q-card class="bg-secondary text-white" flat>
          <q-card-section class="q-pa-xl">
            <div v-if="isNumbersLoading" class="row justify-center q-pa-md">
              <q-spinner color="primary" size="48px" />
            </div>
            <div v-else-if="hasNumbersError" class="row justify-center q-pa-md">
              <div class="col-12 col-md-8 text-center">
                <q-icon
                  name="error_outline"
                  color="negative"
                  size="48px"
                  class="q-mb-sm"
                />
                <div
                  class="text-subtitle1 text-negative text-weight-bold q-mb-sm"
                >
                  No s'han pogut carregar les dades de la secció
                  d'estadístiques. Torna-ho a provar més tard.
                </div>
                <q-btn
                  color="primary"
                  label="Tornar a intentar"
                  icon="refresh"
                  outline
                  @click="
                    () => {
                      fetchCountAdultMembers()
                      fetchCountChildishMembers()
                    }
                  "
                />
              </div>
            </div>
            <div v-else class="row justify-center q-col-gutter-lg text-center">
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">60+</div>
                <div class="text-subtitle1">Anys d'història</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">
                  {{ (totalAdultMembers ?? 0) + (totalChildishMembers ?? 0) }}
                </div>
                <div class="text-subtitle1">Membres</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">
                  {{ totalAdultMembers }}
                </div>
                <div class="text-subtitle1">Membres comissió gran</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">
                  {{ totalChildishMembers }}
                </div>
                <div class="text-subtitle1">Membres comissió infantil</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </section>

      <!-- CTA -->
      <section class="text-center q-py-xl">
        <div class="text-h4 q-mb-mb text-weight-bold text-secondary">
          Vols formar part de la nostra família fallera?
        </div>
        <div
          class="text-body1 text-grey-8 q-mb-lg"
          style="max-width: 600px; margin: 0 auto"
        >
          Uneix-te a la Falla Sants Patrons i viu de prop la millor experiència
          fallera.
        </div>
        <q-btn
          color="primary"
          label="Contacta'ns"
          icon="mail"
          to="/contact"
          size="lg"
          unelevated
          class="q-mt-md"
        />
      </section>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
}

.text-decoration-none {
  text-decoration: none;
}

.featured-monument {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.position-card {
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.quick-link-card {
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(232, 98, 26, 0.2);

    .q-avatar {
      transform: scale(1.1);
    }
  }
}
</style>
