<script setup>
import Button from '@/components/Button.vue';
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
  <div v-else class="pokemonList">
    <ShowPoke v-for="poke in pokemons" :key="poke.id" :pokemon="poke" />
  </div>

  <div class="pagination">
    <!-- TODO: Pagination Component -->
    <Button
      label="Prev"
      @click="prevPage"
      :disabled="currentPage === 1"
    ></Button>
    <span class="pages">Page {{ currentPage }} / {{ totalPages }}</span>
    <Button
      label="Next"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
    </Button>
  </div>
</template>

<style scoped>
.pokemonList {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .pokemonList {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  .pages {
    color: #191970;
  }
}
</style>
