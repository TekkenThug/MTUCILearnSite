<template>
    <div>
        <div class="page-header clear-filter">
            <div class="content-center">
                <div class="col-md-8 ml-auto mr-auto">
                    <transition name="slide-fade">
                        <div v-show="!showAuthForm" class="brand">
                            <h1 class="title">
                                MTUCILearnSite
                            </h1>
                            <h3 class="description">Расписание</h3>
                            <br/>
                            <button
                                @click="showAuthForm = true"
                                class="btn btn-primary btn-round btn-lg">
                                Войти в панель
                            </button>
                        </div>
                    </transition>
                    <transition name="slide-fade">
                        <div v-show="showAuthForm" class="brand">
                            <AuthForm @serialize="auth" />
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthForm from "../components/auth/AuthForm";

export default {
    name: "Auth",
    components: { AuthForm },
    data() {
        return {
            showAuthForm: false,
        }
    },
    methods: {
        auth(data) {
            // auth logic
        }
    }
}
</script>

<style scoped>
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
</style>
