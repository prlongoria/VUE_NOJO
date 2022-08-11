import { defineStore } from "pinia";
import dataStoneFake from "./dataStoneFake.json";
export const useStonesStore = defineStore("StonesStore", {
  state: () => {
    return {
      stones: dataStoneFake.stones,
    };
  },

  //ESTO LO DEJO PARA CUANDO HAGA EN JAVA MI API Y TENGA QUE CONSUMIRLA DESDE AQUÍ, BORRO  EL STATE DE ARRIBA Y ME QUEDO CON TODO LO QUE SIGUE A ESTA LÍNEA:
  // state: () => ({
  //     stones: []
  // }),
  // actions: {
  //     async fetchStones () {
  //         await fetch ('./dataStoneFake.json')
  //         .then (res => res.json())
  //         .then (data => {
  //             this.stones = data
  //         })
  //     }

  // }
});
