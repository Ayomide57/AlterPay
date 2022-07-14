import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
    {
        getUserOrderRequest: null,
        getUserOrderSuccess: ['responseData'],
        getUserOrderFailure: ['error'],   
        
        createUserOrderRequest: ['data'],
        createUserOrderSuccess: ['responseData'],
        createUserOrderFailure: ['responseData'],
    },{},
);