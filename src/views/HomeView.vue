<script setup>
import CardGrid from '../components/CardGrid.vue'
import SearchBar from '../components/SearchBar.vue'
import Loading from '../components/Loading.vue';
import { usePokeStore } from '../stores/pokestore';
import {storeToRefs} from 'pinia'

const store = usePokeStore()
const {checkIfIsFetching} = storeToRefs(store)
</script>

<template>
  <main class="w-full flex-grow m-3 p-3 flex flex-col justify-start">
    <SearchBar />
    <Loading v-if="checkIfIsFetching" />
    <CardGrid v-else />
  </main>
</template>
