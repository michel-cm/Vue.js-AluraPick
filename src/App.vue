<template>
  <div id="app">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul v-if="fotos.length" class="lista-fotos">
      <li v-for="(foto, index) in fotos" :key="index" class="lista-fotos-item">
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
    };
  },
  created() {
    fetch(`http://localhost:3000/v1/fotos`)
      .then((r) => r.json())
      .then((r) => {
        this.fotos = r;
      });
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
</style>
