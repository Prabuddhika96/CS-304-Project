import axios from "axios";
import { AddToEvent } from "types/AddToEvent";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get all packages
const getAllAddToEvent = async () => {
  return http.get<any>("/addtoevent/getalladdtoevent");
};

// add package to event
const addPackageToEvent = async (data: AddToEvent) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/addtoevent/addpackagetoevent`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

//get packkage count
const getpackagecountbyeventid = async (eventId: any) => {
  return http.get<any>(`/addtoevent/getpackagecountbyeventid/${eventId}`);
};

// get packages
const getPackagesByEventId = async (eventId: any) => {
  return http.get<any>(`/addtoevent/getpackagesbyeventid/${eventId}`);
};

const deletePackage = async (eventId: any) => {
  return http.delete<any>(`/addtoevent/deletepackagebyid/${eventId}`);
};

const getPlacedPackagesByProviderId = async (providerId: any) => {
  return http.get<any>(
    `/addtoevent/getplacedpackagesbyproviderId/${providerId}`
  );
};

// approve package
const approvePackage = async (addToEventId: any) => {
  // return http.put<any>(`/addtoevent/approvepackage/${addToEventId}`);
  const response = await axios({
    method: "put",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/addtoevent/approvepackage/${addToEventId}`,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

// get approved but not booked events
const getApprovedPackagesByProviderId = async (providerId: any) => {
  return http.get<any>(
    `/addtoevent/getapprovedpackagesbyproviderId/${providerId}`
  );
};

// get booked events
const getBookedPackagesByProviderId = async (providerId: any) => {
  return http.get<any>(
    `/addtoevent/getbookedpackagesbyproviderId/${providerId}`
  );
};

// get booked events
const getApprovedPackageCountByEventId = async (eventId: any) => {
  return http.get<any>(
    `/addtoevent/getapprovedpackagecountbyeventid/${eventId}`
  );
};

const AddToEventService = {
  getAllAddToEvent,
  addPackageToEvent,
  getpackagecountbyeventid,
  getPackagesByEventId,
  deletePackage,
  getPlacedPackagesByProviderId,
  approvePackage,
  getApprovedPackagesByProviderId,
  getBookedPackagesByProviderId,
  getApprovedPackageCountByEventId,
};

export default AddToEventService;
