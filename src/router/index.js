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
    meta: { type: "planetView" },
  },
  {
    path: "/venus",
    name: "Venus",
    component: () =>
      import(/* webpackChunkName: "Venus" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/earth",
    name: "Earth",
    component: () =>
      import(/* webpackChunkName: "Earth" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/mars",
    name: "Mars",
    component: () =>
      import(/* webpackChunkName: "Mars" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/jupiter",
    name: "Jupiter",
    component: () =>
      import(/* webpackChunkName: "Jupiter" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/saturn",
    name: "Saturn",
    component: () =>
      import(/* webpackChunkName: "Saturn" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/uranus",
    name: "Uranus",
    component: () =>
      import(/* webpackChunkName: "Uranus" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: () =>
      import(/* webpackChunkName: "Neptune" */ "../views/HomeView.vue"),
    meta: { type: "planetView" },
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
