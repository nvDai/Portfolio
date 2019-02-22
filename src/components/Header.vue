<template>
  <header class="header" :class="{'dark-background': darkBgColorVisible}">
    <nav class="wrapper">
      <div class="logo">
        <a
          href="#Home"
          v-scroll-to="{
           el: '#Home',
           duration: 300,
           easing: 'linear'}"
          @click="handleOnClickNavBarItem('Home')"
        >
          <img src="./../assets/images/logo.png" class="m-logo" alt="MDEV Logo"/>
          <span>MDEV</span>
        </a>
      </div>

      <div class="slide-nav-bar">
        <i @click="handleOnOpenNavBar()" class="fal fa-align-justify"></i>
      </div>
      <transition name="slide-fade">
        <ul v-if="slideNavBarVisible" class="menu">
          <li>
            <a
              href="#Home"
              :class="{active: activeItem === 'Home'}"
              @click="handleOnClickNavBarItem('Home')"
              v-scroll-to="{
             el: '#Home',
             duration: 300,
             easing: 'linear'}"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Profile"
              :class="{active: activeItem === 'Profile'}"
              @click="handleOnClickNavBarItem('Profile')"
              v-scroll-to="{
             el: '#Profile',
             duration: 300,
             easing: 'linear'}"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              :class="{active: activeItem === 'Experience'}"
              @click="handleOnClickNavBarItem('Experience')"
              v-scroll-to="{
             el: '#Experience',
             duration: 300,
             easing: 'linear'}"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              :class="{active: activeItem === 'Skills'}"
              @click="handleOnClickNavBarItem('Skills')"
              v-scroll-to="{
             el: '#Skills',
             duration: 300,
             easing: 'linear'}"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              :class="{active: activeItem === 'Projects'}"
              @click="handleOnClickNavBarItem('Projects')"
              v-scroll-to="{
             el: '#Projects',
             duration: 300,
             easing: 'linear'}"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Education"
              :class="{active: activeItem === 'Education'}"
              @click="handleOnClickNavBarItem('Education')"
              v-scroll-to="{
             el: '#Education',
             duration: 300,
             easing: 'linear'}"
            >
              Education
            </a>
          </li>
        </ul>
      </transition>

    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeItem: 'Home',
        darkBgColorVisible: false,
        slideNavBarVisible: false
      }
    },
    methods: {
      handleScroll() {
        this.darkBgColorVisible = window.scrollY > 10;
        if (window.innerWidth <= 768) {
          this.slideNavBarVisible = false;

          if (window.scrollY < 300) {
            this.activeItem = 'Home'
          } else if (window.scrollY >= 390 && window.scrollY < 1450 && this.activeItem !== 'Profile') {
            this.activeItem = 'Profile'
          } else if (window.scrollY >= 1450 && window.scrollY < 2700 && this.activeItem !== 'Experience') {
            this.activeItem = 'Experience'
          } else if (window.scrollY >= 2700 && window.scrollY < 3550 && this.activeItem !== 'Skills') {
            this.activeItem = 'Skills'
          } else if (window.scrollY >= 3550 && window.scrollY < 4800 && this.activeItem !== 'Projects') {
            this.activeItem = 'Projects'
          } else if (window.scrollY >= 4800 && this.activeItem !== 'Education') {
            this.activeItem = 'Education'
          }
        } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
          if (window.scrollY < 300) {
            this.activeItem = 'Home'
          } else if (window.scrollY >= 1300 && window.scrollY < 1890 && this.activeItem !== 'Profile') {
            this.activeItem = 'Profile'
          } else if (window.scrollY >= 1890 && window.scrollY < 3500 && this.activeItem !== 'Experience') {
            this.activeItem = 'Experience'
          } else if (window.scrollY >= 3500 && window.scrollY < 4300 && this.activeItem !== 'Skills') {
            this.activeItem = 'Skills'
          } else if (window.scrollY >= 4300 && window.scrollY < 5100 && this.activeItem !== 'Projects') {
            this.activeItem = 'Projects'
          } else if (window.scrollY >= 5100 && this.activeItem !== 'Education') {
            this.activeItem = 'Education'
          }
        } else {
          if (window.scrollY < 300) {
            this.activeItem = 'Home'
          } else if (window.scrollY >= 600 && window.scrollY < 1300 && this.activeItem !== 'Profile') {
            this.activeItem = 'Profile'
          } else if (window.scrollY >= 1300 && window.scrollY < 2880 && this.activeItem !== 'Experience') {
            this.activeItem = 'Experience'
          } else if (window.scrollY >= 2880 && window.scrollY < 3720 && this.activeItem !== 'Skills') {
            this.activeItem = 'Skills'
          } else if (window.scrollY >= 3720 && window.scrollY < 4500 && this.activeItem !== 'Projects') {
            this.activeItem = 'Projects'
          } else if (window.scrollY >= 4500 && this.activeItem !== 'Education') {
            this.activeItem = 'Education'
          }
        }
      },

      handleOnOpenNavBar() {
        if (window.innerWidth <= 768 && this.activeItem === 'Home') {
            this.darkBgColorVisible = true;
        }
        this.slideNavBarVisible = !this.slideNavBarVisible;
      },


      handleOnClickNavBarItem(item) {
        if (window.innerWidth <= 768) {
          this.activeItem = item;
          this.slideNavBarVisible = false;
        }
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {
      this.slideNavBarVisible = window.innerWidth > 768;
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables.scss";

  .header {
    height: 80px;
    transition: 0.5s all;
    background: none;
    /*background-color: rgba(0, 0, 0, 0.5);*/
  }

  .dark-background {
    height: 72px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);

    .logo {
      line-height: 72px;
      font-size: 2rem;
    }
  }

  .wrapper {
    position: relative;
    width: $page-with;
    height: 100%;
    margin: 0 auto;
    vertical-align: middle;
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .m-logo {
    display: none;
  }

  .logo {
    line-height: 80px;
    transition: 0.5s all;
    font-size: 2.3rem;
    font-weight: 700;
    color: $color-white;
  }

  .menu {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(6, 1fr);

    li {
      color: $color-white;
      line-height: 72px;
      text-transform: uppercase;
      text-align: center;
      transition: all 3s ease-in-out;

      a {
        display: inline-block;
        height: 100%;
        position: relative;

        &::before {
          content: '';
          background-color: $color-white;
          width: 0;
          height: 2px;
          position: absolute;
          z-index: 100;
          transition: 200ms all;
          top: 50px;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }

      .active {
        &::before {
          width: 100%;
        }
      }
    }
  }

  .slide-nav-bar {
    display: none;
  }
</style>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables.scss";

  @media only screen and (max-device-width: 768px) {
    .wrapper {
      width: 100% !important;
    }
    .logo {
      span {
        display: none;
      }

      img {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-top: 16px;
        margin-left: 12px;
      }
    }

    .menu {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      width: 250px;
      right: 0;
      top: 72px;
    }

    .slide-nav-bar {
      display: inline-block;
      color: $color-white;
      margin-top: 16px;
      text-align: right;

      i {
        display: inline-block;
        font-size: 40px;
        margin-right: 18px;
      }
    }

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }

  }

  @media only screen and (device-width: 1024px) {
    .wrapper {
      grid-template-columns: 30% 70%;
    }
  }
</style>
