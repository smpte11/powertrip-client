<template functional>
  <button
    class="text-gray-800 font-bold py-2 px-3 rounded-full inline-flex items-center"
    :class="[data.staticClass]"
    @click="props.clickHandler"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    clickHandler: Function,
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
