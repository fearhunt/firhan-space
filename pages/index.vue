<template>
  <div class="flex items-center h-screen w-screen">
    <div class="text-center min-w-full">
      <h1 class="text-6xl">
        🥳
      </h1>
      <br>
      <h2 class="text-3xl font-semibold">
        Coming Soon // Segera Tayang!
      </h2>
      <hr class="my-4 w-48 border-2 border-gray-700 mx-auto">
      <img :src="require('~/assets/img/fmr.png')" class="block logo-fmr w-16 mx-auto" />
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>
