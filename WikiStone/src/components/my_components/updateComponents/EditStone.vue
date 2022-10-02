<script>
import { apiStones } from "../../../services/apiStones.js";
//import axios from "axios";

export default {
  name: "EditStone",

  data() {
    return {
      form: {
        id: this.stone.id,
        image: this.stone.image,
        name: this.stone.name,
        color: this.stone.color,
        attributes: this.stone.attributes,
        healing: this.stone.healing,
        position: this.stone.position,
      },
      showModal: false,
    };
  },

  methods: {
    // function editStone (id) {
    // axios.put(`http://localhost:8080/api/v1/stone/update/${stone.id}`, this.form);
    // },

    async updateStone() {
      await apiStones.updateStone(this.form);

      alert(`${this.stone.name} ha sido actualizado`);
      location.reload();
    },
  },
};
</script>

<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="form-camp">
      <label for="image"><b>Imagen:</b></label>
      <input
        type="text"
        placeholder=""
        name="image"
        id="image"
        required
        v-model="form.image"
      />
    </div>
    <div class="form-camp">
      <label for="name"><b>Nombre:</b></label>
      <input
        type="text"
        placeholder=""
        name="name"
        id="name"
        required
        v-model="form.name"
      />
    </div>
    <div class="form-camp">
      <label for="color"><b>Color:</b></label>
      <input
        type="text"
        placeholder=""
        name="color"
        id="color"
        required
        v-model="form.color"
      />
    </div>
    <div class="form-camp">
      <label for="attributes"><b>Atributos:</b></label>
      <input
        type="text"
        placeholder=""
        name="attributes"
        id="attributes"
        required
        v-model="form.attributes"
      />
    </div>
    <div class="form-camp">
      <label for="healing"><b>Sanación:</b></label>
      <input
        type="text"
        placeholder=""
        name="healing"
        id="healing"
        required
        v-model="form.healing"
      />
    </div>
    <div class="form-camp">
      <label for="position"><b>Posición:</b></label>
      <input
        type="text"
        placeholder=""
        name="position"
        id="position"
        required
        v-model="form.position"
      />
    </div>
    <div class="modal-buttons">
      <button class="accept-button" v-on:click="updateStone">Aceptar</button>
      <button class="cancel-button" @click="showModal = false">Cancelar</button>
    </div>
  </div>
  <button id="editStone" @click="showModal = true">Editar</button>
</template>

<!-- <template>
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
