import { computed, onMounted, ref } from 'vue';

export const useAllPokemon = (limit = 20, autoFetch = true) => {
  const pokemons = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const currentPage = ref(1);
  const total = ref(0);

  const totalPages = computed(() => Math.ceil(total.value / limit));

  async function fetchPokemons(page = 1) {
    loading.value = true;
    error.value = null;

    try {
      const offset = (page - 1) * limit;
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();

      total.value = data.count;

      const promises = data.results.map(async (p) => {
        const res = await fetch(p.url);
        const data = await res.json();

        const image =
          data?.sprites?.other?.['official-artwork']?.front_default ||
          data?.sprites?.front_default ||
          '';
        return {
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          image,
        };
      });
      pokemons.value = await Promise.all(promises);
      currentPage.value = page;
    } catch (e) {
      console.error(e);
      error.value = 'The pokemon could not be loaded';
    } finally {
      loading.value = false;
    }
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) {
      fetchPokemons(currentPage.value + 1);
    }
  }

  function prevPage() {
    if (currentPage.value > 1) {
      fetchPokemons(currentPage.value - 1);
    }
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
      fetchPokemons(page);
    }
  }

  if (autoFetch) {
    onMounted(() => fetchPokemons());
  }

  return {
    pokemons,
    loading,
    error,
    fetchPokemons,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
};
