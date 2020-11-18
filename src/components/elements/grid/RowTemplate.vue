<template>
  <tr 
    class="table__row"  
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <td>{{item.ref}}</td>
    <td class="table__body-name">{{item.name}}</td>
    <td>
      {{item.type}}
    </td>
    <td>
      <div v-show="hover" class="table__body-action">
        <BIconTrash @click="deleteItem" class="table__icon" />
        <BIconPencil  @click="editItem" class="table__icon" />
      </div>
    </td>
  </tr>
</template>

<script>
  import { BIconPencil, BIconTrash } from 'bootstrap-vue';

  export default {
    data() {
      return {
        hover: false,
      };
    },
    components: {
      BIconPencil,
      BIconTrash,
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editItem() {
        this.$router.push({ name: 'grid_edit_item', params: { id: this.item.id } });
      },
      deleteItem() {
        this.$store.dispatch('deleteItem', this.item.id);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .table__row {
    &:hover {
      background-color: #91bfff;
    }
  }

  .table__body-name {
    color: #5183c9;
  }

  .table__body-action {
    display: flex;
    justify-content: flex-end;
  }

  .table__icon {
    margin: 0 10px;

    &:hover {
      cursor: pointer;
    }
  }
</style>