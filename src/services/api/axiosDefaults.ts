import axios from 'axios';

export const axiosInstance = () => {
  const instance = axios.create({
    headers: {
      Accept: 'application/json',
    },
  });  
  return instance;
};
