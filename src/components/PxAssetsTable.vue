<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filterCoin"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="a in filteredAssets"
        :key="a.id"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td>
          <b>#{{ a.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
            ><!-- De esta manera hacemos la navegacion mas dinamica de manera que cuando el usuario haga click en el nombre de la cripto esto desencadena un llamado al componente de coin-detail y obtenemos el parametro que necesitamos que es el id de la moneda para pasarselo al coin-detail -->
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500">
            {{ a.symbol }}
          </small>
        </td>
        <td>{{ a.priceUsd | dollar }}</td>
        <!-- Para agregar los filtros se debe colocar en la variable que se quiere filtrar un pipe | seguido del nombre del filtro a utilizar -->
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          :class="a.changePercent24Hr < 0 ? 'text-red-600' : 'text-green-600'"
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button @custom-click="goToCoin(a.id)">
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "@/components/PxButton";

export default {
  name: "PxAssetsTable",

  components: { PxButton },

  data() {
    return {
      filterCoin: "",
      sortOrder: 1,
    };
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;

      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filterCoin.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filterCoin.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },

  props: {
    assets: {
      type: Array,
      default: () => [], //Al momento de devolver un array o un objeto en el valor default tenemos es que colocarlo como una funcion que devuelve el array o el objeto, solamente aplica para array y objetos
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } }); //Este metodo de la instancia de vue-router nos permite hacer la navegacion a travez e codigo
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
