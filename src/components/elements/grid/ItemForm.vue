<template>
  <form class="item-form__wrapper">
    <div class="item-form__attribute">
      <label class="item-form__label">
        Name
      </label>
      <input v-model="name" class="item-form__input" />
    </div>
    
    <div class="item-form__attribute">
      <label class="item-form__label">
        Type
      </label>
      <select v-model="type" class="item-form__select">
        <option v-for="type in types" :key="type">
          {{ type }}
        </option>
      </select>
    </div>
    
    <div class="item-form__attribute">
      <label class="item-form__label">
        Reference number
      </label>
      <input v-model="ref" type="number" required class="item-form__input" />
    </div>
    
    <div class="item-form__attribute">
      <label class="item-form__label">
        Parent Events
      </label>
      <select v-model="parentEvents" multiple class="item-form__select">
        <option v-for="event in events" :key="event">
          {{ event }}
        </option>
      </select>
    </div>
  </form>
</template>
  
<script>
  import { mapState } from 'vuex';
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
  ]
  
  export default {
    computed: {
      ...mapFields([
        'form.name',
        'form.type',
        'form.ref',
        'form.parentEvents',
      ]),
      ...mapState({
        items: state => state.items,
        form: state => state.form,
      }),
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
    background-color: #f0f0f0;
    border-color: #7d7c7c;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 10px;
  }
  
  .item-form__attribute {
    padding-bottom: 20px;
    width: 30%;
  }
  
  .item-form__label {
    color: #575757;
    font-size: small;
    padding-bottom: 5px;
  }
  
  .item-form__input,
  .item-form__select {
    border: none;
    border-radius: 5px;
    padding: 10px 5px;
    width: 100%;
  }
</style>