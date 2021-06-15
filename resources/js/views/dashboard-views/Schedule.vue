<template>
    <div class="main-panel">
        <Navbar :title="'Расписание'" />
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <FilterSchedule />
                    <DayTable />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/dashboard/Navbar";
import DayTable from "../../components/dashboard/DayTable";
import FilterSchedule from "../../components/dashboard/Filter";

export default {
    name: "Schedule",
    components: { Navbar, DayTable, FilterSchedule },
    methods: {
        getSchedule() {
            // Get schedule
        }
    }
}
</script>

<style scoped>

</style>
