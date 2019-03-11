<template>
    <section class="work-list">
        <div class="row justify-content-start">
            <slot></slot>
        </div>
    </section>
</template>

<script>
import Workitem from '~/components/work/Workitem';
import { TweenMax, Back } from 'gsap';
export default {
    name: 'WorkList',
    components: {
        Workitem
    },
    props: {
        posts: {
            type: Array,
            required: true
        },
        workTransition: {
            type: Boolean,
            required: true
        }
    },
    mounted() {

        TweenMax.set('.work-item__col', {
            alpha: "0",
            y: "100"
        })

        TweenMax.staggerTo('.work-item__col', 0.5, {
            alpha: "1",
            y: "0",
            ease: Back.easeOut.config(1),
            onCompleteScope: this,
            onComplete: function() {
                TweenMax.set('.work-item__col',{clearProps:"all"});
            }
        }, 0.1)

    }
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
      flex: 0 0 100%;
      max-width: 100%;
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

  @media (min-width: 768px) {
    .work-item {
      &__col {
        flex: 0 0 20%;
        max-width: 20%;
      }
    }
  }
</style>
