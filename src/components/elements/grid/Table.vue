<template>
  <table class="table table-hover">
    <tr>
      <th class="table__ref">Ref</th>
      <th @click="changeOrder" class="table__name">
        Name
        <BIconArrowUp v-if="desc" />
        <BIconArrowDown v-else />
      </th>
      <th>Type</th>
      <th></th>
    </tr>
    <RowTemplate
      v-for="(item, key) in filteredItems" 
      v-bind:key="key" 
      :item="item"
      class="table__row" />
  </table> 
</template>

<script>
  import RowTemplate from './RowTemplate.vue';
  import { BIconArrowUp, BIconArrowDown } from 'bootstrap-vue';

  export default {
    components: {
      RowTemplate,
      BIconArrowUp,
      BIconArrowDown,
    },
    props: {
      filteredItems: {
        type: Array,
        required: true,
      },
      desc: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      changeOrder() {
        this.$emit('change-order');
      }, 
    },
  };
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
</style>