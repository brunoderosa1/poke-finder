<script setup>
import { storeToRefs } from 'pinia';
import { usePokeStore } from '../stores/pokestore';
import Card from './Card.vue';

const store = usePokeStore();
const { retrievedPokeData } = storeToRefs(store);


</script>

<template>
  <div class="flex flex-wrap justify-center gap-10 my-10">
    <Card
      v-for="(item, index) in retrievedPokeData"
      :index="index"
      :name="item.name"
      :image="item.sprites.other['official-artwork']['front_default']"
      :id="item.id"
    />
  </div>
</template>
