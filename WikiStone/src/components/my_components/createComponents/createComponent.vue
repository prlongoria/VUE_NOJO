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

    resetForm() {
      this.form.image = "";
      this.form.name = "";
      this.form.color = "";
      this.form.attributes = "";
      this.form.healing = "";
      this.form.position = "";
    },
  },
};
</script>

<template>
  <div>
    <h6 id="titleCreate">Crea tu Piedra</h6>
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
      <p>
        <label for="image">Imagen: </label>
        <input name="image" type="text" v-model="form.image" />
      </p>

      <p>
        <label for="name">Nombre: </label>
        <input name="name" type="text" v-model="form.name" />
      </p>

      <p>
        <label for="color">Color: </label>
        <input name="color" type="text" v-model="form.color" />
      </p>

      <p>
        <label for="attributes">Atributos: </label>
        <input name="attributes" type="text" v-model="form.attributes" />
      </p>

      <p>
        <label for="healing">Sanación: </label>
        <input name="healing" type="text" v-model="form.healing" />
      </p>

      <p>
        <label for="position">Posición: </label>
        <input name="position" type="text" v-model="form.position" />
      </p>
    </div>
    <button type="submit" id="addButton">AÑADIR</button>
    <button type="reset" @toggle-off="resetForm" id="cancelButton">
      Cancelar
    </button>
  </form>
</template>

<style lang="css" scoped>
#cancelButton {
  background-color: #849597;
  width: auto;
  margin: 1vw;
  border-radius: 45vw;
  color: white;
}
#addButton {
  background-color: #849597;
  width: auto;
  margin: 1vw;
  border-radius: 45vw;
  color: white;
}
input {
  border: none;
  width: 100%;
}
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
  font-size: 5vw;
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
