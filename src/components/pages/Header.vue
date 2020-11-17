<template>
  <div class="header__wrapper">
    <div class="header__primary">
      <div class="header__subheader">
        <div class="header__logo">
          <img src="../../assets/world-cup.png" class="header__image" />
        </div>
        <div class="header__title">
          World Cup
        </div>
      </div>
      <div class="header__background-image" />
    </div>
    <div class="header__secondary">
      <div class="header__secondary--align">
        <div class="header__countdown">
          <DisplayNumber :number="2" label="years" />
          <DisplayNumber :number="1" label="months" />
          <DisplayNumber :number="12" label="days" />
          <DisplayNumber :number="23" label="hours" />
        </div>
        <div class="header__data">
          <HeaderData text="Tournament dates" />
          <HeaderData text="Number of team" />
          <HeaderData text="Number of stadiums" />
          <HeaderData text="Current champion" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DisplayNumber from '../elements/header/DisplayNumber.vue';
  import HeaderData from '../elements/header/HeaderData.vue';

  export default {
    components: {
      DisplayNumber,
      HeaderData,
    },
  }
</script>

<style lang="scss" scoped>
  .header__wrapper {
    border: 1px blue solid;
    display: flex;

    @media (max-width:500px) {
      flex-direction: column;
    }
  }

  .header__primary{
    border-right: 1px solid blue;
    flex: 2;
    @media (max-width:500px) {
      border-right: none;
      border-bottom: 1px solid blue;
    }
  }

  .header__secondary {
    background: lightgray;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__subheader {
    background-color: #d1e1ed;
    border-bottom: 1px solid blue;
    display: flex;
    height: 80px;
  }

  .header__logo{
    border-right: 1px solid blue;
    flex: 1;
    justify-content: center;
    display: flex;
  }

  .header__image {
    height: 80px;
  }

  .header__title {
    flex: 8;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
  }

  .header__background-image {
    background: url(../../assets/FIFA-Logo.png) center center no-repeat;
    background-size: contain;
    background-color: #e3cfd2;
    opacity: 0.5;
    height: 130px;
  }

  .header__secondary--align {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  .header__countdown {
    display: flex;
    margin-top: 10px;
  }

  .header__data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 10px;
  }
</style>