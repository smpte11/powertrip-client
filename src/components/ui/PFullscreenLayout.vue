<template functional>
  <!-- TODO check to finegrain styles via props -->
  <main
    class="flex flex-col min-h-screen h-screen p-4 md:p-20"
    :class="data.staticClass || ''"
  >
    <slot name="content"></slot>
  </main>
</template>
