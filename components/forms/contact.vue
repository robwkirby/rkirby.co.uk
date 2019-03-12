<template>
    <form action="https://formcarry.com/s/sFRGyxTE_Zd" method="POST" accept-charset="UTF-8" class="contact-form__form" @submit.prevent="submit">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="contact-form__field" :class="{ 'contact-form__field--error': $v.name.$error }">
                    <label class="contact-form__label" for="name">Name</label>
                    <input class="contact-form__input" id="name" type="text" name="name" v-model.trim="name">
                    
                    <div class="contact-form__error" v-if="!$v.name.required">Field is required</div>
                    <div class="contact-form__error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="contact-form__field" :class="{ 'contact-form__field--error': $v.replyto.$error }">
                    <label class="contact-form__label" for="_replyto">Email</label>
                    <input class="contact-form__input" id="_replyto" type="text" name="_replyto" v-model.trim="replyto">

                    <div class="contact-form__error" v-if="!$v.replyto.required">Field is required</div>
                    <div class="contact-form__error" v-if="!$v.replyto.minLength">Name must have at least {{$v.replyto.$params.minLength.min}} letters.</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="contact-form__field contact-form__field--message" :class="{ 'contact-form__field--error': $v.message.$error }">
                    <label class="contact-form__label" for="message">Message</label>
                    <textarea class="contact-form__input contact-form__input--textarea" name="message" id="message" cols="30" rows="7" v-model.trim="message"></textarea>

                    <div class="contact-form__error" v-if="!$v.message.required">Field is required</div>
                    <div class="contact-form__error" v-if="!$v.message.minLength">Message must have at least {{$v.message.$params.minLength.min}} letters.</div>
                </div>
            </div>
        </div>

        <input type="hidden" name="_gotcha">

        <div class="contact-form__field">
            <button class="btn contact-form__submit js-contact-btn">
                <span>Send</span>
            </button>
            <div class="loader-wrap"><div class="loader"></div></div>
        </div>
        <input type="hidden" name="_subject" value="Website contact" />
    </form>
</template>

<script>

import axios from 'axios'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name: '',
            replyto: '',
            message: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        replyto: {
            required,
            minLength: minLength(4)
        },
        message: {
            required,
            minLength: minLength(20)
        }
    },
    methods: {
        submit() {
            console.log('submit!')

            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                
                let bodyFormData = {
                    _replyto: this.replyto,
                    _subject: this.message,
                    message: this.message,
                    name: this.name
                }

                axios({
                    method: 'post',
                    url: 'https://formcarry.com/s/sFRGyxTE_Zd',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });


            }

            console.log(this.submitStatus);
        }
    }
}

</script>

<style lang="scss">

    .contact-form {
        &__field {
            margin-bottom: 10px;
            &--message {
                margin: 40px 0;
            }
        }
        &__label {
            font-family: "Gilroy";
            font-weight: bold;
            margin-bottom: 10px;
        }
        &__input {
            width: 100%;
            padding: 12px 10px;
            font-size: 20px;
            border: none;
            border-radius: 2px;
            box-shadow: inset 0px 0px 0px 2px #aaa;
            transition: box-shadow .3s ease-out;
            font-family: $font-secondary;
            &--textarea {
                resize: none;
            }
            .contact-form__field--error & {
                box-shadow: inset 0px 0px 0px 2px red;
            }
        }

        &__error {
            display: none;
            font-weight: bold;
            color: red;
            margin: 5px 0;
            .contact-form__field--error & {
                display: block;
            }
        }

        &__submit {
            cursor: pointer;
            position: relative;
        }

        .loader-wrap {
            .loader {
              
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,.3);
                border-radius: 50%;
                border-top-color: #fff;
                animation: spin 1s ease-in-out infinite;
                }

                @keyframes spin {
                to { transform: rotate(360deg); }
                }
                @-webkit-keyframes spin {
                to { transform: rotate(360deg); }
                
            }
        }
    }

    label {
        display: block;
    }
</style>


