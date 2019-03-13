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

        <div class="contact-form__field contact-form__field--submit">
            <button class="btn contact-form__submit js-contact-btn" v-show="!formSubmitted">
                <span>Send</span>
            </button>
            <span v-show="formSubmitted">Thanks for your message!</span>
            <svg class="spinner" :class='{"active" : formSubmitting}' width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
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
            message: '',
            formSubmitting: false,
            formSubmitted: false
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

            this.formSubmitting = true;
            

            this.$v.$touch()
            if (this.$v.$invalid) {
               this.formSubmitting = false;
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
                .then((response) => {
                    //handle success
                    // console.log(response);
                    this.formSubmitting = false;
                    this.formSubmitted = true;
                })
                .catch((response) => {
                    //handle error
                    // console.log(response);
                    this.formSubmitting = false;
                });
            }

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
            &--submit {
                display: flex;
                align-items: center;
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
    }

    label {
        display: block;
    }

$offset: 187;
$duration: 1.4s;

.spinner {
    display: inline-block;
    height: 30px;
    widows: 30px;
    opacity: 0;
    animation: rotator $duration linear infinite;
    &.active {
        opacity: 1;
    }
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash $duration ease-in-out infinite;
}

@keyframes dash {
 0% { stroke-dashoffset: $offset; }
 50% {
   stroke-dashoffset: $offset/4;
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: $offset;
   transform:rotate(450deg);
 }
}

</style>


