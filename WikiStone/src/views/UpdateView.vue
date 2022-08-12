<script setup>
import UpdateComponent from "../components/my_components/updateComponents/updateComponent.vue";
import UpdateButton from "../components/my_components/updateComponents/updateButton.vue";
import CancelUpdateButton from "../components/my_components/updateComponents/cancelUpdateButton.vue";
</script>

<template>
  <h1>SOY LA UPDATE VIEW</h1>
  <div>
    <UpdateComponent />
  </div>
  <UpdateButton />
  <CancelUpdateButton />
  <!-- <div class="detailView">
        <h1>ESTA ES LA DETAIL VIEW</h1>
    </div> -->
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

<!-- <script setup>
    
</script>

<template>
    <main class="updateView">
        <h1>SOY LA UPDATE VIEW</h1>
    </main>
</template>

<style lang="css" scoped>
    .updateView{
        background-color: blueviolet;
        height: 100vh;
        overflow-y: auto;
    }

</style> -->
