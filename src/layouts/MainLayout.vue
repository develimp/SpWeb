<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppNavbar from 'components/AppNavbar.vue'
import AppFooter from 'components/AppFooter.vue'

defineOptions({
  name: 'MainLayout',
})

const scrolled = ref(false)

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
  <q-layout view="hHh lpR fFf">
    <AppNavbar />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <AppFooter />
  </q-layout>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
