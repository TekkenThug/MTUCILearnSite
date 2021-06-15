<template>
    <div class="wrapper" style="background-image: url('/images/bg/auth-bg.jpg');">
        <div class="page-header clear-filter">
            <div class="content-center">
                <div class="col-md-8 ml-auto mr-auto">
                    <transition name="slide-fade">
                        <div v-show="showAuthForm === 'no'" class="brand">
                            <h1 class="title">
                                MTUCILearn
                            </h1>
                            <br/>
                            <button
                                @click="showAuthForm = 'transient'"
                                class="btn btn-primary btn-round btn-lg">
                                Войти в панель
                            </button>
                        </div>
                    </transition>
                    <transition name="slide-fade">
                        <div v-show="showAuthForm === 'yes'" class="brand">
                            <AuthForm @serialize="auth"
                                      :errors="errors"
                                      ref="authForm"
                            />
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <loader v-if="loader" />
    </div>
</template>

<script>
import AuthForm from "../components/auth/AuthForm";

export default {
    name: "Auth",
    components: { AuthForm },
    data() {
        return {
            showAuthForm: "no",
            loader: false,
            errors: [],
        }
    },
    methods: {
        auth(data) {
            const errHandler = (errors) => {
                this.$refs.authForm.clearForm();

                for (let statement in errors)
                    this.errors.push(...errors[statement]);

                this.loader = false;
            }

            const redirect = () => {
                this.$router.push({ name: 'dashboard' });
            }

            this.loader = true;
            this.errors = [];

            this.$load(() => this.$api.auth.login(data, () => redirect(), (errors) => errHandler(errors)));
        }
    },
    watch: {
        showAuthForm(value) {
            if (value === 'transient') {
                setTimeout(() => this.showAuthForm = 'yes', 500);
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-position: center;
}
.wrapper::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);

}
.slide-fade-enter-active {
    transition: all .8s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

.tim-typo {
    padding-left: 25%;
    margin-bottom: 40px;
    position: relative;
    width: 100%;
}

.tim-typo .tim-note {
    bottom: 5px;
    color: #c0c1c2;
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    left: 0;
    margin-left: 20px;
    position: absolute;
    width: 260px;
}

/* offline-doc */

.offline-doc .navbar.navbar-transparent {
    padding-top: 25px;
    border-bottom: none;
}

.offline-doc .navbar.navbar-transparent .navbar-minimize {
    display: none;
}

.offline-doc .navbar.navbar-transparent .navbar-brand,
.offline-doc .navbar.navbar-transparent .collapse .navbar-nav .nav-link {
    color: #FFFFFF !important;
}

.offline-doc .footer {
    z-index: 3 !important;
}

.offline-doc .page-header .container {
    z-index: 3;
}

.offline-doc .page-header:after {
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
}

#map {
    z-index: 2;
    height: calc(100vh - 70px);
    margin-top: 70px;
}

.title {
    font-weight: 600;
    color: #fff;
}
</style>
