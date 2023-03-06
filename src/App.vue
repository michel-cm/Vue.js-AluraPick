<template>
  <div id="app">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="Procure uma foto"
      v-model="filtro"
    />
    {{ filtro }}
    <ul v-if="fotos.length" class="lista-fotos">
      <li
        v-for="(foto, index) in fotosComFiltro"
        :key="index"
        class="lista-fotos-item"
      >
        <PainelView :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </PainelView>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    PainelView: () => import("@/components/shared/painel/PainelView.vue"),
  },
  data() {
    return {
      titulo: "Alura Pick",
      fotos: [],
      filtro: "",
    };
  },
  created() {
    fetch(`http://localhost:3000/v1/fotos`)
      .then((r) => r.json())
      .then((r) => {
        this.fotos = r;
      });
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
};
</script>

<style>
#app {
  width: 96%;
  margin: 0 auto;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}

.centralizado {
  text-align: center;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  padding: 8px;
  width: 50%;
}
</style>
