<template>
  <div class="mb-4">
    <label
      v-if="label"
      class="block text-sm font-bold mb-2"
      :class="labelClass"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      class="shadow rounded border-0 p-3 mb-2"
      :class="{ 'w-full': isFull }"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: String,
    isFull: Boolean,
    label: String,
    labelClass: {
      type: String,
      default: "text-gray-700",
    },
    type: {
      type: String,
      default: "text",
      validator: (inputType) =>
        ["email", "text", "password"].includes(inputType),
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: { type: String },
  },
});
</script>
