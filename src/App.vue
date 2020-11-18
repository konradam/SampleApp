<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  body {
    background-color: #f5f5f5;
    color: #525252;
    min-height: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>