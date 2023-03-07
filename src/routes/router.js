import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "@/components/home/HomeView";
import CadastroView from "@/components/cadastro/CadastroView";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/cadastro",
    component: CadastroView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
