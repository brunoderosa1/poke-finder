<script setup>
import { toRefs } from 'vue'
import { splitStringsWithDash } from '../utils/functions';
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  id: {
    required: true
  }
})

const { name, image, id } = toRefs(props)

function handleClick (id) {
  router.push('/' + id)
}

</script>

<template>
  <div class="flex flex-col max-w-25 min-w-40 h-40 cursor-pointer" @click="handleClick(id)">
    <img class="flex-grow w-100%" :src="image" alt="name" />
    <div class="h-5 text-center capitalize">{{ splitStringsWithDash(name) }}</div>
  </div>
</template>
