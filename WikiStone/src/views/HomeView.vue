

<script setup>
  import SideBarVue from '../components/my_components/SideBar.vue';
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
    <div class="sideBar">
      <SideBarVue></SideBarVue>
    </div>
  </main>
  <RouterView name="aside"/>
</template>

<style lang="css" scoped>
.sideBar {
  background-color: rebeccapurple;
  display:;
}
.homeview {
  background-color: brown;
  height: 100vh;
  overflow-y: auto;
}
/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content__products {
  width: 90%;
}
.loading {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
} */


</style>
