<template>
    <div class="wrapper">
        <Sidebar />
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
    name: "Dashboard",
    components: { Sidebar },
    // async created() {
    //     console.log(await this.$api.auth.isAuth());
    // }
}
</script>

<style scoped>

</style>
