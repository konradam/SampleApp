<template>
  <div class="new-item__wrapper">
    <ActionBar form-name="Add new item" @save="createItem" @cancel="goBack" />
    <ItemForm />
  </div>
</template>
  
<script>
  import _ from 'lodash';
  import { mapState } from 'vuex';
  import ActionBar from '../../elements/grid/ActionBar.vue';
  import ItemForm from '../../elements/grid/ItemForm.vue';
  
  export default {
    components: {
      ActionBar,
      ItemForm,
    },
    computed: {
      ...mapState({
        items: state => state.items,
      }),
    },
    created() {
      this.$store.commit('clearForm');
      this.$store.commit('initForm', { id: _.max(_.map(this.items, 'id')) + 1 } );
    },
    methods: {
      createItem() {
        this.$store.dispatch('createItem');
        this.goBack();
      },
      goBack() {
        this.$router.push({ name: 'grid' });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .new-item__wrapper {
    padding: 10px;
  }
</style>