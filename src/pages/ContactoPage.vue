<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = {
  address: 'Carrer Taronger, 23',
  city: '46600 Alzira, València',
  email: 'tresoreria@santspatrons.com',
  instagram: 'https://instagram.com/fallasantspatronsalzira',
  facebook: 'https://facebook.com/fallasantspatrons'
}

const onSubmit = () => {
  $q.notify({
    type: 'positive',
    message: 'Missatge enviat correctament!',
    caption: 'Et respondrem el més aviat possible.',
    icon: 'check_circle',
    timeout: 3000
  })

  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <q-page>
    <section class="hero-small text-white q-py-xl">
      <div class="container text-center">
        <div class="text-h3 text-primary text-weight-bold q-mb-md">Contacte</div>
        <div class="text-h5 text-grey-8 q-mb-sm">Uneix-te a nosaltres</div>
        <div class="text-subtitle1 text-grey-7">Volem formar part de la teua família</div>
      </div>
    </section>

    <div class="q-pa-lg container" style="max-width: 1400px; margin: 0 auto;">
      <div class="row q-col-gutter-xl">
        <!-- Contact Form -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="q-pa-lg">
            <div class="text-h5 text-weight-bold text-secondary q-mb-md">
              <q-icon name="mail" color="primary" class="q-mr-sm" />
              Envia'ns un missatge
            </div>

            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                v-model="form.name"
                label="Nom complet"
                outlined
                :rules="[val => !!val || 'El nom és obligatori']"
                lazy-rules
              >
                <template #prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                v-model="form.email"
                label="Correu electrònic"
                type="email"
                outlined
                :rules="[
                  val => !!val || 'El correu és obligatori',
                  val => /.+@.+\..+/.test(val) || 'Introdueix un correu vàlid'
                ]"
                lazy-rules
              >
                <template #prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-select
                v-model="form.subject"
                :options="['Informació general', 'Fes-te soci', 'Col·laboracions', 'Altres']"
                label="Assumpte"
                outlined
                emit-value
                map-options
                :rules="[val => !!val || 'Selecciona un assumpte']"
                lazy-rules
              >
                <template #prepend>
                  <q-icon name="topic" />
                </template>
              </q-select>

              <q-input
                v-model="form.message"
                label="Missatge"
                type="textarea"
                outlined
                rows="5"
                :rules="[val => !!val || 'El missatge és obligatori', val => val.length >= 10 || 'El missatge ha de tenir almenys 10 caràcters']"
                lazy-rules
              />

              <q-btn
                type="submit"
                color="primary"
                label="Enviar missatge"
                icon="send"
                size="lg"
                class="full-width q-mt-md"
                unelevated
              />
            </q-form>
          </q-card>
        </div>

        <!-- Info & Map -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="q-pa-lg q-mb-md">
            <div class="text-h5 text-weight-bold text-secondary q-mb-md">
              <q-icon name="location_on" color="primary" class="q-mr-sm" />
              On som
            </div>

            <div class="q-gutter-md">
              <div class="row items-center">
                <q-icon name="place" color="primary" size="24px" class="q-mr-md" />
                <div>
                  <div class="text-body2">{{ contactInfo.address }}</div>
                  <div class="text-caption text-grey-7">{{ contactInfo.city }}</div>
                </div>
              </div>

              <div class="row items-center">
                <q-icon name="email" color="primary" size="24px" class="q-mr-md" />
                <div>
                  <a :href="`mailto:${contactInfo.email}`" class="text-body2 text-primary">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>
            </div>

            <q-separator class="q-my-lg" />

            <div class="text-subtitle1 text-weight-bold q-mb-md">Segueix-nos</div>
            <div class="row q-gutter-sm">
              <q-btn
                color="primary"
                icon="fab fa-instagram"
                label="Instagram"
                unelevated
                :href="contactInfo.instagram"
                target="_blank"
              />
              <q-btn
                color="primary"
                icon="fab fa-facebook-f"
                label="Facebook"
                unelevated
                :href="contactInfo.facebook"
                target="_blank"
                class="q-ml-sm"
              />
            </div>
          </q-card>

          <q-card flat bordered>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.2705497746174!2d-0.4385806251343398!3d39.14582767167205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61baa381c3c8f5%3A0x476ef5dc0af1990d!2sCarrer%20del%20Taronger%2C%2023%2C%2046600%20Alzira%2C%20Val%C3%A8ncia!5e0!3m2!1sca!2ses!4v1784147992926!5m2!1sca!2ses"
              width="100%"
              height="300"
              style="border:0; border-radius: 8px;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </q-card>
        </div>
      </div>

      <q-separator class="q-my-xl" />

      <section class="text-center q-py-xl">
        <div class="text-h5 text-weight-bold text-secondary q-mb-md">
          Vols fer-te soci de la Falla Sants Patrons?
        </div>
        <div class="text-body1 text-grey-8 q-mb-md" style="max-width: 600px; margin: 0 auto;">
          Uneix-te a una de les falles amb més història d'Alzira. Viviu de prop la tradició
          valenciana i formaràs part d'una gran família fallera.
        </div>
        <q-btn
          color="primary"
          label="Informació per socis"
          icon="group_add"
          size="lg"
          unelevated
          class="q-mt-md"
        />
      </section>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.hero-small {
  background: linear-gradient(135deg, #f5f5f5 0%, #f9f9f9 100%);
  position: relative;
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

a {
  text-decoration: none;
}
</style>
