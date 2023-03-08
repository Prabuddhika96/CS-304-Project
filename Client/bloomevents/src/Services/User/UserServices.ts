import axios from "axios";
import { AddToEvent } from "types/AddToEvent";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

// update user details
const updateUser = async (data: AddToEvent) => {
  const response = await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/user/updateuser`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

//get user by id
const getUserByUserId = async (userId: any) => {
  return await http.get<any>(`/user/getuserbyid/${userId}`);
};

const UserServices = {
  updateUser,
  getUserByUserId,
};

export default UserServices;
