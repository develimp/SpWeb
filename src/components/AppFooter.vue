<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper bg-secondary">
    <q-separator color="primary" size="2px" />

    <div class="q-pa-md">
      <div class="row justify-between items-center">
        <div class="col-12 col-md-4 text-center text-md-left q-pb-md q-md-pb-none">
          <div class="text-h6 text-white text-weight-bold">Falla Sants Patrons d'Alzira</div>
          <div class="text-grey-4 text-body2 q-mt-xs">Més de 60 anys de festa, foc i tradició</div>
        </div>

        <div class="col-12 col-md-4 text-center q-pb-md q-md-pb-none">
          <div class="row justify-center q-gutter-md">
            <q-btn round flat color="primary" icon="fab fa-instagram" size="md" href="https://instagram.com/fallasantspatronsalzira" target="_blank">
              <q-tooltip>Instagram</q-tooltip>
            </q-btn>
            <q-btn round flat color="primary" icon="fab fa-facebook-f" size="md" href="https://facebook.com/fallasantspatrons" target="_blank">
              <q-tooltip>Facebook</q-tooltip>
            </q-btn>
          </div>
        </div>

        <div class="col-12 col-md-4 text-center text-md-right">
          <div class="text-grey-4 text-body2">Carrer Taronger, 23</div>
          <div class="text-grey-4 text-body2">46600 Alzira, València</div>
          <div class="text-grey-4 text-body2">tresoreria@santspatrons.com</div>
        </div>
      </div>
    </div>

    <q-separator color="grey-8" class="q-mb-sm" />

    <div class="q-pb-md text-center">
      <div class="text-grey text-caption">
        {{ currentYear }} © Falla Sants Patrons</div>

      <div class="text-grey text-caption q-mt-xs">
        <router-link to="/contacto" class="text-primary">Contacte</router-link>
        <span class="q-px-sm text-grey-8">·</span>
        <router-link to="/galeria" class="text-primary">Galeria</router-link>
        <span class="q-px-sm text-grey-8">·</span>
        <router-link to="/historia" class="text-primary">Historia</router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
}

a {
  text-decoration: none;
}
</style>
