<script setup>
  const rows = ref([{ column1: '', column2: '', column3: '', column4: '', column5: '' }]);

  const checkForNewRow = (index) => {
    if (index >= 0 && rows.value[index].column1 && index === rows.value.length - 1) {
      rows.value.push({ column1: '', column2: '', column3: '', column4: '', column5: '' });
    }
  };

  const deleteRow = (index) => {
    rows.value.splice(index, 1);
  };
</script>

<template>
  <div class="w-full text-black mt-2">
    <table id="myTable" class="mt-3 text-center border border-slate-300 p-2">
      <thead>
        <tr>
          <th class="p-2">Action</th>
          <th class="p-2">Column 1</th>
          <th class="p-2">Column 2</th>
          <th class="p-2">Column 3</th>
          <th class="p-2">Column 4</th>
          <th class="p-2">Column 5</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td><span class="p-3 cursor-pointer" v-if="index !== 0" @click="deleteRow(index)">X</span></td>
          <td><input type="text" class="p-2" v-model="row.column1" @focusout="checkForNewRow(index)" /></td>
          <td><input type="text" class="p-2" v-model="row.column2" /></td>
          <td><input type="text" class="p-2" v-model="row.column3" /></td>
          <td><input type="text" class="p-2" v-model="row.column4" /></td>
          <td><input type="text" class="p-2" v-model="row.column5" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>