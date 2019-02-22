<template>
  <footer class="footer">
    <div>
      <h2>MDEV</h2>
      <ul>

        <li class="github-icon">
          <a href="https://github.com/daihalu?tab=repositories" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>

        <li class="facebook-icon">
          <a href="https://www.facebook.com/nvdai2401" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>

        <li class="twitter-icon">
          <a href="https://twitter.com/micheal2401" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>

        </li>

        <li class="linked-in-icon">
          <a href="https://linkedin.com/in/nvdai2401" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>

      </ul>
      <div class="desc">
        Micheal <i class="fal fa-copyright" style="font-size: 16px"></i>
        2018 Copyright<span v-if="!isMobile"> | </span><br v-if="isMobile"/>Theme designed by Micheal
        <br/>
        All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        isMobile: false
      }
    },
    mounted() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/styles/css-variables.scss";

  .footer {
    background-color: $color-black;
    text-align: center;
    color: $color-white;
    padding: 36px;

    h2 {
      font-size: 2rem;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 12px auto;
      width: 150px;

      li {
        display: inline-block;
        border: 1px solid $color-white;
        width: 30px;
        height: 30px;
        border-radius: 2px;
        text-align: center;
        transition: 0.1s all;

        i {
          line-height: 30px;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .github-icon {
        &:hover {
          opacity: 0.7;
        }
      }

      .facebook-icon {
        &:hover {
          color: $color-white;
          background-color: #3b5998;
          border-color: #3b5998;
        }
      }

      .twitter-icon {
        &:hover {
          color: $color-white;
          background-color: #1da1f2;
          border-color: #1da1f2;
        }
      }

      .linked-in-icon {
        &:hover {
          color: $color-white;
          background-color: #0077b5;
          border-color: #0077b5;
        }
      }
    }

    .desc {
      line-height: 24px;
    }
  }
</style>
