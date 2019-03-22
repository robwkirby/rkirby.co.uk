<template>
  <div class="site-container" :class="containerClass">   
    <SiteHeader/>

    <main class="site-page" :class="`site-page--${this.$route.name}`">
      <nuxt/>
    </main>

    <SocialLinks/>

    <div class="site-container__graphic"></div>
  </div>
</template>

<script>
import anime from 'animejs';

import VanillaTilt from 'vanilla-tilt';
import SiteHeader from '~/components/SiteHeader.vue';
import SocialLinks from '~/components/SocialLinks.vue';


export default {
  components: {
    SiteHeader,
    SocialLinks
  },
  watch: {
    $route (to, from){

      // this.$store.commit('toggleColourScheme')
      this.$store.commit('setFromRoute', from)
      this.$store.commit('setToRoute', to)
    },
  },
  computed: {
    containerClass: function () {
      return `site-container--${this.$route.name} 
              site-container--${this.$store.state.colourScheme}`
    }
  }
}
</script>

<style lang="scss">
  html {
    font-family: 'Lato';
    font-size: 62.5%;
    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      ::-moz-selection { /* Code for Firefox */
          color:   #f1f1f1;
          background: $primary;
      }
    
      ::selection {
          color:  #f1f1f1;
          background: $primary;
      }
    }
  }

  body {
      background-repeat: no-repeat;
      background-position: top right;
      background-size: contain;
      margin: 0;

  }

  .site-container {
    min-height: 100vh;
    background: #f1f1f1;
    color: #212121;
    transition: background-color .3s ease-out;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    &--dark {
      background-color: #212121;
      color: #FFF;
    }

    &__graphic {
      position: fixed;
      top: 0;
      left: 50%;
      height: 100%;
      width: 120%; 
      z-index: 0;
      opacity: 0.05;
      background: #000;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
      // animation-name: logoSlide;
      // animation-duration: 12s;
      // animation-iteration-count: infinite;
    }

    &--about {
      .site-container__graphic {
        // transform: translateX(-25%);
      }
    }
    &--contact {
      .site-container__graphic {
        // transform: translateX(-50%);
      }
    }
    
    .site-SiteHeader, .container {
      // position: relative;
      z-index: 2;
    }
  }

    @keyframes logoSlide {
    0% {
      transform: translateX(0%);
    }

    50% {
      transform: translateX(-25%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  .site-page {
    position: absolute;
    width: 100%;
    z-index: 1;
    &__title {
      padding-top: 20px;
    }
  }

  @media (min-width: 1024px) {
     .site-page {
        &__title {
          padding-top: 120px;
        }
      }
  }

</style>
