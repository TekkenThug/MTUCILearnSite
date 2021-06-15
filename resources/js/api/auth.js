export default function () {
    return {
        login() {
            // Login ...
        },
        isAuth() {
            return axios.get('/user').then(res => res.data.isAuth);
        },
        logout() {
            return axios.delete('/logout').then(res => res.data.logout);
        }
    }
}
