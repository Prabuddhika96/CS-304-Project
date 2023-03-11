import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get Email By User Id
const getProfilePicture = async (userId: any) => {
  return http.get<any>(`/fileupload/getprofilepicture/${userId}`);
};

const FileUpload = {
  getProfilePicture,
};

export default FileUpload;
