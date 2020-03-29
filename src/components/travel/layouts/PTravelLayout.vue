<template>
  <div
    class="day columns is-flex is-paddingless is-marginless has-background-primary"
  >
    <div class="column header">
      <slot name="header" />
    </div>
    <div class="column summary has-background-dark">
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.day {
  flex-direction: column;
  height: 100%;
}

.header {
  color: $light;
  flex-grow: 0;
  padding: $size-4;
}

.body {
  border-top-left-radius: $size-6;
  border-top-right-radius: $size-6;
}
</style>
