import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router); //El metodo use de Vue nos permite agregar las funcionalidades y plugins de la libreria que le pasemos por parametro

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
  ],
});
