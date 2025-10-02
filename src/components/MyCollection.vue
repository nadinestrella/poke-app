<script setup>
import { usePokemonTeam } from '@/composables/usePokemonTeam';
import ShowPoke from './ShowPoke.vue';

const pokemonTeam = usePokemonTeam();
</script>

<template>
  <div class="container">
    <h3 class="title">My Collection</h3>
    <div v-if="pokemonTeam.team.length > 0" class="pokeContainer">
      <ShowPoke
        v-for="pokemon in pokemonTeam.team"
        :key="pokemon.id"
        :pokemon="pokemon"
        size="small"
      />
    </div>
    <div v-else class="text">You haven’t added any Pokémon yet</div>
  </div>
</template>

<style scoped>
.container {
  background-color: #add8e6;
  border: 1px solid #191970;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;

  .title {
    color: #191970;
    text-align: center;
  }

  .pokeContainer {
    display: flex;
    flex-direction: column;
  }
  .text {
    color: #191970;
  }
  @media (min-width: 768px) {
    .pokeContainer {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
  }
}
</style>
