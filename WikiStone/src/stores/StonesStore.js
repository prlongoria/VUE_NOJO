import { defineStore } from "pinia";
import  dataStoneFake  from "./dataStoneFake.json";
export const useStonesStore = defineStore("StonesStore", {
    state: () => {
        return {
            dataStoneFake
        }
    }
})