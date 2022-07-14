import { createTypes } from 'reduxsauce';

export default createTypes(
    `

    GET_USER_ORDER_REQUEST
    GET_USER_ORDER_SUCCESS
    GET_USER_ORDER_FAILURE

    CREATE_USER_ORDER_REQUEST
    CREATE_USER_ORDER_SUCCESS
    CREATE_USER_ORDER_FAILURE

    `,
    {prefix: ''},
);