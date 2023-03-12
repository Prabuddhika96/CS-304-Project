import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get reviews by provider id
const getReviewsByProviderId = async (providerId: any) => {
  return http.get<any>(`/review/getreviewsbyproviderid/${providerId}`);
};

const ReviewService = { getReviewsByProviderId };
export default ReviewService;
