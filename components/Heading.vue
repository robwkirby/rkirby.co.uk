<template>
    <h1 class="heading" ref="words">
        <slot></slot>
    </h1>
</template>

<script>
import anime from 'animejs';
export default {
    // mounted() {
    //     anime.set('.heading', {
    //         backgroundPosition: '0px'
    //     });
    //     anime({
    //         targets: '.heading',
    //         backgroundPosition: '800px', // -> '250px'
    //         easing: 'easeOutExpo',
    //         delay: 2000,
    //         duration: 2000,
    //     });
    // }
}
</script>

<style lang="scss">
    .heading {
        font-family: "Gilroy";
        font-weight: 800;
        font-size: 62px;
        line-height: 1;

        // color: transparent;
        // background-clip: text;
        // -webkit-background-clip: text;
        // background-image: linear-gradient(60deg, rgba(201,43,30,1) 75%, rgba(153,20,20,1) 75%);
        // background-size: 100% 50px;
        // background-repeat: repeat;
        // background-position: 0% 0%;
    }
    @media (min-width: 1600px) {
        .heading {
            font-size: 98px;
        }
    }
</style>
