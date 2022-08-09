import { defineStore } from "pinia";
import  stones  from "./dataStoneFake.json";

export const useStonesStore = defineStore ({
    id:"StonesStore", options: {
    
        state: () =>{
            return {
                stones,
            }
        },
        actions: {
            addData(stoneobject) {
              
                this.stones.push(stoneobject) 
            }
          }
    }
})