import axios from "axios";
import { AddToEvent } from "types/AddToEvent";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//login
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

//login
const getpackagecountbyeventid = async (eventId: any) => {
  return http.get<any>(`/addtoevent/getpackagecountbyeventid/${eventId}`);
};

const AddToEventService = {
  getAllAddToEvent,
  addPackageToEvent,
  getpackagecountbyeventid,
};

export default AddToEventService;
