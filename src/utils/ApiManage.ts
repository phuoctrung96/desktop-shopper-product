import axios from "./axios.config";

export const login = (body: any) => {
  return axios.post("/auth/login", body);
};
