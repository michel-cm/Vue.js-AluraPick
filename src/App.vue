<template>
  <div id="app">
    <MenuView />
    <Transition name="pagina">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
export default {
  components: {
    MenuView: () => import("@/components/shared/menu/MenuView.vue"),
  },
};
</script>

<style>
#app {
  width: 96%;
  margin: 0 auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
</style>
