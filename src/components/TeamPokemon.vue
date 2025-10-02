<script setup>
import { usePokemonTeam } from '@/composables/usePokemonTeam';
import { computed } from 'vue';

const pokemonTeam = usePokemonTeam();

//show
const team = computed(() => {
  return [
    ...pokemonTeam.team,
    ...Array(6 - pokemonTeam.team.length).fill(null),
  ];
});
</script>

<template>
  <div class="container">
    <h3 class="title">My Pokémon Team</h3>

    <div class="team">
      <div
        v-for="(pokemon, index) in team"
        :key="index"
        class="pokemonContainer"
      >
        <img v-if="pokemon" :src="pokemon.image" :alt="pokemon.name" />
        <span v-else>Empty</span>
      </div>
    </div>

    <p class="description">Add Pokémon to your team to see them here</p>
  </div>
</template>

<style scoped>
.container {
  background-color: #add8e6;
  border: 1px solid #191970;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
}
.title {
  color: #191970;
  text-align: center;
}

.team {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

.pokemonContainer {
  color: #191970;
  border-radius: 50%;
  border: dashed #191970 1px;
  height: 50px;
  width: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemonContainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  color: #191970;
  text-align: center;
}
</style>
