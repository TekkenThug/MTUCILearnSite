export default function () {
    return {
        login() {
            // Login ...
        },
        isAuth() {
            return axios.get('/user').then(res => res.data.isAuth);
        },
        logout() {
            // Logout...
        }
    }
}
