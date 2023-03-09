<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cadastro">Cadastro</router-link></li>
      </ul>
    </nav>

    <Transition name="pagina">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
export default {};
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
