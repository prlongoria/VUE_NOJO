
<script setup>
import BackButton from "../components/my_components/detailComponents/backButton.vue";
import DetailComponent from "../components/my_components/detailComponents/detailComponent.vue";
import { ref, watchEffect } from 'vue'
</script>

<template>
<DetailComponent></DetailComponent>
    <!-- <div class="detailView">
        <h1>ESTA ES LA DETAIL VIEW</h1>
    </div> -->
    <BackButton></BackButton>
</template>


<style lang="css" scoped>
    /* .detailView{
        background-color: #EBF1F4;
        height: 100vh;
        overflow-y: auto;
        padding: 3vw;
        margin: 2vw;
        
        
} */
/* .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.cart-actions {
  position: absolute;
  width: auto;
  flex-grow: inherit;
  bottom: 0;
  margin: 1rem 0;
}
p {
  margin: 0 10px
} */
</style>