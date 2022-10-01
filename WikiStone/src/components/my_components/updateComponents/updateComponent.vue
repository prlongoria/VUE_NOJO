<!-- <script>
import axios from "axios";

export default {
  name: "updateComponent",

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

  methods: { -->
    <!-- //  updateStone() {
    //   const url = "http://localhost:8080/api/v1/stone/update/{id}";

    //   const response =  axios.put(url + this.form);

    //   console.log(response);
    //   this.$router.push("/");
    // },

//     updateStone(id) {
//       return axios.put(
//         "http://localhost:8080/api/v1/stone/update + id" 
//       );
//     },


//   },
// };
// </script> -->

// <template>
//   <div class="imgTitleColor">
//     <div class="card__image-holder">
//       <img class="card__image" :src="stone.image" alt="stone" />
//     </div>
//     <div id="titleColor">
//       <div class="card-title">
//         <h1 class="stoneName">{{ stone.name }}</h1>
//       </div>
//       <div class="card-color">
//         <h2 id="colorStone">Color:</h2>
//         <p>{{ stone.color }}</p>
//       </div>
//     </div>
//   </div>
//   <div class="card-attributes">
//     <h2 id="stoneAttributes">Atributos:</h2>
//     <p>{{ stone.attributes }}</p>
//   </div>
//   <div class="enlaceDetalle">
//     <button @click="updateStone" class="btn btn-danger">ACTUALIZAR</button>
//   </div>

  // <!-- <div>
  //   <h1 id="titleUpdate">UPDATE PAGE</h1>
  //   <img
  //     src="../../../images/Cuarzo_rosa.jpg"
  //     alt="Imagen de la piedra"
  //     id="updateImage"
  //   />
  //   <button type="button" id="homeButton">
  //     <RouterLink to="/" class="textButton">🏠</RouterLink>
  //   </button>
  // </div>
  // <form
  //   action="`http://localhost:8080/api/v1/stone/update/${stone.id}`"
  //   method="put"
  // >
  //   <table class="updateView">
  //     <tbody>
  //       <tr v-for="stone in stones" :key="stone.id">
  //         <td v-if="editando === stone.id">
  //           <input type="text" class="form-control" v-model="stone.name" />
  //         </td>
  //         <td v-else>
  //           {{ stone.name }}
  //         </td>
  //         <td v-if="editando === stone.id">
  //           <input type="text" class="form-control" v-model="stone.color" />
  //         </td>
  //         <td v-else>
  //           {{ stone.color }}
  //         </td>

  //         <td v-if="editando === stone.id">
  //           <input
  //             type="text"
  //             class="form-control"
  //             v-model="stone.attributes"
  //           />
  //         </td>
  //         <td v-else>
  //           {{ stone.attributes }}
  //         </td>
  //         <td v-if="editando === stone.id">
  //           <input type="text" class="form-control" v-model="stone.healing" />
  //         </td>
  //         <td v-else>
  //           {{ stone.healing }}
  //         </td>
  //         <td v-if="editando === stone.id">
  //           <input type="text" class="form-control" v-model="stone.position" />
  //         </td>
  //         <td v-else>
  //           {{ stone.position }}
  //         </td>

  //         <td v-if="editando === stone.id">
  //           <button class="btn btn-success" @click="guardarStone(stone)">
  //             💾 Guardar
  //           </button>
  //           <button
  //             class="btn btn-secondary ml-2"
  //             @click="cancelEdicion(stone)"
  //           >
  //             ❌ Cancelar
  //           </button>
  //         </td>
  //         <td v-else>
  //           <button class="btn btn-info" @click="editStone(stone)">
  //             ✏️ Editar
  //           </button>
  //           <button
  //             class="btn btn-danger ml-2"
  //             @click="$emit('delete-stone', stone)"
  //           >
  //             🗑️ Eliminar
  //           </button>
  //         </td>
  //       </tr>
  //     </tbody> -->

//   <!-- <p>Nombre: </p>
//     <p>Color: Rosa</p>
//     <p>
//       Atributos: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim.
//       Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus
//       pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis
//       mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam
//       feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris
//       at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem
//       blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit
//       amet aliquam. Fusce sed nunc in sem molestie accumsan. Nunc vitae eros id
//       massa venenatis gravida.
//     </p>
//     <p>
//       Sanación:Pellentesque eget scelerisque augue. Fusce vitae aliquam enim.
//       Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus
//       pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis
//       mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam
//       feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris
//       at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem
//       blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit
//       amet aliquam.
//     </p>
//     <p>Posición:Pellentesque eget scelerisque augue.</p> -->
//   <!-- <p>Chakras:Pellentesque eget scelerisque augue.</p>
//     <p>Signo del Zodíaco:Pellentesque eget scelerisque augue.</p> -->
//   <!-- </table>
//   </form> -->
// </template>

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
