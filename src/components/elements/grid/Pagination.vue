<template>
  <Paginate 
    :page-count="pageCount"
    :page-range=3
    :click-handler="clickCallback"
    container-class="pagination"
    page-class="page-item" 
    next-class="next"
    prev-class="prev" />
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
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
    align-items: center;
  }
  
  /deep/ .page-item {
    border: 1px solid #007bff;
    padding: 10px;
  }

  /deep/ .next {
    border: 1px solid #007bff;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 10px;
  }

  /deep/ .prev {
    border: 1px solid #007bff;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    padding: 10px;
  }
</style> 