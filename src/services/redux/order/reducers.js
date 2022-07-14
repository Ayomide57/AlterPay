import { createReducer } from 'reduxsauce';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Types from './actionTypes';

export const INITIAL_STATE = {
    isLoadingOrder: false,
    error: false,
    data: null,
    isSavingOrder: false,
};

export const getAllUserOrder = (state = INITIAL_STATE, action) => {
    return {...state, isLoadingOrder: true, error: false};
};

export const getAllUserOrderSucess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadingOrder: false,
        error: false,
        data: action.responseData
    };
};

export const getAllUserOrderFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoadingOrder: false,
        error: true,
        error_message: action.error,
    };
};

export const createNewUserOrder = (state = INITIAL_STATE, action) => {
    return {...state, isSavingOrder: true, error: false};
};

export const createNewUserOrderSucess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSavingOrder: false,
        error: false,
    };
};

export const createNewUserOrderFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSavingOrder: false,
        error: true,
        error_message: action.error,
    };
};


export const HANDLERS = {
    
    [Types.GET_USER_ORDER_REQUEST]: getAllUserOrder,
    [Types.GET_USER_ORDER_SUCCESS]: getAllUserOrderSucess,
    [Types.GET_USER_ORDER_FAILURE]: getAllUserOrderFailure,

    [Types.CREATE_USER_ORDER_REQUEST]: createNewUserOrder,
    [Types.CREATE_USER_ORDER_SUCCESS]: createNewUserOrderSucess,
    [Types.CREATE_USER_ORDER_FAILURE]: createNewUserOrderFailure,
  
};

const persistConfig = {
    key: 'order',
    storage: storage,
    blacklist: ['isLoadingOrder']
  };
  
  const OrderReducer = createReducer(INITIAL_STATE, HANDLERS);
  export default persistReducer(persistConfig, OrderReducer)







