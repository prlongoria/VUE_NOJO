

<script setup>
  // import SearchBarVue from '../components/my_components/header/SearchBar.vue.js';
</script>

<template>

  <main class="homeview">
    <h1 >Home Page</h1>
    <nav>
      <RouterLink to="/CreateView">CreateView</RouterLink>
      <br>
      <RouterLink to="/DetailView">DetailView</RouterLink>
      <br>
      <RouterLink to="/Update">Update View</RouterLink>
    </nav>
  </main>
  
</template>

<style lang="css" scoped>
  .homeview {
    background-color: brown;
    padding: 5%;
    display: flex;
    justify-content: space-between;
  }


</style>
