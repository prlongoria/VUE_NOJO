<!-- composition Api:
<script setup>
const props = defineProps({
  id: Number,
  
  name: String,
  
  healing: String,
 
  position: String,
  
  color: String,
  
  attributes: String,
  
  image: String,
  
  stone: Object
});
</script> -->

<!-- Api Option: -->
<script>
export default ({
  props: {
    stone: Object
  }
})
</script>


<template>
  <div>
    <h1 id="titleDetail">{{ name }}</h1>
    <img src="{{ image }}" alt="Imagen de la piedra" id="detailImage" />
    <button type="button" id="editButton">
      <RouterLink to="/update" class="textButton">📝</RouterLink>
    </button>
    <button type="button" id="deleteButton">
      <RouterLink to="/" class="textButton">🗑️</RouterLink>
    </button>
  </div>
  <div class="detailView">
    <p>Color: {{ color }}</p>
    <p>
      Atributos:
      {{ attributes }}
    </p>
    <p>
      Sanación:
      {{ healing }}
    </p>
    <p>Posición: {{ position }}</p>
    <p>Chakras:Pellentesque eget scelerisque augue.</p>
    <p>Signo del Zodíaco:Pellentesque eget scelerisque augue.</p>
  </div>
</template>

<style lang="css" scoped>
p {
  background-color: white;
  /* border: 0.25vw solid black; */
  height: auto;
  padding: 1vw;
  text-align: justify;
  margin-bottom: 2vw;
}
#detailImage {
  padding: 15vw;
  margin-bottom: -10vw;
}
#titleDetail {
  font-size: 5vw;
  margin-bottom: -15vw;
}
.detailView {
  background-color: #ebf1f4;
  height: 100vh;
  overflow-y: auto;
  padding: 3vw;
  margin: 2vw;
  margin-bottom: 0vw;
}
</style>
