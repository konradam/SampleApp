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