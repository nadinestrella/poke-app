<script setup>
import { ref, onMounted } from 'vue';

// const pokemon = ref(null);

// async function fetchPokemon(name) {
//   try {
//     //hace la promesa
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     //parseo la data
//     const data = await res.json();

//     console.log(data);

//     pokemon.value = {
//       name: data.name,
//       id: data.id,
//       weight: data.weight,
//     };
//   } catch (e) {
//     console.log(e);
//   }
// }

// onMounted(() => fetchPokemon('gengar'));
//
</script>

<template>
  <div v-if="pokemon">
    <h1>Pokémon</h1>
    <span>{{ pokemon.name }}</span>
  </div>
</template>
