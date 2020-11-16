<template>
  <Paginate 
    :page-count="pageCount"
    :page-range=3
    :click-handler="clickCallback"
    :container-class="'pagination'"
    :page-class="'page-item'" />
</template>

<script>
  import Paginate from 'vuejs-paginate';
  import _ from 'lodash';
  import { mapState } from 'vuex';

  export default {
    components: {
      Paginate,
    },
    props: {
      itemsPerPage: {
        required: true,
      },
      length: {
        required: true,
      }
    },
    computed: {
      ...mapState({
        items: state => state.items,
      }),
      pageCount() {
        return _.ceil(this.length / this.itemsPerPage); 
      },
    },
    methods: {
      clickCallback (pageNum) {
        this.$store.commit('setPage', pageNum);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
  }

  /deep/ .page-item {
    border: 1px solid green;
    background-color: red;
    margin: 10px;
  }
</style> 