<script>
import axios from "axios";

export default {
  name: "createComponent",

  data() {
    return {
      form: {
        image: "",
        name: "",
        color: "",
        attributes: "",
        healing: "",
        position: "",
      },
    };
  },
  methods: {
    async createStone() {
      const url = "http://localhost:8080/api/v1/stone/create";

      const response = await axios.post(url, this.form);

      console.log(response);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div>
    <h1 id="titleCreate">CREATE PAGE</h1>
    <img
      src="../../../images/agatas.jpg"
      alt="Añada Imagen de la piedra"
      id="createImage"
    />
    <button type="button" id="homeButton">
      <RouterLink to="/" class="textButton">🏠</RouterLink>
    </button>
  </div>

  <form @submit.prevent="createStone">
    <div class="createView">
      <label for="image">Imagen:</label>
      <input name="image" type="text" v-model="form.image" />

      <label for="name">Nombre:</label>
      <input name="name" type="text" v-model="form.name" />

      <label for="color">Color:</label>
      <input name="color" type="text" v-model="form.color" />

      <label for="attributes">Atributos:</label>
      <input name="attributes" type="text" v-model="form.attributes" />

      <label for="healing">Sanación:</label>
      <input name="healing" type="text" v-model="form.healing" />

      <label for="position">Posición:</label>
      <input name="position" type="text" v-model="form.position" />
    </div>

    <button type="submit">AÑADIR</button>
  </form>
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
#createImage {
  padding: 15vw;
  margin-bottom: -10vw;
}
#titleCreate {
  color: black;
  font-size: 10vw;
  margin-bottom: -15vw;
}
.createView {
  color: black;
  background-color: #ebf1f4;
  height: 100vh;
  overflow-y: auto;
  padding: 3vw;
  margin: 2vw;
  margin-bottom: 0vw;
}
</style>
