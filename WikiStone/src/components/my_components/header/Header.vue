<script>
    import SearchBarVue from './SearchBar.vue'

export default {
    components: { SearchBarVue }
}
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
                <button onclick="alert('Teléfono 654951123, correo@mail.com');">Contacto</button>
                <br>
                <a href="https://www.cristalljoia.com/">Dónde Comprar Minerales</a>
            </nav>
        </div> 
         
    </header> 
    
    
    <router-view></router-view>

</template>

<style lang="css" scoped>
*{
  color: white;
  /* text-decoration: none; */
  font-size: 3vw;
  margin-top: 0vw;
}
.logo{
   width: 25vw;
   padding: 3vw;
}
#WikiTitle {
  font-family: 'Jacques Francois';
  color: white;
  font-size: 5vw;
}
.header {
  width:100%; 
  /* overflow: hidden; */
  background: #CE918D;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>