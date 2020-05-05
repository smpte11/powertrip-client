<template functional>
  <div class="p-background">
    <div class="flex flex-col h-screen min-h-screen p-4">
      <div class="flex-grow">
        <h1 class="text-6xl font-bold text-gray-300">Powertrip</h1>
        <h2 class="text-xl font-extrabold text-gray-300">
          empowering your next adventure
        </h2>
        <div>
          <p-button rounded class="bg-gray-300" :onClick="() => {}"
            >Sign up</p-button
          >
          <hr />
          <p-button rounded class="bg-gray-300" :onClick="() => {}"
            >Sign in</p-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.p-background {
  @apply bg-cover bg-no-repeat bg-center;
  background-image: linear-gradient(
      color(black a(50%)),
      color(theme("colors.cyan.500") a(25%))
    ),
    url("https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80");
}
</style>
