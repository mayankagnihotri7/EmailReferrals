import axios from "axios";

const create = payload => axios.post("/users", payload);

const login = payload => axios.post("/users/sign_in", payload);

const logout = () => axios.delete("/users/sign_out");

const usersApi = { create, login, logout };

export default usersApi;
