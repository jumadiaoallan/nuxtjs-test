<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const searchTerm = ref('');

const filteredData = computed(() => {
  if (searchTerm.value) {
    return toRaw(props.data).filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(searchTerm.value.toLowerCase());
    });
  }
  return props.data;
});
</script>

<template>
    <div class="modal-content">
      <input type="text" name="search" v-model="searchTerm" id="search" class="p-2 border w-[20rem]" placeholder="Search">
      <div class="container">
        <table class="w-full mt-3 text-center border border-slate-300">
          <thead>
            <tr>
              <td class="border border-slate-300">No.</td>
              <td class="border border-slate-300">Title</td>
              <td class="border border-slate-300">Course</td>
              <td class="border border-slate-300">Cuisine</td>
              <td class="border border-slate-300">Main Ingredient</td>
              <td class="border border-slate-300">Description</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredData" :key="item.id">
              <td class="border border-slate-300 text-left"> {{ item['id'] }}</td>
              <td class="border border-slate-300 text-left"> {{ item['title'] }}</td>
              <td class="border border-slate-300">{{ item['course'] }}</td>
              <td class="border border-slate-300">{{ item['cuisine'] }}</td>
              <td class="border border-slate-300">{{ item['mainIngredient'] }}</td>
              <td class="border border-slate-300">{{ item['description'] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>