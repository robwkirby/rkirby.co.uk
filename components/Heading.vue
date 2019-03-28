<template>
    <h1 class="heading" ref="words">
        <slot></slot>
    </h1>
</template>

<script>
import anime from 'animejs';
export default {
    mounted() {
        // anime.set('.heading', {
        //     opacity: 0
        // });
        // anime({
        //     targets: '.heading',
        //     opacity: 1, // -> '250px'
        //     easing: 'easeOutExpo',
        //     delay: 200,
        //     duration: 1000,
        // });
    }
}
</script>

<style lang="scss">
    .heading {
        font-family: "Gilroy";
        font-weight: 800;
        font-size: 62px;
        line-height: 1;
    }
    @media (min-width: 1400px) {
        .heading {
            font-size: 88px;
        }
    }
    @media (min-width: 1600px) {
        .heading {
            font-size: 98px;
        }
    }
</style>
