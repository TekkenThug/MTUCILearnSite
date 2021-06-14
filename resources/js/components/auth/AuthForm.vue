<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Логин</label>
            <input v-model="email" type="text" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div>
            <div v-for="(error, index) in errors" :key="index" class="alert alert-danger" role="alert">
                {{ error }}
            </div>
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
            email: "",
            password: ""
        }
    },
    props: {
        errors: []
    },
    methods: {
        serialize() {
            this.$emit('serialize', {email: this.email, password: this.password});
        },
        clearForm() {
            this.email = this.password = "";
        }
    },
}
</script>

<style lang="scss" scoped>
label {
    color: #fff;
}
input {
    color: #fff;
    &:focus,
    &:active {
        color: #fff;
    }
}
</style>
