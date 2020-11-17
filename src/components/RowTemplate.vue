<template>
  <tr 
    class="table__row"  
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <td>{{item.ref}}</td>
    <td class="table__body-name">{{item.name}}</td>
    <td class="table__body-type">
      {{item.type}}
      <div v-show="hover">
        <BIconTrash @click="deleteItem" class="table__icon" />
        <BIconPencil  @click="edit" class="table__icon" />
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
      edit() {
        console.log('edit');
      },
      deleteItem() {
        console.log('delete');
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table__body-name {
    color: blue;
  }

  .table__body-type {
    display: flex;
    justify-content: space-between;
  }

  .table__row {
    &:hover {
      background-color: lightblue;
    }
  }

  .table__icon {
    margin: 0 10px;

    &:hover {
      cursor: pointer;
    }
  }
</style>