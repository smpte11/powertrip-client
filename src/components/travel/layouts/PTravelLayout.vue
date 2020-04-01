<template>
  <div class="flex flex-col min-h-screen p-4">
    <header>
      <slot name="header" />
    </header>
    <main class="flex-grow">
      <slot name="body" />
    </main>
    <footer class="flex flex-row-reverse">
      <div class="mb-4">
        <slot name="footer" />
      </div>
    </footer>
  </div>
</template>
