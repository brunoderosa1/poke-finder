<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import Footer from './components/Footer.vue'
import { usePokeStore } from './stores/pokestore'
import { storeToRefs } from 'pinia'
import {onMounted} from 'vue'

const store = usePokeStore()

onMounted(() => {
  store.fetchData()
})

</script>

<template>
  <div class="fixed top-0 left-0 min-w-100vw flex items-center flex-col h-auto max-h-screen overflow-y-auto">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
