<template>
    <div class="sidebar" data-color="purple" data-background-color="black">
        <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
        <div class="logo">
            <a href="#" class="simple-text logo-mini">
                MTUCILearn
            </a>
        </div>
        <div class="sidebar-wrapper">
            <ul class="nav">
<!--                <li class="nav-item active">-->
<!--                    <router-link :to="" class="nav-link">-->
<!--                        <i class="material-icons">dashboard</i>-->
<!--                        <p>Расписание</p>-->
<!--                    </router-link>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <router-link :to="" class="nav-link">-->
<!--                        <i class="material-icons">person</i>-->
<!--                        <p>Профиль</p>-->
<!--                    </router-link>-->
<!--                </li>-->
            </ul>
            <button
                class="exit-btn btn btn-primary"
                @click="logout"
            >
                Выйти
            </button>
        </div>
        <loader v-if="loader" />
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            loader: false
        }
    },
    methods: {
        async logout() {
            this.loader = true;
            const ans = await this.$api.auth.logout();
            if (ans) await this.$router.push({ name: 'login'});
            this.loader = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .sidebar-wrapper {
        display: flex;
    }

    .exit-btn {
        display: block;
        width: 90%;
        margin: auto auto 0;
    }

</style>
