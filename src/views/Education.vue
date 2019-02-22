<template>
  <section class="education">
    <div class="box-title">
      <strong>#</strong>
      <h1>Education</h1>
    </div>

    <div>
      <div class="edu-box">

        <div class="edu-duration">
          <p>9/2015</p> -
          <p>1/2020</p>
        </div>
        <div class="edu-circle"></div>

        <div class="edu-info">
          <h2>Engineer's degree</h2>
          <h3>Post and Telecommunication Institute Technology</h3>
          <p><span>Major: </span>Electronics and Telecommunication</p>
          <p><span>GPA: </span>3.2</p>
        </div>
      </div>

      <div class="edu-box">
        <div class="edu-duration">
          <p>2/2018</p>
          -
          <p>6/2018</p>
        </div>
        <div class="edu-circle"></div>
        <div class="edu-info">
          <h2>Full-stack Web Development course</h2>
          <h3>Techkids school</h3>
          <p><span>Major: </span>Full-stack Web Development</p>
          <p><span>Award: </span>First rank of final hackathon</p>
        </div>
      </div>

      <div class="edu-box">
        <div class="edu-duration">
          <p>1/2018</p>
        </div>
        <div class="edu-circle"></div>
        <div class="edu-info">
          <h2>TOEIC Certificate</h2>
          <p><span>Score: </span>770</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { TimelineLite, Back, Elastic, Expo } from 'gsap'

  export default {
    name: 'Education',
    mounted () {
      const { bubble } = this.$refs
      const timeline = new TimelineLite()

      // timeline
      //   .to(bubble, 0.4, {
      //     rotation: 300,
      //     // scale: 1.1,
      //     ease: Back.easeOut.config(0),
      //   })
      //   .delay(1)
      //   .to(bubble, 0.8, {
      //     // rotation: 360,
      //     scale: 1.1,
      //     // ease: Back.easeOut.config(1.2),
      //   })
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .education {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    margin: 0 auto;
    display: block;
  }

  .edu-box {
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    padding: 12px;
    background-color: #f1f2f7;
    position: relative;
    margin: 120px auto 120px;
    width: 90%;
  }

  .edu-box:hover .edu-duration {
    transform: scale(1.1, 1.1);
  }

  .edu-duration {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: $color-blue;
    color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: -60px;
    margin: 0 auto;
    transition: all 300ms ease-in-out;
  }

  .edu-circle {
    width: 120px;
    height: 120px;
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: -70px;
    margin: 0 auto;
  }

  .edu-info {
    text-align: center;
    padding-top: 48px;

    h2 {
      line-height: 36px;
    }

    h3 {
      line-height: 30px;
    }

    p {
      line-height: 24px;
    }
  }

</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {

    .edu-box {
      width: 100%;
    }
  }




</style>
