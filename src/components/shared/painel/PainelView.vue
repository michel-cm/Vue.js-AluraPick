<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="togleViewFoto">{{ titulo }}</h2>
    <Transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "PainelView",
  props: ["titulo"],
  data() {
    return {
      visivel: true,
    };
  },
  methods: {
    togleViewFoto() {
      this.visivel = !this.visivel;
    },
  },
};
</script>

<style>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.5s;
}
</style>
