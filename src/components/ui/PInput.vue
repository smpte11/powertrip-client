<template>
  <div class="mb-4">
    <label
      v-if="label"
      class="block text-gray-700 text-sm font-bold mb-2"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      class="shadow rounded border-0 p-3 mb-2"
      :class="{ 'w-full': isFull }"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    isFull: Boolean,
    label: String,
    placeholder: {
      type: String,
      required: false,
    },
    value: { type: String },
  },
};
</script>
