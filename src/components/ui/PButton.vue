<template functional>
  <button
    class="text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"
    :class="[data.staticClass]"
    @click="props.onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    onClick: Function,
    expanded: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
