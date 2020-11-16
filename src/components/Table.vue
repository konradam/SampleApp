<template>
  <table style="width:100%">
    <tr>
      <th>Ref</th>
      <th @click="order">Name</th>
      <th>Type</th>
    </tr>
    <tr v-for="(item, key) in filteredItems" v-bind:key="key">
      <td>{{item.ref}}</td>
      <td>{{item.name}}</td>
      <td>{{item.type}}</td>
    </tr>
  </table> 
</template>

<script>
  export default {
    data() {
      return {
        desc: false,
      }
    },
    props: {
      filteredItems: {
        type: Array,
        required: true,
      },
    },
    methods: {
      order() {
        this.$store.commit('order', this.desc);
        this.desc = !this.desc;
      }, 
    },
  }
</script>