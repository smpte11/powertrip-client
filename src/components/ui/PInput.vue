<template functional>
  <div class="mb-4">
    <label
      v-if="props.label"
      class="block text-gray-700 text-sm font-bold mb-2"
      for="props.label"
    >
      {{ props.label }}
    </label>
    <input
      id="props.label"
      class="shadow rounded border-0 p-3 mb-2"
      :class="{ 'w-full': props.isFull }"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isFull: Boolean,
    label: String,
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>
