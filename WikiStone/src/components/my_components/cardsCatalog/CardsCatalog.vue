<!-- Api Option: -->
<script>
// import apiStones from "../../../services/apiStones.js"; GUILLE
// import EditStone from "../UpdateComponents/EditStone.vue"; GUILLE
import DetailComponent from "../DetailComponents/detailComponent.vue";
import axios from "axios";
export default {
  name: "CardsCatalog",
  data() {
    return {
      stones: [],
      // stone: {
      //   id: "",
      //   name: "",
      //   color: "",
      //   attributes: "",
      //   position: "",
      //   healing: "",
      //   image: "",
      // },
    };
  },

  methods: {
    async getStones() {
      //método read que en mi caso
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

    // async showStones(id) {
    //   //método show
    //   try {
    //     const response = await fetch(
    //       `http://localhost:8080/api/v1/stone/show/${stone.id}`,
    //       {
    //         method: "SHOW",
    //       }
    //     );
    //     this.stones = await response.json();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    async updateStone(stone) {
      // Método para actualizar un stone
      try {
        await fetch("http://127.0.0.1:8080/api/v1/stone/update/" + stone.id, {
          method: "PUT",
          body: JSON.stringify(stone),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        //     const stoneUpdated = await response.json();
        //     this.stones = this.stones.map((u) =>
        //       u.id === stone.id ? stoneUpdated : u
        //     );
      } catch (error) {
        console.error(error);
      }
      location.reload();
    },
  },
  mounted() {
    this.getStones();
  },

  components: { DetailComponent },

  //components: { EditStone }, GUILLE
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
        <button class="btn btn-danger ml-2">Ver Más</button>
        <button class="btn btn-danger ml-2" @click="updateStone">📝</button>
        <button @click="deleteStone(stone.id)" class="btn btn-danger">
          🗑️
        </button>
        <!-- <div><EditStone :stone="stone" /></div> -->
        <!-- <RouterLink to="/detail">Ver Más</RouterLink> -->
        <!-- <RouterLink to="/update" class="textButton">📝</RouterLink> -->

        <!-- Button trigger modal SHOW-->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                  <button type="submit" id="addButton">Añadir</button>
                  <button
                    type="reset"
                    @toggle-off="resetForm"
                    id="cancelButton"
                  >
                    Cancelar
                  </button>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Button trigger modal UPDATE-->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          :data-bs-target="'#updateModal' + stone.id"
        >
          Launch demo modal
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
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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

                  <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->

                  <div class="modal-footer">
                    <button type="submit" id="addButton">Actualizar</button>
                    <button
                      type="reset"
                      @toggle-off="resetForm"
                      id="cancelButton"
                    >
                      Cancelar
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
</style>
