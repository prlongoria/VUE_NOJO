<!-- Api Option: -->
<script>
// import apiStones from "../../../services/apiStones.js"; GUILLE
// import EditStone from "../UpdateComponents/EditStone.vue"; GUILLE
 
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
      //método read que en mi caso
      try {
        const response = await fetch("http://localhost:8080/api/v1/stone/");
        this.stones = await response.json();
      } catch (error) {
        console.error(error);
      }
    },

    // async getStones() {
    //   const data = await apiStones.getStones();

    //   const stonesData = data.data;

    //   this.stones = stonesData;
    // }, GUILLE

    deleteStone(id) {
      axios.delete("http://localhost:8080/api/v1/stone/delete/" + id);
      if (confirm("¿Estás seguro de eliminar esta piedra?")) {
        // .then(alert("Has eliminado la piedra"))
        // .then(location.reload());
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

  // async putStone(stone) {
  //   // Método para actualizar un stone
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/api/v1/stone/update/${stone.id}`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(stone),
  //         headers: { "Content-type": "application/json; charset=UTF-8" },
  //       }
  //     );

  //     const stoneUpdated = await response.json();
  //     this.stones = this.stones.map((u) =>
  //       u.id === stone.id ? stoneUpdated : u
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },

  mounted() {
    this.getStones();
  },

  //components: detailComponent,

//components: { EditStone }, GUILLE

};
</script>

<template>
  <div class="panelCatalogCards">
    <div
      v-for="(stone, index) in stones"
      :key="index"
      :stone="stone"
      @submit.prevent="deleteStone"
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
        <button class="btn btn-danger ml-2" @click="showStone">Ver Más</button>
        <button class="btn btn-danger ml-2" @click="updateStone">📝</button>
        <button @click="deleteStone(stone.id)" class="btn btn-danger">
          🗑️
        </button>
        <div><EditStone :stone="stone" /></div>
        <!-- <RouterLink to="/detail">Ver Más</RouterLink> -->
        <!-- <RouterLink to="/update" class="textButton">📝</RouterLink> -->
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
