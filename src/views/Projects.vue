<template>
  <section class="projects">
    <div class="box-title">
      <strong>#</strong>
      <h1>Projects</h1>
    </div>

    <div class="projects-container">
      <div class="row">
        <ProjectCard
          :project="projects[0]"
        />
        <ProjectCard
          :project="projects[1]"
          class="margin-top-18"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import ProjectCard from '../components/projects/ProjectCard'

  export default {
    name: 'Projects',
    components: {
      ProjectCard
    },
    data () {
      return {
        projects: [
          {
            author: 'Micheal vs DK2T Team',
            title: 'Pomodoro Timer',
            projectUrl: 'https://tkpomodorotimer.herokuapp.com/',
            description: 'This is the app that helps user study more effective with 25 minutes method',
            technologies: 'HTML, CSS, Bootstrap, Jquery, Nodejs',
            date: '23/5/2018',
            imgName: 'pomodoro',
          },
          {
            author: 'Micheal',
            title: 'Score Keeper',
            projectUrl: 'https://score-keeper-2018.herokuapp.com/',
            description: 'This is the app that helps player keep their scores when playing a 4-player game',
            technologies: 'HTML, CSS, Bootstrap, Reactjs, Nodejs',
            date: '4/2018',
            imgName: 'score-keeper',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  .projects {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    margin: 0 auto;
    display: block;
  }


  .row {
    max-width: 910px;
    margin: 60px auto 0;
  }
</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables";

  @media only screen and (max-device-width: 768px) {
    .row {
      display: flex;
      flex-direction: column;
    }

    .margin-top-18 {
      margin-top: 18px;
    }
  }
</style>
