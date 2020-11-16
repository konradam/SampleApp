<template>
  <table style="width:100%">
    <tr>
      <th>Ref</th>
      <th>Name</th>
      <th>Type</th>
    </tr>
    <tr v-for="(item, key) in filteredItems" v-bind:key="key">
      <td>{{item.ref}}</td>
      <td>{{item.name}}</td>
      <td>{{item.type}}</td>
    </tr>
  </table> 
</template>

<script>
  export default {
    props: {
      filteredItems: {
        type: Array,
        required: true,
      },
    },
  }
</script>