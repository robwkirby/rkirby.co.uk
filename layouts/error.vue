<template>
    <section class="container">
        <section class="error-msg">
            <div class="row align-items-center">
                <div class="col-12">
                    <header class="error-msg__header">
                        <Heading class="error-msg__title">There’s nothing here...</Heading>
                    </header>
                    <p>The page you're looking for doesn't exist. Maybe it's been moved, or maybe it never existed at all. 🤔</p>
                    <a href="/" class="btn">Go Home</a>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import Heading from '~/components/Heading.vue';

export default {
    components: {
        Heading
    }
}
</script>

<style lang="scss">
    .error-msg {
        text-align: center;
        .row {
            min-height: 85vh
        }
        &__header {
            // margin-top: 200px;
        }
        &__title {
            margin: 40px 0px;
        }
        p {
            font-size: 2.4rem;
            line-height: 3.8rem;
            margin: 0 auto 40px;
            max-width: 700px;
        }
        .btn {
            max-width: 300px;
            margin: 0 auto;
        }
    }
    .site-container--null {        
        .site-container__graphic {
            opacity: 0.2 !important;
            background-position: 0% 0%;
            // background-color: red;
            background-image: url(https://media1.tenor.com/images/c9622b0a1d7011a5e1ac1a26a4115765/tenor.gif?itemid=10489035);
            
            background-repeat: no-repeat;
            background-size: contain;
            // background-blend-mode: luminosity;
            transform: translateX(0%) !important;
        }
    }
</style>
