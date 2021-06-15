<template>
    <div class="wrapper">
        <Sidebar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
    name: "Dashboard",
    components: {Sidebar},

}
</script>

<style scoped>

</style>
