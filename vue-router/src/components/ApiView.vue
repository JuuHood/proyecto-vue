<template>
  <section class="container py-4">
    <h2 class="mb-3 text-center">Personajes “Vivos”</h2>
    <ul class="list-group">
      <li
        v-for="personaje in activos"
        :key="personaje.id"
        class="list-group-item"
      >
        {{ personaje.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const personajes = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    personajes.value = data.results
  } catch (err) {
    console.error('Error al traer personajes:', err)
  }
})

const activos = computed(() =>
  personajes.value.filter(p => p.status === 'Alive')
)
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s;
}
.list-group-item:hover {
  background-color: #f0f0f0;
}
</style>
