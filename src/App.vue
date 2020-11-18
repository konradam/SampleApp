<template>
  <v-app id="app">
    <RouterView />
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>