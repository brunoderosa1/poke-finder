import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

export const usePokeStore = defineStore('pokestore', () => {
  const pokedata = ref([]);
  const searchInput = ref('');
  const fetchedPokemonData = ref([]);

  const isFetching = ref(false);

  async function fetchData() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1281');
      const data = await response.json();
      pokedata.value = data.results;
      return
    } catch (error) {
      console.log(error);
      return alert('Data not fetched.');
    }
  }

  const searchPokemon = computed(() => {
    return pokedata.value.filter((pokemon) => {
      return pokemon.name.includes(searchInput.value);
    });
  });

  watch(searchInput, async () => {
    isFetching.value = true;
    for (const element of searchPokemon.value) {
      const response = await fetch(element.url);
      const data = await response.json();
      fetchedPokemonData.value.push(data);
    }
    removeDuplicatesFromFetchedData();
    isFetching.value = false;
  });

  const checkIfIsFetching = computed(() => {
    return isFetching.value
  })

  const retrievedPokeData = computed(() => {
    return fetchedPokemonData.value.filter((item) => {
      return item.name.includes(searchInput.value);
    });
  });

  const setSearchInput = (input) => {
    searchInput.value = input;
  };

  function removeDuplicatesFromFetchedData() {
    const objectSet = new Set(fetchedPokemonData.value.map(JSON.stringify));
    fetchedPokemonData.value = [...objectSet].map(JSON.parse);
  }


  return { pokedata, fetchData, searchPokemon, searchInput, setSearchInput, retrievedPokeData, checkIfIsFetching };
});
