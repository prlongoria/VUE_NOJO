<!-- Api Option: -->
<script>
import axios from "axios";
export default {
  name: "CardsCatalog",
  data() {
    return {
      stones: [],
    };
  },

  methods: {
    async getStones() {
      //método read
      try {
        const response = await fetch("http://localhost:8080/api/v1/stone/");
        this.stones = await response.json();
      } catch (error) {
        console.error(error);
      }
    },

    deleteStone(id) {
      axios.delete("http://localhost:8080/api/v1/stone/delete/" + id);
      if (confirm("¿Estás seguro de eliminar esta piedra?")) {
        alert("Has eliminado la piedra");
        location.reload();
      }
    },

    showStone(id) {
      axios
        .get("http://localhost:8080/api/v1/stone/show/" + id)
        .then((response) => response.json())
        .then((response) => {
          this.stones = response;
        });
    },

    async updateStone(stone) {
      // Método para actualizar un stone
      try {
        await fetch("http://127.0.0.1:8080/api/v1/stone/update/" + stone.id, {
          method: "PUT",
          body: JSON.stringify(stone),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
      } catch (error) {
        console.error(error);
      }
      location.reload();
    },
  },
  mounted() {
    this.getStones();
  },


};
</script>

<template>
  <div class="panelCatalogCards">
    <div
      v-for="(stone, index) in stones"
      :key="index"
      :stone="stone"
      class="card"
    >
      <div class="imgTitleColor">
        <div class="card__image-holder">
          <img class="card__image" :src="stone.image" alt="stone" />
        </div>
        <div id="titleColor">
          <div class="card-title">
            <h2 id="colorStone">Nombre:</h2>
            <p>{{ stone.name }}</p>
          </div>
          <div class="card-color">
            <h2 id="colorStone">Color:</h2>
            <p>{{ stone.color }}</p>
          </div>
        </div>
      </div>
      <div class="card-attributes">
        <h2 id="stoneAttributes">Atributos:</h2>
        <p>{{ stone.attributes }}</p>
      </div>
      <div class="enlaceDetalle">
        <button @click="deleteStone(stone.id)">🗑️</button>

        <!-- Button trigger modal SHOW-->
        <button
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="'#showModal' + stone.id"
        >
          Ver Más
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'showModal' + stone.id"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Vista Detalle</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="createView">
                    <p>
                      <label for="image">Imagen: </label>
                      <input name="image" type="text" v-model="stone.image" />
                    </p>

                    <p>
                      <label for="name">Nombre: </label>
                      <input name="name" type="text" v-model="stone.name" />
                    </p>

                    <p>
                      <label for="color">Color: </label>
                      <input name="color" type="text" v-model="stone.color" />
                    </p>

                    <p>
                      <label for="attributes">Atributos: </label>
                      <input
                        name="attributes"
                        type="text"
                        v-model="stone.attributes"
                      />
                    </p>

                    <p>
                      <label for="healing">Sanación: </label>
                      <input
                        name="healing"
                        type="text"
                        v-model="stone.healing"
                      />
                    </p>

                    <p>
                      <label for="position">Posición: </label>
                      <input
                        name="position"
                        type="text"
                        v-model="stone.position"
                      />
                    </p>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button data-bs-dismiss="modal" id="cancelButton">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Button trigger modal UPDATE-->
        <button
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="'#updateModal' + stone.id"
        >
          Editar 📝
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'updateModal' + stone.id"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Actualizar Piedra</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="updateStone(stone)">
                  <div class="createView">
                    <p>
                      <label for="image">Imagen: </label>
                      <input type="text" v-model="stone.image" />
                    </p>

                    <p>
                      <label for="name">Nombre: </label>
                      <input type="text" v-model="stone.name" />
                    </p>

                    <p>
                      <label for="color">Color: </label>
                      <input type="text" v-model="stone.color" />
                    </p>

                    <p>
                      <label for="attributes">Atributos: </label>
                      <input type="text" v-model="stone.attributes" />
                    </p>

                    <p>
                      <label for="healing">Sanación: </label>
                      <input type="text" v-model="stone.healing" />
                    </p>

                    <p>
                      <label for="position">Posición: </label>
                      <input type="text" v-model="stone.position" />
                    </p>
                  </div>

                  <div class="modal-footer">
                    <button type="submit" id="addButton">Actualizar</button>
                    <button
                      type="reset"
                      @toggle-off="resetForm"
                      id="cancelButton"
                    >
                      Borrar Formulario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.panelCatalogCards {
  background-color: #ebf1f4;
  margin: 1vw;
  width: 100%;
  /* border: 0.2vw solid black; */
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
.card {
  padding: 1vw;
  margin: 2vw;
  /* border: 0.2vw solid black; */
  background-color: white;
  text-align: justify;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.card__image-holder {
  width: 25%;
  margin-right: 5%;
}

.imgTitleColor {
  display: flex;
  width: 100%;
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
