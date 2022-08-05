

<script setup>
  import SideBarVue from '../components/my_components/SideBar.vue';
import HomeIntroduction from '../components/my_components/HomeIntroduction.vue';
import CardsCatalog from '../components/my_components/cardsCatalog/CardsCatalog.vue';
</script>

<template>

  <HomeIntroduction></HomeIntroduction>
   
  
  <main class="homeview">
    
  <!-- <div id="catalog"> -->
     
    <CardsCatalog></CardsCatalog>
    <!-- </div> -->
    
      <SideBarVue></SideBarVue>
    
  </main>
  <!-- <RouterView name="aside"/> -->
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
