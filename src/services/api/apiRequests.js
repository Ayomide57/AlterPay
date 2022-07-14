import { axiosInstance } from './axiosDefaults';


const apiRequest = (method, url, data = {}) => {
  const response = axiosInstance()({
    method,
    url,
    data,
  });
  return response;
};

export default apiRequest;