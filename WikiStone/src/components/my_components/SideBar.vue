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
    <!-- <div class="sidebar-header">
      <span>UserName</span>
    </div>
    <div class="sidebar-nav">
      <router-link to="/" class="nav-button text">Home</router-link>
    </div> -->
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
h1 {
  font-size: 3vw;
}
/* .sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vw;
  
  text-transform: uppercase;
  
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
  
}
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 1rem;
  
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  
  text-align: center;
  text-decoration: none;
}
.nav-button:hover {
  color: var(--secondary-color);
  
}
.text {
  
  text-transform: uppercase;
  color: var(--secondary-color);
}  */
</style>
