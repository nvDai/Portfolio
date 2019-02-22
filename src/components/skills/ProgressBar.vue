<template>
  <div>
    <h3>{{label}}</h3>
    <div class="progress-line">
      <div :title="percent + '%'" ref="percentBox">
        <span ref="percentRef">{{percent}}</span>%
      </div>
      <p :style="{width: lineWidth + '%'}" style="transition: all 1.5s ease;"></p>
    </div>
  </div>

</template>

<script>
  import {TimelineLite} from 'gsap';

  export default {
    name: 'ProgressBar',
    props: {
      label: String,
      percent: Number,
    },
    data() {
      return {
        isScrollActive: false,
        lineWidth: 0,
        percentNumber: 0
      }
    },
    methods: {
      handleScroll() {
        const {percentBox} = this.$refs;
        const timeline = new TimelineLite();
        const PAGE_WIDTH = 80 / 100;
        const TIMELINE_WIDTH = 90 / 100;
        const SCROLL_BAR_WIDTH = 16;

        if (window.innerWidth > 768) {
          if (window.scrollY >= window.innerHeight + 1700) {
            this.lineWidth = this.percent;
            // TweenLite.to(percentRef, 1.45, {percentNumber: this.percent});
            timeline.to(percentBox, 1.45, {x: window.innerWidth * PAGE_WIDTH * (this.percent / 100) * TIMELINE_WIDTH - SCROLL_BAR_WIDTH});
          }
        } else {
          if (window.scrollY >= window.innerHeight + 1700) {
            this.lineWidth = this.percent;
            // TweenLite.to(percentRef, 1.45, {percentNumber: this.percent});
            timeline.to(percentBox, 1.45, {x: window.innerWidth * (this.percent / 100) * TIMELINE_WIDTH});
          }
        }

        if (window.scrollY === 0) {
          this.lineWidth = 0;
          timeline.to(percentBox, 0, {x: 0});
        }
      },
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {
      console.log(window.innerWidth);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/css-variables";

  h3 {
    margin-bottom: 24px;
  }

  .progress-line {
    position: relative;
    height: 3px;
    background-color: $color-gray;

    div {
      position: absolute;
      top: -21px;
      background-color: $color-background;
      width: 42px;
      height: 42px;
      font-size: 1rem;
      text-align: center;
      line-height: 42px;
    }

    p {
      height: 3px;
      background-color: $color-black;
    }
  }

</style>
