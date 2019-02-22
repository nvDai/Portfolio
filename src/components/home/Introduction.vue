<template>
  <div class="intro-container">
    <p class="name">I'm Micheal</p>

    <div class="intro">
      <p>Front-end Developer</p>
      <br/>
      <p>UI/UX Designer</p>
    </div>

    <div class="more">
      <a
        href="https://drive.google.com/file/d/1f1C5fuIpM4q-FUOOWqyBx24qDShUClI1/view?usp=sharing"
        target="_blank"
      >
        <button class="btn">
          Download resume
          <i class="fal fa-cloud-download"></i>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/css-variables";

  .intro-container {
    text-align: center;
  }

  .name {
    display: inline-block;
    padding: 6px 12px;
    font-size: 2.7rem;
    letter-spacing: 2px;
    margin-bottom: 24px;
    color: $color-white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .intro {
    font-size: 3.3rem;
    color: $color-white;

    p {
      background-color: rgba(0, 0, 0, 0.5);
      display: inline-block;
      margin-bottom: 12px;
      padding: 6px 12px;
      letter-spacing: 2px;
    }
  }

  .btn {
    font-size: 1.2rem;
    font-weight: 600;
    border: 2px solid $color-white;
    padding: 12px 24px;
    background-color: transparent !important;
    color: $color-white !important;
    text-transform: uppercase;
    min-width: 160px;
    height: 54px;
    letter-spacing: 1px;
    transition: all 0.3s;
    outline: transparent;

    a {
      display: inline-block;
    }

    &:hover {
      cursor: pointer;
      background-color: $color-white;
      color: $color-black;
    }

    &:active {
      cursor: pointer;
      background-color: transparent;
      color: $color-white;
    }
  }
</style>

<style lang="scss" scoped>
  @import "../../assets/styles/css-variables";
  @media only screen and (max-width: 768px) {
    .intro-container {
      text-align: center;
    }

    .name {
      font-size: 1.2rem;
      margin-bottom: 6px;
    }

    .intro {
      font-size: 1.5rem;
      color: $color-white;
      margin-bottom: 6px;

      p {
        margin-bottom: 6px;
        padding: 3px 6px;
      }
    }

    .btn {
      font-size: 0.9rem;
      padding: 12px;
      height: 42px;
      background-color: transparent !important;
      color: $color-white !important;
    }
  }
</style>
