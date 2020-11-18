<template>
  <div class="header__wrapper">
    <div class="header__primary">
      <div class="header__subheader">
        <div class="header__logo">
          <img src="../../assets/world-cup.png" class="header__image" />
        </div>
        <div class="header__title">
          WORLD CUP
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
  };
</script>

<style lang="scss" scoped>
  .header__wrapper {
    display: flex;

    @media only screen and (max-width:767px) {
      flex-direction: column;
    }
  }

  .header__primary {
    flex: 2;
  }

  .header__secondary {
    background-color: #dadee0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--align {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 20px;
    }
  }

  .header__subheader {
    background-color: #85a0c7;
    display: flex;
  }

  .header__logo {
    flex: 1;
    justify-content: center;
    display: flex;
  }

  .header__image {
    height: 80px;
  }

  .header__title {
    align-self: center;
    flex: 8;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
  }

  .header__background-image {
    background: url(../../assets/cover-image.jpg) center center no-repeat;
    background-size: cover;
    opacity: 0.3;
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
    max-height: 60px;
    width: 100%;
  }

  .header__data {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin: 10px 0 0 10px;
  }
</style>