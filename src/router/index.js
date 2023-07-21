import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/mercury",
  },
  {
    path: "/mercury",
    name: "Mercury",
    component: () =>
      import(/* webpackChunkName: "Mercury" */ "../views/HomeView.vue"),
  },
  {
    path: "/venus",
    name: "Venus",
    component: () =>
      import(/* webpackChunkName: "Venus" */ "../views/HomeView.vue"),
  },
  {
    path: "/earth",
    name: "Earth",
    component: () =>
      import(/* webpackChunkName: "Earth" */ "../views/HomeView.vue"),
  },
  {
    path: "/mars",
    name: "Mars",
    component: () =>
      import(/* webpackChunkName: "Mars" */ "../views/HomeView.vue"),
  },
  {
    path: "/jupiter",
    name: "Jupiter",
    component: () =>
      import(/* webpackChunkName: "Jupiter" */ "../views/HomeView.vue"),
  },
  {
    path: "/saturn",
    name: "Saturn",
    component: () =>
      import(/* webpackChunkName: "Saturn" */ "../views/HomeView.vue"),
  },
  {
    path: "/uranus",
    name: "Uranus",
    component: () =>
      import(/* webpackChunkName: "Uranus" */ "../views/HomeView.vue"),
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: () =>
      import(/* webpackChunkName: "Neptune" */ "../views/HomeView.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = to.name;
  if (to.path === "/") next("/mercury");
  else next();
});

export default router;
