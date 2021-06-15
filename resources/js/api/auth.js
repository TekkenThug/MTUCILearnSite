export default function () {
    return {
        login(data, nextAction, breakAction) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', data).then(response => {
                    nextAction();
                }).catch((error) => breakAction(error.response.data.errors));
            });
        },
        isAuth() {
            return axios.get('/user').then(res => res.data.isAuth);
        },
        logout() {
            return axios.delete('/logout').then(res => res.data.logout);
        }
    }
}
