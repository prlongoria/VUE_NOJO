<script setup></script>

<template>
  <div>
    <h1 id="titleUpdate">UPDATE PAGE</h1>
    <img
      src="../../../images/Cuarzo_rosa.jpg"
      alt="Imagen de la piedra"
      id="updateImage"
    />
    <button type="button" id="homeButton">
      <RouterLink to="/" class="textButton">🏠</RouterLink>
    </button>
  </div>
  <div class="updateView">
    <p>Color: Rosa</p>
    <p>
      Atributos: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim.
      Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus
      pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis
      mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam
      feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris
      at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem
      blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit
      amet aliquam. Fusce sed nunc in sem molestie accumsan. Nunc vitae eros id
      massa venenatis gravida.
    </p>
    <p>
      Sanación:Pellentesque eget scelerisque augue. Fusce vitae aliquam enim.
      Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus
      pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis
      mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam
      feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris
      at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem
      blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit
      amet aliquam.
    </p>
    <p>Posición:Pellentesque eget scelerisque augue.</p>
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
#updateImage {
  padding: 15vw;
  margin-bottom: -10vw;
}
#titleUpdate {
  font-size: 10vw;
  margin-bottom: -15vw;
}
.updateView {
  background-color: #ebf1f4;
  height: 100vh;
  overflow-y: auto;
  padding: 3vw;
  margin: 2vw;
  margin-bottom: 0vw;
}
</style>
