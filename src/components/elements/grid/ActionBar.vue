<template>
  <div class="action-bar__wrapper">
    <div class="action-bar__name">
      {{ formName }}
    </div>
    <div class="action-bar__buttons">
      <button class="action-bar__button action-bar__button--cancel" @click="$emit('cancel')">
        Cancel
      </button>
      <button class="action-bar__button action-bar__button--save" @click="$emit('save')">
        Save
      </button>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      formName: {
        type: String,
        required: true,
      },
    },
  };
</script>
  
<style lang="scss" scoped>
  .action-bar__wrapper {
    border: 1px solid #7d7c7c;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  
  .action-bar__name {
    align-self: center;
    color: #575757;
    font-size: large;
  }
  
  .action-bar__button {
    border: none;
    cursor: pointer;
    padding: 6px 20px;
    margin: 0 10px;
  
    &--save {
      background-color: #83afeb;
      border-radius: 5px;
      color: #fff;

      &:hover {
        background-color: #609df0;
      }
    }
  
    &--cancel {
      background-color: transparent;
      color: #83afeb;

      &:hover {
        color: #609df0;
      }
    }
  }
</style>