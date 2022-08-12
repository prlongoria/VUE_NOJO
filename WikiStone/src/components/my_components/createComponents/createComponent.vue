<!-- Esto sólo lo dejo aquí como encauzado para cuando tenga tiempo hacer el create y delete en vue3 para practicar, pero lo haré en JAVA que es lo que me piden -->
<!-- Tendría que rellenar el template con un v-for -->
<!-- Puedo eliminar este componente cuando quiera, ni siquiera lo he linkado con nada, sólo es como una hoja de apuntes -->
<script setup>


// export default {
//     data () {
//         return {
//             newStone: '',
//             stones:[
//                 {id: 'id', name: 'name', attributes: 'attributes', healing: 'healing', position: 'position', color: 'color'}
//             ]
//         }
//     },
//     methods: {
//         addNewStone() {
//             this.stones.push({id: 'id', name: 'name',attributes: 'attributes', healing: 'healing', position: 'position', color: 'color'})
//             this.newStone=''
//         }
//     },
    
// }
</script>

<template>
  <div>
    <h1 id="titleCreate">CREATE PAGE</h1>
    <img src="../../../images/agatas.jpg" alt="Añada Imagen de la piedra" id="createImage">
    <button type="button" id="homeButton"><RouterLink to="/" class="textButton">🏠</RouterLink></button>
</div>
<div class="createView">
    <p>
        Color: 
    </p>
    <p>
        Atributos: 
    </p>
    <p>
        Sanación:
    </p>
    <p>
        Posición:
    </p>
    <p>
        Chakras:
    </p>
    <p>
        Signo del Zodíaco:
    </p>

</div>
</template>


<style lang="css" scoped>
p {
    background-color: white;
    /* border: 0.25vw solid black; */
    height: auto;
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
        font-size: 10vw;
        margin-bottom: -15vw;
    }
     .createView{
        color: black;
        background-color: #EBF1F4;
        height: 100vh;
        overflow-y: auto;
        padding: 3vw;
        margin: 2vw;
        margin-bottom: 0vw;
        
        
        
}

</style>