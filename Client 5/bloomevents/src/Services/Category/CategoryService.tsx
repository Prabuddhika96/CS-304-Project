import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//login
const getAllCategories = async () => {
  return http.get<any>("/category/getallcategories");
};

const CategoryService = {
  getAllCategories,
};

export default CategoryService;
