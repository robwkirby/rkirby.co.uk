<template>
  <div class="container">
    <div class="intro">
      <div class="row align-items-center">
        <div class="intro__col">
          <Heading class="intro__title">Rob Kirby</Heading>
          <p class="intro__text">
            Hi, I'm a Front End Developer with six years commercial experience. I'm based in Lancaster, England, and currently work at <a href="https://www.soapmedia.co.uk/">Soap Media</a>.
          </p>
          <div class="row">
            <div class="col btn-col">
              <nuxt-link class="btn" to="/about">View my CV</nuxt-link>
            </div>
            <div class="col btn-col">
              <nuxt-link class="btn btn--outline" to="/contact">Get in touch</nuxt-link>
            </div>
          </div>
        </div>
        <div class="intro__col">
          <Terminal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue';
import Terminal from '~/components/Terminal.vue';
import Heading from '~/components/Heading.vue';
import anime from 'animejs';

export default {
  name: "test",
  data() {
    return {
      terminalReady: false,
    } 
  },
  components: {
    SocialLinks,
    Terminal,
    Heading
  },
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {

      anime.set(el, {
        translateX: "-100%",
      });
      
      var tl = anime.timeline({
        duration: 1000,
        easing: 'easeOutExpo',
        complete: function() {
          done()
        }
      });

      tl
      .add({
        targets: '.site-container__graphic',
        translateX: "0%"
      })
      .add({
        targets: el,
        translateX: "0%",
      }, "-=900")
    },
    leave (el, done) {  

      var tl = anime.timeline({
        duration: 500,
        easing: 'easeInExpo',
        complete: function() {
          done()
        }
      });

      tl
      .add({
        targets: el,
        translateX: "-100%",
      })
    }
  }
}
</script>
<style lang="scss">

.intro {
  > .row {
    min-height: 90vh;
  }
  &__col {
    @include make-col-ready();
    @include make-col(12);
    
    &:last-child {
      text-align: center;
    }

    .btn-col {
      width: 100%;
      flex: 0 0 100%;
      margin-bottom: 20px;
    }
  }
  &__title {
    margin: 60px 0 0;
  }
  &__text {
    font-size: 2.4rem;
    line-height: 3.8rem;
    margin: 40px 0px 50px;
  }
  &__logo {
    max-width: 375px;
  }
}

@media (min-width: 1024px) {
  .intro {
    &__col {
      @include make-col(6);
      min-height: 300px;
      .col {
        max-width: 280px;
      }
      .btn-col {
        max-width: 290px;
        margin-bottom: 0;
      }
    } 
  }
}

@media (min-width: 1600px) {
  .intro {
    &__title {
      margin-top: 30px;
    }
    &__text {
      font-size: 3.2rem;
      line-height: 4.5rem;
    }
  }
}


</style>
