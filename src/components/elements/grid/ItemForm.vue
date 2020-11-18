<template>
  <form class="item-form__wrapper">
    <div class="item-form__attribute">
      <v-text-field
        v-model="name"
        label="Name"
        hide-details="auto"
      />
    </div>

    <div class="item-form__attribute">
      <v-select v-model="type" :items="types" label="Type" dense hide-details="auto" />
    </div>

    <div class="item-form__attribute">
      <v-text-field
        v-model="ref"
        label="Reference number"
        hide-details="auto"
        type="number"
      />
    </div>
    
    <div class="item-form__attribute">
      <v-select
        v-model="parentEvents"
        :items="events"
        label="Parent Events"
        multiple
        hint="Choose if applicable"
        dense
    ></v-select>
    </div>
  </form>
</template>
  
<script>
  import { createHelpers } from 'vuex-map-fields';
  
  const { mapFields } = createHelpers({
    getterType: 'getField',
    mutationType: 'updateField',
  });
  
  const predefinedTypes = [
    'First Operation Type',
    'Second Operation Type',
    'Third Non-operation Type',
    'Fourth Operation Type',
    'Fifth Non-operation Type',
  ];
  const predefinedEvents = [
    'Last Event',
    'Before Last Event',
    'Not Last Non Event',
    'Original Parent Event',
    'Not Parent Event',
  ];
  
  export default {
    computed: {
      ...mapFields([
        'form.name',
        'form.type',
        'form.ref',
        'form.parentEvents',
      ]),
      types() {
        return predefinedTypes;
      },
      events() {
        return predefinedEvents;
      },
    },
  };
</script>
  
<style lang="scss" scoped>
  .item-form__wrapper {
    border: 1px solid #7d7c7c;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 10px;
  }
  
  .item-form__attribute {
    padding-bottom: 40px;
    width: 30%;
  }

</style>