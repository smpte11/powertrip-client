<template>
  <div
    class="day columns is-flex is-paddingless is-marginless has-background-primary"
  >
    <div class="column header">
      <slot name="header"></slot>
    </div>
    <div class="column summary has-background-light">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
