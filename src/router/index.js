import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];
// import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
