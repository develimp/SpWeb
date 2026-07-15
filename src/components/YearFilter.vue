<script setup lang="ts">
const props = defineProps<{
  modelValue: number | null
  years: number[]
  label?: string
}>()

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: number | null): void
}>()
</script>

<template>
  <q-select
    :model-value="modelValue"
    :options="props.years"
    :label="label || 'Selecciona any'"
    emit-value
    dense
    outlined
    clearable
    color="primary"
    class="full-width"
    @update:model-value="(val) => emit('update:modelValue', val || null)"
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
</template>
