<template functional>
  <input
    class="shadow rounded border-0 p-3"
    :class="{ 'w-full': props.isFull }"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
export default {
  props: {
    isFull: Boolean,
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>
