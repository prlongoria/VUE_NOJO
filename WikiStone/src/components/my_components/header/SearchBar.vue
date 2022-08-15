<script>
export default {};
</script>

<template>
  <div class="searchBar">
    <input
      class="form-control form-text"
      maxlength="128"
      type="text"
      placeholder="🔎 Busca tu piedra"
      name="search"
      onkeyup="autocompletado()"
    />
  </div>
</template>

<style lang="css" scoped>
input {
  /* height: 6vw; 
        background-color: white;
        margin-bottom: 2vh;
        border: 2px solid black;
        border-radius: 15px; */

  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  border: solid 1px #ccc;
  /* padding: 9px 18px; */
  /* width: 200px; */
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  border-radius: 15px;
}
.searchBar {
  margin-left: 1vw;
}
</style>
