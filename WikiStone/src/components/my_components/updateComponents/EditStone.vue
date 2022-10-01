<!-- <script>
export default {
  data() {
    return {
      //   form: {
      image: "",
      name: "",
      color: "",
      attributes: "",
      healing: "",
      position: "",
      //},
    };
  },

  methods: {
    save() {
      this.$emit("save", {
        name: this.name,
        color: this.color,
        attributes: this.attributes,
        healing: this.healing,
        position: this.position,
        image: this.image,
      });
    },
  },

  cancel() {
    this.$emit("cancel");
  },
};
</script>

<template>
  <form @submit.prevent="editStone">
    <div class="createView">
      <p>
        <label for="image">Imagen: </label>
        <input name="image" type="text" v-model="form.image" />
      </p>

      <p>
        <label for="name">Nombre: </label>
        <input name="name" type="text" v-model="form.name" />
      </p>

      <p>
        <label for="color">Color: </label>
        <input name="color" type="text" v-model="form.color" />
      </p>

      <p>
        <label for="attributes">Atributos: </label>
        <input name="attributes" type="text" v-model="form.attributes" />
      </p>

      <p>
        <label for="healing">Sanación: </label>
        <input name="healing" type="text" v-model="form.healing" />
      </p>

      <p>
        <label for="position">Posición: </label>
        <input name="position" type="text" v-model="form.position" />
      </p>
    </div>
    <button type="submit" id="addButton">Añadir</button>
    <button type="reset" @toggle-off="resetForm" id="cancelButton">
      Cancelar
    </button>
  </form>
</template> -->
