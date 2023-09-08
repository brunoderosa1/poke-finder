<script lang="ts" setup>
import { ref, watch } from 'vue';
import { usePokeStore } from '../stores/pokestore';
import { storeToRefs } from 'pinia';
const input = ref('');
const debounceTimeout = ref();

const store = usePokeStore();
const { searchInput, retrievedPokeData, searchPokemon } = storeToRefs(store);

watch(input, () => {
  clearTimeout(debounceTimeout.value);
  debounceTimeout.value = setTimeout(() => {
    searchInput.value = input.value;
  }, 500);
});
</script>

<template>
  <div class="flex h-full flex-col justify-start">
    <input
      class="h-10 p-2 text-lg w-60% self-center rounded border-3 border-solid border-slate-800"
      placeholder="Escriba el nombre del pokemon que quiera buscar"
      id="search-bar"
      type="text"
      v-model="input"
    />
  </div>
</template>
