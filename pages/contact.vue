<template>

  <section class="container">
    <section class="contact">
      <div class="row">
        <div class="col-12">
          <header class="contact-form__header">
             <Heading class="site-page__title">Get in touch</Heading>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="contact__form-wrapper">
            <p>Fill out this form if you'd like to get in touch and I’ll get back to you ASAP.</p>
            <ContactForm/>
          </div>
        </div>
        <div class="col-lg-4">
          <ul class="contact__links">
            <li class="contact__link contact__link--email">
              <span>Email</span>
              <a href="mailto:rob@rkirby.co.uk">rob@rkirby.co.uk</a>
            </li>
            <li class="contact__link">
              <span>Elsewhere</span>
              <a href="https://www.linkedin.com/in/robwkirby/">Linkedin</a>
              <a href="https://github.com/robwkirby">Github</a>
              <a href="https://codepen.io/RobKirby">Codepen</a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </section>

</template>

<script>
import anime from 'animejs';
import Heading from '~/components/Heading.vue';
import ContactForm from '~/components/forms/contact.vue';

export default {
  components: {
    Heading,
    ContactForm,
  },
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      anime.set(el, {
        translateX: "120%",
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
        translateX: "-50%",
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
        translateX: "120%",
      })
    }
  },
}
</script>

<style lang="scss">
  .contact {
    &__form-wrapper {
      background: #333333;
      color: #fff;
      padding: 44px;
      margin-bottom: 100px;
      p {
        font-size: 2.8rem;
        line-height: 3.8rem;
        margin-top: 0;
        margin-bottom: 44px;
      }
    }

    &__links {
      background-color: #FFF;
      font-weight: bold;
      list-style: none;
      padding: 44px;
      margin: 0;
      span {
        display: block;
        margin-bottom: 12px;
        font-size: 1.6rem;
      }
      a {
        font-size: 2.4rem;
        display: block;
        margin-right: 24px;
      }
    }
      &__link {
        &--email {
          margin-bottom: 50px;
        }
      }
  }

  @media (min-width: 1024px) {
    .contact {
      &__links {
        a {
          display: inline-block;
          
        }
      }
    }
  }
</style>
