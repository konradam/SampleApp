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
      },
      label: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .display-number__wrapper {
    background: #adaaaa;
    border: 1px solid gray;
    font-size: small;
    padding: 2px;
    width: 100%;
  }

  .display-number__number {
    font-size: x-large;
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
</style>