import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "views.navbar",
    component: () => import("../views/Navbar.vue"),
  },
  {
    path: "/",
    name: "views.home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/",
    name: "views.about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/fitur",
    name: "views.fitur",
    component: () => import("../views/Fitur.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
