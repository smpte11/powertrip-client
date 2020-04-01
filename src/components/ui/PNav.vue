<template functional>
  <div class="flex justify-between items-center pt-1 pb-3">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="middle"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>
