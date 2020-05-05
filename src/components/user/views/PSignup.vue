<template functional>
  <div class="p-background">
    <p-fullscreen-layout>
      <template #content>
        <div class="flex flex-grow flex-col justify-center items-center">
          <div class="mb-6">
            <h1 class="text-6xl md:text-8xl font-bold text-gray-300">
              Powertrip
            </h1>
            <h2 class="text-xl md:text-2xl font-extrabold text-gray-300">
              empowering your next adventure
            </h2>
          </div>
          <div class="mb-6">
            <p-button rounded class="bg-gray-300" :onClick="() => {}"
              >Sign up</p-button
            >
            <hr />
            <p-button rounded class="bg-gray-300" :onClick="() => {}"
              >Sign in</p-button
            >
          </div>
        </div>
      </template>
    </p-fullscreen-layout>
  </div>
</template>

<style lang="postcss" scoped>
.p-background {
  @apply bg-cover bg-no-repeat bg-center;
  background-image: linear-gradient(
      color(black a(75%)),
      color(theme("colors.cyan.500") a(25%))
    ),
    url("https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80");
}
</style>
