<script setup>
import ShowPoke from '@/components/ShowPoke.vue';
import { useAllPokemon } from '@/composables/useAllPokemon';

const {
  pokemons,
  loading,
  error,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
} = useAllPokemon(20);
</script>

<template>
  <!-- TODO:Loading Component -->
  <div v-if="loading">Loading Pokemon...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <ShowPoke v-for="poke in pokemons" :key="poke.id" :pokemon="poke" />
  </div>

  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<style scoped></style>
