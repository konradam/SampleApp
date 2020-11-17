<template>
  <div class="home__wrapper">
    <RouterLink :to="{ name: 'header'}">
      <button class="home__button">
        Header
      </button>
    </RouterLink>
    <RouterLink :to="{ name: 'grid'}">
      <button class="home__button">
        Grid
      </button>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  .home__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;  
    padding: 150px;
  }

  .home__button {
    border-radius: 5px;
    padding: 20px 30px;
    background-color: cornflowerblue;
    color: white;
    margin: 30px;
  }
</style>