<!-- Esto sólo lo dejo aquí como encauzado para cuando tenga tiempo hacer el create y delete en vue3 para practicar, pero lo haré en JAVA que es lo que me piden -->
<!-- Tendría que rellenar el template con un v-for -->
<!-- Puedo eliminar este componente cuando quiera, ni siquiera lo he linkado con nada, sólo es como una hoja de apuntes -->
<script>
export default {
    data () {
        return {
            newStone: '',
            stones:[
                {id: 'id', name: 'name', attributes: 'attributes', healing: 'healing', position: 'position', color: 'color'}
            ]
        }
    },
    methods: {
        addNewStone() {
            this.stones.push({id: 'id', name: 'name',attributes: 'attributes', healing: 'healing', position: 'position', color: 'color'})
            this.newStone=''
        }
    },
    
}
</script>

<template>
  
</template>


<style>

</style>