<template>
    <div>
        <Navbar :title="'Расписание'" />
    </div>
</template>

<script>
import Navbar from "../../components/dashboard/Navbar";

export default {
    name: "Schedule",
    components: { Navbar }
}
</script>

<style scoped>

</style>
