<script setup lang="ts">
import { ref } from 'vue'
import type { YearCargos, CargoMember } from '@/data/cargos'

defineProps<{
  yearCargos: YearCargos
  isLatest?: boolean
}>()

const roleColors: Record<string, string> = {
  'Fallera Major': 'primary',
  'Fallera Major Infantil': 'accent',
  'President': 'secondary',
  'Secretària': 'info',
  'Secretari': 'info',
  'Tresorer': 'warning',
  'Tresorera': 'warning',
  'Capdavanter': 'positive',
  'Capdavantera': 'positive'
}

const roleIcons: Record<string, string> = {
  'Fallera Major': 'diamond',
  'Fallera Major Infantil': 'favorite',
  'President': 'check_circle',
  'President Infantil': 'check_circle',
  'Secretària': 'description',
  'Secretari': 'description',
  'Tresorer': 'account_balance_wallet',
  'Tresorera': 'account_balance_wallet',
  'Capdavanter': 'people',
  'Capdavantera': 'people'
}

const selectedMember = ref<CargoMember | null>(null)
const dialogOpen = ref(false)

function getRoleColor(role: string): string {
  return roleColors[role] || 'grey'
}

function getRoleIcon(role: string): string {
  return roleIcons[role] || 'person'
}

function openPhoto(member: CargoMember) {
  selectedMember.value = member
  dialogOpen.value = true
}
</script>

<template>
  <q-card class="cargo-card" flat bordered>
    <q-card-section class="bg-secondary q-py-sm">
      <div class="row justify-between items-center">
        <div class="text-h5 text-white text-weight-bold">
          {{ yearCargos.year }}
        </div>
        <q-badge v-if="isLatest" color="primary" class="text-subtitle2">
          Any actual
        </q-badge>
      </div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <div
        v-for="member in yearCargos.members"
        :key="member.name + member.role"
        class="cargo-member row items-center no-wrap cursor-pointer"
        @click="openPhoto(member)"
      >
        <q-avatar size="56px" class="q-mr-md">
          <img :src="member.image" :alt="member.name">
          <q-badge
            :color="getRoleColor(member.role)"
            floating
            rounded
          >
            <q-icon :name="getRoleIcon(member.role)" size="xs" />
          </q-badge>
        </q-avatar>

        <div class="col">
          <div class="text-subtitle2 text-weight-bold text-grey-9 q-mb-none">
            {{ member.role }}
          </div>
          <div class="text-body2 text-grey-8">
            {{ member.name }}
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="dialogOpen">
    <q-card style="max-width: 90vw; max-height: 90vh;">
      <q-img
        v-if="selectedMember"
        :src="selectedMember.image"
        contain
      />
      <q-card-section v-if="selectedMember" class="bg-secondary text-white">
        <div class="text-h6">{{ selectedMember.role }}</div>
        <div class="text-subtitle2">{{ selectedMember.name }}</div>
      </q-card-section>
      <q-btn v-close-popup round color="primary" icon="close" class="absolute-top-right q-ma-md" />
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.cargo-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}

.cargo-member {
  padding: 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(232, 98, 26, 0.1);
  }
}
</style>
