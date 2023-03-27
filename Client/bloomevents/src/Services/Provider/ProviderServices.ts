import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//all providers
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

//get provider
const getProvider = async (id: any) => {
  return http.get<any>(`/provider/getproviderbyid/${id}`);
};

//get provider by package id
const getProviderByPackageId = async (packageId: any) => {
  return http.get<any>(`/provider/getproviderbypackageid/${packageId}`);
};

const getProvidersByUserId = async (userId: any) => {
  return http.get<any>(`/provider/getprovidersbyuserid/${userId}`);
};

// update provider
const updateProvider = async (data: any) => {
  const response = await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/provider/updateprovider`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

//add provider
const addProvider = async (data: any) => {
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/provider/addprovider`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

const ProviderService = {
  getAllServices,
  getProvider,
  getProviderByPackageId,
  getProvidersByUserId,
  updateProvider,
  addProvider,
};

export default ProviderService;
