<template>
  <div id="app">
    <Header class="header"/>
    <Home id="Home"/>
    <section class="main-container">
      <div id="Profile" style="height: 4.7rem;"></div>
      <Profile/>
      <div id="Experience" style="height: 4.7rem;"></div>
      <Experience/>
      <div id="Skills" style="height: 4.7rem;"></div>
      <Skills/>
      <div id="Projects" style="height: 4.7rem;"></div>
      <Projects/>
      <div id="Education" style="height: 4.7rem;"></div>
      <Education/>
    </section>
    <Footer/>
  </div>

</template>

<script>
  import Header from './components/Header';
  import Home from './views/Home';
  import Profile from './views/Profile';
  import Experience from './views/Experience';
  import Skills from './views/Skills';
  import Education from './views/Education';
  import Projects from './views/Projects';
  import Footer from './components/Footer';

  export default {
    components: {
      Header,
      Home,
      Profile,
      Experience,
      Skills,
      Projects,
      Education,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "assets/font-awesome/all.css";
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:200,300,400,400i,500,500i,600,600i,700,700i&subset=vietnamese');
  @import "assets/styles/css-variables.scss";
  @import "assets/styles/quick-classes";

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    overflow-x: hidden;
    width: 100%;
  }

  ul li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: $color-white;
  }

  .main-container {
    width: $page-with;
    margin: 0px auto;
  }

  .slide-fade-enter-active {
    transition: all 3s ease;
  }

  .slide-fade-enter-to {
    opacity: 1;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }


</style>

<style>
  @media only screen and (max-device-width: 768px) {
    .main-container {
      width: 90%;
    }
  }

</style>
