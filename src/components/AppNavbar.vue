<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const leftDrawer = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Inici', icon: 'home' },
  { to: '/historia', label: 'Història', icon: 'history' },
  { to: '/monumentos', label: 'Monuments', icon: 'architecture' },
  { to: '/cargos', label: 'Càrrecs', icon: 'groups' },
  { to: '/eventos', label: 'Esdeveniments', icon: 'event' },
  { to: '/galeria', label: 'Galeria', icon: 'photo_library' },
  { to: '/contacto', label: 'Contacte', icon: 'mail' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <q-header
    :class="[
      'header-transparent',
      scrolled ? 'header-scrolled' : 'header-top'
    ]"
  >
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="lt-md" @click="leftDrawer = true" />

      <q-toolbar-title>
        <router-link to="/" class="text-decoration-none">
          <span class="text-weight-bold text-body1 text-md-h6">Falla Sants Patrons</span>
        </router-link>
      </q-toolbar-title>

      <q-tabs
        class="gt-sm navbar-tabs"
        shrink
        active-color="primary"
        indicator-color="primary"
        style="--q-dark: #111111; color: #111111"
      >
        <q-route-tab
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :label="link.label"
          exact
          class="navbar-tab"
          style="color: #111111"
        />
      </q-tabs>

      <q-btn
        color="primary"
        label="Uneix-te"
        class="q-ml-md gt-sm"
        to="/contacto"
      />
    </q-toolbar>

    <q-drawer
      v-model="leftDrawer"
      behavior="mobile"
      overlay
      class="bg-secondary"
      side="left"
    >
      <q-list dense class="q-pt-lg">
        <q-item-label header class="text-primary text-weight-bold">
          Falla Sants Patrons
        </q-item-label>
        <q-item-label caption class="text-grey q-mb-md">
          Alzira, València
        </q-item-label>

        <q-item
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          v-ripple
          clickable
          class="text-white"
          @click="leftDrawer = false"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            {{ link.label }}
          </q-item-section>
        </q-item>
      </q-list>

      <div class="absolute-bottom q-pa-md">
        <q-btn
          color="primary"
          label="Uneix-te"
          class="full-width"
          to="/contacto"
          @click="leftDrawer = false"
        />
      </div>
    </q-drawer>
  </q-header>
</template>

<style lang="scss" scoped>
.text-decoration-none {
  text-decoration: none;
}

.header-transparent {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-top {
  background: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;

  :deep(.q-toolbar) {
    background: transparent !important;
  }

  :deep(.q-toolbar-title) {
    color: #111111 !important;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.8);
  }

  :deep(.q-btn .q-btn__content),
  :deep(.q-btn .block) {
    color: #111111 !important;
  }

  :deep(.text-grey-4) {
    color: rgba(17, 17, 17, 0.7) !important;
  }
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.92) !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;

  :deep(.q-toolbar) {
    background: transparent !important;
  }

  :deep(.q-toolbar-title) {
    color: #111111 !important;
    text-shadow: none;
  }

  :deep(.q-btn .q-btn__content),
  :deep(.q-btn .block) {
    color: #111111 !important;
  }

  :deep(.text-grey-4) {
    color: rgba(17, 17, 17, 0.6) !important;
  }
}

:deep(.navbar-tabs) {
  color: #111111 !important;
}

:deep(.navbar-tab) {
  color: #111111 !important;
}

:deep(.navbar-tab .q-tab__label) {
  color: #111111 !important;
}

:deep(.navbar-tab .q-tab__content) {
  color: #111111 !important;
}

:deep(.q-tab--active .q-tab__label) {
  color: #111111 !important;
}

:deep(.q-tab--inactive .q-tab__label) {
  color: #111111 !important;
}
</style>
