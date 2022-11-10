<!-- Debo poner funcionalidad a la searchBar -->

<script>
import SearchBarVue from "./SearchBar.vue";

export default {
  components: { SearchBarVue },
};
</script>

<template>
  <header>
    <figcaption>
      <img class="logo" src="@/images/logo-wikipiedra.jpg" />
    </figcaption>
    <div class="title">
      <h1 id="WikiTitle">WIKIPIEDRA</h1>
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
  /* color: #be2cc5; */
  color: black;
  /* text-decoration: none; */
  font-size: 1.5vw;
  margin-top: 0vw;
  
}
header > figcaption {
  width: 25vw;
  padding: calc(1vw + 1vh);

  max-width: 1290px;
  min-width: 80px;
}
.logo {
  border-radius: 55%;
  width: 90%;
  margin: auto;
}

#WikiTitle {
  font-family: "Jacques Francois";
  /* color: #be2cc5; */
  color: black;
  font-size: 5vw;
}
header {
  width: 100%;
  min-width: 200px;
  /* background: #94e7ff;  */
  background:linear-gradient(whitesmoke, #be2cc5, white);
  /* background: white; */
  /* border-bottom: #be2cc5 0.15vw solid; */
  /* border-bottom: black 0.15vw solid; */
  /* position: sticky; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.menuNav {
  padding: 3vw;
  margin-left: 2vw;
}
#buttonContacto {
  background-color: transparent;
  border: none;
}
</style>
