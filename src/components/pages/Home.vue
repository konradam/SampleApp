<template>
  <div class="home__wrapper">
    <RouterLink :to="{ name: 'header'}">
      <button class="home__button">
        HEADER
      </button>
    </RouterLink>
    <RouterLink :to="{ name: 'grid'}">
      <button class="home__button">
        GRID
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
    background-color: #91bfff;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    padding: 70px 100px;
    margin: 30px;
    min-width: 300px;

    &:hover {
      background-color: #86b0eb;
      box-shadow: 0 30px 30px 0 rgba(27, 41, 56, 0.2);
    }
  }
</style>