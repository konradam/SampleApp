<template>
  <div id="app">
    <Header />
    <Grid />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Grid from './components/Grid.vue';

export default {
  name: 'App',
  components: {
    Header,
    Grid,
  },
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';
</style>