<template>
  <section class="container">
    <div class="row">
      <div class="col-12 col-xl-12 offset-xl-0">
        <Heading class="site-page__title">My CV</Heading>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-12 offset-xl-0">
        <CV v-bind="cvdata"/>
      </div>
    </div>
  </section>
</template>

<script>
import cvdata from '~/data/cv.js';

import Heading from '~/components/Heading.vue';
import CV from '~/components/cv.vue';

export default {
  data() {
    return {
      cvdata
    }
  },
  components: {
    Heading,
    CV
  }
}
</script>
