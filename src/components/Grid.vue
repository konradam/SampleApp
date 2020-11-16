<template>
  <div class="grid__wrapper">
    <div class="grid__header">
      <input v-model="searchText" placeholder="filter" class="grid__input" />
      <button class="grid__button">Create new</button>
    </div>
    <Table :filtered-items="pageItems" />
    <div class="grid__footer">
      <label>Items per page:</label>
      <input type="number" v-model="numberItems" class="grid__input" />
      <Pagination :items-per-page="itemsPerPage" :length="length" />
    </div>
  </div>
</template>

<script>
  import Pagination from './Pagination.vue';
  import Table from './Table.vue';
  import { mapState } from 'vuex';
  import _ from 'lodash';

  export default {
    data() {
      return {
        numberItems: 5,
        searchText: null,
      }
    },
    components: {
      Pagination,
      Table,
    },
    computed: {
      ...mapState({
        items: state => state.items,
        page: state => state.page,
      }),
      itemsPerPage() {
        if (_.isNil(this.numberItems) || this.numberItems <= 0 || this.numberItems >= 30){
          return 10;
        }

        return this.numberItems;
      },
      filteredItems() {
        return _.filter(this.items, (item) => {
        const search = _.toLower(this.searchText);

        return _.toLower(item.name).includes(search) 
          || _.toLower(item.type).includes(search)
          || _.toLower(item.ref).includes(search);
        });
      },
      pageItems() {
        return this.filteredItems.slice((this.page - 1) * this.itemsPerPage, this.page * this.itemsPerPage);
      },
      length() {
        return _.size(this.filteredItems);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .grid__wrapper {
    padding: 20px;
  }

  .grid__header {
    display: flex;
    margin: 20px 0;
    justify-content: flex-end;
    align-items: center;
  }

  .grid__input {
    margin: 0 20px;
    border-radius: 5px;
    padding: 6px;
  }

  .grid__button {
    border-radius: 5px;
    padding: 6px 15px;
    background-color: cornflowerblue;
    color: white;
  }

  .grid__footer {
    display: flex;
    margin: 20px 0;
    justify-content: flex-end;
    align-items: baseline;
  }
</style>