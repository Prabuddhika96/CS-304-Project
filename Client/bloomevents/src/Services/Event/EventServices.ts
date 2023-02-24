import axios from "axios";
import { Event } from "types/Event";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//all providers
const getAllEvents = async () => {
  return http.get<any>("/event/getallevents");
};

//add Events
const addEvent = async (data: Event) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/event/addevent`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

// get events by user id
const getEventsByUserId = async (id: any) => {
  return http.get<any>(`/event/geteventsbyuserid/${id}`);
};

const EventServices = {
  getAllEvents,
  addEvent,
  getEventsByUserId,
};

export default EventServices;
