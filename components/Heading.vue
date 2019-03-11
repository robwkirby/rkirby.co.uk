<template>
    <div class="slidey">
        <span class="mask" ref="mask"></span>
        <h1 class="words" ref="words">{{text}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        }
    },
    mounted() {

        var tl = new TimelineLite();

        tl.set(this.$refs.words, {
            alpha: "0",
        });

        tl.set(this.$refs.mask, {
            x: "-100%",
        });

        tl.to(this.$refs.mask, 1, {
            x: "100%",
            ease: Expo.easeIn
        });

        tl.to(this.$refs.words, 0.5, {
            alpha: "1",
            ease: 0.7
        }, "-=0.1");

    }
}
</script>

<style lang="scss">
    .slidey {
        position: relative;
        overflow: hidden;
        margin: 60px 0px;


        .words {
            margin: 0;
        }
        
        .mask {
            position: absolute;
            background: $primary;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: 0 0;
            z-index: 99
        }
    }
</style>
