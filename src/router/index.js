import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 首页重定向
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/about.vue"),
  },
  {
    path: "/page",
    name: "page",
    component: () => import("../components/page.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
