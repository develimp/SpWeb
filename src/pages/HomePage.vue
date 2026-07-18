<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import { monuments } from '@/data/monuments'
import { cargos } from '@/data/cargos'

const featuredYear = computed(() => monuments[0])
const currentYearCargos = computed(() => {
  const current = cargos.find(c => c.year === 2027)
  if (!current) return []
  const mainRoles = ['President', 'Fallera Major', 'President Infantil', 'Fallera Major Infantil']
  return current.members.filter(m => mainRoles.includes(m.role))
})
const quickLinks = [
  { title: 'Història', desc: '60 anys de tradició', icon: 'history_edu', to: '/historia', color: 'primary' },
  { title: 'Monuments', desc: 'Les nostres falles', icon: 'architecture', to: '/monumentos', color: 'accent' },
  { title: 'Càrrecs', desc: 'La nostra família fallera', icon: 'groups', to: '/cargos', color: 'secondary' },
  { title: 'Esdeveniments', desc: 'El calendari festiu', icon: 'event', to: '/eventos', color: 'info' },
  { title: 'Galeria', desc: 'Moments inoblidables', icon: 'photo_library', to: '/galeria', color: 'positive' },
  { title: 'Contacte', desc: 'Uneix-te a nosaltres', icon: 'mail', to: '/contacto', color: 'warning' }
]

const scrollRef = ref<HTMLElement | null>(null)

const scrollToContent = () => {
  scrollRef.value?.scrollIntoView({ behavior: 'smooth' })
}

const hasNoPhoto = (image: string) => image === '/no-photo.svg'
</script>

<template>
  <q-page>
    <HeroSection @scroll="scrollToContent" />

    <div ref="scrollRef" class="q-pa-md q-py-xl container">
      <!-- Featured Year -->
      <section class="q-mb-xl">
        <div class="row justify-center">
          <div class="col-12 col-md-10">
            <div class="text-h3 text-center q-mb-lg text-secondary text-weight-bold">
              Falla {{ featuredYear.year }}
            </div>

            <!-- Main Cargos Section -->
            <div class="q-mb-xl">
              <div class="text-h5 text-center q-mb-md text-grey-8 text-weight-bold">
                Els nostres representants
              </div>
              <div class="row q-col-gutter-md">
                <div
                  v-for="cargo in currentYearCargos"
                  :key="cargo.name"
                  class="col-12 col-sm-6 col-md-3"
                >
                  <router-link to="/cargos" class="text-decoration-none">
                    <q-card flat bordered class="cargo-card full-height">
                      <q-img :src="cargo.image" :ratio="1" />
                      <q-card-section class="text-center">
                        <div class="text-h6 text-weight-bold text-secondary q-mb-xs">
                          {{ cargo.role }}
                        </div>
                        <div class="text-body2 text-grey-8">
                          {{ cargo.name }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="text-h5 text-center q-mb-md text-grey-8 text-weight-bold">
              Els nostres monuments
            </div>

            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <q-card flat bordered class="featured-monument full-height">
                  <q-img :src="featuredYear.gran.image" :ratio="16/9">
                    <div v-if="hasNoPhoto(featuredYear.gran.image)" class="absolute-full flex flex-center column text-center bg-grey-2 text-grey-7">
                      <q-icon name="image_not_supported" size="48px" class="q-mb-sm" />
                      <div class="text-subtitle1 text-weight-bold">Pròximament</div>
                      <div class="text-caption">Foto disponible en breu</div>
                    </div>
                    <div v-else class="absolute-bottom bg-secondary">
                      <div class="text-subtitle1 text-weight-bold">Monument Gran</div>
                      <div class="text-h5 text-primary q-mt-xs">{{ featuredYear.gran.title }}</div>
                    </div>
                  </q-img>
                  <q-card-section>
                    <div class="row items-center q-gutter-sm q-mb-sm">
                      <q-icon name="person" color="primary" />
                      <span class="text-body2">{{ featuredYear.gran.artist }}</span>
                    </div>
                    <q-badge color="accent" class="q-mb-md">
                      {{ featuredYear.gran.award }}
                    </q-badge>
                    <p class="text-body2 text-grey-8 q-mb-none">
                      {{ featuredYear.gran.description }}
                    </p>
                    <q-btn flat color="primary" label="Veure tots els monuments" icon="arrow_forward" to="/monumentos" class="q-mt-md" />
                  </q-card-section>
                </q-card>
              </div>

              <div class="col-12 col-md-6">
                <q-card flat bordered class="featured-monument full-height">
                  <q-img :src="featuredYear.infantil.image" :ratio="16/9">
                    <div v-if="hasNoPhoto(featuredYear.infantil.image)" class="absolute-full flex flex-center column text-center bg-grey-2 text-grey-7">
                      <q-icon name="image_not_supported" size="48px" class="q-mb-sm" />
                      <div class="text-subtitle1 text-weight-bold">Pròximament</div>
                      <div class="text-caption">Foto disponible en breu</div>
                    </div>
                    <div v-else class="absolute-bottom bg-secondary">
                      <div class="text-subtitle1 text-weight-bold">Monument Infantil</div>
                      <div class="text-h5 text-primary q-mt-xs">{{ featuredYear.infantil.title }}</div>
                    </div>
                  </q-img>
                  <q-card-section>
                    <div class="row items-center q-gutter-sm q-mb-sm">
                      <q-icon name="person" color="primary" />
                      <span class="text-body2">{{ featuredYear.infantil.artist }}</span>
                    </div>
                    <q-badge color="accent" class="q-mb-md">
                      {{ featuredYear.infantil.award }}
                    </q-badge>
                    <p class="text-body2 text-grey-8 q-mb-none">
                      {{ featuredYear.infantil.description }}
                    </p>
                    <q-btn flat color="primary" label="Veure tots els monuments" icon="arrow_forward" to="/monumentos" class="q-mt-md" />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Access -->
      <section class="q-mb-xl q-pt-lg">
        <div class="text-h4 text-center q-mb-lg text-secondary text-weight-bold">
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
            <div class="row justify-center q-col-gutter-lg text-center">
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">60+</div>
                <div class="text-subtitle1">Anys d'història</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">450+</div>
                <div class="text-subtitle1">Membres</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">15</div>
                <div class="text-subtitle1">Primers premis</div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-h2 text-primary text-weight-bold">8</div>
                <div class="text-subtitle1">Primers premis en especial</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </section>

      <!-- CTA -->
      <section class="text-center q-py-xl">
        <div class="text-h4 q-mb-md text-weight-bold text-secondary">
          Vols formar part de la nostra família fallera?
        </div>
        <div class="text-body1 text-grey-8 q-mb-lg" style="max-width: 600px; margin: 0 auto;">
          Uneix-te a la Falla Sants Patrons i viu de prop la millor experiència fallera.
        </div>
        <q-btn
          color="primary"
          label="Contacta'ns"
          icon="mail"
          to="/contacto"
          size="lg"
          unelevated
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
}

.cargo-card {
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
