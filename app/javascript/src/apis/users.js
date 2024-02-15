import axios from "axios";

const create = payload => axios.post("/users", payload);

const login = payload => axios.post("/users/sign_in", payload);

const usersApi = { create, login };

export default usersApi;
