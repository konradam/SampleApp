<template>
  <div class="edit-item__wrapper">
    <ActionBar form-name="Edit new item" @save="updateItem" @cancel="goBack" />
    <ItemForm />
  </div>
</template>
  
<script>
  import _ from 'lodash';
  import ActionBar from '../../elements/grid/ActionBar.vue';
  import ItemForm from '../../elements/grid/ItemForm.vue';
  import { mapState } from 'vuex';

  export default {
    components: {
      ActionBar,
      ItemForm,
    },
    computed: {
      ...mapState({
        items: state => state.items,
      }),
      currentItem() {
        return _.find(this.items, { id: this.$route.params.id });
      },
    },
    created() {
      this.$store.commit('clearForm');
      if (!this.currentItem || !this.currentItem.id) {
        this.$router.push({ name: 'grid_new_item' } );
      } else {
        this.$store.commit('initForm', this.currentItem);
      }
    },
    methods: {
      updateItem() {
        this.$store.dispatch('updateItem', this.currentItem.id);
        this.goBack();
      },
      goBack() {
        this.$router.push({ name: 'grid' });
      },
    },
  };
  </script>