<script>
export default {};
</script>
<template>
  <div id="sidebar">
    <h1>Home Page</h1>
    <nav>
      <RouterLink to="/create">CreateView</RouterLink>
      <br />
      <RouterLink to="/detail">DetailView</RouterLink>
      <br />
      <RouterLink to="/update">UpdateView</RouterLink>
    </nav>
    <div class="sidebar-header">
      <span>UserName</span>
    </div>
    <div class="sidebar-nav">
      <router-link to="/" class="nav-button text">Home</router-link>
    </div>
    <!-- <div @click="toggleModal" class="sidebar-footer text">
      <span>Cart</span>
      <Modal v-model="showCartModal" :title="'Cart'">
        <p>{{ handledTotal }}</p>
      </Modal>
    </div> -->
  </div>
</template>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  width: 12vw;
  font-size: 2vw;
  background-color: var(--primary-color);
  margin: 1vw;
}
.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vw;
  /* font-size: 1rem; */
  /* letter-spacing: 1.1rem; */
  text-transform: uppercase;
  /* color: whitesmoke; */
  /* border-bottom: 2px solid white; */
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sidebar-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vw;
  cursor: pointer;
  /* color: whitesmoke; */
  /* border-top: 2px solid white; */
}
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: 2em;*/
  padding: 1rem;
  /* font-size: 1rem; */
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  /* background-color: var(--primary-color); */
  /*border-radius: 15px;*/
  text-align: center;
  text-decoration: none;
}
.nav-button:hover {
  color: var(--secondary-color);
  /* background-color: var(--elements-color); */
  /*border-radius: 15px;*/
}
.text {
  /* letter-spacing: 1.1rem; */
  text-transform: uppercase;
  color: var(--secondary-color);
}
</style>
