<script setup>
import MyCollection from './components/MyCollection.vue';
import SearchPokemon from './components/SearchPokemon.vue';
import ShowPokemon from './components/ShowPokemon.vue';
import TeamPokemon from './components/TeamPokemon.vue';
</script>

<template>
  <header class="header">
    <h1 class="title">Pokémon</h1>
    <img class="img" src="@/assets/pokeball.png" alt="pokeball" />
  </header>
  <main>
    <div>
      <p class="subtitle">Discover and collect your favorite Pokémon</p>
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

.header {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  .title {
    color: #191970;
  }
  .img {
    height: 35px;
    width: auto;
  }
}
.subtitle {
  color: #191970;
}
</style>
