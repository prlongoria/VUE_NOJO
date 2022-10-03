<script setup>
import { RouterView } from "vue-router";
import Header from "./components/my_components/header/Header.vue"
import Footer from "./components/my_components/footer/Footer.vue"

</script>


<template>
  <Header></Header>
  
  <Footer></Footer>

  <!-- <RouterView />  -->
</template>

<style lang="css" >
:root {
  --primary-color:#849597;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-columns: 20% 80%;
}
/*RESET*/
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}
/* Natural flow and rhythm in stones by default */
article > * + * {
  margin-top: 1em;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* FIN RESET */
</style>
