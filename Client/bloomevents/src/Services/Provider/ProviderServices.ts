import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//login
const getAllServices = async () => {
  return http.get<any>("/provider/getallproviders");
  // var config = {
  //   method: "get",
  //   url: "http://localhost:8080/provider/getallproviders",
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(response.data);
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

const ProviderService = {
  getAllServices,
};

export default ProviderService;
