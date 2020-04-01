<template functional>
  <button
    class="self-center inline-flex justify-center items-center"
    :class="[
      {
        'w-full': props.expanded,
        'rounded-full': props.rounded,
        'h-8': props.rounded,
        'w-8': props.rounded,
      },
      props.rounded ? 'px-0' : 'px-4',
      props.rounded ? 'py-0' : 'py-3',
      props.rounded ? 'mx-4' : 'mx-0',
      props.rounded ? 'my-3' : 'my-0',
      data.staticClass,
    ]"
    @click="props.clickHandler"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
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
};
</script>
