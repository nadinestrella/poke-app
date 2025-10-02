<script setup>
import Button from './Button.vue';
import { usePokemonTeam } from '@/composables/usePokemonTeam';
import { computed } from 'vue';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  inTeam: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
  },
});

const pokemonTeam = usePokemonTeam();

//add
const addToTeam = () => {
  pokemonTeam.add(props.pokemon);
  console.log('equipo actual', pokemonTeam.team);
};

//remove
const removeFromTeam = () => {
  pokemonTeam.remove(props.pokemon.id);
  console.log('equipo actual', pokemonTeam.team);
};

const isInTeam = computed(() => {
  return pokemonTeam.team.some((p) => p.id === props.pokemon.id);
});
</script>

<template>
  <section class="card">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.image" :alt="pokemon.name" />

      <div class="properties">
        <span class="property">Weight: {{ pokemon.weight }}</span>
        <span class="property">Height: {{ pokemon.height }}</span>
      </div>
      <div class="buttons">
        <Button
          v-if="!isInTeam"
          label="Add to team"
          color="accept"
          @click="addToTeam"
        />
        <Button
          v-if="isInTeam"
          label="Remove from team"
          color="cancel"
          @click="removeFromTeam"
        />
        <span></span>

        <router-link to="detail" class="detail">See Details</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  margin: 20px auto;
  padding: 15px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  text-align: center;
}

.card img {
  width: 120px;
  height: auto;
  background-color: #faffaf;
}

.properties {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;

  .property {
    background-color: rgb(240, 234, 234);
    padding: 20px;
    border-radius: 20px;
  }
}

.buttons {
  margin-top: 10px;
}

.detail {
  color: rgb(142, 133, 133);
  text-decoration: none;
}

.detail:hover {
  color: #191970;
}
/* .add-button {
  padding: 10px;
  border: 0;
  background-color: var(--color-primary);
  border-radius: 20px;
  margin: 0 10px;
} */

/* .remove-button {
  padding: 10px;
  border: 0;
  background-color: firebrick;
  border-radius: 20px;
  color: white;
} */
</style>
