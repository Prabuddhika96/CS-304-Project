import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

// get private boookings by provider id
const getPrivateBookingsByProviderId = async (providerId: any) => {
  return http.get<any>(
    `/privatebooking/getprivatebookingsbyproviderid/${providerId}`
  );
};

const addPrivateBooking = async (data: any) => {
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/privatebooking/addprivatebooking`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  return response;
};

const PrivateBookingService = {
  getPrivateBookingsByProviderId,
  addPrivateBooking,
};
export default PrivateBookingService;
