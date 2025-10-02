<script setup>
import { usePokemonSearch } from '@/composables/usePokemonSearch';
import ShowPoke from './ShowPoke.vue';
import Button from './Button.vue';

const { query, onSearch, pokemon, loading, error } = usePokemonSearch();
</script>

<template>
  <nav class="nav">
    <form @submit.prevent="onSearch" class="form">
      <input v-model="query" placeholder="ej. Ditto" class="input" />
      <!-- <button type="submit" class="search">Buscar</button> -->
      <Button label="Search" />
    </form>
  </nav>

  <ShowPoke v-if="pokemon" :pokemon="pokemon" :is-loading="loading" />
</template>

<style scoped>
.nav {
  background-color: #add8e6;
  border: 1px solid #191970;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: row;
  gap: 20px;

  .input {
    background-color: white;
    border: 1px solid #191970;
    border-radius: 10px;
    padding: 5px;
    width: 100%;
    height: 20px;
  }

  .search {
    background-color: #dc143c;
    color: white;
    border: 1px solid #dc143c;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  }
}
</style>
