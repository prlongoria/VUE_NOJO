<!-- Ponerle funcionalidad -->

<script setup>
import { ref } from "vue";
let input = ref("");
//const stones = [];

//  const response =  fetch("http://localhost:8080/api/v1/stone/");
//          this.stones =  response.json();

// function filteredList() {
//   return stones.filter((stone) =>
//     stone.toLowerCase().includes(input.value.toLowerCase())
//   );
// }
</script>

<template>
  
  <div class="searchBar">
    <input
      class="form-control form-text"
      maxlength="128"
      type="text"
      v-model="input"
      placeholder="🔎 Busca tu piedra"
      name="search"
      onkeyup="autocompletado()"
    />
  </div>

  <div class="searchBar" v-for="stone in stones" :key="stone.id"></div>
  <!-- <div class="searchBar" v-for="stone in filteredList()" :key="stone.id"> -->
    <!-- <p>{{ stone.id }}</p></div> --> 
  <!-- <div class="stone error" v-if="input && !filteredList().length">
    <p>Piedra no encontrada</p>
  </div> -->
</template>

<style lang="css" scoped>
input {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  border: solid 1px #ccc;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  border-radius: 15px;
}
.searchBar {
  margin-left: 1vw;
}
</style>
