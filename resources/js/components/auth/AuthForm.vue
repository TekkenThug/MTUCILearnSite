<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Логин</label>
            <input v-model="login" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                   placeholder="Password">
        </div>
        <button
            @click.prevent="serialize"
            class="btn btn-primary btn-round btn-lg mt-3">
            Войти в панель
        </button>
    </form>
</template>

<script>
export default {
    name: "AuthForm",
    data() {
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        serialize() {
            this.$emit('serialize', {login: this.login, password: this.password});
        }
    }
}
</script>

<style scoped>
label {
    color: #fff;
}
</style>
