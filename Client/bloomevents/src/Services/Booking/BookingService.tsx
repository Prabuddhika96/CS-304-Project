import axios from "axios";
import { Package } from "types/Packages";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getBookingDetailsByEventId = async (id: any) => {
  return http.get<any>(`/bookings/getbookingdetailsbyeventid/${id}`);
};

const BookingService = { getBookingDetailsByEventId };

export default BookingService;
