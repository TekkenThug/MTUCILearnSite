<template>
    <div class="wrapper">
        <Sidebar />

        <div class="main-panel">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
    name: "Dashboard",
    components: { Sidebar },

}
</script>

<style scoped>

</style>
