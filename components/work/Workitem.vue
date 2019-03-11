<template>
 <div class="work-item__col">
    <nuxt-link :to="`/work${data.permalink}`" @click.native="clicker" class="work-item"> 
      <img src="http://via.placeholder.com/250x200" alt="">
      <strong class="work-item__title">{{ data.title }}</strong>
    </nuxt-link>
  </div>
</template>

<script>
import { TweenMax, Back } from 'gsap';
export default {
  name: 'Workitem',
  data() {
    return {
      weOut: false
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    workTransition: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    animate: function () {
      if (this.weOut) {
        // console.log("test");
      }
    },
    clicker: function (e) {
      e.preventDefault;
      const theCard = e.target.closest('.work-item');
      const url = theCard.getAttribute("href").toString();
      
        TweenMax.to(theCard, 0.3, {
          alpha: "1",
          y: "9",
          ease: Back.easeOut.config(1),
          onCompleteScope: this,
          onComplete: function() {
            this.$router.push(url);
          }
        })


    }
  },

}
</script>

<style lang="scss">
  .work-item {
    display: block;
    background-color: #FFF;
    min-height: 290px;
    margin-bottom: 30px;
    transition: all .3s ease-out;

    &__col {
      @include make-col-ready();
      flex: 0 0 20%;
      max-width: 20%;
    }
    
    img {
      object-fit: cover;
      width: 100%;
      max-width: 100%;
    }

    &__title {
      display: block;
      padding: 16px 20px;
      color: #212221;
      font-family: $font-primary;
      font-size: 24px;
      font-weight: 800;
    }

    &:hover {
      opacity: 0.7;
    }
  }
</style>
