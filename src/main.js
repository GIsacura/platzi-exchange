import Vue from "vue";
import App from "./App.vue";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import { Chart } from "chart.js";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners); // Con el Vue.use podemos agregar a nuestro proyecto componentes hechos por terceros
Vue.use(Chartick.use(Chart));

Vue.filter("dollar", dollarFilter); //Con este metodo nos permite registrar el filtro en la app para poder utilizarlo, el primer parametro es el nombre con el que llamaremos el filtro y el segundo es el filtro que se usara
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router, //Aca le decimos a Vue que use el router, de lo contrario dera error
  render: (h) => h(App),
}).$mount("#app");
