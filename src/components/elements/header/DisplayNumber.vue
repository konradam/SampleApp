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
    background: #b1b9bd;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: small;
    margin: 2px;
    padding: 2px;
    width: 100%;

    &:hover {
      color: #1c1c1c;
    }
  }

  .display-number__number {
    font-size: large;
    width: 100%;
    padding: 0 20px;
    text-align: center;
  }
</style>