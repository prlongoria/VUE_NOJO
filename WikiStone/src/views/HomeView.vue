

<script setup>
  import SideBarVue from '../components/my_components/SideBar.vue';
  import HomeIntroduction from '../components/my_components/HomeIntroduction.vue';
  import CardsCatalog from '../components/my_components/cardsCatalog/CardsCatalog.vue';
  import AddStoneButton from '../components/my_components/addStoneButton.vue';
// import CardsCatalogue from '../components/my_components/cardsCatalog/CardsCatalogue.vue';
// import { useStonesStore } from "../stores/StonesStore.js";
// useStonesStore();
</script>

<template>

  <HomeIntroduction></HomeIntroduction>
   
  
  <main class="homeview">

    <!-- <CardsCatalogue /> -->
    
         <CardsCatalog /> 
      


    <SideBarVue></SideBarVue>
    
  </main>
  <AddStoneButton></AddStoneButton>

</template>

<style lang="css" scoped>
.homeview {
  /* background-color: lightblue; */
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: flex-end;
}
 /* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
/* .content__products {
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
