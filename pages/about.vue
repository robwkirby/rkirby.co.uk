<template>
    <div>
      <nuxt-child/>
    </div>
</template>

<script>
import anime from 'animejs';

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {

      if (this.$store.state.fromRoute == "index") {
        anime.set(el, {
          translateX: "100%",
        });
      } else {
        anime.set(el, {
          translateX: "-100%",
        });
      }

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
        translateX: "-25%"
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

      if (this.$store.state.toRoute == "contact") {
        tl.add({
          targets: el,
          translateX: "-100%"
        })
      } else {
        tl.add({
          targets: el,
          translateX: "100%"
        })
      }


    }
  }
}
</script>


<style>

</style>
