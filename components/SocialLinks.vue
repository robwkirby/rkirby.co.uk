<template>
  <ul class="social-list" v-bind:class="colourScheme">
      <li>
          <a class="social-list__item" href="https://www.linkedin.com/in/robwkirby/">
              <svg class="social-list__item-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
          </a>
      </li>
      <li>
          <a class="social-list__item" href="https://codepen.io/RobKirby/">
              <svg class="social-list__item-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.03-.03-.04-.03-.03-.02-.04-.03-.03-.02-.01-.01L8.38.12c-.23-.154-.53-.154-.76 0L.302 4.99.292 5l-.03.023-.04.032-.025.027-.034.037-.024.03-.03.04c-.01.01-.02.02-.02.03l-.03.04-.01.04c-.01.01-.01.03-.02.05l-.01.03c-.01.02-.01.04-.01.06v.03C0 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c0 .01.01.03.02.04l.02.03c.01.01.02.03.03.04l.02.03.03.03c.01.01.01.02.02.02l.04.03.03.02.01.01 7.31 4.88c.11.08.25.11.38.11s.26-.04.38-.12L15.68 11l.01-.01.03-.022.04-.03.03-.026.035-.037.024-.03.03-.04.02-.032.02-.046.01-.036.02-.05.01-.03.02-.05v-5c0-.03 0-.06-.01-.09l-.01-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59V5.18zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.21l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.99 2.407 1.61-5.387 3.59v-3.2zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z" fill-rule="nonzero"/></svg>
          </a>
      </li>
      <li>
          <a class="social-list__item" href="https://github.com/robwkirby">
              <svg class="social-list__item-icon" aria-labelledby="title" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>                                
          </a>
      </li>
      <!-- <li>
          <a class="social-list__item" href="mailto:hello@rkirby.co.uk">
              <svg class="social-list__item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
          </a>
      </li> -->
  </ul>
</template>

<script>
import anime from 'animejs';

export default {
  computed: {
    colourScheme: function () {
      return `social-list--${this.$store.state.colourScheme}`
    }
  },
  beforeMount() {
    anime.set('.social-list__item', {
      translateY: 150,
    });
  },
  mounted() {

    this.$nextTick(() => {
      // anime({
      //   targets: '.social-list__item',
      //   opacity: 1,
      //   translateY: 0,
      //   delay: anime.stagger(-200, {start: 1000, easing: 'easeOut'}),
      //   duration: 1500,
      // });
      anime({
        targets: '.social-list__item',
        opacity: 1,
        translateY: 0,
        delay: anime.stagger(200, {easing: 'easeOut'}),
        duration: 1500
      });
    });
  }
}
</script>

<style lang="scss">
  .social-list {
    display: none;
    position: fixed;
    bottom: 20px;
    left: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 9;
    &__item {
      opacity: 0;
      display: block;
      margin-bottom: 20px;
      transform: translateY(150px);
      &-icon {
        width: 26px;
        max-width: 26px;
        fill: #484848;
      }
      &:hover {
        .social-list__item-icon {
          fill: #111;
        }
      }
    }
    &--dark &__item-icon {
      fill: #FFF;
    }
  }

  @media (min-width: 1800px) {
    .social-list {
       display: block;
    }
  }
</style>
