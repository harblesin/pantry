const { default: axios } = require("axios");

module.exports = {
    login: (userName, password) => {
        return axios.get("api/user/login", { params: { userName, password } });
    }
}