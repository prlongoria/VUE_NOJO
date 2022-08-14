<script>
import SearchBarVue from "./SearchBar.vue";

export default {
  components: { SearchBarVue },
};
</script>

<template>
  <header class="header">
    <div class="headerImage">
      <img class="logo" src="@/images/logo_provisional.jpg" />
    </div>
    <div class="title">
      <h1 id="WikiTitle">WIKISTONE</h1>
    </div>

    <SearchBarVue></SearchBarVue>

    <div class="menuNav">
      <nav>
        <button
          onclick="alert('Teléfono 654951123, correo@mail.com');"
          id="buttonContacto"
        >
          Contacto
        </button>
        <br />
        <a href="https://www.cristalljoia.com/">Comprar Minerales</a>
      </nav>
    </div>
  </header>

  <router-view></router-view>
</template>

<style lang="css" scoped>
* {
  color: white;
  /* text-decoration: none; */
  font-size: 1.5vw;
  margin-top: 0vw;
}
.logo {
  width: 25vw;
  padding: 3vw;
}
#WikiTitle {
  font-family: "Jacques Francois";
  color: white;
  font-size: 5vw;
}
.header {
  width: 100%;
  /* overflow: hidden; */
  background: #ce918d;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menuNav {
  padding: 1vw;
}
#buttonContacto {
  background-color: transparent;
  border: none;
}
</style>
