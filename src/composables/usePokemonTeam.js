import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokemonTeam = defineStore('pokemonTeam', () => {
  const team = ref([]);

  //add pokemon

  const add = (pokemon) => {
    if (!team.value.find((p) => p.id === pokemon.id)) {
      team.value.push(pokemon);
    }
  };

  //remove pokemon

  const remove = (pokemonId) => {
    team.value = team.value.filter((p) => p.id !== pokemonId);
  };

  return { team, add, remove };
});
