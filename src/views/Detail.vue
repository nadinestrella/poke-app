<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemonSearch } from '@/composables/usePokemonSearch';
import Title from '@/components/Title.vue';
import ShowPoke from '@/components/ShowPoke.vue';

const route = useRoute();
const pokemonId = route.params.id;

const { pokemon, loading, error, fetchPokemon } = usePokemonSearch();

onMounted(() => {
  fetchPokemon(pokemonId);
});
</script>

<template>
  <Title label="Detail"></Title>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="pokemon">
    <ShowPoke :pokemon="pokemon" />
  </div>
  <div v-else>
    <p>Pokémon not found</p>
  </div>
</template>
