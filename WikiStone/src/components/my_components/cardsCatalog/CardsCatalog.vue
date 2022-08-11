<!-- composition api -->
<script setup>
   
    import { onBeforeMount } from 'vue';
    import { useStonesStore } from '../../../stores/StonesStore';
    const stonesStore = useStonesStore();
    useStonesStore();
    onBeforeMount( () => {
        console.log ("FUNCIONA")
        //getStones
    })

    // const getStones = async () => {
    //     await stonesStore.fetchStones()
    // }
    
    
</script>

<template >
    <div class="panelCatalogCards"  >
        <!-- <div class="threeCards">  -->
            <div class="card" >
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/kuncita-1.jpg"  alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Nombre: {{name}}</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: {{color}}</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
            </div>

            <!-- <div class="card">
            <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/Cuarzo_rosa.jpg" alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Cuarzo Rosa</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: rosa</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
            </div> -->
            <!-- <div class="card">
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/Cuarzo_rosa.jpg" alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Cuarzo Rosa</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: rosa</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
            </div>  -->
        <!-- </div> -->
        <!-- <div class="threeCards">
            <div class="card">
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/Cuarzo_rosa.jpg" alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Cuarzo Rosa</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: rosa</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
                
            </div>

            <div class="card">
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/Cuarzo_rosa.jpg" alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Cuarzo Rosa</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: rosa</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
            </div>
            <div class="card">
                <div class="imgTitleColor">
                    <div class="card__image-holder">
                        <img class="card__image" src="../../../images/Cuarzo_rosa.jpg" alt="stone" />
                    </div>
                    <div id="titleColor">
                        <div class="card-title">
                            <h2>Cuarzo Rosa</h2>
                        </div>
                        <div class="card-color">
                            <h2>Color: rosa</h2>
                        </div>
                    </div>
                </div>
                <div class="card-attributes">
                    <h2>Attributes: Pellentesque eget scelerisque augue. Fusce vitae aliquam enim. Sed mollis sit amet turpis nec ultricies. Duis mattis tellus eget cursus pretium. Nulla fermentum diam diam, id accumsan quam bibendum nec. Duis mollis egestas leo, non sollicitudin dui sollicitudin a. In accumsan diam feugiat libero tincidunt, sed molestie massa volutpat. Curabitur ut mauris at leo tristique molestie vel ac diam. Integer feugiat ipsum vitae sem blandit, non tristique nunc facilisis. In scelerisque sit amet massa sit amet aliquam.</h2>
                </div>
            </div>
            
        </div>  -->
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
        height: 30vw;
        
        
        
    }
    #titleColor {
        text-align: right;
    }
    .card__image-holder {
        width: 12vw;
    }
    .threeCards {
        height: 25vw;
    }
    .imgTitleColor {
        display: flex;
        justify-content: space-around;
    }

</style>