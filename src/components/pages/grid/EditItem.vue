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

  export default {
    components: {
      ActionBar,
      ItemForm,
    },
    computed: {
      currentItem() {
        return _.find(this.items, { id: 1 }) //this.$route.params.id
      },
    },
    created() {
      if (!this.currentItem || !this.currentItem.id) {
        this.$router.push({ name: 'new' } );
      } else {
        this.$store.commit('initForm', { params: this.currentItem });
      }
    },
    methods: {
      updateItem() {
        this.$store.dispatch('updateItem');
      },
      goBack() {
        this.$router.push({name: 'grid'});
      },
    },
  };
  </script>