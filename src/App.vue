<template>
  <main>
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
    <!-- Esta etiqueta router view es la que nos permite renderizar el router que manejara todas la rutas que usaremos -->
  </main>
</template>

<script>
//aca importamos los componentes que queremos utilizar
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: {
    //Aca instaciamos los componentes que previamente importamos para luego poder utilizarlos en la parte de templates
    PxHeader,
  },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
