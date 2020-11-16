<template>
  <table class="table table-hover">
    <tr>
      <th class="table__ref">Ref</th>
      <th @click="order" class="table__name">Name</th>
      <th>Type</th>
    </tr>
    <tr v-for="(item, key) in filteredItems" v-bind:key="key" class="table__row">
      <td>{{item.ref}}</td>
      <td class="table__body-name">{{item.name}}</td>
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

<style lang="scss" scoped>
  .table__ref {
    width: 10%;
  }

  .table__name {
    width: 20%;

    &:hover {
      cursor: pointer;
    }
  }

  .table__body-name {
    color: blue;
  }

  .table__row {
    &:hover {
      background-color: lightblue;
    }
  }
</style>