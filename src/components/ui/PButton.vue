<template>
  <button
    class="self-center rounded inline-flex justify-center items-center rounded-full h-8 w-8"
    @click="clickHandler"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    clickHandler: Function,
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>
