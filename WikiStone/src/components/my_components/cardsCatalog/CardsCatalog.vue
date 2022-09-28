<!-- Api Option: -->
<script>
import detailComponent from "../detailComponents/detailComponent.vue";
import axios from "axios";
export default {
  name: "CardsCatalog",
  data() {
    return {
      stones: [],
    };
  },
  // created() {
  //   fetch("http://localhost:8080/api/v1/stone/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.stones = data;
  //     });
  // },


  methods: {
    async getStones() {
      //método read que en mi caso era created()
      try {
        const response = await fetch("http://localhost:8080/api/v1/stone/");
        this.stones = await response.json();
      } catch (error) {
        console.error(error);
      }
    },

    deleteStone(id) {
      axios
        .delete("http://localhost:8080/api/v1/stone/delete/" + id)
        .then(alert("Congrats"))
        .then(location.reload());
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

  // async postStone(stone) {
  //   // Método para crear un stone
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/v1/stone/create",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(stone),
  //         headers: { "Content-type": "application/json; charset=UTF-8" },
  //       }
  //     );

  //     const stoneCreated = await response.json();
  //     this.stones = [...this.stones, stoneCreated];
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
  // async deleteStone(stone) {
  //   // Método para borrar un stone
  //   try {
  //     await fetch(`http://localhost:8080/api/v1/stone/delete/${stone.id}`, {
  //       method: "DELETE",
  //     });

  //     this.stones = this.stones.filter((u) => u.id !== stone.id);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },

  mounted() {
    this.getStones();
  },

  components: detailComponent,
};
</script>

<template>
  <div class="panelCatalogCards">
    <div
      v-for="stone in stones"
      :key="stone.id"
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
            <h1 class="stoneName">{{ stone.name }}</h1>
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
        <!-- <RouterLink to="/detail">Ver Más</RouterLink> -->
        <RouterLink to="/update" class="textButton">📝</RouterLink>

        <button class="btn btn-danger ml-2" @click="showStone">Ver Más</button>

        <!-- <button type="delete" class="btn btn-danger ml-2">🗑️</button> -->
        
        <button @click="deleteStone(stone.id)" class="btn btn-danger">🗑️</button>
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
  /* height: 30vw; */
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
