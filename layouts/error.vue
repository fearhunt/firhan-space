<template>
  <main class="main-content">
    <!-- <RedirectBack :message="message" /> -->
  </main>
</template>

<script>
  export default {
    props: [ 
      "error" 
    ],

    data() {
      return {
        message: (this.error.statusCode === 404) ? "Laman yang Anda akses tidak dapat ditemukan." : "Terdapat error."
      }
    },

    layout: "error"
  }
</script>