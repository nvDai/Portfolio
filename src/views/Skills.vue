<template>
    <section class="skills">
      <div class="box-title">
        <strong>#</strong>
        <h1>Skills</h1>
      </div>

      <div class="skills-container">
        <ProgressBar
          label="HTML & CSS"
          :percent="70"
        />

        <ProgressBar
          label="JavaScript"
          :percent="50"
          class="mg-top-60"
        />

        <ProgressBar
          label="Reactjs"
          :percent="30"
          class="mg-top-60"
        />

        <ProgressBar
          label="Vuejs"
          :percent="50"
          class="mg-top-60"
        />

        <ProgressBar
          label="Photoshop"
          :percent="10"
          class="mg-top-60"
        />

        <ProgressBar
          label="Illustrator"
          :percent="20"
          class="mg-top-60"
        />
      </div>

    </section>
</template>

<script>
  import ProgressBar from '../components/skills/ProgressBar';
  export default {
    name: 'Skills',
    components: {
      ProgressBar
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .skills {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    margin: 0 auto;
    display: block;
  }

  .skills-container {
    width: 90%;
    margin: 60px auto 0;
  }


</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {

    .skills-container {
      width: 100%;
      margin: 60px auto 0;
    }
  }

</style>
