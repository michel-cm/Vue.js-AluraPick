<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="Procure uma foto"
      v-model="filtro"
    />
    <ul v-if="fotos.length" class="lista-fotos">
      <li
        v-for="(foto, index) in fotosComFiltro"
        :key="index"
        class="lista-fotos-item"
      >
        <PainelView :titulo="foto.titulo">
          <ImagemResponsiva :url="foto.url" :titulo="foto.titulo" />
          <Botao
            tipo="button"
            rotulo="Remover"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
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
    ImagemResponsiva: () =>
      import("@/components/shared/imagem-responsiva/ImagemResponsiva.vue"),
    Botao: () => import("@/components/shared/botao/BotaoView.vue"),
  },
  data() {
    return {
      titulo: "Alura Pick",
      fotos: [],
      filtro: "",
    };
  },
  methods: {
    remove(foto) {
      alert("Remover foto " + foto.titulo);
    },
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
.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}

.centralizado {
  text-align: center;
}

.filtro {
  padding: 8px;
  width: 50%;
}
</style>
