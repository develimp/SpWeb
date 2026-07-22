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
  { to: '/galeria', label: 'Galeria', icon: 'photo_library' }
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
    <q-toolbar class="navbar-toolbar">
      <q-btn flat round dense icon="menu" class="lt-md" @click="leftDrawer = true" />

      <q-toolbar-title class="navbar-brand">
        <router-link to="/" class="brand-link">
          <q-img src="/logo falla web.png" alt="Escut Falla Sants Patrons" class="navbar-logo" contain />
          <span class="brand-text text-weight-bold">Falla Sants Patrons</span>
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
  </q-header>

  <q-drawer
    v-model="leftDrawer"
    behavior="mobile"
    overlay
    class="drawer-white"
    side="left"
  >
    <div class="drawer-header q-pa-md">
      <q-img src="/logo falla web.png" alt="Escut Falla Sants Patrons" class="drawer-logo" contain />
      <div class="drawer-brand">
        <div class="drawer-title text-weight-bold">Falla Sants Patrons</div>
      </div>
    </div>

    <q-list dense class="q-pa-none">
      <q-item
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        v-ripple
        clickable
        class="drawer-item"
        @click="leftDrawer = false"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" class="drawer-item-icon" />
        </q-item-section>
        <q-item-section>
          <div class="drawer-item-label">{{ link.label }}</div>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="drawer-footer q-pa-md">
      <q-btn
        color="primary"
        label="Uneix-te"
        class="full-width"
        to="/contacto"
        @click="leftDrawer = false"
      />
    </div>
  </q-drawer>
</template>

<style lang="scss" scoped>
.text-decoration-none {
  text-decoration: none;
}

.header-top,
.header-scrolled {
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: none !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
}

.header-top :deep(.q-toolbar),
.header-scrolled :deep(.q-toolbar) {
  background: transparent !important;
}

.header-top :deep(.q-toolbar-title),
.header-scrolled :deep(.q-toolbar-title) {
  color: #111111 !important;
  text-shadow: none;
}

.header-top :deep(.q-btn .q-btn__content),
.header-top :deep(.q-btn .block),
.header-scrolled :deep(.q-btn .q-btn__content),
.header-scrolled :deep(.q-btn .block) {
  color: #111111 !important;
}

.header-top :deep(.text-grey-4),
.header-scrolled :deep(.text-grey-4) {
  color: rgba(17, 17, 17, 0.7) !important;
}

:deep(.navbar-tabs) {
  color: #111111 !important;
}

:deep(.navbar-tab) {
  color: #111111 !important;
  font-weight: 600;
}

:deep(.navbar-tab) {
  color: #111111 !important;
  font-weight: 600;
}

:deep(.navbar-tab .q-tab__label) {
  color: #111111 !important;
}

:deep(.q-tab--active .q-tab__label) {
  color: #ff6e00 !important;
}

:deep(.q-tab--inactive .q-tab__label) {
  color: #111111 !important;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #111111;
  text-decoration: none;
}

.navbar-logo {
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
}

.brand-text {
  color: #111111;
  font-size: 1.1rem;
}

.navbar-brand {
  gap: 1rem;
}

:deep(.navbar-tab) {
  color: #111111 !important;
  font-weight: 600;
  font-size: 0.98rem;
}

:deep(.navbar-tab .q-tab__label) {
  color: #111111 !important;
  font-size: 0.98rem;
}

.navbar-toolbar {
  width: min(1340px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1340px;
  min-height: 88px;
  height: 88px;
  align-items: center;
}

@media (max-width: 1024px) {
  .navbar-toolbar {
    width: 100%;
    padding: 0 0.75rem;
    min-height: 72px;
    height: 72px;
  }

  .navbar-logo {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
  }

  .brand-text {
    font-size: 0.98rem;
  }

  :deep(.navbar-tab) {
    font-size: 0.93rem;
  }
}

.q-btn[color="primary"] {
  background: #ff6e00 !important;
  color: white !important;
}

.q-btn[color="primary"] .q-btn__content {
  color: white !important;
}

.drawer-white {
  background: rgba(255, 255, 255, 0.98) !important;
  color: #111111;
}

.drawer-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.drawer-logo {
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
}

.drawer-brand {
  display: flex;
  align-items: center;
}

.drawer-title {
  font-size: 1rem;
  color: #111111;
}

.drawer-item {
  color: #111111;
  padding: 0.95rem 1rem;
}

.drawer-item-icon {
  color: #ff6e00;
}

.drawer-item-label {
  color: #111111;
  font-weight: 600;
}

.drawer-footer {
  border-top: 1px solid rgba(17, 17, 17, 0.08);
  background: rgba(255, 255, 255, 0.95);
}
</style>
