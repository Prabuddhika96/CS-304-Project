import axios from "axios";
import { Package } from "types/Packages";
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

// add package
const addPackage = async (data: Package) => {
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/package/addpackage`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

//update package
const updatePackage = async (data: Package, packageId: any) => {
  const response = await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/package/updatepackage/${packageId}`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

// delete package
const deletePackage = async (packageId: any) => {
  return http.delete<any>(`/package/deletepackage/${packageId}`);
};

// get Total Price By EventId
const getTotalPriceByEventId = async (id: any) => {
  return http.get<any>(`/package/gettotalpricebyeventid/${id}`);
};

const getPackageCountByCategoryId = async (id: any) => {
  return http.get<any>(`/package/getpackagecountbycategoryid/${id}`);
};

const PackageServices = {
  getAllpackages,
  getPackageCountByProviderId,
  getPackagesByProviderId,
  getPackageByPackageId,
  addPackage,
  updatePackage,
  deletePackage,
  getTotalPriceByEventId,
  getPackageCountByCategoryId,
};

export default PackageServices;
