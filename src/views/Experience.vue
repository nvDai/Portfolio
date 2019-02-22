<template>
  <section class="experience">
    <div class="box-title">
      <strong>#</strong>
      <h1>Experience</h1>
    </div>
    <div class="timeline">
      <div>
        <div class="badge_circle">12/2018</div>
        <div class="timeline_maker"></div>
        <transition name="slide-fade-to-right">
          <div class="experience-card" v-if="firstCardExperienceVisible">
            <h2>Front-end Developer</h2>
            <h3>HaluTech</h3>
            <ul>
              <li><strong>Project</strong>: HaluJobs</li>
              <li><strong>Project Description</strong>: A free mobile app delivering Lancaster University services,
                resources, and information - at your fingertips - whenever you want them, from wherever you are!
              </li>
              <li><strong>Team Size</strong>: 2</li>
              <li><strong>Responsibilities</strong>: Meeting with customers and teammates to get clear requirement.
                Develop the frameworks and modules of the system.
              </li>
              <li><strong>Accomplishments</strong>: Learned new Microsoft technologies and frameworks. Improved teamwork
                and communication skills.
              </li>
              <li><strong>Technologies</strong>: NuxtJS, Webpack
              </li>
            </ul>
          </div>
        </transition>
      </div>

      <div class="timeline-item">
        <div class="badge_circle">6/2018</div>
        <div class="timeline_maker"></div>
        <transition name="slide-fade-to-left">
          <div v-if="secondCardExperienceVisible" class="experience-card" style="right: 0">
            <h2>Front-end Developer</h2>
            <h3>TechKids</h3>
            <ul>
              <li><strong>Project</strong>: Pomodoro Timer</li>
              <li><strong>Project Description</strong>: A free mobile app delivering Lancaster University services,
                resources, and information - at your fingertips - whenever you want them, from wherever you are!
              </li>
              <li><strong>Team Size</strong>: 4</li>
              <li><strong>Responsibilities</strong>: Meeting with customers and teammates to get clear requirement.
                Develop the frameworks and modules of the system.
              </li>
              <li><strong>Accomplishments</strong>: Learned new Microsoft technologies and frameworks. Improved teamwork
                and communication skills.
              </li>
              <li><strong>Technologies</strong>: HTML, CSS, JS, Bootstrap 4
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Experience',
    data() {
      return {
        firstCardExperienceVisible: false,
        secondCardExperienceVisible: false
      }
    },
    methods: {
      handleScroll() {
        if (window.scrollY >= window.innerHeight + 367) {
          this.firstCardExperienceVisible = true;

          if (window.scrollY >= window.innerHeight + 850) {
            this.secondCardExperienceVisible = true;
          }
        }

        if (window.scrollY === 0) {
          this.firstCardExperienceVisible = false;
          this.secondCardExperienceVisible = false;
        }
      },
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .experience {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    margin: 0 auto 60px;
    display: block;
  }

  .timeline {
    list-style: none;
    position: relative;
    height: 1300px;

    &::before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: " ";
      width: 2px;
      background-color: #4997cd;
      left: 50%;
      margin-left: -1.5px;
      margin-top: 100px;
    }
  }

  .badge_circle {
    background-color: $color-blue;
    color: $color-white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .timeline_maker {
    position: absolute;
    background-color: $color-yellow;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 0;
    right: 0;
    margin: 100px auto 0;
  }

  .experience-card {
    position: absolute;
    z-index: 1;
    top: 220px;
    border: 1px solid $color-border;
    border-radius: 2px;
    display: inline-block;
    width: 48%;
    padding: 12px;
    background-color: $color-background;

    h3 {
      border-bottom: 1px solid $color-black;
      line-height: 30px;
      margin-top: 6px;
      margin-bottom: 12px;
    }

    ul {
      padding-left: 18px;

      li {
        list-style-type: disc;
      }
    }
  }

  .timeline-item {
    position: absolute;
    top: 700px;
    left: 0;
    right: 0;
  }

  .slide-fade-to-right-enter-active {
    transition: all 1s ease-in-out;
  }

  .slide-fade-to-right-enter-to {
    opacity: 1;
  }

  .slide-fade-to-right-enter {
    transform: translateX(-100px);
    opacity: 0;
  }

  .slide-fade-to-left-enter-active {
    transition: all 1s ease-in-out;
  }

  .slide-fade-to-left-enter-to {
    opacity: 1;
  }

  .slide-fade-to-left-enter {
    transform: translateX(100px);
    opacity: 0;
  }
</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {
    .timeline {
      margin-top: 2rem;
      height: 100%;
      margin-bottom: 4.7rem;

      &::before {
        display: none;
      }
    }

    .badge_circle {
      position: absolute;
      z-index: 10;
      top: -50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      border: 5px solid $color-white;
      line-height: 90px;
    }

    .timeline-item {
      position: relative;
      top: 5rem;
    }

    .timeline_maker {
      display: none;
    }

    .experience-card {
      position: relative;
      top: 0;
      width: 100%;

      h2 {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 50px;
      }

      h3 {
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.5rem;
        margin-top: 0;
        margin-bottom: 12px;
      }

      ul {
        padding-left: 1rem;

        li {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }
      }
    }
  }


</style>
