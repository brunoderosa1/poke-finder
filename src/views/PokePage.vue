<script setup>
import Card from '../components/Card.vue';
import Loading from '../components/Loading.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { splitStringsWithDash } from '../utils/functions';

const pokemon = ref([]);
const isLoading = ref(false);
const route = useRoute();
const isReady = ref(false)

onMounted(async () => {
  isLoading.value = true;
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + route.params.id);
  const data = await response.json();
  pokemon.value = data;
  isLoading.value = false;
  isReady.value = true
});
</script>

<template>
  <Loading v-if="isLoading" />
  <div v-if="isReady" class="flex flex-col items-center">
      <Card :name="pokemon?.name" :image="pokemon?.sprites?.other['official-artwork']['front_default']" />
      <table class="min-w-full divide-y divide-gray-900 mt-10">
        <thead>
          <tr>
            <th
              scope="col"
              class="px-6 py-3 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Atributo
            </th>
            <th
              scope="col"
              class="px-6 py-3 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Valor
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-700 divide-y divide-gray-900">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Numero</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ pokemon.id }}
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Nombre</td>
            <td class="px-6 py-4 whitespace-nowrap capitalize">
             {{ splitStringsWithDash(pokemon.name) }}
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Tipo</td>
            <td class="px-6 py-4 whitespace-nowrap capitalize">
                {{ pokemon?.types?.map((item) => item.type.name).join(', ') }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
