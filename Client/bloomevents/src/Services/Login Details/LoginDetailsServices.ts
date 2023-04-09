import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get Email By User Id
const getEmailByUserId = async (userId: any) => {
  return http.get<any>(`/logindetails/getemailbyuserid/${userId}`);
};

// update password
const updatePassword = async (id: any, data: any) => {
  const response = await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/logindetails/updatepassword/${id}`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

// set default pw
const setDefaultPW = async (userId: any) => {
  return await http.put<any>(`/logindetails/defaultPassword/${userId}`);
};

const LoginDetailsServices = {
  getEmailByUserId,
  updatePassword,
  setDefaultPW,
};

export default LoginDetailsServices;
