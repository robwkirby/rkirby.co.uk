<template>
  <section class="container">
    <div class="row">
      <div class="col-12 col-xl-12 offset-xl-0">
        <h1 class="site-page__title">
          My CV
        </h1>
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

import CV from '~/components/cv.vue';

export default {
  data() {
    return {
      cvdata
    }
  },
  components: {
    CV
  }
}
</script>
