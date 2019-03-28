<template>
    <header class="site-header">
        <div class="site-header__logo" :class="$route.name == 'index' ? 'site-header__logo--hidden' : ''">
            <nuxt-link to="/">
                <Logo />
            </nuxt-link>
        </div>
        <button class="site-header__nav-trigger btn" @click="toggleMobileMenu">
            <template v-if="mobileMenuOpen">
                Close
            </template>
            <template v-else>
                Menu
            </template>
        </button>

        <ul class="site-header__nav" :class="mobileMenuOpen ? 'site-header__nav--active' : ''" >
            <li v-for="item in navLinks" :key="item">
                <nuxt-link @click.native="setActive" :to="item.link" :data-name="item.dataName">{{ item.linkText }}</nuxt-link>
            </li>
            <li class="slider"></li>
        </ul>

    </header>
</template>

<script>
import anime from 'animejs';
import Logo from '~/components/SiteLogo.vue';


export default {
    data() {
        return {
            mobileMenuOpen: false,
            navLinks: [
                {
                    link: "/",
                    linkText: "Home",
                    dataName: "index",
                },
                // {
                //     link: "/work",
                //     linkText: "Work",
                //     dataName: "work",
                // },
                {
                    link: "/about",
                    linkText: "CV",
                    dataName: "about",
                },
                {
                    link: "/contact",
                    linkText: "Contact",
                    dataName: "contact",
                },
            ]
        }
    },
    components: {
        Logo
    },
    methods: {
        toggleMobileMenu: function () {
            if (this.mobileMenuOpen) {
                this.mobileMenuOpen = false;
            } else {
                this.mobileMenuOpen = true;
            }
        },
        setActive: function (event) {
            const theLink = event.target;
            const link = theLink.getBoundingClientRect();
            const body = document.querySelector(".site-header__nav");
            const thebod = body.getBoundingClientRect();

            anime({
                targets: '.slider',
                width: theLink.offsetWidth+'px',
                left: (link.left-thebod.left)+'px',
            });
            
        }
    },
    watch: {
        $route (to, from) {

            const nav = document.querySelector('.site-header__nav');
            const els = nav.querySelectorAll(`a[href='${to.path}']`)[0];

            if (els) {
                const link = els.getBoundingClientRect();
                const thebod = nav.getBoundingClientRect();

                anime({
                    targets: '.slider',
                    width: els.offsetWidth+'px',
                    left: (link.left-thebod.left)+'px',
                });
            }

            if (this.mobileMenuOpen) {
                this.mobileMenuOpen = false;
            }

        }
    },
    beforeMount() {

        let route = this.$route.name;

        // set work as the active link work-slug
        if (route == "work-slug") {
            route = "work";
        }

        this.entryPoint = route;
    },
    mounted() {

        const nav = document.querySelector('.site-header__nav');
        const els = document.querySelector(`[data-name='${this.entryPoint}']`);
        const link = els.getBoundingClientRect();
        const thebod = nav.getBoundingClientRect();

        anime({
            targets: '.slider',
            opacity: 1,
            width: els.offsetWidth+'px',
            left: (link.left-thebod.left)+'px',
        });

    }
}
</script>

<style lang="scss">
    .site-header {
        position: relative;
        padding: 15px 15px 0px;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        &__logo {
            width: 75px;
            transition: transform .3s ease-in-out;
            position: relative;
            z-index: 99;

            a {
                transition: transform .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                &:hover {
                    transform: scale(0.9);
                }
            }
            

        }
        &__nav-trigger {
            padding: 8px 20px;
            position: relative;
            z-index: 99;
            cursor: pointer;
        }
        &__nav {
            justify-content: space-between;
            align-items: center;
            list-style: none;
            padding: 20px;
            padding-top: 170px;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
            background: rgba(255,255,255,1);
            margin: 0;
            transform: translateX(-100%);
            transition: transform .3s ease-out;

            li {
                margin-right: 45px;
                &:nth-child(4) {
                    margin-right: 0;
                }
                a {
                    color: #212121;
                    font-family: "Gilroy";
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 1.4;
                    .site-container--dark & {
                        color: #FFF;
                    }
                    &.exact-active-link {
                        color: $primary;
                    }
                }
            }
            .slider {
                display: none;
                padding:0;
                margin:0;
                background: none #CC0000;
                position: absolute;
                top: 0;
                width: 43px; 
                height: 4px; 
                left: 20px; 
                top: 35px;
                z-index: 0;
                opacity: 0;
            }
            &--active {
                display: block;
                transform: translateX(0);
            }
        }
    }

    @media (min-width: 768px) {
        .site-header {
            padding: 15px 30px 0px;
            &__nav-trigger {
                display: none;
            }
            &__nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                list-style: none;
                padding: 0;
                position: relative;

                height: auto;
                width: auto;
                background: transparent;
                transform: none;

                li {
                    margin-right: 45px;
                    &:nth-child(4) {
                        margin-right: 0;
                    }
                    a {
                        font-size: 26px;
                    }
                }
                .slider {
                    display: block;
                }
            }
        }
    }
</style>
