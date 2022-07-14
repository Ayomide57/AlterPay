import apiRequest from '../apiRequests';

import { 
    GET_ALL_ORDERS,
    CREATE_ORDERS
} from '../urls';


export const getAllOrder = (data) => {
    return apiRequest("GET", GET_ALL_ORDERS, {});
}


export const postNewOrder = (data) => {
    return apiRequest("POST", CREATE_ORDERS, data);
}

