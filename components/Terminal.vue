<template>
    <section class="terminal" ref="terminal">
        
        <div class="terminal__loader">
            <span>rkirby.co.uk / Fake Terminal [Version 1.0.0]</span>
            <br>
            <span>Initialising...</span><br>
            <span>({{loaded}}%)</span>
            <div class="terminal__loader-bar">
                <div :style='`width:${loaded}%;`'></div>
            </div>
        </div>
        <!-- <input class="terminal-text" type="text" placeholder="commands"> -->
    </section>
</template>

<script>
if (process.client) {
  require('pixi.js')
}

import random from 'lodash';
import anime from 'animejs';
import VanillaTilt from 'vanilla-tilt';

export default {
    data() {
        return {
            app: null,
            container: null,
            loaded: 0,
            loader: null
        }
    },
    mounted() {

        // big nasty
        setTimeout(() => {
            
            VanillaTilt.init(document.querySelector(".terminal"), {
                max: 10,
                speed: 2000,
                reset: true,
                easing: "cubic-bezier(0.075, 0.82, 0.165, 1)"
            });

            PIXI.utils.skipHello();
            this.app = new PIXI.Application(825, 680, { transparent: true });

            this.$refs.terminal.appendChild(this.app.view);


            this.loader = new PIXI.loaders.Loader();
            this.loader.add('sprite/sprite.json');

            this.container = new PIXI.Container();
            this.app.stage.addChild(this.container);

            // let frame = new PIXI.Graphics();

            // frame.lineStyle(0, 0x0000FF, 1);
            // frame.beginFill(0xCCCCCC, 1);
            // frame.drawRect(0, 0, 827, 28);

            // this.app.stage.addChild(frame);

            this.loader.load(() => {
                this.triggered(this.loader);
            });

            // listen to the progress event
            this.loader.on('progress', (loader,res) => {
                this.loaded = loader.progress;
            })

            // listen to the complete event, it will be fired when everything is loaded
            this.loader.on('complete', (loader,res) => {
                anime.set('.terminal__loader', {
                    opacity: 0,
                });
            });

        }, 1000);
    
    },
    methods: {
        triggered (loader) {

            let codeSprite = PIXI.Sprite.fromImage(require('~/assets/images/code.svg'));
            this.container.addChild(codeSprite);
            codeSprite.x = 0;
            codeSprite.y = 28;   

            let displacementSprite = PIXI.Sprite.fromImage(require('~/assets/images/displacement_map_repeat.jpg'));
            //Make sure the sprite is wrapping.
            displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

            displacementSprite.position = codeSprite.position;

            this.app.stage.addChild(displacementSprite);

            displacementSprite.x = 28;
            displacementSprite.y = 0;

            let sheet = loader.resources["sprite/sprite.json"].spritesheet;

            let spriteCount = Object.keys(sheet.textures).length;

            let animatedSprite = new PIXI.extras.AnimatedSprite(sheet.animations["img"]);
            animatedSprite.mask = codeSprite;
            animatedSprite.stop();

            animatedSprite.filters = [displacementFilter];
            animatedSprite.height = 680;
            animatedSprite.width = 825;

            this.container.addChild(animatedSprite);

            let mouseposition = this.app.renderer.plugins.interaction.mouse.global;

            this.app.ticker.add(() => {
                
                let imagePos = this.app.stage.width / spriteCount;
                let curPos = Math.round(mouseposition.x / imagePos);

                if (curPos > 0 && curPos < spriteCount) {
                    animatedSprite.gotoAndStop(curPos);
                }

                //Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
                displacementSprite.y++;

                //Reset x to 0 when it's over width to keep values from going to very huge numbers.
                if (displacementSprite.x > displacementSprite.width){
                    displacementSprite.x = 0;
                }


                let codeMove = _.random(0, 20);
                
                if(codeMove == 1) {
                    codeSprite.y-=20;
                }
                
                if (codeSprite.y <= -825) {
                    codeSprite.y = 0;
                }

            });

        }
    },
    beforeDestroy() { 

        // anime.set('.terminal', {
        //     display: 'none'
        // });

        // destroy pixi
        Object.keys(PIXI.utils.TextureCache).forEach(function(texture) {  
            PIXI.Texture.removeFromCache(texture);
            PIXI.BaseTexture.removeFromCache(texture);
        });
        this.app.destroy();
        this.container.destroy();

        // destroy tilt
        let tilter = document.querySelector(".terminal");
        tilter.vanillaTilt.destroy();
    }
}
</script>

<style lang="scss">
    canvas {
        width: 100%;
    }
    .terminal {
        // min-height: 85vh;
        min-height: 634px;
        background-color: #151515;
        position: relative;
        display: none;
        &:before {
            content: "";
            height: 28px;
            width: 100%;
            background: #CCCCCC;
            position: absolute;
            top: 0;
            left: 0;
        }
        &:after {
            content: "";
            height: 20px;
            width: 20px;
            border-radius: 100%;
            background: #999;
            position: absolute;
            top: 4px;
            right: 8px;
        }
        &__loader {
            position: absolute;
            font-family: "consolas";
            color: #fff;
            font-size: 1.4rem;
            top: 40px;
            left: 5px;
            text-align: left;
            width: 100%;
            span {
                display: block;
                &:first-child {
                    color: #1ec951;
                }
            }
            &-bar {
                background: #eee;
                max-width: 250px;
                height: 20px;
                div {
                    height: 20px;
                    background: #1ec951;
                    width: 0;
                }
            }
        }

    }

    .terminal-text {
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 12px;
        background-color: #151515;
        color: #fff;
        width: 100%;
        border: none;
        &:after {
            content: "";
            display: block;
            position: absolute;
            height: 7px;
            width: 7px;
            background-color: #151515;
            border-style: solid;
            border-width: 2px 2px 0px 0px;
            border-color: #eee;
            top: 50%;
            left: 20px;
            transform: translateY(-50%) rotate(45deg);
        }
        input {
            width: 100%;
            background: transparent;
            border: none;
            color: #fff;
            padding: 5px 40px;
            font-family: "consolas"
        }
    }

    @media (min-width: 1024px) {
        .terminal {
            display: block;
        }
    }

</style>


