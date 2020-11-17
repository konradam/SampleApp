<template>
  <div class="display-number__wrapper">
    <span>{{ label }}</span>
    <div class="display-number__number">
      {{ number }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      number: {
        type: Number,
        required: true,
        default: 0,
      },
      label: {
        type: String,
        required: true,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .display-number__wrapper {
    background: gray;
    border: 1px solid blue;
    font-size: small;
    padding: 2px;
  }

  .display-number__number {
    padding: 20px 30px;
    font-size: x-large;
  }
</style>