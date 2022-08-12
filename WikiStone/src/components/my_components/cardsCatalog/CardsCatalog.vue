<!-- composition api -->
<script setup>
import { onBeforeMount } from "vue";
import { useStonesStore } from "../../../stores/StonesStore";
const stonesStore = useStonesStore();
useStonesStore();
onBeforeMount(() => {
  console.log("FUNCIONA");
  //getStones
});

// const getStones = async () => {
//     await stonesStore.fetchStones()
// }
</script>

<template>
  <div class="panelCatalogCards">
    <div v-for="stone in stonesStore.stones" :key="stone.id" class="card">
      <div class="imgTitleColor">
        <div class="card__image-holder">
          <img class="card__image" :src="stone.image" alt="stone" />
        </div>
        <div id="titleColor">
          <div class="card-title">
            <h1 class="stoneName">{{ stone.name }}</h1>
          </div>
          <div class="card-color">
            <h2 id="colorStone">Color: </h2><p>{{ stone.color }}</p>
          </div>
        </div>
      </div>
      <div class="card-attributes">
        <h2 id="stoneAttributes">Atributos: </h2><p>{{ stone.attributes }}</p>
      </div>
      <div class="enlaceDetalle">
      <a >Ver Más</a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.panelCatalogCards {
  background-color: #ebf1f4;
  margin: 1vw;
  width: 82vw;
  border: 0.2vw solid black;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
.card {
  padding: 1vw;
  margin: 0.5vw;
  border: 0.2vw solid black;
  background-color: white;
  text-align: justify;
  overflow-y: auto;
  height: 30vw;
  display: flex;
  flex-wrap: wrap;
}

.card__image-holder {
  width: 25%;
  margin-right: 5%;
}

.imgTitleColor {
  display: flex;
  
}
.card-attributes {
  align-self: flex-start;
  
}
.enlaceDetalle {
  margin-left: 85%;
}
#stoneAttributes {
  font-weight: bold;
}
#colorStone {
  font-weight: bold;
}
#titleColor {
  align-self: center;
}
</style>
