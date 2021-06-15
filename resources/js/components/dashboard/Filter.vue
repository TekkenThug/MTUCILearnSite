<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-header-tabs card-header-primary">
                <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                        <span class="nav-tabs-title">Выберите неделю:</span>
                        <ul class="nav nav-tabs" data-tabs="tabs">
                            <li class="nav-item" v-for="(day, index) in evens" :key="index">
                                <label class="nav-link">
                                    <input type="radio" v-model="even" :value="day">
                                     {{ day }}
                                    <div class="ripple-container"></div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header card-header-tabs card-header-primary">
                <div class="nav-tabs-navigation">
                    <div class="nav-tabs-wrapper">
                        <span class="nav-tabs-title">Выберите день:</span>
                        <ul class="nav nav-tabs" data-tabs="tabs">
                            <li class="nav-item" v-for="(day, index) in days" :key="index">
                                <label class="nav-link">
                                    <input type="radio" v-model="weekday" :value="day">
                                    {{ day }}
                                    <div class="ripple-container"></div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterSchedule",
    data() {
        return {
            evens: ["Чётная", "Нечётная"],
            days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
            even: null,
            weekday: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-link {
        input {
            display: none;
        }

    }
</style>
