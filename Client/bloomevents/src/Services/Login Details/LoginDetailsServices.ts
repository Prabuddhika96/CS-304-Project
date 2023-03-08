import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get Email By User Id
const getEmailByUserId = async (userId: any) => {
  return http.get<any>(`/logindetails/getemailbyuserid/${userId}`);
};

const LoginDetailsServices = {
  getEmailByUserId,
};

export default LoginDetailsServices;
