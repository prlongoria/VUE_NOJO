<script setup>
import SideBarVue from "../components/my_components/SideBar.vue";
import HomeIntroduction from "../components/my_components/HomeIntroduction.vue";
import CardsCatalog from "../components/my_components/cardsCatalog/CardsCatalog.vue";
import AddStoneButton from "../components/my_components/AddStoneButton.vue";

</script>

<template>
  <HomeIntroduction></HomeIntroduction>

  <main class="homeview">

    <CardsCatalog />

    <SideBarVue></SideBarVue>

  </main>

  <AddStoneButton></AddStoneButton>

</template>

<style lang="css" scoped>
.homeview {
  height: 100vh;
  display: flex;
  justify-content: flex-end;
}
</style>
