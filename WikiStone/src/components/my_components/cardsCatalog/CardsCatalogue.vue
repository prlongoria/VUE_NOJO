<!-- api options: este cpte lo creé para probar con otro store ya que no me salía en CardsCatalog con stonesStore -->

<script>
import dataStoneFake from "../../../stores/dataStoneFake.json"
    export default {
        props: {
            name: String,
            color: String,
            attributes: String
        },
        data () {
            return {
                dataStoneFake: []
            }
        },
    }
</script>

<template v-for="(stone, key) in dataStoneFake" :key="key">
    <div class="panelCatalogCards">
            <div class="card" >
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/kuncita-1.jpg"  alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Nombre: {{ name }}</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: </h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: </h2>
                </div>
            </div>
     </div>       
</template>

<style lang="css" scoped>
    .panelCatalogCards {
        background-color: #EBF1F4;
        margin: 1vw;
        width: 82vw ;
        border: 0.2vw solid black;
        height: 100vh;
        overflow-y: auto;
        display: flex;
    }
    .card {
        padding: 1vw;
        margin: 0.5vw;
        border: 0.2vw solid black;
        background-color: white;
        text-align: justify;
        overflow-y: auto;
        height: 20vw;
        width: 30vw;
        
        
        
    }
    #titleColor {
        text-align: right;
    }
    .card__image-holder {
        width: 12vw;
    }
    /* .threeCards {
        height: 25vw;
    } */
    .imgTitleColor {
        display: flex;
        justify-content: space-around;
    }

</style>