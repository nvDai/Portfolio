<template>
  <div class="project-card">
    <div
      class="wrapper"
      :style="{ backgroundImage: 'url(' + require('../../assets/images/'+ project.imgName + '.png') + ')' }"
    >
      <div class="data">
        <div class="content">
          <span class="author">{{project.author}}</span>
          <h1 class="title">
            <a :href="project.projectUrl" target="_blank">
              {{project.title}}
            </a>
          </h1>
          <p class="text"><strong>Description: </strong>{{project.description}}</p>
          <p class="text"><strong>Technologies: </strong>{{project.technologies}}</p>
          <p class="text"><strong>Date: </strong>{{project.date}}</p>
          <a :href="project.projectUrl"  target="_blank" class="button">
            Visit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/css-variables";

  // Variables
  $regal-blue: #034378;
  $san-juan: #2d4e68;
  $bermuda: #77d7b9;
  $white: #fff;
  $black: #000;
  // clear-fix mixin
  @mixin cf {
    &::before,
    &::after {
      content: '';
      display: table;
    }
    &::after {
      clear: both;
    }
  }

  h1 {
    font-weight: 300;
  }

  .project-card {
    float: left;
    padding: 0 1.7rem;
    width: 50%;
    .wrapper {
      min-height: 540px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
      background: center no-repeat;
      &:hover {
        .data {
          transform: translateY(0);
        }
      }
    }

    .data {
      color: $color-white;
      background-color: rgba(0, 0, 0, 0.7);
      transform: translateY(calc(162px + 4em));
      position: absolute;
      bottom: 0;
      width: 100%;
      transition: transform 0.3s;

      .content {
        padding: 1em;
        position: relative;
        z-index: 1;
      }
    }

    .author {
      font-size: 1rem;
    }

    .title {
      margin-top: 6px;
      font-size: 36px;
      a {
        color: $color-white;
      }
    }

    .text {
      line-height: 24px;
      margin-top: 6px;
    }

    .button {
      display: block;
      border: 1px solid $color-white;
      padding: 6px 12px;
      width: 100px;
      margin: 2em auto 1em;
      text-align: center;
      font-size: 18px;
      color: $color-white;
      line-height: 1;
      position: relative;
      font-weight: 700;

      &::after {
        content: '\2192';
        opacity: 0;
        font-weight: 400;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }

      &:hover {
        &::after {
          transform: translate(5px, -50%);
          opacity: 1;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>

  @media only screen and (max-device-width: 768px) {
    .project-card {
      float: none;
      padding: 0;
      width: 100%;
      .wrapper {
        min-height: 540px;
      }
      .data {
        transform: translateY(calc(0px));
      }

      .button {
        margin: 1rem auto 0;
      }
    }

  }
</style>
