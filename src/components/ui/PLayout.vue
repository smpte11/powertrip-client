<template functional>
  <div class="flex flex-col min-h-screen p-4">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-grow">
      <slot name="content"></slot>
    </main>
    <footer class="flex flex-row-reverse mb-4">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
