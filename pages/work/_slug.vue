<template>
<div class="container">
  
  <div class="row">
    <div class="col">
      <ul class="work-item__breadcrumb-list">
        <li class="work-item__breadcrumb-list-item">
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
        <li class="work-item__breadcrumb-list-item">
          <span>{{post.title}}</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="work-item__body">

        <h1>{{ post.title }}</h1>
        <div v-html="post.__content"> </div>

        <div class="work-item__body-buttons">
          <nuxt-link to="/work" class="btn btn--outline">Back to work</nuxt-link>

          <button v-if="isCodepen(post.link)" @click="test" class="btn">
            View
          </button>
          <a v-else :href="post.link" class="btn">
            View on Codepen
          </a>

        </div>
        
      </div>
    </div>
    <div class="col">
      <img class="work-item__image" :src="post.image"/>
      <span class="tester" v-if="isCodepen(post.link)" v-html="iframe"></span>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import breadcrumbs from '@/components/breadcrumbs';

export default {
  data() {
    return {
      workTransition: false,
      iframe: ""
    }
  },
  components: {
    breadcrumbs,
  },
  computed: {
    post () {
      return require(`~/content/${this.$route.params.slug}.md`)
    },
  },
  methods: {
    async test() {

      const theHeight = document.querySelector('.tester').clientHeight;

      axios({
          method: 'get',
          url: `http://codepen.io/api/oembed/?url=${this.post.link}&format=json&height=${theHeight}`,
          crossdomain: true
      })
      .then((response) => {
          const data = response.data;
          this.iframe = data.html;
      })
      .catch((response) => {
          //handle error
          console.log(response);
      });

            
    },
    isCodepen(link) {
      return link.includes("codepen");
    }
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

<style lang="scss" scoped>
  .tester {
    display: block;
    height: 80vh;
    iframe {
      height: 600px;
    }
  }
  .work-item {
    &__breadcrumb-list {
      margin: 0 0 40px;
      padding: 0;
      list-style: none;
      display: inline-block;
      &-item {
        font-family: "Gilroy";
        display: inline-block;
        font-weight: 500;
        &:after {
          content: "/";
          display: inline-block;
          margin: 0 10px;
          color: $primary;
        }
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
    &__body {
      h1 {
        margin-top: 0;
      }
      &-buttons {
        display: flex;
        .btn {
          display: inline;
          padding: 12px 20px;
          margin-right: 20px;
        }
      }
      
    }
    &__content {
      margin: 40px 0px;
    }
    &__image {
      width: 100%;
    }
  }
</style>
