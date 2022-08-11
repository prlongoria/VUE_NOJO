import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import DetailView from "../views/DetailView.vue"
import CreateView from "../views/CreateView.vue"
import UpdateView from "../views/UpdateVIew.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/DetailView",
      name: "DetailView",
      component: DetailView
    },
    {
      path: "/CreateView",
      name: "CreateView",
      component: CreateView
    },
    {
      path: "/UpdateView",
      name: "UpdateView",
      component: UpdateView
    },
  ]
}) 

export default router
