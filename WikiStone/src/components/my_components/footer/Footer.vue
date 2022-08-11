<script>
export default {
  name: "footerView",
  data() {
    return {
      pages: {
        home: "Página de Inicio",
        DetailView: "Página detalle",
      },
    };
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<template>
  <footer class="footer">
    <h4 ref="h4"></h4>
    <button
      onclick="alert('La Biblia de los Cristales de Judy Hall');"
      id="footerButton"
    >
      Fuentes de Información
    </button>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  padding: 1vw;
  background-color: #8e4f5d;
  color: whitesmoke;
}
#footerButton {
  color: whitesmoke;
  background-color: #8e4f5d;
  border: none;
}
</style>
