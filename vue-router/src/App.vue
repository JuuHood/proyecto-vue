<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Componente de navegación principal -->
    <Menu />

    <!-- Contenido de la vista activa -->
    <main class="flex-fill container py-4 text-center">
      <h1 class="mb-4">Mi Aplicación</h1>
      <router-view />
    </main>

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
}
</style>
