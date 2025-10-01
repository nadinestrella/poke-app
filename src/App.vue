<script setup>
import MyCollection from './components/MyCollection.vue';
import SearchPokemon from './components/SearchPokemon.vue';
import ShowPokemon from './components/ShowPokemon.vue';
import TeamPokemon from './components/TeamPokemon.vue';
</script>

<template>
  <header>
    <h1>Pokémon</h1>
  </header>
  <main>
    <div>
      <p>Discover and collect your favorite Pokémon</p>
      <TeamPokemon />
      <ShowPokemon />
      <SearchPokemon />
      <MyCollection />
    </div>
  </main>
</template>

<style>
body {
  background: #eeaeca;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>
