<template>
  <div class="grid__wrapper">
    <div class="grid__header">
      <input v-model="searchText" placeholder="filter" class="grid__input" />
      <button class="grid__button" @click="goToNew"> 
        Create new
      </button>
    </div>
    <Table :filtered-items="pageItems" :desc="desc" @change-order="desc = !desc" />
    <div class="grid__footer">
      <label>Items per page:</label>
      <select v-model="itemsPerPage" class="grid__select">
        <option v-for="number in numbers" :key="number">
          {{ number }}
        </option>
      </select>
      <Pagination :items-per-page="itemsPerPage" :length="length" />
    </div>
  </div>
</template>

<script>
  import Pagination from '../elements/grid/Pagination.vue';
  import Table from '../elements/grid/Table.vue';
  import { mapState } from 'vuex';
  import _ from 'lodash';

  const predefinedNumbers = [ 5, 10, 15, 20 ];

  export default {
    data() {
      return {
        itemsPerPage: 5,
        searchText: null,
        desc: false,
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
      filteredItems() {
        return _.filter(this.sortedItems, (item) => {
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
      },
      numbers() {
        return predefinedNumbers;
      },
      sortedItems() {
        return _.orderBy(this.items, [item => item.name.toLowerCase()], [ this.desc ? 'desc' : 'asc']);
      },
    },
    methods: {
      goToNew() {
        this.$router.push({ name: 'grid_new_item' });
      },
    },
  };
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
    background-color: #91bfff;;
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 8px 15px;

    &:hover {
      background-color: #83afeb;
    }
  }

  .grid__footer {
    display: flex;
    margin: 20px 0;
    justify-content: flex-end;
    align-items: baseline;
  }

  .grid__select {
    border: 1px solid #007bff;
    border-radius: 5px;
    padding: 10px 5px;
    margin: 0 20px;
  }
</style>