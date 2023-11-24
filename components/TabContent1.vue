<script setup>

  // const pending = true;
  const { data: recipes, pending, execute } = await useLazyFetch('https://api.sampleapis.com/recipes/recipes');
  console.log(recipes);
  const openModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  };

  const closeModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Constants for pagination
  const itemsPerPage = ref(10); // Number of items per page
  const currentPage = ref(1); // Current active page

  // Computed property to calculate paginated data
  const paginatedRecipes = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    return recipes.value?.slice(startIndex, endIndex);
  });

  // Function to change the current page
  const setPage = (page) => {
    currentPage.value = page;
    // Here you could also trigger a new fetch if your data is not all loaded at once
    execute();
  };

  // If you need to, create a computed property to calculate the total number of pages
  const totalPages = computed(() => {
    return Math.ceil(recipes.value?.length / itemsPerPage.value);
  });

</script>

<template>
  <div class="w-full text-black mt-2">
    <button type="button" id="myBtn" @click="openModal()" class="bg-[#89CFF0] border p-2">
      Open Modal
    </button>
  </div>
  <div>
    <button class="bg-[#999999] border p-2 mt-2" @click="setPage(currentPage - 1)" :disabled="currentPage === 1">
      Previous
    </button>
    <button class="bg-[#999999] border p-2 pl-5 pr-5 mt-2 ml-2" @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages">
      Next
    </button>
    <span class="ml-2">{{ currentPage + '/' + totalPages }}</span>
  </div>
  <div class="container mt-5 center">
    <table class="w-full mt-3 text-center border border-slate-300">
      <thead>
        <tr>
          <td class="border border-slate-300">Title</td>
          <td class="border border-slate-300">Course</td>
          <td class="border border-slate-300">Cuisine</td>
          <td class="border border-slate-300">Main Ingredient</td>
          <td class="border border-slate-300">Description</td>
        </tr>
      </thead>
      <tbody>
        <tr v-if="pending">
          <td colspan="5" class="border border-slate-300">Loading</td>
        </tr>
        <tr v-else v-for="item in paginatedRecipes">
          <td class="border border-slate-300 text-left"> {{ item['title'] }}</td>
          <td class="border border-slate-300">{{ item['course'] }}</td>
          <td class="border border-slate-300">{{ item['cuisine'] }}</td>
          <td class="border border-slate-300">{{ item['mainIngredient'] }}</td>
          <td class="border border-slate-300 text-left">{{ item['description'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal()">&times;</span>
      <h1 class="mb-5 text-center">Recipes</h1>
      <div>
        <ModalContent :data="recipes" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
</style>