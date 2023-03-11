import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//all providers
const getAllpackages = async () => {
  return http.get<any>("/package/getallpackages");
};

//get Package Count By ProviderId
const getPackageCountByProviderId = async (id: any) => {
  return http.get<any>(`/package/getpackagecountbyproviderid/${id}`);
};

//get Packages By ProviderId
const getPackagesByProviderId = async (id: any) => {
  return http.get<any>(`/package/getpackagesbyproviderid/${id}`);
};

const getPackageByPackageId = async (id: any) => {
  return http.get<any>(`/package/getpackagebypackageid/${id}`);
};

const PackageServices = {
  getAllpackages,
  getPackageCountByProviderId,
  getPackagesByProviderId,
  getPackageByPackageId,
};

export default PackageServices;
