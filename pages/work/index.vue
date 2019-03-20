<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Heading class="site-page__title">Work</Heading>
        </div>
      </div>
      <WorkList :posts="posts" :workTransition="workTransition">
         <div class="work-item__col" v-for="post of posts" :key="post.index" >
            <nuxt-link :to="`/work/${post.permalink}`" class="work-item"> 
              <img :src="post.image" alt="">
              <strong class="work-item__title">{{ post.title }}</strong>
            </nuxt-link>
          </div>
      </WorkList>
    </div>
</template>

<script>
import Heading from '~/components/Heading.vue';
import WorkList from '@/components/work/WorkList';
import { TimelineMax, TweenMax, Back } from 'gsap';

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    
    this.posts = process.env.latestWork.map(x => {
      let data = require(`~/content/${x}.md`);
      data.permalink = x;
      return data;
    });

  },
  components: {
    Heading,
    WorkList,
  },
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      TweenMax.set(el, {
        alpha: "0"
      })
      TweenMax.to(el, 0.5, {
        alpha: "1",
        ease: Power4.easeOut,
        onCompleteScope: this,
        onComplete: function() {
          done()
          // this.$store.commit('toggleColourScheme')
        }
      })
    },
    leave (el, done) {  
      TweenMax.to(el, 0.5, {
        alpha: "0",
        ease: Power4.easeOut,
        onCompleteScope: this,
        onComplete: function() {
          done()
          // this.$store.commit('toggleColourScheme')
        }
      })
    }
  }
}
</script>