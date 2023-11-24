<script setup>

const openTab = (tabName) => {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
};

</script>

<template>
  <div class="w-full text-black mt-2">
    <div id="tab1" class="tab" @click="openTab('content1')">Tab 1</div>
    <div id="tab2" class="tab" @click="openTab('content2')">Tab 2</div>
    <div id="tab3" class="tab" @click="openTab('content3')">Tab 3</div>

    <div id="content1" style="display: block;" class="tab-content">
      <TabContent1 />
    </div>

    <div id="content2" class="tab-content">
      <TabContent2 />
    </div>

    <div id="content3" class="tab-content">
      <TabContent3 />
    </div>
  </div>
</template>

<style scoped>
.tab {
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #ccc;
  display: inline-block;
  background-color: #f1f1f1;
}
.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}
.active {
  background-color: #ccc;
}
.show {
  display: block;
}
</style>