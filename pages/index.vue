<template>
  <main>
    <section class="h-screen">
      <div class="container h-full flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl">
            🥳
          </h1>
          <br>
          <h2 class="text-3xl font-semibold">
            Coming Soon // Segera Tayang!
          </h2>
        </div>
      </div>

      <div class="container h-full flex items-center justify-center mt-32">
        <div class="text-center">
          <p v-for="i in 10" :key="i" class="text-5xl font-semibold opacity-40 mb-12">
            TESTING
          </p>
        </div>
      </div>
    </section>
  </main>
</template>